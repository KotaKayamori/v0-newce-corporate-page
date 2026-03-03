import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function TrialArticlePage() {
  const articleUrl = "https://newce.co.jp/news/trial"

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
                    プレスリリース
                  </span>
                  <span className="text-sm font-bold text-black">2025.11.21</span>
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
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent("ミセクル試験運用の開始について")}`}
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
                ミセクル試験運用の開始について
              </h1>

              {/* Divider */}
              <div className="border-b-2 border-black mb-8"></div>

              {/* Hero Image */}
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg mb-10">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Misecle%20product-kW8MhgVBMq0PdIOKH5LTvrtWpa2RPl.png"
                  alt="ミセクル"
                  fill
                  className="object-contain bg-white"
                />
              </div>

              {/* Article Body */}
              <div className="space-y-8 text-sm md:text-base text-black leading-relaxed">
                <p>
                  {"株式会社Newce（所在地：東京都渋谷区、代表取締役：栢森公汰、以下Newce）は、ショート動画を活用した新しい形のグルメ予約サービスミセクルの試験運用を、東京都渋谷区、世田谷区エリアを中心とした約600店舗の飲食店にて開始いたしました。"}
                </p>

                <div>
                  <h2 className="text-lg md:text-xl font-bold text-black mb-4">ミセクルとは</h2>
                  <p className="mb-4">
                    {"ミセクルとは、若年層（\u03B1世代・Z世代）の消費行動に合わせたショート動画型グルメ予約サービスです。従来のテキスト・写真中心のグルメサイトとは異なり、飲食店の店内の雰囲気や料理の臨場感を「数十秒のショート動画」を通じて直感的に理解でき、そのままアプリ上から気になる飲食店を即時予約できるサービスです。"}
                  </p>
                  <p>
                    {"利用者は、Instagramのリール動画や、TikTokの縦型ショート動画のように、動画をスワイプしながら気になるお店を見つけて、動画上の予約ボタンからワンタップで予約ができます。また、飲食店側はショート動画を通じて、お店の魅力を直接ユーザーに伝えることができます。"}
                  </p>
                </div>

                <div>
                  <h2 className="text-lg md:text-xl font-bold text-black mb-4">試験運用期間の概要</h2>
                  <ul className="space-y-2">
                    <li><span className="font-bold">{"試用エリア："}</span>{"東京都渋谷区、世田谷区エリア"}</li>
                    <li><span className="font-bold">{"掲載店舗数："}</span>{"約600店舗"}</li>
                    <li>
                      <span className="font-bold">{"運用目的："}</span>
                      <ul className="list-disc pl-6 mt-1 space-y-1">
                        <li>{"ショート動画を活用した店舗集客の有効性検証"}</li>
                        <li>{"\u03B1世代 / Z世代を中心としたユーザーの予約行動分析"}</li>
                        <li>{"飲食店における導入効果 / 運用負担の把握"}</li>
                      </ul>
                    </li>
                    <li><span className="font-bold">{"サービス提供形態："}</span>{"ブラウザ版サービス"}</li>
                    <li><span className="font-bold">{"主な協力インフルエンサー："}</span>{"Instagram「せたが屋」（Setagaya_Sanpo）"}</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-lg md:text-xl font-bold text-black mb-4">今後の展開</h2>
                  <p>
                    {"試験運用期間を通じて、得られたデータをもとに、アプリのUI / UXの向上を図り、今後は渋谷区、世田谷区での運用データをもとに、新宿エリアなどへの横スライド展開も視野に入れています。また、将来的には、全国規模でのサービス提供を目指します。"}
                  </p>
                </div>

                <div>
                  <h2 className="text-lg md:text-xl font-bold text-black mb-4">サービス概要</h2>
                  <p className="mb-2">{"ブラウザ版ミセクルサービスのご利用はこちら\u2193"}</p>
                  <a
                    href="https://app.newce.co.jp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800 transition-colors break-all"
                  >
                    https://app.newce.co.jp
                  </a>
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
