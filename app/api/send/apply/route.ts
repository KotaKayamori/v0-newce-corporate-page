import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const genderLabels: Record<string, string> = {
  male: '男性',
  female: '女性',
  other: 'その他',
  'no-answer': '回答を希望しません',
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
    const formData = await request.formData()
    
    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const address = formData.get('address') as string
    const gender = formData.get('gender') as string
    const referral = formData.get('referral') as string
    const accommodation = formData.get('accommodation') as string
    const links = formData.get('links') as string
    const jobTitle = formData.get('jobTitle') as string
    const resumeFile = formData.get('resume') as File | null
    const otherFile = formData.get('otherFile') as File | null

    const genderLabel = genderLabels[gender] || gender
    const now = new Date()
    const receivedDate = `${now.getFullYear()}/${String(now.getMonth() + 1).padStart(2, '0')}/${String(now.getDate()).padStart(2, '0')}`

    // Prepare attachments
    const attachments: { filename: string; content: Buffer }[] = []
    
    let resumeInfo = '（添付なし）'
    if (resumeFile && resumeFile.size > 0) {
      const resumeBuffer = Buffer.from(await resumeFile.arrayBuffer())
      attachments.push({
        filename: resumeFile.name,
        content: resumeBuffer,
      })
      resumeInfo = resumeFile.name
    }

    let otherInfo = '（添付なし）'
    if (otherFile && otherFile.size > 0) {
      const otherBuffer = Buffer.from(await otherFile.arrayBuffer())
      attachments.push({
        filename: otherFile.name,
        content: otherBuffer,
      })
      otherInfo = otherFile.name
    }

    const emailBody = `[ 1. 個人情報 ]

氏名： ${lastName} ${firstName} 様
メールアドレス： ${email}
電話番号： ${phone}
住所： ${address || '（未入力）'}


[ 2. プロフィール（添付ファイル） ]

履歴書： ${resumeInfo}
その他： ${otherInfo}


[ 3. 詳細情報 ]

性別： ${genderLabel}
社員紹介： ${referral}
配慮事項： ${accommodation || '（未入力）'}
Webサイト / SNS / Github： ${links}

応募職種： ${jobTitle || '（未指定）'}


[ 運営管理用 ]

受信日時：${receivedDate}
選考ステータス：[ 未着手 ]（←誰が対応するか決まったら書き込む用）
担当者メモ：〇〇（←「〇〇の担当者から紹介あり」など、自分用の備忘録）`

    console.log('[v0] Form data received:', { lastName, firstName, email, phone, jobTitle })
    console.log('[v0] Sending application email via Resend...')

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'kota.kayamori@newce.co.jp',
      subject: `【Apply】新規採用応募：${lastName} ${firstName} 様（${genderLabel}）`,
      text: emailBody,
      attachments: attachments.length > 0 ? attachments : undefined,
    })

    if (error) {
      console.error('[v0] Resend API error:', JSON.stringify(error, null, 2))
      return NextResponse.json({ 
        error: 'メール送信に失敗しました',
        debug: error
      }, { status: 500 })
    }

    console.log('[v0] Application email sent successfully:', data)
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
