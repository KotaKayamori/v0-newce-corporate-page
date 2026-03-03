"use client"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollingBanner from "@/components/scrolling-banner"
import ScrollReveal from "@/components/scroll-reveal"

export default function RecruitPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Message Section */}
        <section className="w-full py-24 md:py-32 lg:py-40 bg-black relative overflow-hidden">
          {/* Mobile background image */}
          <div className="absolute inset-0 md:hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%86%B1%E7%8B%82%E3%81%AE%E6%B8%A6%E3%80%80%E3%82%B9%E3%83%9E%E3%83%9B%E7%89%88-wuZ8lZKTPJZaJEU9kyl3mplqhw838d.png"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* PC background image */}
          <div className="absolute inset-0 hidden md:block">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%86%B1%E7%8B%82%E3%81%AE%E6%B8%A6%E3%80%80PC%E7%89%88-u4ZsYcDOTZDLTIVIecCkKVyUCL1FjI.png"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative z-10 container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <ScrollReveal>
                <h1 className="font-bold text-white text-center mb-16 md:mb-20 whitespace-nowrap" style={{ fontSize: "clamp(1.5rem, 6vw, 3rem)" }}>
                  熱狂の渦を、共に生み出す
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={200}>
              <div className="flex justify-center">
                <div className="inline-block space-y-10 text-sm text-white leading-loose text-left">
                  <p>
                    株式会社Newce（ニュース）の
                    <br />
                    社名である「Newce」に込めたのは、
                    <br />
                    次々と新しいサービス（New Service）を創造し、
                    <br />
                    常に人々の話題（News）として
                    <br />
                    中心で輝き続けるという覚悟。
                  </p>

                  <p>
                    「熱狂の渦」とは、
                    <br />
                    昨日までどこにもなかった価値を形にして、
                    <br />
                    関わるすべての人を、その物語の「主人公」へと
                    <br />
                    アップデートしていくことで生まれていく。
                  </p>

                  <p>
                    サービス開発やIP創出を通じて、
                    <br />
                    世界中により良いコンテンツを届けていく。
                    <br />
                    みんなで次々と日本を代表する
                    <br />
                    サービスやコンテンツを生み出していく。
                    <br />
                    自らの手で 「 次世代のスタンダード 」
                    <br />
                    を創っていきたい。
                    <br />
                    そんな衝動を抱えた仲間を、
                    <br />
                    私たちは待っています。
                  </p>
                </div>
              </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="w-full py-20 md:py-32 bg-gray-100 md:-mt-4 relative z-10">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              {/* Section Title */}
              <ScrollReveal>
                <div className="mb-16 md:mb-20">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black text-left">Culture</h2>
                  <p className="text-base text-black text-left mt-2 font-bold">組織カルチャー</p>
                </div>
              </ScrollReveal>

              {/* Vision */}
              <ScrollReveal delay={200}>
              <div className="mb-20 md:mb-28">
                <p className="text-base font-bold text-black text-left mb-8">ビジョン</p>
                <h3 className="font-bold text-black text-center mb-12 whitespace-nowrap" style={{ fontSize: "clamp(1.1rem, 4.2vw, 2.25rem)" }}>
                  サービスを通じて人々の生活を豊かにする
                </h3>
                <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%9C%B0%E7%90%83-9WsJKowpYFegginQSmKWvCnt4USUX5.png"
                    alt="地球"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              </ScrollReveal>

              {/* Mission */}
              <ScrollReveal>
              <div className="mb-20 md:mb-28">
                <p className="text-base font-bold text-black text-left mb-8">ミッション</p>
                <h3 className="font-bold text-black text-center mb-12 whitespace-nowrap" style={{ fontSize: "clamp(1.1rem, 4.2vw, 2.25rem)" }}>
                  世界を変えるコンテンツを創る
                </h3>
                <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
                  <Image
                    src="/images/lightbulb-chalkboard.jpg"
                    alt="電球 - アイデアとイノベーション"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              </ScrollReveal>

              {/* Values */}
              <ScrollReveal>
              <div>
                <p className="text-base font-bold text-black text-left mb-8">バリュー</p>
                <div className="flex flex-col gap-6">
                  {/* Value 1 */}
                  <div className="bg-white rounded-2xl p-8 md:p-10">
                    <h4 className="text-lg md:text-xl font-bold text-black mb-4">
                      Ownership｜「自分」が起点。
                    </h4>
                    <p className="text-sm text-black leading-relaxed">
                      Newceで働くすべてのメンバーに求めるのは、圧倒的な当事者意識です。自らが事業の、そして組織のオーナーであるというアントレプレナーシップ意識を持つ。日頃から自らが起点となり動くことで、次々と押し寄せる「修羅場」を乗り越え、市場を牽引する経営人材へと成長し続ける。その個の強さが、組織を強くすると考えています。
                    </p>
                  </div>

                  {/* Value 2 */}
                  <div className="bg-white rounded-2xl p-8 md:p-10">
                    <h4 className="text-lg md:text-xl font-bold text-black mb-4">
                      Challenge｜泥臭く、最速で、やり抜く。
                    </h4>
                    <p className="text-sm text-black leading-relaxed">
                      MissionやVisionの実現に、正解はありません。だからこそ、自ら考え、スピード感を持って一歩目を踏み出す。たとえスマートにいかなくても、泥臭く最後までやり抜き、目に見える「成果」へと繋げる。その挑戦へのプロセスこそが、世界を変える唯一の道です。
                    </p>
                  </div>

                  {/* Value 3 */}
                  <div className="bg-white rounded-2xl p-8 md:p-10">
                    <h4 className="text-lg md:text-xl font-bold text-black mb-4">
                      Update｜昨日までの正解を、疑え。
                    </h4>
                    <p className="text-sm text-black leading-relaxed">
                      人々のライフスタイルをアップデートするには、まず自分たちが変わり続けなければなりません。既存の枠組みや成功体験に固執せず、常に「もっと面白くできないか」を問い続ける。自らをアップデートし続ける姿勢が、昨日までなかった価値を形にします。
                    </p>
                  </div>

                  {/* Value 4 */}
                  <div className="bg-white rounded-2xl p-8 md:p-10">
                    <h4 className="text-lg md:text-xl font-bold text-black mb-4">
                      Center of News｜話題の中心を、射抜け。
                    </h4>
                    <p className="text-sm text-black leading-relaxed">
                      私たちは、ただ創る会社ではありません。「世の中がどう動くか」に常に敏感であれ。自分たちが生み出すものが、誰かの会話の種になり、社会のポジティブなニュースになるか。常に話題の中心を狙い、熱狂の渦を広げる仕掛け人としてのプロ意識を持ちます。
                    </p>
                  </div>
                </div>
              </div>
              </ScrollReveal>
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
                    「ミセクル（Misecle）｜ショート動画型グルメ予約サービス」のブラウザ版を公開しました。
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    「ミセクル（Misecle）」は、ショート動画を活用してお店の魅力をリアルに体験できる新しいグルメ予約体験を提供します。従来の写真やテキストだけの情報では伝わりづらかった「店内の雰囲気」「料理の臨場感」などを、動画でわかりやすくユーザーへお届け。気になるお店は、アプリ上から直接飲食店を予約できます。現在、ブラウザ版でもサービスを公開中です。詳細は
                    <a href="https://app.newce.co.jp" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">こちら</a>
                    をご覧ください。
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
                    「Misecle（ミセクル）｜ショート動画型グルメ予約サービス」のサービスサイトを公開しました。
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    ショート動画型グルメ予約サービス「Misecle（ミセクル）」のサービスサイトを公開しました。ショート動画を通じて、飲食店の「店内の雰囲気」「料理の臨場感」などを直感的にチェックし、そのまま動画上から気になる飲食店を直接予約できるサービスです。 現在、一般ユーザー向けのサービスサイトを公開中です。詳細は
                    <a href="https://service.newce.co.jp" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">こちら</a>
                    からご覧ください。
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
                    「ミセクル（Misecle）｜ショート動画型のグルメ予約サービス」の店舗様向けLPサイトを公開しました。
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    ショート動画型グルメ予約サービス「Misecle（ミセクル）」の店舗向けのランディングページを公開しました。ショート動画を通じて、飲食店の魅��を伝え、ユーザーはアプリ動画内から直接飲食店を予約できます。現在、導入店舗を募集中です。詳細は
                    <a href="https://ad.newce.co.jp" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">こちら</a>
                    からご覧ください。
                  </p>
                </div>
              </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Job Section */}
        <section className="w-full py-20 md:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              {/* Section Title */}
              <ScrollReveal>
                <div className="mb-16 md:mb-20 ml-2 md:-ml-8">
                  <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none text-left text-black">Job</h2>
                  <p className="text-base text-black text-left mt-2 font-bold">募集職種</p>
                </div>
              </ScrollReveal>

              <div className="flex flex-col gap-10">
                {/* Photo - horizontal */}
                <ScrollReveal delay={200}>
                <div className="w-full">
                  <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%AF%E3%83%AB%E3%83%BC%E3%81%A8-yPAIvAhp3BQwhJzGA3dIod5FWYBIp6.png"
                      alt="採用イメージ"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                </ScrollReveal>

                {/* Job listings */}
                <ScrollReveal delay={300}>
                <div className="w-full flex flex-col">
                  {/* Category: Product & Creative */}
                  <p className="text-xs font-bold text-gray-500 mb-4">【 Product &amp; Creative 】</p>

                  {/* Job 1 */}
                  <Link href="/careers" className="block group border-b border-gray-200 pb-4 mb-4 px-4 py-3 -mx-4 rounded-lg cursor-pointer transition-colors hover:bg-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm md:text-base font-bold text-black transition-colors">フルスタックエンジニア</p>
                      <svg className="w-4 h-4 text-black transition-colors flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs text-black border border-black rounded-full px-3 py-0.5 transition-colors">積極採用中</span>
                      <span className="text-xs text-black border border-black rounded-full px-3 py-0.5 transition-colors">中途採用</span>
                    </div>
                  </Link>

                  {/* Job 2 */}
                  <Link href="/careers" className="block group border-b border-gray-200 pb-4 mb-4 px-4 py-3 -mx-4 rounded-lg cursor-pointer transition-colors hover:bg-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm md:text-base font-bold text-black transition-colors">プロダクトマネージャー</p>
                      <svg className="w-4 h-4 text-black transition-colors flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs text-black border border-black rounded-full px-3 py-0.5 transition-colors">積極採用中</span>
                      <span className="text-xs text-black border border-black rounded-full px-3 py-0.5 transition-colors">中途採用</span>
                    </div>
                  </Link>

                  {/* Job 3 */}
                  <Link href="/careers" className="block group border-b border-gray-200 pb-4 mb-4 px-4 py-3 -mx-4 rounded-lg cursor-pointer transition-colors hover:bg-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm md:text-base font-bold text-black transition-colors">クリエイティブディレクター</p>
                      <svg className="w-4 h-4 text-black transition-colors flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs text-black border border-black rounded-full px-3 py-0.5 transition-colors">積極採用中</span>
                      <span className="text-xs text-black border border-black rounded-full px-3 py-0.5 transition-colors">中途採用</span>
                    </div>
                  </Link>

                  {/* Job 4 */}
                  <Link href="/careers" className="block group border-b border-gray-200 pb-4 mb-8 px-4 py-3 -mx-4 rounded-lg cursor-pointer transition-colors hover:bg-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm md:text-base font-bold text-black transition-colors">コンテンツプランナー</p>
                      <svg className="w-4 h-4 text-black transition-colors flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs text-black border border-black rounded-full px-3 py-0.5 transition-colors">積極採用中</span>
                      <span className="text-xs text-black border border-black rounded-full px-3 py-0.5 transition-colors">中途採用</span>
                    </div>
                  </Link>

                  {/* Category: Business & Marketing */}
                  <p className="text-xs font-bold text-gray-500 mb-4">【 Business &amp; Marketing 】</p>

                  {/* Job 5 */}
                  <Link href="/careers" className="block group border-b border-gray-200 pb-4 mb-4 px-4 py-3 -mx-4 rounded-lg cursor-pointer transition-colors hover:bg-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm md:text-base font-bold text-black transition-colors">マーケティングマネージャー</p>
                      <svg className="w-4 h-4 text-black transition-colors flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs text-black border border-black rounded-full px-3 py-0.5 transition-colors">積極採用中</span>
                      <span className="text-xs text-black border border-black rounded-full px-3 py-0.5 transition-colors">中途採用</span>
                    </div>
                  </Link>

                  {/* Job 6 */}
                  <Link href="/careers" className="block group border-b border-gray-200 pb-4 mb-8 px-4 py-3 -mx-4 rounded-lg cursor-pointer transition-colors hover:bg-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm md:text-base font-bold text-black transition-colors">法人営業</p>
                      <svg className="w-4 h-4 text-black transition-colors flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs text-black border border-black rounded-full px-3 py-0.5 transition-colors">積極採用中</span>
                      <span className="text-xs text-black border border-black rounded-full px-3 py-0.5 transition-colors">中途採用</span>
                    </div>
                  </Link>

                  {/* Category: Corporate & PR */}
                  <p className="text-xs font-bold text-gray-500 mb-4">【 Corporate &amp; PR 】</p>

                  {/* Job 7 */}
                  <Link href="/careers" className="block group border-b border-gray-200 pb-4 mb-4 px-4 py-3 -mx-4 rounded-lg cursor-pointer transition-colors hover:bg-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm md:text-base font-bold text-black transition-colors">バックオフィス</p>
                      <svg className="w-4 h-4 text-black transition-colors flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs text-black border border-black rounded-full px-3 py-0.5 transition-colors">中途採用</span>
                    </div>
                  </Link>

                  {/* Job 8 */}
                  <Link href="/careers" className="block group border-b border-gray-200 pb-4 mb-4 px-4 py-3 -mx-4 rounded-lg cursor-pointer transition-colors hover:bg-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm md:text-base font-bold text-black transition-colors">HR</p>
                      <svg className="w-4 h-4 text-black transition-colors flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs text-black border border-black rounded-full px-3 py-0.5 transition-colors">積極採用中</span>
                      <span className="text-xs text-black border border-black rounded-full px-3 py-0.5 transition-colors">中途採用</span>
                    </div>
                  </Link>

                  {/* Job 9 */}
                  <Link href="/careers" className="block group pb-4 px-4 py-3 -mx-4 rounded-lg cursor-pointer transition-colors hover:bg-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm md:text-base font-bold text-black transition-colors">PR</p>
                      <svg className="w-4 h-4 text-black transition-colors flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs text-black border border-black rounded-full px-3 py-0.5 transition-colors">副業募集中</span>
                      <span className="text-xs text-black border border-black rounded-full px-3 py-0.5 transition-colors">中途採用</span>
                    </div>
                  </Link>
                </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Scrolling Banner - Added to Recruit page */}
        <ScrollingBanner />
      </main>
      <Footer />
    </div>
  )
}
