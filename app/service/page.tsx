"use client"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollReveal from "@/components/scroll-reveal"

export default function BusinessPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Business Section */}
        <section className="w-full pt-12 pb-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="w-full max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="ml-2 md:-ml-8 mt-24 md:mt-0">
                  <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none text-left">Business</h2>
                  <p className="text-base text-black text-left mt-2 font-bold">事業領域</p>
                </div>
              </ScrollReveal>

              <div className="h-16 md:h-20"></div>

              {/* Business items - single column on mobile, 2 columns on PC */}
              <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-16">
                {/* 1 */}
                <ScrollReveal>
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
                    {"iOSやAndroid向けのスマートフォンアプリを中心に、世の中から必要とされるプロダクトをゼロから設計します。企画から開発・運営まで一貫して行い、リリース後もユーザーから長く使われるサービスを創ります。"}
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
                    {"SNS発のIPや自社プロダクトの世界観を形にするため、コンテンツの企画・撮影・編集までを一貫して手がけます。ショート動画やビジュアル制作など、時代の熱量に合わせたクリエイティブをダイレクトに形にし、視覚とストーリーの両面からユーザーの心を動かす高品質なコンテンツを創出します。"}
                  </p>
                </div>
                </ScrollReveal>
              </div>

            </div>
          </div>
        </section>

        {/* Service Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="w-full max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="ml-2 md:-ml-8">
                  <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none text-left">Service</h2>
                  <p className="text-base text-black text-left mt-2 font-bold">サービス提供</p>
                </div>
              </ScrollReveal>

              <div className="h-16 md:h-20"></div>

              {/* Service list - 2 columns on PC */}
              <ScrollReveal delay={200}>
              <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-16">
                {/* 1. Misecle Product */}
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-black mb-2">1</p>
                  <div className="border-b border-gray-300 mb-5"></div>
                  <h3 className="text-lg md:text-xl font-bold text-black mb-3">Misecle Product</h3>
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg bg-gray-200 mb-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Misecle%20product-9NS6G9K8p2R3SZtznRyu6ooiROVLNp.png"
                      alt="Misecle Product"
                      fill
                      className="object-contain bg-white"
                    />
                  </div>
                  <p className="text-sm md:text-base font-bold text-black mb-2">
                    {"「ミセクル（Misecle）｜ショート動画型グルメ予約サービス」のブラウザ版を公開しました。"}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {"「ミセクル（Misecle）」は、ショート動画を活用してお店の魅力をリアルに体験できる新しいグルメ予約体験を提供しま���。従来の写真やテキストだけの情報では伝わりづらかった「店内の雰囲気」「料理の臨場感」などを、動画でわかりやすくユーザーへお届け。気になるお店は、アプリ上から直接飲食店を予約できます。現在、ブラウザ版でもサービスを公開中です。詳細は"}
                    <a href="https://app.newce.co.jp" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{"こちら"}</a>
                    {"をご覧ください。"}
                  </p>
                </div>

                {/* 2. Misecle Service site */}
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-black mb-2">2</p>
                  <div className="border-b border-gray-300 mb-5"></div>
                  <h3 className="text-lg md:text-xl font-bold text-black mb-3">Misecle Service site</h3>
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg bg-gray-200 mb-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Service%20sate-BtnvxAVFmgLSC7rX5zBggrpJRLj7uF.png"
                      alt="Misecle Service site"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm md:text-base font-bold text-black mb-2">
                    {"「Misecle（ミセクル）｜ショート動画型グルメ予約サービス」のサービスサイトを公開しました。"}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {"ショート動画型グルメ予約サービス「Misecle（ミセクル）」のサービスサイトを公開しました。ショート動画を通じて、飲食店の「店内の雰囲気」「料理の臨場感」などを直感的にチェックし、そのまま動画上から気になる飲食店を直接予約できるサービスです。 現在、一般ユーザー向けのサービスサイトを公開中です。詳細は"}
                    <a href="https://service.newce.co.jp" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{"こちら"}</a>
                    {"からご覧ください。"}
                  </p>
                </div>

                {/* 3. Misecle LP */}
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-black mb-2">3</p>
                  <div className="border-b border-gray-300 mb-5"></div>
                  <h3 className="text-lg md:text-xl font-bold text-black mb-3">Misecle LP</h3>
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg bg-gray-200 mb-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/misecle%20LP-z5YWPO25wJBVkj5rzxhMr3SzvNn3b0.png"
                      alt="Misecle LP"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm md:text-base font-bold text-black mb-2">
                    {"「ミセクル（Misecle）｜ショート動画型のグルメ予約サービス」の店舗様向けLPサイトを公開しました。"}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {"ショート動画型グルメ予約サービス「Misecle（ミセクル）」の店舗向けのランディングページを公開しました。ショート動画を通じて、飲食店の魅力を伝え、ユーザーはアプリ動画内から直接飲食店を予約できます。現在、導入店舗を募集中です。詳細は"}
                    <a href="https://ad.newce.co.jp" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{"こちら"}</a>
                    {"からご覧ください。"}
                  </p>
                </div>
              </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
