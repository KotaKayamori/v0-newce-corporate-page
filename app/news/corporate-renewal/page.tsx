import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function CorporateRenewalArticlePage() {
  const articleUrl = "https://newce.co.jp/news/corporate-renewal"

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
                  <span className="text-sm font-bold text-black">2026.02.20</span>
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
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent("コーポレートサイトのリニューアルに関するお知らせ")}`}
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
                コーポレートサイトのリニューアルに関するお知らせ
              </h1>

              {/* Divider */}
              <div className="border-b-2 border-black mb-8"></div>

              {/* Hero Image */}
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg mb-10">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%95%E3%82%9A%E3%83%AC%E3%82%B9%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9%E7%94%BB%E5%83%8F-pBzqkfRVcNcO92jC8IOZwd6tajhcfo.png"
                  alt="コーポレートサイトリニューアル"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Article Body */}
              <div className="space-y-8 text-sm md:text-base text-black leading-relaxed">
                <p>
                  {"株式会社Newce（所在地：東京都渋谷区、代表取締役：栢森公汰、以下Newce）は、コーポレートサイトを全面リニューアルしたことをお知らせいたします。"}
                </p>

                {/* Section: Background */}
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-black mb-4">
                    リニューアルの背景
                  </h2>
                  <p className="mb-4">
                    {"2025年5月の設立以来、Newceは「新しいサービスの在り方」を模索してきました。"}
                  </p>
                  <p className="mb-4">
                    {"その中で情報が溢れ、機能的な価値だけでは差別化が難しい現在において、私たちが提供するべきは単なるツールではなく、人の心を動かす「体験」そのものであると確信しました。"}
                  </p>
                  <p>
                    {"会社を設立してからの半年間、改めてNewceのアイデンティティを整理し、SNSネイティブ世代ならではの視点で世界を塗り替えるべく、ブランドサイドの一新を決定いたしました。"}
                  </p>
                </div>

                {/* Section: New Mission & Vision */}
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-black mb-4">
                    新たなミッションとビジョン
                  </h2>
                  <p className="mb-4">
                    {"今回のリニューアルに合わせ、Newceの存在意義を以下の通り再定義いたしました。"}
                  </p>
                  <div className="space-y-2 mb-4">
                    <p className="font-bold">{"・Mission：世界を変えるコンテンツを創る"}</p>
                    <p className="font-bold">{"・Vision：サービスを通じて人々の生活を豊かにする"}</p>
                  </div>
                  <p>
                    {"社名である「Newce」は、New Service の始まりと終わりを繋ぎ合わせた言葉です。私たちはこの新しいサービスの中に、圧倒的な熱狂を生む「中身（コンテンツ）」を詰め込み、IP創出とプロダクト開発の垣根を超えた価値を提供します。"}
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
