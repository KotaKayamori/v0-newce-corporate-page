"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollingBanner from "@/components/scrolling-banner"
import ScrollReveal from "@/components/scroll-reveal"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // ここに実際のフォーム送信処理を実装
    console.log("Form submitted:", formData)
    alert("お問い合わせを受け付けました。担当者からご連絡いたします。")
    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    })
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
                <form className="space-y-6">
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
                  <div className="flex justify-center pt-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center px-12 py-3 border-2 border-black bg-white text-black font-bold text-base rounded-full hover:bg-black hover:text-white transition-colors duration-300"
                    >
                      Send
                    </button>
                  </div>
                </form>
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
