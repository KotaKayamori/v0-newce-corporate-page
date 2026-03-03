"use client"
import { useState } from "react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollReveal from "@/components/scroll-reveal"

import Image from "next/image"

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [debugInfo, setDebugInfo] = useState<string>('')

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')
    setDebugInfo('')

    const formData = new FormData(form)
    const data = {
      name: formData.get('name') as string,
      company: formData.get('company') as string,
      email: formData.get('email') as string,
      purpose: formData.get('purpose') as string,
      message: formData.get('message') as string,
    }

    try {
      const response = await fetch('/api/send/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        form.reset()
      } else {
        setErrorMessage(result.error || 'エラーが発生しました')
        if (result.debug) {
          const debugStr = typeof result.debug === 'string' ? result.debug : JSON.stringify(result.debug, null, 2)
          setDebugInfo(debugStr)
        }
        setSubmitStatus('error')
      }
    } catch (err) {
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
        {/* Mobile: tall portrait view with text visible / PC: natural full-width */}
        <section className="w-full relative overflow-hidden">
          {/* Mobile version - portrait image */}
          <div className="block md:hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%AF%8C%E5%A3%AB%E5%B1%B1%E3%82%B9%E3%83%9E%E3%83%9B-VeemRATx2sYoYDEuOvPcxBz0NwrN74.png"
              alt="Continuously Creating New Service - 世界を変える新しいサービスを生み出し続ける"
              width={1080}
              height={1920}
              className="w-full h-auto"
              priority
            />
          </div>
          {/* Desktop version - natural aspect ratio */}
          <div className="hidden md:block">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%AF%8C%E5%A3%AB%E5%B1%B1-8m68f1c71surmLhYtGULUg9F8Xo8f8.png"
              alt="Continuously Creating New Service - 世界を変える新しいサービスを生み出し続ける"
              width={1920}
              height={1080}
              className="w-full h-auto"
              priority
            />
          </div>
        </section>

        {/* Scroll Down indicator */}
        <div className="flex flex-col items-center py-8 bg-white">
          <p className="text-sm text-black tracking-widest mb-2">Scroll Down</p>
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M1 1L8 8L15 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* OUR MISSION Section */}
        <section className="w-full py-20 md:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center">
              <ScrollReveal>
                <p className="text-base md:text-lg tracking-widest uppercase text-black font-bold mb-4 self-start text-left">OUR MISSION</p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <h2 className="font-bold tracking-tight mb-12 whitespace-nowrap" style={{ fontSize: "clamp(1.5rem, 6vw, 3.75rem)" }}>世界を変えるコンテンツを創る</h2>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-8 py-3 border border-black bg-white text-black font-medium text-base rounded-full hover:bg-black hover:text-white transition-colors duration-300"
                >
                  {"View Detail >"}
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Company Profile Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start">
              <div className="w-full max-w-4xl mx-auto">
                {/* Company heading */}
                <ScrollReveal>
                  <div className="ml-2 md:-ml-8">
                    <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none text-left">Company</h2>
                    <p className="text-base text-black text-left mt-2 font-bold">会社情報</p>
                  </div>
                </ScrollReveal>

                <div className="h-16 md:h-20"></div>

                {/* Mobile layout */}
                <ScrollReveal delay={200}>
                <div className="flex flex-col md:hidden mb-8">
                  <div className="space-y-0 text-sm">
                    <div className="py-6 border-b border-gray-200">
                      <p className="font-semibold mb-2">会社名</p>
                      <p>株式会社Newce / Newce,Inc.</p>
                    </div>
                    <div className="py-6 border-b border-gray-200">
                      <p className="font-semibold mb-2">代表取締役</p>
                      <p>栢森 公汰</p>
                    </div>
                    <div className="py-6 border-b border-gray-200">
                      <p className="font-semibold mb-2">資本金</p>
                      <p>8,016,400円（2026年2月現在、資本準備金を含む）</p>
                    </div>
                    <div className="py-6 border-b border-gray-200">
                      <p className="font-semibold mb-2">設立</p>
                      <p>2025年5月</p>
                    </div>
                    <div className="py-6 border-b border-gray-200">
                      <p className="font-semibold mb-2">メールアドレス</p>
                      <p>info@newce.co.jp</p>
                    </div>
                    <div className="py-6 border-b border-gray-200">
                      <p className="font-semibold mb-2">所在地</p>
                      <div>
                        <p className="mb-1">〒150-0043</p>
                        <p className="mb-4">東京都渋谷区道玄坂1-10-8 渋谷道玄坂東急ビル2F-C</p>
                        <div className="w-full aspect-[4/3] rounded-lg overflow-hidden">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7479754683745!2d139.6936!3d35.6581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b5630ec2e25%3A0x9c2e2b6e3c1a2e9f!2z5riL6LC36YGT546E5Z2C5p2x5oCl44OT44Or!5e0!3m2!1sja!2sjp!4v1700000000000!5m2!1sja!2sjp"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Maps - Newce Office"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="py-6 border-b border-gray-200">
                      <p className="font-semibold mb-2">事業内容</p>
                      <ul className="list-none space-y-3">
                        <li>アプリケーションの企画・開発・運営</li>
                        <li>SNSコンテンツ発信によるIP創出・育成</li>
                        <li>デジタルコンテンツの企画・制作</li>
                      </ul>
                    </div>
                    <div className="py-6">
                      <p className="font-semibold mb-2">届出・許認可</p>
                      <p>特定募集情報等提供事業 （届出番号：51-募-xxxxxx）</p>
                    </div>
                  </div>
                </div>
                </ScrollReveal>

                {/* Desktop layout */}
                <ScrollReveal delay={200}>
                <div className="hidden md:block mb-8">
                  <div className="w-full">
                    <div className="mb-10">
                      <div className="flex">
                        <p className="text-lg font-semibold w-40">会社名</p>
                        <p className="text-lg">株式会社Newce / Newce,Inc.</p>
                      </div>
                    </div>
                    <div className="border-t border-gray-400 my-8 w-full"></div>
                    <div className="mb-10">
                      <div className="flex">
                        <p className="text-lg font-semibold w-40">代表者</p>
                        <p className="text-lg">栢森 公汰</p>
                      </div>
                    </div>
                    <div className="border-t border-gray-400 my-8 w-full"></div>
                    <div className="mb-10">
                      <div className="flex">
                        <p className="text-lg font-semibold w-40">資本金</p>
                        <p className="text-lg">{"8,016,400円（2026年2月現在、資本準備金を含む）"}</p>
                      </div>
                    </div>
                    <div className="border-t border-gray-400 my-8 w-full"></div>
                    <div className="mb-10">
                      <div className="flex">
                        <p className="text-lg font-semibold w-40">設立</p>
                        <p className="text-lg">2025年5月</p>
                      </div>
                    </div>
                    <div className="border-t border-gray-400 my-8 w-full"></div>
                    <div className="mb-10">
                      <div className="flex">
                        <p className="text-lg font-semibold w-40">メールアドレス</p>
                        <p className="text-lg">info@newce.co.jp</p>
                      </div>
                    </div>
                    <div className="border-t border-gray-400 my-8 w-full"></div>
                    <div className="mb-10">
                      <div className="flex">
                        <p className="text-lg font-semibold w-40 self-start">所在地</p>
                        <div className="flex-1">
                          <p>〒150-0043</p>
                          <p className="mb-4">東京都渋谷区道玄坂1-10-8 渋谷道玄坂東急ビル2F-C</p>
                          <div className="w-full aspect-[16/9] rounded-lg overflow-hidden">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7479754683745!2d139.6936!3d35.6581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b5630ec2e25%3A0x9c2e2b6e3c1a2e9f!2z5riL6LC36YGT546E5Z2C5p2x5oCl44OT44Or!5e0!3m2!1sja!2sjp!4v1700000000000!5m2!1sja!2sjp"
                              width="100%"
                              height="100%"
                              style={{ border: 0 }}
                              allowFullScreen
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                              title="Google Maps - Newce Office"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-400 my-8 w-full"></div>
                    <div className="mb-10">
                      <div className="flex">
                        <p className="text-lg font-semibold w-40 self-start">事業内容</p>
                        <ul className="list-none space-y-2">
                          <li>アプリケーションの企画・開発・運営</li>
                          <li>SNSコンテンツ発信によるIP創出・育成</li>
                          <li>デジタルコンテンツの企画・制作</li>
                        </ul>
                      </div>
                    </div>
                    <div className="border-t border-gray-400 my-8 w-full"></div>
                    <div className="mb-10">
                      <div className="flex">
                        <p className="text-lg font-semibold w-40 self-start">届出・許認可</p>
                        <p className="text-lg">特定募集情報等提供事業 （届出番号：51-募-xxxxxx）</p>
                      </div>
                    </div>
                  </div>
                </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Business Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="w-full max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="ml-2 md:-ml-8">
                  <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none text-left">Business</h2>
                  <p className="text-base text-black text-left mt-2 font-bold">事業領域</p>
                </div>
              </ScrollReveal>

              <div className="h-16 md:h-20"></div>

              {/* Business items - single column on mobile, 2 columns on PC */}
              <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-16">
                {/* 1 */}
                <ScrollReveal delay={0}>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-black mb-2">1</p>
                  <div className="border-b border-gray-300 mb-4 md:mb-5"></div>
                  <h3 className="text-lg font-bold text-black mb-3">アプリケーションの企画・開発・運営</h3>
                  <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg bg-gray-200 mb-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/smartphone-3FoP3fAdv1PpWdk67JQANx1a2AumHI.webp"
                      alt="スマートフォンアプリ開発"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    iOSやAndroid向けのスマートフォンアプリを中心に、世の中から必要とされるプロダクトをゼロから設計します。企画から開発・運営まで一貫して行い、リリース後もユーザーから長く使われるサービ��を創ります。
                  </p>
                </div>
                </ScrollReveal>

                {/* 2 */}
                <ScrollReveal delay={200}>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-black mb-2">2</p>
                  <div className="border-b border-gray-300 mb-4 md:mb-5"></div>
                  <h3 className="text-lg font-bold text-black mb-3">SNSコンテンツ発信によるIP創出・育成</h3>
                  <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg bg-gray-200 mb-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202026-02-15%2010.12.37-vRLD5hZwT48x21Mj4A511YWdN2kkqj.png"
                      alt="SNSコンテンツ発信によるIP創出"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {"SNSアカウント運用を用いて、SNS上での継続的な発信とコミュニケーションを通じて、熱狂的なファンベースを持つIP（知的財産）をゼロから構築します。独自の世界観構築とデータ分析を掛け合わせ、SNSから生まれる次世代のアイコンをプロデュースします。"}
                  </p>
                </div>
                </ScrollReveal>

                {/* 3 */}
                <ScrollReveal delay={400}>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-black mb-2">3</p>
                  <div className="border-b border-gray-300 mb-4 md:mb-5"></div>
                  <h3 className="text-lg font-bold text-black mb-3">デジタルコンテンツの企画・制作</h3>
                  <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg bg-gray-200 mb-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202026-02-15%2010.09.15-zPdfdyn74NSMhPbewe65oXEG2jZfPN.png"
                      alt="デジタルコンテンツの企画・制作"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    SNS発のIPや自社プロダクトの世界観を形にするため、コンテンツの企画・撮影・編集までを一貫して手がけます。ショート動画やビジュアル制作など、時代の熱量に合わせたクリエイティブをダイレクトに形にし、視覚とストーリーの両面からユーザーの心を動かす高品質なコンテンツを創出します。
                  </p>
                </div>
                </ScrollReveal>
              </div>

            </div>
          </div>
        </section>

        {/* Service Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="w-full max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="ml-2 md:-ml-8">
                  <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none text-left">Service</h2>
                  <p className="text-base text-black text-left mt-2 font-bold">サービス提供</p>
                </div>
              </ScrollReveal>

              <div className="h-16 md:h-20"></div>

              {/* Horizontal scroll (mobile) / Grid (PC) */}
              <ScrollReveal delay={200}>
              <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 -mx-4 px-[calc((100vw-280px)/2)] md:mx-0 md:px-0 snap-x snap-mandatory md:snap-none scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                {/* 1. Misecle Product */}
                <div className="min-w-[280px] md:min-w-0 snap-center">
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg bg-gray-200 mb-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Misecle%20product-9NS6G9K8p2R3SZtznRyu6ooiROVLNp.png"
                      alt="Misecle Product"
                      fill
                      className="object-contain bg-white"
                    />
                  </div>
                  <p className="text-sm text-gray-400 mb-1">{"2025 / Product"}</p>
                  <h3 className="text-base font-bold text-black">Misecle Product</h3>
                </div>

                {/* 2. Misecle Service site */}
                <div className="min-w-[280px] md:min-w-0 snap-center">
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg bg-gray-200 mb-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Service%20sate-BtnvxAVFmgLSC7rX5zBggrpJRLj7uF.png"
                      alt="Misecle Service site"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm text-gray-400 mb-1">{"2025 / Service Site"}</p>
                  <h3 className="text-base font-bold text-black">Misecle Service site</h3>
                </div>

                {/* 3. Misecle LP */}
                <div className="min-w-[280px] md:min-w-0 snap-center">
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg bg-gray-200 mb-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/misecle%20LP-z5YWPO25wJBVkj5rzxhMr3SzvNn3b0.png"
                      alt="Misecle LP"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm text-gray-400 mb-1">{"2025 / LP"}</p>
                  <h3 className="text-base font-bold text-black">Misecle LP</h3>
                </div>
              </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="mt-16 flex justify-center">
                  <Link
                    href="/service"
                    className="inline-flex items-center justify-center px-8 py-3 border border-black bg-white text-black font-medium text-base rounded-full hover:bg-black hover:text-white transition-colors duration-300"
                  >
                    {"View Detail >"}
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="w-full max-w-6xl mx-auto">
              <ScrollReveal>
                <div className="ml-2 md:ml-0">
                  <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none text-left">News</h2>
                  <p className="text-base text-black text-left mt-2 font-bold">お知らせ</p>
                </div>
              </ScrollReveal>

              <div className="h-12 md:h-16"></div>

              {/* News cards - horizontal scroll (matching Service section layout) */}
              <ScrollReveal delay={200}>
              <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-[calc((100vw-280px)/2)] md:mx-0 md:px-0" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                {/* Card 1 - Newest */}
                <Link href="/news/recruitment-filing" className="block group min-w-[280px] md:min-w-[320px] snap-center">
                  <div className="h-full flex flex-col">
                    <div className="w-full aspect-[4/3] overflow-hidden rounded-lg bg-gray-200">
                      <img src="/images/news/recruitment-filing.jpg" alt="特定募集情報等提供事業" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="flex items-center justify-between pt-4">
                      <span className="bg-black text-white px-3 py-1 text-xs font-bold">お知らせ</span>
                      <span className="text-black text-sm">2026.02.21</span>
                    </div>
                    <div className="pt-3 flex-1">
                      <h3 className="text-base leading-relaxed text-black line-clamp-2 group-hover:text-gray-600 transition-colors">特定募集情報等提供事業の届出完了について</h3>
                    </div>
                  </div>
                </Link>

                {/* Card 2 */}
                <Link href="/news/corporate-renewal" className="block group min-w-[280px] md:min-w-[320px] snap-center">
                  <div className="h-full flex flex-col">
                    <div className="w-full aspect-[4/3] overflow-hidden rounded-lg bg-white">
                      <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%81%86%E3%81%84-hNp2pwAMMREzNw5nloduZ22OqaItK4.png" alt="コーポレートサイトリニューアル" className="w-full h-full object-contain bg-white group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="flex items-center justify-between pt-4">
                      <span className="bg-black text-white px-3 py-1 text-xs font-bold">お知らせ</span>
                      <span className="text-black text-sm">2026.02.20</span>
                    </div>
                    <div className="pt-3 flex-1">
                      <h3 className="text-base leading-relaxed text-black line-clamp-2 group-hover:text-gray-600 transition-colors">コーポレートサイトのリニューアルに関するお知らせ</h3>
                    </div>
                  </div>
                </Link>

                {/* Card 3 */}
                <Link href="/news/service-site" className="block group min-w-[280px] md:min-w-[320px] snap-center">
                  <div className="h-full flex flex-col">
                    <div className="w-full aspect-[4/3] overflow-hidden rounded-lg bg-gray-200">
                      <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Service%20sate-BtnvxAVFmgLSC7rX5zBggrpJRLj7uF.png" alt="サービスサイト公開" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="flex items-center justify-between pt-4">
                      <span className="bg-black text-white px-3 py-1 text-xs font-bold">お知らせ</span>
                      <span className="text-black text-sm">2025.12.11</span>
                    </div>
                    <div className="pt-3 flex-1">
                      <h3 className="text-base leading-relaxed text-black line-clamp-2 group-hover:text-gray-600 transition-colors">サービスサイトの公開に関するお知らせ</h3>
                    </div>
                  </div>
                </Link>

                {/* Card 4 */}
                <Link href="/news/lp-site" className="block group min-w-[280px] md:min-w-[320px] snap-center">
                  <div className="h-full flex flex-col">
                    <div className="w-full aspect-[4/3] overflow-hidden rounded-lg bg-gray-200">
                      <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/misecle%20LP-z5YWPO25wJBVkj5rzxhMr3SzvNn3b0.png" alt="店舗様向けLP" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="flex items-center justify-between pt-4">
                      <span className="bg-black text-white px-3 py-1 text-xs font-bold">お知らせ</span>
                      <span className="text-black text-sm">2025.12.02</span>
                    </div>
                    <div className="pt-3 flex-1">
                      <h3 className="text-base leading-relaxed text-black line-clamp-2 group-hover:text-gray-600 transition-colors">店舗様向けLPサイトの公開に関するお知らせ</h3>
                    </div>
                  </div>
                </Link>

                {/* Card 5 */}
                <Link href="/news/trial" className="block group min-w-[280px] md:min-w-[320px] snap-center">
                  <div className="h-full flex flex-col">
                    <div className="w-full aspect-[4/3] overflow-hidden rounded-lg bg-gray-200">
                      <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rectangle_large_type_2_c1849dfb9ecbb3f5a0607ecde050558e-ImNgaXwZZCz5HjcKTLP7hDy0OELtKo.webp" alt="ミセクル試験運用" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="flex items-center justify-between pt-4">
                      <span className="bg-black text-white px-3 py-1 text-xs font-bold">プレスリリース</span>
                      <span className="text-black text-sm">2025.11.21</span>
                    </div>
                    <div className="pt-3 flex-1">
                      <h3 className="text-base leading-relaxed text-black line-clamp-2 group-hover:text-gray-600 transition-colors">ミセクル試験運用の開始について</h3>
                    </div>
                  </div>
                </Link>

                {/* Card 6 */}
                <Link href="/news/browser-release" className="block group min-w-[280px] md:min-w-[320px] snap-center">
                  <div className="h-full flex flex-col">
                    <div className="w-full aspect-[4/3] overflow-hidden rounded-lg bg-gray-200">
                      <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rectangle_large_type_2_728ed3f79bbdb61f6a8cc5c4e05de4af-rmqpPND8HO7fYJNwx6yONMKvgnBIfR.webp" alt="ブラウザ版サービス" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="flex items-center justify-between pt-4">
                      <span className="bg-black text-white px-3 py-1 text-xs font-bold">プレスリリース</span>
                      <span className="text-black text-sm">2025.11.21</span>
                    </div>
                    <div className="pt-3 flex-1">
                      <h3 className="text-base leading-relaxed text-black line-clamp-2 group-hover:text-gray-600 transition-colors">ブラウザ版サービスの提供開始のお知らせ</h3>
                    </div>
                  </div>
                </Link>
              </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="mt-12 flex justify-center">
                  <Link
                    href="/news"
                    className="inline-flex items-center justify-center px-8 py-3 border border-black bg-white text-black font-medium text-base rounded-full hover:bg-black hover:text-white transition-colors duration-300"
                  >
                    {"View Detail >"}
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Recruit Section */}
        <section className="w-full relative">
          <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%AF%E3%83%AB%E3%83%BC%E3%81%A8-x5prEzwloQzXdcsBoxFzMBdJpaNLvK.png"
              alt="Recruit Background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 flex flex-col items-start justify-center text-white text-left px-4">
              <div className="container px-4 md:px-6">
                <ScrollReveal>
                  <div className="ml-2 md:ml-0 mb-8">
                    <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none text-left">Recruit</h2>
                    <p className="text-base text-left mt-2 font-bold">採用情報</p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                  <h3 className="font-bold mb-4 ml-2 md:ml-0 whitespace-nowrap" style={{ fontSize: "clamp(1.75rem, 7vw, 3.75rem)" }}>We Are Hiring !!</h3>
                  <p className="mb-8 ml-2 md:ml-0 whitespace-nowrap" style={{ fontSize: "clamp(0.875rem, 3.5vw, 1.25rem)" }}>株式会社Newceで一緒に働く仲間を探しています。</p>
                </ScrollReveal>
                <ScrollReveal delay={400}>
                  <div className="ml-2 md:ml-0">
                    <Link
                      href="/recruit"
                      className="inline-flex items-center justify-center px-8 py-3 border border-white bg-transparent text-white font-medium text-base rounded-full hover:bg-white hover:text-black transition-colors duration-300"
                    >
                      {"View Detail >"}
                    </Link>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="w-full max-w-4xl mx-auto">
              <div className="ml-2 md:-ml-8">
                <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none text-left">Contact</h2>
                <p className="text-base text-black text-left mt-2 font-bold">お問い合わせ</p>
              </div>

              <p className="mt-6 text-sm md:text-base text-black ml-2 md:ml-0">会社やサービスに関するお問い合わせはこちら</p>

              <div className="h-10 md:h-16"></div>

              {/* White card form */}
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
                <form className="space-y-6" onSubmit={handleContactSubmit}>
                  <div className="space-y-2">
                    <label htmlFor="home-name" className="text-sm font-bold text-black">お名前</label>
                    <input
                      id="home-name"
                      name="name"
                      required
                      placeholder="ここにテキストを入力"
                      className="w-full bg-gray-100 border-none rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="home-company" className="text-sm font-bold text-black">{"企業 / 団体"}</label>
                    <input
                      id="home-company"
                      name="company"
                      placeholder="ここにテキストを入力"
                      className="w-full bg-gray-100 border-none rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="home-email" className="text-sm font-bold text-black">メールアドレス</label>
                    <input
                      id="home-email"
                      name="email"
                      type="email"
                      required
                      placeholder="ここにテキストを入力"
                      className="w-full bg-gray-100 border-none rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="home-purpose" className="text-sm font-bold text-black">お問い合わせの目的</label>
                    <select
                      id="home-purpose"
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
                    <label htmlFor="home-message" className="text-sm font-bold text-black">お問い合わせの内容</label>
                    <textarea
                      id="home-message"
                      name="message"
                      required
                      placeholder="ここにテキストを入力"
                      className="w-full bg-gray-100 border-none rounded-md px-4 py-3 text-sm min-h-[150px] focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-400"
                    />
                  </div>
                  <div className="flex items-start gap-3 pt-2">
                    <input
                      type="checkbox"
                      id="home-privacy-consent"
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
            </div>
          </div>
        </section>

      </main>
      <Footer />

    </div>
  )
}
