import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const purposeLabels: Record<string, string> = {
  company: '会社関連',
  recruit: '採用',
  press: '広報・取材・登壇',
  ad: '広告・宣伝',
  partnership: '提携・パートナー',
  other: 'その他',
}

export async function POST(request: Request) {
  try {
    // Check for RESEND_API_KEY
    const apiKey = process.env.RESEND_API_KEY
    console.log('[v0] RESEND_API_KEY exists:', !!apiKey)
    console.log('[v0] RESEND_API_KEY length:', apiKey?.length || 0)
    
    if (!apiKey) {
      console.error('[v0] RESEND_API_KEY is not set in environment variables')
      return NextResponse.json({ 
        error: 'RESEND_API_KEY が設定されていません。環境変数を確認してください。',
        debug: 'RESEND_API_KEY is missing'
      }, { status: 500 })
    }

    const resend = new Resend(apiKey)
    const { name, company, email, purpose, message } = await request.json()
    
    console.log('[v0] Form data received:', { name, company, email, purpose })

    const purposeLabel = purposeLabels[purpose] || purpose
    const now = new Date()
    const receivedDate = `${now.getFullYear()}/${String(now.getMonth() + 1).padStart(2, '0')}/${String(now.getDate()).padStart(2, '0')}`

    const emailBody = `[ お問い合わせ内容詳細 ]

お名前： ${name} 様
企業 / 団体： ${company || '（未入力）'}
メールアドレス： ${email}
お問い合わせの目的： ${purposeLabel}
お問い合わせの内容：
${message}


[ 運営管理用 ]

受信日時：${receivedDate}
対応担当：[ 未割り当て ]`

    console.log('[v0] Sending email via Resend...')
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'info@newce.co.jp',
      subject: `【要確認】HP問い合わせ：${purposeLabel}（${company || '個人'} ${name}様）`,
      text: emailBody,
    })

    if (error) {
      console.error('[v0] Resend API error:', JSON.stringify(error, null, 2))
      return NextResponse.json({ 
        error: 'メール送信に失敗しました',
        debug: error
      }, { status: 500 })
    }

    console.log('[v0] Email sent successfully:', data)
    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('[v0] API catch error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({ 
      error: 'サーバーエラーが発生しました',
      debug: errorMessage
    }, { status: 500 })
  }
}
