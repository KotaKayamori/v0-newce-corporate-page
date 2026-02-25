import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ServiceSiteArticlePage() {
  const articleUrl = "https://newce.co.jp/news/service-site"

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
                  <span className="text-sm font-bold text-black">2025.12.11</span>
                </div>

                {/* Share buttons */}
                <div className="flex items-center gap-3 ml-auto">
                  <span className="text-sm font-semibold text-black">Share</span>
                  {/* Facebook */}
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
                  {/* X (Twitter) */}
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent("ミセクルのサービスサイトを公開しました")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors text-black"
                    aria-label="Xでシェア"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  {/* LINE */}
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
                ミセクルのサービスサイトを公開しました
              </h1>

              {/* Divider */}
              <div className="border-b-2 border-black mb-8"></div>

              {/* Hero Image */}
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg mb-10">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/service-5O1GQnTYqA36chdwAqt55F3WEm2Gh8.webp"
                  alt="ミセクル サービスサイト"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Article Body */}
              <div className="space-y-8 text-sm md:text-base text-black leading-relaxed">
                <p>
                  {"株式会社Newce（所在地：東京都渋谷区、代表取締役：栢森公汰）は、ショート動画型グルメ予約サービスミセクルのサービスサイトを正式に公開いたしましたことをお知らせいたします。"}
                </p>

                {/* Section: What is Misecle */}
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-black mb-4">
                    ミセクルとはどんなサービスなのか
                  </h2>
                  <p className="mb-4">
                    {"ミセクルとは、主に若年層（\u03B1世代・Z世代）の消費行動に合わせたショート動画型グルメ予約サービスです。従来のテキスト・写真中心のグルメサイトとは異なり、飲食店の「店内の雰囲気」や「料理の臨場感」を数十秒のショート動画を通じて、直感的に理解でき、そのまま動画上から気になる飲食店をワンタップで予約できるサービスです。"}
                  </p>
                  <p>
                    {"利用者は、Instagramのリール動画やTikTokの縦型ショート動画のように、動画を上下にスワイプしながら気になるお店を見つけて、動画上の予約ボタンからワンタップで予約ができます。また、飲食店側はショート動画を通じて、お店の魅力を直接ユーザーに伝えることができます。"}
                  </p>
                </div>

                {/* Section: Features */}
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-black mb-4">
                    サービスの特徴
                  </h2>
                  <div className="space-y-5">
                    <div>
                      <p className="font-bold text-black mb-1">{"1. ショート動画からお店を探せる"}</p>
                      <p>{"「料理の臨場感」や「店内の雰囲気」を15-30秒の動画で直感的にチェックできます。"}</p>
                    </div>
                    <div>
                      <p className="font-bold text-black mb-1">{"2. ワンタップで気になるお店をそのまま予約"}</p>
                      <p>{"ショート動画を見て、「行きたい！」と思ったら、そのままアプリ上からすぐに予約可能。検索の手間や複数媒体を経由する必要がありません。"}</p>
                    </div>
                    <div>
                      <p className="font-bold text-black mb-1">{"3. 最新情報をリアルタイムでチェック"}</p>
                      <p>{"営業時間やキャンペーンなど、お店からの最新情報がアプリ上に反映されるので、常に新鮮な情報でお店選びができます。"}</p>
                    </div>
                    <div>
                      <p className="font-bold text-black mb-1">{"4. 新しいお店との出会いが広がる"}</p>
                      <p>{"普段は見つけられない隠れた名店や新規出店のお店などを、動画から確認できます。"}</p>
                    </div>
                  </div>
                </div>

                {/* Section: Service Site */}
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-black mb-4">
                    サービスサイトについて
                  </h2>
                  <p className="mb-2">{"サービスサイトはこちらからご覧になれます\u2193"}</p>
                  <a
                    href="https://service.newce.co.jp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800 transition-colors break-all"
                  >
                    https://service.newce.co.jp
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
