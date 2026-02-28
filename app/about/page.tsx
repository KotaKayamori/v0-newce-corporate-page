"use client"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollReveal from "@/components/scroll-reveal"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* About Section */}
        <section className="w-full pt-12 pb-12 md:py-24 lg:py-32 relative">
          {/* Mobile background image */}
          <div className="absolute inset-0 md:hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%81%BE%E3%81%9F%E3%82%99%E8%A6%8B%E3%81%AC%E6%99%AF%E8%89%B2%E3%82%B9%E3%83%9E%E3%83%9B-imMuWALWKaSFExvR2Xlw6ZHOEqMnAT.png"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* PC background image */}
          <div className="absolute inset-0 hidden md:block">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%9C%88%E3%81%A8%E3%81%99%E3%81%A3%E3%81%BB%E3%82%9A%E3%82%93-zhi2q4wzEfqY8IfMpDKxGe9fBQC0VM.png"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative z-10 container px-4 md:px-6">
            <div className="w-full max-w-4xl mx-auto">
              <div className="mt-16 md:mt-0"></div>

              <div className="h-8 md:h-16"></div>

              {/* Main message */}
              <ScrollReveal>
                <div className="text-center">
                  <h2 className="font-bold text-white leading-tight mb-16 whitespace-nowrap" style={{ fontSize: "clamp(1.25rem, 5.5vw, 3rem)" }}>
                    まだ見ぬ景色を、明日のニュースに
                  </h2>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
              <div className="space-y-10 text-sm md:text-base text-white leading-loose px-2 md:px-0 text-center">
                <p>
                  {"社名「Newce（ニュース）」に込めたのは、"}
                  <br />
                  {"次々と新しいサービス（New service）を創造し、"}
                  <br />
                  {"常に人々の話題（News）の中心で"}
                  <br />
                  {"輝き続けるという覚悟です。"}
                </p>

                <p>
                  {"私たちが作り出すのは、"}
                  <br />
                  {"単なるプロダクトやコンテンツではありません。"}
                  <br />
                  {"昨日までどこにもなかった価値を形にし、"}
                  <br />
                  {"関わるすべての人を、"}
                  <br />
                  {"その物語の「主人公」へと"}
                  <br />
                  {"アップデートしていく。"}
                </p>

                <p>
                  {"それは、忘れかけていた情熱を呼び覚ます、"}
                  <br />
                  {"新しい生き方の提案。"}
                </p>

                <p>
                  {"世界が、あなたに夢中になる。"}
                  <br />
                  {"そんな熱狂の渦を、Newceから。"}
                </p>
              </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
        {/* Top Message Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="w-full max-w-4xl mx-auto">
              {/* Section heading */}
              <ScrollReveal>
                <div className="text-center mb-12 md:mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold text-black mb-3">Top Message</h2>
                  <p className="text-base text-black font-bold">代表メッセージ</p>
                </div>
              </ScrollReveal>

              {/* CEO Photo */}
              <ScrollReveal delay={200}>
              <div className="flex justify-center mb-12 md:mb-16">
                <div className="relative w-full max-w-md aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src="/images/ceo-photo.webp"
                    alt="栢森公汰 CEO"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              </ScrollReveal>

              {/* Message title */}
              <ScrollReveal delay={300}>
              <div className="text-center mb-12">
                <h3 className="font-bold text-black whitespace-nowrap" style={{ fontSize: "clamp(1rem, 4.5vw, 1.5rem)" }}>
                  {"「熱狂」を、社会の新たなスタンダードへ"}
                </h3>
              </div>
              </ScrollReveal>

              {/* Message body */}
              <ScrollReveal delay={400}>
              <div className="flex justify-center">
                <div className="space-y-10 text-sm md:text-base text-black leading-loose px-4 md:px-0 text-left max-w-2xl">
                  <p>
                    {"私たちの社名「Newce」には、"}
                    <br />
                    {"新しいサービス（New service）を通じて、"}
                    <br />
                    {"常に人々の話題（News）の中心であり続けるという"}
                    <br />
                    {"強い意志が込められています。"}
                  </p>

                  <p>
                    {"現代は、モノや情報が溢れ、"}
                    <br />
                    {"消費のスピードが加速し続ける時代です。"}
                    <br />
                    {"しかし、その中で人々の心を真に動かし、"}
                    <br />
                    {"人生の原動力となるような"}
                    <br />
                    {"「熱狂」を伴う体験は、"}
                    <br />
                    {"まだ十分とは言えません。"}
                  </p>

                  <p>
                    {"私は、この「熱狂」こそが、"}
                    <br />
                    {"社会を活性化させ、"}
                    <br />
                    {"新たな経済価値を生む"}
                    <br />
                    {"最大のエネルギーであると確信しています。"}
                  </p>

                  <p>
                    {"今後、私たちが次々と生み出していくサービスが、"}
                    <br />
                    {"社会にポジティブなNewsを広げ、"}
                    <br />
                    {"人々のライフスタイルそのものを"}
                    <br />
                    {"アップデートする。"}
                    <br />
                    {"サービスを通じて熱狂の渦を創り、"}
                    <br />
                    {"社会を揺れ動かす挑戦を"}
                    <br />
                    {"ここから加速させていきます。"}
                  </p>
                </div>
              </div>

              </ScrollReveal>

              {/* CEO signature */}
              <ScrollReveal delay={200}>
              <div className="mt-16 text-center">
                <p className="text-sm text-black mb-2">株式会社Newce 代表取締役社長 / CEO</p>
                <p className="text-3xl md:text-4xl text-black inline-block" style={{ fontFamily: "var(--font-yuji-syuku)", transform: "rotate(-2deg)" }}>栢森公汰</p>
              </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
        {/* Company Deck Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="w-full max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="ml-2 md:-ml-8">
                  <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none text-left">Company Deck</h2>
                  <p className="text-base text-black text-left mt-2 font-bold">会社紹介資料</p>
                </div>
              </ScrollReveal>

              <div className="h-12 md:h-16"></div>

              <ScrollReveal delay={200}>
                <div className="w-full">
                  <iframe
                    className="speakerdeck-iframe"
                    frameBorder="0"
                    src="https://speakerdeck.com/player/ea3ee207d65b4f71b36628136bcfda18?slide=1"
                    title="Newce , Inc.｜カンパニーデック- 会社資料"
                    allowFullScreen
                    style={{
                      border: 0,
                      background: "padding-box padding-box rgba(0, 0, 0, 0.1)",
                      margin: 0,
                      padding: 0,
                      borderRadius: "6px",
                      boxShadow: "rgba(0, 0, 0, 0.2) 0px 5px 40px",
                      width: "100%",
                      height: "auto",
                      aspectRatio: "560 / 315",
                    }}
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Company Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
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
                      <p className="font-semibold mb-2">代表者</p>
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
                      <p>特定募集情報等提供事業　届出済み</p>
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
                        <p className="text-lg">特定募集情報等提供事業　届出済み</p>
                      </div>
                    </div>
                  </div>
                </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
