"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollingBanner from "@/components/scrolling-banner"
import ScrollReveal from "@/components/scroll-reveal"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [debugInfo, setDebugInfo] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')
    setDebugInfo('')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      company: formData.get('company') as string,
      email: formData.get('email') as string,
      purpose: formData.get('purpose') as string,
      message: formData.get('message') as string,
    }

    console.log('[v0] Submitting contact form:', data)

    try {
      const response = await fetch('/api/send/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()
      console.log('[v0] API response:', result)

      if (response.ok) {
        setSubmitStatus('success')
        e.currentTarget.reset()
      } else {
        setErrorMessage(result.error || 'エラーが発生しました')
        if (result.debug) {
          const debugStr = typeof result.debug === 'string' ? result.debug : JSON.stringify(result.debug, null, 2)
          setDebugInfo(debugStr)
          console.error('[v0] Debug info:', result.debug)
        }
        setSubmitStatus('error')
      }
    } catch (err) {
      console.error('[v0] Network error:', err)
      setErrorMessage('ネットワークエラーが発生しました')
      setDebugInfo(err instanceof Error ? err.message : 'Unknown error')
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full pt-12 pb-6 md:pb-12 bg-gray-100">
          <div className="container px-4 md:px-6">
            <ScrollReveal>
              <div className="flex flex-col items-start">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none text-left mt-24">
                  Contact
                </h1>
                <p className="text-base text-black text-left mt-2 font-bold">お問い合わせ</p>
                <p className="text-sm text-black text-left mt-4">会社やサービスに関するお問い合わせはこちら</p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact Form */}
        <section className="w-full py-6 md:py-12 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="w-full max-w-4xl mx-auto">
              <div className="h-10 md:h-16"></div>

              {/* White card form */}
              <ScrollReveal delay={200}>
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
                {submitStatus === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2">送信完了</h3>
                    <p className="text-sm text-gray-600 mb-6">お問い合わせを受け付けました。担当者からご連絡いたします。</p>
                    <button
                      type="button"
                      onClick={() => setSubmitStatus('idle')}
                      className="inline-flex items-center justify-center px-8 py-3 border border-black bg-white text-black font-medium text-base rounded-full hover:bg-black hover:text-white transition-colors duration-300"
                    >
                      新しいお問い合わせ
                    </button>
                  </div>
                ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-sm font-bold text-black">お名前</label>
                    <input
                      id="contact-name"
                      name="name"
                      required
                      placeholder="ここにテキストを入力"
                      className="w-full bg-gray-100 border-none rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-company" className="text-sm font-bold text-black">{"企業 / 団体"}</label>
                    <input
                      id="contact-company"
                      name="company"
                      placeholder="ここにテキストを入力"
                      className="w-full bg-gray-100 border-none rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-sm font-bold text-black">メールアドレス</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="ここにテキストを入力"
                      className="w-full bg-gray-100 border-none rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-purpose" className="text-sm font-bold text-black">お問い合わせの目的</label>
                    <select
                      id="contact-purpose"
                      name="purpose"
                      required
                      className="w-full bg-gray-100 border-none rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black text-gray-700"
                    >
                      <option value="">選択してください</option>
                      <option value="company">会社関連について</option>
                      <option value="recruit">採用について</option>
                      <option value="press">広報・取材・登壇について</option>
                      <option value="ad">広告・宣伝について</option>
                      <option value="partnership">提携・パートナーに関するご相談について</option>
                      <option value="other">その他</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-message" className="text-sm font-bold text-black">お問い合わせの内容</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      placeholder="ここにテキストを入力"
                      className="w-full bg-gray-100 border-none rounded-md px-4 py-3 text-sm min-h-[150px] focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-400"
                    />
                  </div>
                  <div className="flex items-start gap-3 pt-2">
                    <input
                      type="checkbox"
                      id="privacy-consent"
                      required
                      className="mt-1 w-4 h-4 rounded border-gray-300 text-black focus:ring-black accent-black flex-shrink-0"
                    />
                    <span className="text-xs text-black leading-relaxed">
                      {"当社（株式会社Newce）は、お客様より取得する個人情報を、お問い合わせいただいたご質問やご要望へ回答する目的でのみ利用いたします。なお、当社の個人情報保護に関する基本方針については、以下の"}
                      <Link href="/privacy-policy" className="text-blue-600 underline hover:text-blue-800">プライバシーポリシー</Link>
                      {"をご確認ください。"}
                    </span>
                  </div>
                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-600">
                      <p className="font-bold mb-2">{errorMessage}</p>
                      {debugInfo && (
                        <pre className="mt-2 text-xs bg-red-100 p-2 rounded overflow-x-auto whitespace-pre-wrap">
                          Debug: {debugInfo}
                        </pre>
                      )}
                    </div>
                  )}
                  <div className="flex justify-center pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center px-12 py-3 border-2 border-black bg-white text-black font-bold text-base rounded-full hover:bg-black hover:text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? '送信中...' : 'Send'}
                    </button>
                  </div>
                </form>
                )}
              </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Scrolling Banner */}
        <ScrollingBanner />
      </main>
      <Footer />
    </div>
  )
}
