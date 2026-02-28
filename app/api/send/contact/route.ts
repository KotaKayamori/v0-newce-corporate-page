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
    const apiKey = process.env.RESEND_API_KEY
    
    if (!apiKey) {
      return NextResponse.json({ 
        error: 'RESEND_API_KEY が設定されていません。環境変数を確認してください。',
        debug: 'RESEND_API_KEY is missing'
      }, { status: 500 })
    }

    const resend = new Resend(apiKey)
    const { name, company, email, purpose, message } = await request.json()

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

    const { error } = await resend.emails.send({
      from: 'contact@newce.co.jp',
      to: 'info@newce.co.jp',
      subject: `【要確認】HP問い合わせ：${purposeLabel}（${company || '個人'} ${name}様）`,
      text: emailBody,
    })

    if (error) {
      return NextResponse.json({ 
        error: 'メール送信に失敗しました',
        debug: error
      }, { status: 500 })
    }

    return NextResponse.json(
      { success: true },
      { headers: { 'Content-Type': 'application/json; charset=utf-8' } }
    )
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました', debug: errorMessage },
      { status: 500, headers: { 'Content-Type': 'application/json; charset=utf-8' } }
    )
  }
}
