import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function LineAccountArticlePage() {
  const articleUrl = "https://newce.co.jp/news/line-account"

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full pt-24 pb-16 md:pt-32 md:pb-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center px-4 py-1.5 bg-black text-white text-xs font-bold rounded">
                    お知らせ
                  </span>
                  <span className="text-sm font-bold text-black">2025.09.04</span>
                </div>

                {/* Share buttons */}
                <div className="flex items-center gap-3 ml-auto">
                  <span className="text-sm font-semibold text-black">Share</span>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors text-black"
                    aria-label="Facebookでシェア"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent("株式会社Newceの公式LINEアカウントを開設しました")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors text-black"
                    aria-label="Xでシェア"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href={`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(articleUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors text-black"
                    aria-label="LINEでシェア"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-2xl md:text-3xl font-bold text-black mb-6 leading-tight">
                株式会社Newceの公式LINEアカウントを開設しました
              </h1>

              {/* Divider */}
              <div className="border-b-2 border-black mb-8"></div>

              {/* Hero Image */}
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg mb-10">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%85%AC%E5%BC%8F%E3%83%A9%E3%82%A4%E3%83%B3%E3%83%95%E3%82%9A%E3%83%AC%E3%82%B9%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9-Yvn3uZdLAj1qNseaUAUYZJI54v4Enq.png"
                  alt="LINE公式アカウント 友だち募集中"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Article Body */}
              <div className="space-y-8 text-sm md:text-base text-black leading-relaxed">
                <p>
                  {"株式会社Newce（所在地：東京都渋谷区、代表取締役：栢森公汰、以下Newce）は、情報発信体制の強化をユーザーの利便性向上を目的として、公式LINEアカウントを開設したことをお知らせいたします。"}
                </p>
                <p>
                  {"本アカウントは、今後リリース予定の新サービス情報や、既存プロダクトに関するアップデート状況など、株式会社Newceに関する最新情報をいち早くお届けしてまいります。"}
                </p>

                <div>
                  <h2 className="text-lg md:text-xl font-bold text-black mb-4">公式LINEアカウント概要</h2>
                  <ul className="space-y-2">
                    <li><span className="font-bold">{"アカウント名："}</span>{"【公式】株式会社Newce"}</li>
                    <li>
                      <span className="font-bold">{"利用目的："}</span>
                      <ul className="list-disc pl-6 mt-1 space-y-1">
                        <li>{"新サービスのリリース情報の配信"}</li>
                        <li>{"プロダクトの機能のアップデート・改善情報"}</li>
                        <li>{"イベントやメディア掲載等の企業のトピックの共有"}</li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-bold">{"登録方法："}</span>
                      {"以下のURLまたは、QRコードにより、ご登録いただけます。"}
                    </li>
                    <li>
                      <span className="font-bold">{"URL："}</span>
                      <a
                        href="https://lin.ee/roR3JUB"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline hover:text-blue-800 transition-colors break-all"
                      >
                        https://lin.ee/roR3JUB
                      </a>
                    </li>
                  </ul>
                </div>

                {/* QR Code */}
                <div className="flex justify-center">
                  <div className="relative w-48 h-48">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1757004570-ulFctYCEiHVDrU5xaJkoyfGM-P7KVvOahpE8Y3zaaHMnwGifj1Qb7Zt.webp"
                      alt="LINE QRコード"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div>
                  <h2 className="text-lg md:text-xl font-bold text-black mb-4">背景と今後の展望</h2>
                  <p className="mb-4">
                    {"株式会社Newceでは、AIを用いたサービス開発を通じて、スピード感のあるプロダクト展開を推進してまいります。"}
                  </p>
                  <p className="mb-4">
                    {"このたび公式LINEアカウントの開設により、関心をお寄せいただいている企業・個人の皆さまに対して、よりリアルタイムかつ身近に情報をお届けできる体制を整えました。"}
                  </p>
                  <p>
                    {"今後は、新サービスのリリース速報をはじめ、技術アップデート、イベント登壇情報、コラボレーション発表などもプレスリリースのみではなく、公式LINEも活用しながら発表してまいります。"}
                  </p>
                </div>

                <div>
                  <h2 className="text-lg md:text-xl font-bold text-black mb-4">最新情報の受け取り方法</h2>
                  <p>
                    {"公式LINEにご登録いただくことで、プレスリリース情報、SNS等をチェックしなくても、スマートフォンに直接通知が届きます。アップデートを見逃したくない方、最新の取り組みにご関心をお持ちの方は、ぜひこの機会にご登録ください。"}
                  </p>
                </div>
              </div>

              {/* Back to list button */}
              <div className="flex justify-center mt-16">
                <Link
                  href="/news"
                  className="inline-flex items-center justify-center px-8 py-3 bg-black text-white font-bold text-sm rounded-full hover:bg-gray-800 transition-colors"
                >
                  {"← 記事一覧に戻る"}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
