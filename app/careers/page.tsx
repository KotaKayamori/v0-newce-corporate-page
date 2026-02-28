"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import ScrollReveal from "@/components/scroll-reveal"

const bgColors = [
  "rgb(250, 220, 80)",    // yellow
  "rgb(80, 200, 170)",    // emerald green
  "rgb(250, 220, 80)",    // yellow
  "rgb(120, 200, 240)",   // sky blue
]

const navItems = [
  { name: "Company", jpName: "会社情報", href: "/about" },
  { name: "Service", jpName: "事業紹介", href: "/service" },
  { name: "News", jpName: "お知らせ", href: "/news" },
  { name: "Recruit", jpName: "採用情報", href: "/recruit" },
  { name: "Contact", jpName: "お問い合わせ", href: "/contact" },
]

const jobCategories: Record<string, { title: string; tags: string[]; detail: { overview: string; appeal: string; skills: string } }[]> = {
  "Product & Creative": [
    {
      title: "フルスタックエンジニア",
      tags: ["積極採用中", "中途採用"],
      detail: {
        overview: "Web/モバイルアプリの設計・開発・運用全般。フロントエンドからバックエンド、インフラまで幅広く携わります。",
        appeal: "ゼロイチのフェーズで、技術選定からプロダクトの成長までダイレクトに関与し、自分の書いたコードが「次世代のスタンダード」になる瞬間に立ち会えます。",
        skills: "React/Next.js, TypeScript, Node.js, AWS/GCP等の実務経験。技術によるビジネス課題の解決能力。",
      },
    },
    {
      title: "プロダクトマネージャー",
      tags: ["積極採用中", "中途採用"],
      detail: {
        overview: "ユーザー体験の設計、ロードマップ策定、エンジニア・クリエイターとの調整を通じたプロダクトの価値最大化。",
        appeal: "代表と共に「New Service」の核を定義し、世の中のライフスタイルをアップデートする仕組みそのものを創り上げる司令塔になれます。",
        skills: "アジャイル開発のリード経験。データ分析に基づいた施策立案と実行力。",
      },
    },
    {
      title: "クリエイティブディレクター",
      tags: ["積極採用中", "中途採用"],
      detail: {
        overview: "Newceブランドおよび各IP・コンテンツのビジュアル、トーン＆マナーの統括・ディレクション。",
        appeal: "「安っぽくない、本物感」を追求し、Newceが生み出す全ての制作物に「熱狂の渦」を巻き起こす視覚的な魔法をかける責任者です。",
        skills: "デザイン・動画・コピー等、多岐にわたる制作物のディレクション経験。ブランド構築の知見。",
      },
    },
    {
      title: "コンテンツプランナー",
      tags: ["積極採用中", "中途採用"],
      detail: {
        overview: "SNS発信を軸としたIPの企画、ストーリー制作、動画コンテンツの企画・構成。",
        appeal: "自分の企画がSNSで拡散され、キャラクターや物語が人々の日常の一部（IP）になっていく過程を最前線でプロデュースできます。",
        skills: "YouTube/TikTok等の動画プラットフォームでのコンテンツ企画・運用経験。流行を言語化する能力。",
      },
    },
  ],
  "Business & Marketing": [
    {
      title: "マーケティングマネージャー",
      tags: ["積極採用中", "中途採用"],
      detail: {
        overview: "プロダクトおよびIPの認知拡大、ユーザー獲得戦略の立案・実行・数値管理。",
        appeal: "創り出したコンテンツを「誰に、どう届けるか」を設計し、無名の状態から社会的なブーム（News）へと引き上げる仕掛け人になれます。",
        skills: "デジタルマーケティングの実務経験。SNS広告やインフルエンサーマーケティングの深い知見。",
      },
    },
    {
      title: "法人営業",
      tags: ["積極採用中", "中途採用"],
      detail: {
        overview: "企業向けマーケティング支援の提案、パートナーシップ構築、アライアンスの獲得。",
        appeal: "Newceの持つクリエイティブ力を武器に、クライアントの課題を解決しながら、社会にインパクトを与える大規模なコラボレーションを実現できます。",
        skills: "広告代理店やSaaS業界での営業経験。高い交渉力と資料作成スキル。",
      },
    },
  ],
  "Corporate & PR": [
    {
      title: "バックオフィス",
      tags: ["中途採用"],
      detail: {
        overview: "総務、経理、法務、労務などのコーポレート業務全般の構築。",
        appeal: "急成長するスタートアップの土台をゼロから創り、攻めの体制を支える「守りのプロフェッショナル」として貢献できます。",
        skills: "スタートアップでの管理部門立ち上げ経験。スピード感のある事務処理能力。",
      },
    },
    {
      title: "HR",
      tags: ["積極採用中", "中途採用"],
      detail: {
        overview: "採用戦略の立案、母集団形成、面談・面接の運営、組織文化の浸透施策。",
        appeal: "「熱狂の渦を創る仲間」を自ら探し出し、Newceの成長を最大化させる最強のチームをビルディングする喜びがあります。",
        skills: "エンジニア・クリエイター採用の経験。ダイレクトリクルーティングの実践力。",
      },
    },
    {
      title: "PR",
      tags: ["副業募集中", "中途採用"],
      detail: {
        overview: "メディアリレーション、プレスリリース作成、SNSを活用した企業広報活動。",
        appeal: "「Newce」という存在そのものを「社会のポジティブなニュース」として世に送り出し、会社のブランド価値を向上させる代弁者になれます。",
        skills: "広報・PRの実務経験、メディアとのコネクション。ストーリーテリング能力。",
      },
    },
  ],
}

const commonPersonality = [
  "アントレプレナーシップの所持者：会社を「自分事」として捉え、自らが起点となって組織を動かせる方。",
  "不確実性を楽しめる方：正解のないシード期の環境において、泥臭く試行錯誤を繰り返し、最速で成果までやり抜ける方。",
  "越境するマインド：自分の職種領域に閉じこもらず、最高のプロダクト・コンテンツを創るために他領域にも関心を持ち、連携できる方。",
  "トレンドへの感度と客観性：常に「今、何が熱いか」をキャッチアップしつつ、それをどうビジネスやニュースに変えるかを冷静に考えられる方。",
]

const companyInfo = {
  name: "株式会社Newce",
  representative: "栢森 公汰",
  address: "150-0043\n東京都渋谷区道玄坂1-10-8 渋谷道玄坂東急ビル2F-C",
  capital: "8,016,400円（2026年2月現在、資本準備金を含む）",
  founded: "2025年5月",
  business: [
    "アプリケーションの企画・開発・運営",
    "SNSコンテンツ発信によるIP創出・育成",
    "デジタルコンテンツの企画・制作",
  ],
}

export default function CareersPage() {
  const [colorIndex, setColorIndex] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [expandedJob, setExpandedJob] = useState<string | null>(null)
  const [applyingJob, setApplyingJob] = useState<string | null>(null)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [otherFile, setOtherFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [debugInfo, setDebugInfo] = useState<string>('')

  const handleApplySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')
    setDebugInfo('')

    const form = e.currentTarget
    const formData = new FormData(form)
    formData.append('jobTitle', applyingJob || '')
    
    // Manually append files from state (for drag & drop support)
    if (resumeFile) {
      formData.set('resume', resumeFile)
    }
    if (otherFile) {
      formData.set('otherFile', otherFile)
    }

    try {
      const response = await fetch('/api/send/apply', {
        method: 'POST',
        body: formData,
      })

      // Check for non-JSON responses (like Request Entity Too Large)
      const contentType = response.headers.get('content-type')
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text()
        setSubmitError('サーバーエラーが発生しました')
        setDebugInfo(`Status: ${response.status}, Response: ${text.substring(0, 200)}`)
        return
      }

      const result = await response.json()

      if (response.ok) {
        setFormSubmitted(true)
        setResumeFile(null)
        setOtherFile(null)
      } else {
        setSubmitError(result.error || 'エラーが発生しました')
        if (result.debug) {
          const debugStr = typeof result.debug === 'string' ? result.debug : JSON.stringify(result.debug, null, 2)
          setDebugInfo(debugStr)
        }
      }
    } catch (err) {
      setSubmitError('ネットワークエラーが発生しました')
      setDebugInfo(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % bgColors.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min(scrollTop / (docHeight * 0.5), 1)
      setScrollProgress(progress)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [isMenuOpen])

  const currentBg = bgColors[colorIndex]
  const blendedR = Math.round(parseInt(currentBg.match(/\d+/g)![0]) + (255 - parseInt(currentBg.match(/\d+/g)![0])) * scrollProgress)
  const blendedG = Math.round(parseInt(currentBg.match(/\d+/g)![1]) + (255 - parseInt(currentBg.match(/\d+/g)![1])) * scrollProgress)
  const blendedB = Math.round(parseInt(currentBg.match(/\d+/g)![2]) + (255 - parseInt(currentBg.match(/\d+/g)![2])) * scrollProgress)
  const dynamicBg = `rgb(${blendedR}, ${blendedG}, ${blendedB})`

  return (
    <div className="flex min-h-screen flex-col" style={{ backgroundColor: dynamicBg, transition: "background-color 1.5s ease" }}>
      {/* PC Header */}
      <div className="hidden md:block fixed top-0 left-0 right-0 z-50 px-4 pt-5">
        <div className="w-full flex h-20 items-center justify-between px-8 lg:px-12 bg-white/70 backdrop-blur-md border-2 border-black rounded-full shadow-sm">
          <Link href="/careers" className="flex items-center">
            <span className="text-3xl font-bold text-black">Newce Careers</span>
          </Link>

          <nav className="flex items-center space-x-8 lg:space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex flex-col items-center text-black transition-colors duration-200 hover:text-black/60"

              >
                <span className="text-lg font-bold leading-tight">{item.name}</span>
                <span className="text-[10px] leading-tight mt-0.5">{item.jpName}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Header */}
      <header className={`md:hidden fixed top-0 z-50 w-full px-4 pt-4 ${isMenuOpen ? "pointer-events-none" : ""}`}>
        <div className="flex h-16 items-center justify-between px-5 bg-white/70 backdrop-blur-md border-2 border-black rounded-full shadow-sm pointer-events-auto">
          <Link href="/careers" className="flex items-center">
            <span className="font-bold text-black pl-2" style={{ fontSize: "24px" }}>Newce Careers</span>
          </Link>
          <button
            className="flex items-center text-black transition-colors hover:text-black/80"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[100] bg-white flex flex-col px-8">
          {/* Top bar with X */}
          <div className="flex items-start pt-6 pb-8">
            <button
              className="text-black"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Newce Careers logo left-aligned */}
          <div
            className="mb-12 opacity-0"
            style={{ animation: "careerMenuFadeInDown 0.4s ease forwards", animationDelay: "0.05s" }}
          >
            <Link href="/careers" onClick={() => setIsMenuOpen(false)}>
              <span className="text-4xl font-bold text-black">Newce Careers</span>
            </Link>
          </div>

          {/* Navigation links left-aligned */}
          <nav className="flex flex-col items-start gap-7">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex flex-col items-start text-black hover:text-black/60 transition-colors duration-200 opacity-0"
                style={{ animation: "careerMenuFadeInDown 0.4s ease forwards", animationDelay: `${0.1 + index * 0.08}s` }}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-2xl font-bold leading-tight">{item.name}</span>
                <span className="text-xs leading-tight mt-0.5">{item.jpName}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}

      <style jsx>{`
        @keyframes careerMenuFadeInDown {
          from {
            opacity: 0;
            transform: translateY(-16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <main className="flex-1 pt-28">
        {/* Top Message Section */}
        <section className="w-full py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 lg:p-16">
                  {/* Section heading */}
                  <div className="text-center mb-10 md:mb-14">
                    <h2 className="text-3xl md:text-5xl font-bold text-black mb-3">Top Message</h2>
                    <p className="text-base text-black font-bold">代表メッセージ</p>
                  </div>

                  {/* CEO Photo */}
                  <div className="flex justify-center mb-10 md:mb-14">
                    <div className="relative w-full max-w-md aspect-square overflow-hidden rounded-2xl">
                      <Image
                        src="/images/ceo-photo.webp"
                        alt="栢森公汰 CEO"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Message title */}
                  <div className="text-center mb-10">
                    <h3 className="font-bold text-black whitespace-nowrap" style={{ fontSize: "clamp(0.85rem, 3.8vw, 1.5rem)" }}>
                      {"「熱狂」を、社会の新たなスタンダードへ"}
                    </h3>
                  </div>

                  {/* Message body */}
                  <div className="flex justify-center">
                    <div className="space-y-10 text-sm md:text-base text-black leading-loose px-2 md:px-0 text-left max-w-2xl">
                      <p>
                        {"私たちの社名「Newce」には、"}
                        <br />
                        {"新しいサー��ス（New service）を通じて、"}
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

                  {/* CEO signature */}
                  <div className="mt-14 text-center">
                    <p className="text-sm text-black mb-2">株式会社Newce 代表取締役社長 / CEO</p>
                    <p className="text-3xl md:text-4xl text-black inline-block" style={{ fontFamily: "var(--font-yuji-syuku)", transform: "rotate(-2deg)" }}>栢森公汰</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Culture intro */}
        <section className="w-full py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.15)" }}>Culture</h2>
                <p className="text-base md:text-lg font-bold text-black leading-relaxed">
                  {"私たちはミッションの達成に向けて、力を合わせてより大きな成果を達成するために、カルチャーを大切にしています。"}
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="w-full py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="inline-block bg-black px-5 py-2 rounded mb-8">
                  <span className="text-white font-bold text-sm">{"ミッション"}</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h3 className="text-xl md:text-2xl font-bold text-black mb-2">{"Newce's Mission"}</h3>
                <p className="font-bold text-black mb-3 whitespace-nowrap" style={{ fontSize: "clamp(1.25rem, 5.5vw, 2.25rem)" }}>{"世界を変えるコンテンツを創る"}</p>
                <p className="text-base md:text-lg font-bold text-black mb-10">{"Create content that changes the world"}</p>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl mb-10">
                  <Image
                    src="/images/lightbulb-chalkboard.jpg"
                    alt="Mission - lightbulb ideas"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="space-y-6 text-sm md:text-base text-black leading-relaxed">
                  <p>{"私たちは、SNSネイティブな感性を武器に、新しいサービスやコンテンツを次々と生み出し続けていき、社会の中に「熱狂の渦」を巻き起こす一歩目を創り出します。"}</p>
                  <p>{"昨日まで、どこにもなかった物語や体験を形にすることで、関わる全ての人を、その物語の「主人公」へとアップデートしていく。それがNewceの存在意義であり、私たちが果たすべき使命です。"}</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="w-full py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="inline-block bg-black px-5 py-2 rounded mb-8">
                  <span className="text-white font-bold text-sm">{"ビジョン"}</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h3 className="text-xl md:text-2xl font-bold text-black mb-2">{"Newce's Vision"}</h3>
                <p className="font-bold text-black mb-3 whitespace-nowrap" style={{ fontSize: "clamp(1rem, 4.5vw, 2.25rem)" }}>{"サービスを通じて人々の生活を豊かにする"}</p>
                <p className="text-base md:text-lg font-bold text-black mb-10">{"Enriching people's lives through our services"}</p>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl mb-10">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%9C%B0%E7%90%83-w8xpMMMTrREorBK72if9YfaIxTrRkF.png"
                    alt="Vision - Earth"
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="space-y-6 text-sm md:text-base text-black leading-relaxed">
                  <p>{"私たちは、テクノロジーとクリエイティブを融合させたサービス（New Service）を通じて、人々の日常に新しい価値を定着させ、生活そのものをより彩り豊かにアップデートしていきます。"}</p>
                  <p>{"Newceという名前が、常にポジティブな「News（ニュース）」として社会の中心で輝き続け、世界中の人々のライフスタイルに欠かせない「次世代のスタンダード」となる未来を実現します。"}</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="w-full py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="inline-block bg-black px-5 py-2 rounded mb-8">
                  <span className="text-white font-bold text-sm">{"バリュー"}</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h3 className="text-xl md:text-2xl font-bold text-black mb-6">{"Newce's Values"}</h3>
                <p className="text-sm md:text-base text-black leading-relaxed mb-12">
                  {"Newceはミッション、ビジョンを達成するための行動指標として、4つのバリューを定めています。採用基準から、人事評価、日々の業務、そして経営判断まで、Newceに関わる全ての意思決定はこの4つのバリューをもとに行われています。個人や組織に共通のバリューがあることにより、意思決定を加速させることができます。"}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="flex flex-col gap-6">
                  <div className="bg-yellow-50 rounded-xl p-8 md:p-10">
                    <h4 className="text-lg md:text-xl font-bold text-black mb-4">{"Ownership｜「自分」が起点。"}</h4>
                    <p className="text-sm text-black leading-relaxed">
                      {"Newceで働くすべてのメンバーに求めるのは、圧倒的な当事者意識です。自らが事業の、そして組織のオーナーであるというアントレプレナーシップ意識を持つ。日頃から自らが起点となり動くことで、次々と押し寄せる「修羅場」を乗り越え、市場を牽引する経営人材へと成長し続ける。その個の強さが、組織を強くすると考えています。"}
                    </p>
                  </div>
                  <div className="bg-yellow-50 rounded-xl p-8 md:p-10">
                    <h4 className="text-lg md:text-xl font-bold text-black mb-4">{"Challenge｜泥臭く、最速で、やり抜く。"}</h4>
                    <p className="text-sm text-black leading-relaxed">
                      {"MissionやVisionの実現に、正解はありません。だからこそ、自ら考え、スピード感を持って一歩目を踏み出す。たとえスマートにいかなくても、泥臭く最後までやり抜き、目に見える「成果」へと繋げる。その挑戦へのプロセスこそが、世界を変える唯一の道です。"}
                    </p>
                  </div>
                  <div className="bg-yellow-50 rounded-xl p-8 md:p-10">
                    <h4 className="text-lg md:text-xl font-bold text-black mb-4">{"Update｜昨日までの正解を、疑え。"}</h4>
                    <p className="text-sm text-black leading-relaxed">
                      {"人々のライフスタイルをアップデートするには、まず自分たちが変わり続けなければなりません。既存の枠組みや成功体験に固執せず、常に「もっと面白くできないか」を問い続ける。自らをアップデートし続ける姿勢が、昨日までなかった価値を形にします。"}
                    </p>
                  </div>
                  <div className="bg-yellow-50 rounded-xl p-8 md:p-10">
                    <h4 className="text-lg md:text-xl font-bold text-black mb-4">{"Center of News｜話題の中心を、射抜け。"}</h4>
                    <p className="text-sm text-black leading-relaxed">
                      {"私たちは、ただ創る会社ではありません。「世の中がどう動くか」に常に敏感であれ。自分たちが生み出すものが、誰かの会話の種になり、社会のポジティブなニュースになるか。常に話題の中心を狙い、熱狂の渦を広げる仕掛け人としてのプロ意識を持ちます。"}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Job Section - white background */}
        <section className="w-full py-20 md:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-2">Job</h2>
                <p className="text-base font-bold text-black mb-12">{"募集職種"}</p>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="flex flex-col gap-4">
                  {Object.keys(jobCategories).map((category) => (
                    <div key={category}>
                      {/* Category button */}
                      <button
                        onClick={() => {
                          setActiveCategory(activeCategory === category ? null : category)
                          setExpandedJob(null)
                        }}
                        className="w-full flex items-center justify-between px-6 py-4 border-2 border-black rounded-lg bg-white hover:bg-gray-50 transition-colors text-left"
                      >
                        <span className="text-base md:text-lg font-bold text-black">{category}</span>
                        <svg
                          className={`w-5 h-5 text-black transition-transform duration-300 ${activeCategory === category ? "rotate-90" : ""}`}
                          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                        </svg>
                      </button>

                      {/* Job listings under this category */}
                      {activeCategory === category && (
                        <div className="mt-2 ml-2 md:ml-4 border-l-2 border-gray-200 pl-4 md:pl-6 py-2">
                          {jobCategories[category].map((job) => (
                            <div key={job.title} className="mb-2">
                              {/* Job title row */}
                              <button
                                onClick={() => setExpandedJob(expandedJob === job.title ? null : job.title)}
                                className="w-full group py-4 px-4 -mx-4 rounded-lg cursor-pointer transition-colors hover:bg-gray-50 text-left"
                              >
                                <div className="flex items-center justify-between mb-2">
                                  <p className="text-sm md:text-base font-bold text-black">{job.title}</p>
                                  <svg
                                    className={`w-4 h-4 text-black flex-shrink-0 transition-transform duration-300 ${expandedJob === job.title ? "rotate-90" : ""}`}
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                  >
                                    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                                  </svg>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  {job.tags.map((tag) => (
                                    <span key={tag} className="text-xs text-black border border-black rounded-full px-3 py-0.5">{tag}</span>
                                  ))}
                                </div>
                              </button>

                              {/* Expanded job detail */}
                              {expandedJob === job.title && (
                                <div className="pb-6 pt-2 px-4 space-y-8 border-b border-gray-200">
                                  {/* Title */}
                                  <h3 className="text-xl md:text-2xl font-bold text-black">{job.title}</h3>

                                  {/* Overview */}
                                  <div>
                                    <h4 className="text-base font-bold text-black mb-3">{"仕事概要"}</h4>
                                    <div className="space-y-4 text-sm text-black leading-relaxed">
                                      <div>
                                        <p className="font-bold mb-1">{"職種詳細"}</p>
                                        <p>{job.detail.overview}</p>
                                      </div>
                                      <div>
                                        <p className="font-bold mb-1">{"この仕事のやりがい"}</p>
                                        <p>{job.detail.appeal}</p>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Skills */}
                                  <div>
                                    <h4 className="text-base font-bold text-black mb-3">{"歓迎スキル"}</h4>
                                    <p className="text-sm text-black leading-relaxed">{job.detail.skills}</p>
                                  </div>

                                  {/* Personality (common) */}
                                  <div>
                                    <h4 className="text-base font-bold text-black mb-3">{"求める人物像"}</h4>
                                    <ul className="space-y-2 text-sm text-black leading-relaxed">
                                      {commonPersonality.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black flex-shrink-0"></span>
                                          <span>{item}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>

                                  {/* Company info (common) */}
                                  <div>
                                    <h4 className="text-base font-bold text-black mb-3">{"企業情報"}</h4>
                                    <div className="text-sm text-black leading-relaxed space-y-2">
                                      <div className="flex"><span className="font-bold w-24 flex-shrink-0">{"会社名"}</span><span>{companyInfo.name}</span></div>
                                      <div className="flex"><span className="font-bold w-24 flex-shrink-0">{"代表者"}</span><span>{companyInfo.representative}</span></div>
                                      <div className="flex items-start"><span className="font-bold w-24 flex-shrink-0">{"所在地"}</span><span className="whitespace-pre-line">{companyInfo.address}</span></div>
                                      <div className="flex items-start"><span className="font-bold w-24 flex-shrink-0">{"資本金"}</span><span>{companyInfo.capital}</span></div>
                                      <div className="flex"><span className="font-bold w-24 flex-shrink-0">{"設立"}</span><span>{companyInfo.founded}</span></div>
                                      <div className="flex items-start">
                                        <span className="font-bold w-24 flex-shrink-0">{"事業内容"}</span>
                                        <span>{companyInfo.business.join("\n")}</span>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Apply button */}
                                  <div className="flex justify-center pt-4">
                                    <button
                                      onClick={() => {
                                        setApplyingJob(job.title)
                                        setFormSubmitted(false)
                                        setResumeFileName(null)
                                        setOtherFileName(null)
                                      }}
                                      className="inline-flex items-center gap-2 border-2 border-black bg-white text-black font-bold text-base px-10 py-3.5 rounded-full hover:bg-black hover:text-white transition-colors"
                                    >
                                      {"Apply"}
                                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                                    </button>
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Application Form Modal */}
        {applyingJob && (
          <div className="fixed inset-0 z-[200] overflow-y-auto">
            <div className="min-h-screen bg-gray-100 py-8 px-4 md:px-12 lg:px-20">
              {/* Header */}
              <div className="max-w-2xl mx-auto md:mx-0 md:max-w-none mb-8">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-2">Apply</h2>
                <p className="text-base font-bold text-black mb-4">{"応募フォーム"}</p>
                <p className="text-sm font-bold text-black">{applyingJob}</p>
              </div>

              {formSubmitted ? (
                <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 md:p-12 text-center">
                  <div className="mb-6">
                    <svg className="w-16 h-16 text-black mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">{"ご応募ありがとうございます"}</h3>
                  <p className="text-sm text-black leading-relaxed mb-8">{"ご応募内容を確認の上、担当者よりご連絡いたします。"}</p>
                  <button
                    onClick={() => setApplyingJob(null)}
                    className="inline-flex items-center gap-2 bg-black text-white font-bold text-base px-10 py-3.5 rounded-full hover:bg-black/80 transition-colors"
                  >
                    {"閉じる"}
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleApplySubmit}
                  className="max-w-2xl mx-auto bg-white rounded-2xl p-8 md:p-12 space-y-10"
                >
                  {/* Personal info */}
                  <div>
                    <h3 className="text-lg font-bold text-black mb-6">{"個人情報"}</h3>
                    <div className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-bold text-black mb-1.5">{"姓"}<span className="text-red-500 ml-0.5">*</span></label>
                          <input id="firstName" name="firstName" type="text" required className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-bold text-black mb-1.5">{"名"}<span className="text-red-500 ml-0.5">*</span></label>
                          <input id="lastName" name="lastName" type="text" required className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-bold text-black mb-1.5">{"メールアドレス"}<span className="text-red-500 ml-0.5">*</span></label>
                        <input id="email" name="email" type="email" required className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-bold text-black mb-1.5">{"電話番号"}<span className="text-red-500 ml-0.5">*</span></label>
                        <input id="phone" name="phone" type="tel" required className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" />
                      </div>
                      <div>
                        <label htmlFor="address" className="block text-sm font-bold text-black mb-1.5">{"住所"}<span className="text-gray-400 text-xs ml-1">{"(任意)"}</span></label>
                        <input id="address" name="address" type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" />
                      </div>
                    </div>
                  </div>

                  {/* Profile */}
                  <div>
                    <h3 className="text-lg font-bold text-black mb-6">{"プロフィール"}</h3>
                    <div className="space-y-5">
                      <div>
                        <label className="block text-sm font-bold text-black mb-1.5">{"履歴書"}<span className="text-red-500 ml-0.5">*</span></label>
                        <label
                          htmlFor="resume"
                          className="flex flex-col items-center justify-center w-full border-2 border-dashed border-gray-300 rounded-lg py-8 px-4 cursor-pointer hover:border-black transition-colors"
                          onDragOver={(e) => e.preventDefault()}
                          onDrop={(e) => {
                            e.preventDefault()
                            if (e.dataTransfer.files[0]) setResumeFile(e.dataTransfer.files[0])
                          }}
                        >
                          {resumeFile ? (
                            <span className="text-sm text-black font-bold">{resumeFile.name}</span>
                          ) : (
                            <>
                              <svg className="w-8 h-8 text-gray-400 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
                              <span className="text-sm text-gray-500">ファイルを選択するか、ここにドラッグ＆ドロップしてください</span>
                            </>
                          )}
                          <input
                            id="resume"
                            name="resume"
                            type="file"
                            className="hidden"
                            required={!resumeFile}
                            onChange={(e) => {
                              if (e.target.files?.[0]) setResumeFile(e.target.files[0])
                            }}
                          />
                        </label>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-black mb-1.5">その他<span className="text-gray-400 text-xs ml-1">(任意)</span></label>
                        <label
                          htmlFor="otherFile"
                          className="flex flex-col items-center justify-center w-full border-2 border-dashed border-gray-300 rounded-lg py-8 px-4 cursor-pointer hover:border-black transition-colors"
                          onDragOver={(e) => e.preventDefault()}
                          onDrop={(e) => {
                            e.preventDefault()
                            if (e.dataTransfer.files[0]) setOtherFile(e.dataTransfer.files[0])
                          }}
                        >
                          {otherFile ? (
                            <span className="text-sm text-black font-bold">{otherFile.name}</span>
                          ) : (
                            <>
                              <svg className="w-8 h-8 text-gray-400 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
                              <span className="text-sm text-gray-500">ファイルを選択するか、ここにドラッ��＆ドロップしてくださ��</span>
                            </>
                          )}
                          <input
                            id="otherFile"
                            name="otherFile"
                            type="file"
                            className="hidden"
                            onChange={(e) => {
                              if (e.target.files?.[0]) setOtherFile(e.target.files[0])
                            }}
                          />
                        </label>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-3">※アップロードするファイルサイズが5MB以下であることを確認して添付してください。</p>
                  </div>

                  {/* Details */}
                  <div>
                    <h3 className="text-lg font-bold text-black mb-6">{"詳細"}</h3>
                    <div className="space-y-5">
                      <div>
                        <label htmlFor="gender" className="block text-sm font-bold text-black mb-1.5">{"性別をご選択ください"}<span className="text-red-500 ml-0.5">*</span></label>
                        <p className="text-xs text-gray-500 mb-3">{"Newceでは上記の情報をダイバーシティ、インクルーシビティの促進のための統計調査を行なっております。"}</p>
                        <select id="gender" name="gender" required className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-black bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent">
                          <option value="">{"性別を選択してください"}</option>
                          <option value="male">{"男性"}</option>
                          <option value="female">{"女性"}</option>
                          <option value="other">{"その他"}</option>
                          <option value="no-answer">{"回答を希望しません"}</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="referral" className="block text-sm font-bold text-black mb-1.5">{"社員紹介"}<span className="text-red-500 ml-0.5">*</span></label>
                        <p className="text-xs text-gray-500 mb-3">{"Newce社員からのご紹介の場合は、社員名をご記入ください。紹介でない場合は「なし」と入力してください。"}</p>
                        <input id="referral" name="referral" type="text" required className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" />
                      </div>
                      <div>
                        <label htmlFor="accommodation" className="block text-sm font-bold text-black mb-1.5">{"配慮事項"}<span className="text-gray-400 text-xs ml-1">{"(任意)"}</span></label>
                        <p className="text-xs text-gray-500 mb-3">{"あなたが最高のパフォーマンスを発揮できるよう、会社が知っておくべき情報があれば、お気軽にお知らせください。"}</p>
                        <textarea id="accommodation" name="accommodation" rows={3} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none" />
                      </div>
                      <div>
                        <label htmlFor="links" className="block text-sm font-bold text-black mb-1.5">{"Webサイト / SNS / GitHub"}<span className="text-red-500 ml-0.5">*</span></label>
                        <p className="text-xs text-gray-500 mb-3">{"Webサイト、ソーシャルメディアアカウント、Githubなどを入力してください。何も持っていない場合は「なし」と入力してください。"}</p>
                        <textarea id="links" name="links" rows={3} required className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none" />
                      </div>
                    </div>
                  </div>

                  {/* Privacy consent */}
                  <div className="flex items-start gap-3 pt-2">
                    <input
                      type="checkbox"
                      id="privacy-consent-apply"
                      required
                      className="mt-1 w-4 h-4 rounded border-gray-300 text-black focus:ring-black accent-black flex-shrink-0"
                    />
                    <span className="text-xs text-black leading-relaxed">
                      {"当社（株式会社Newce）は、お客様より取得する個人情報を、お問い合わせいただいたご質問やご要望へ回答する目的でのみ利用いたします。なお、当社の個人情報保護に関する基本方針については、以下の"}
                      <Link href="/privacy-policy" className="text-blue-600 underline hover:text-blue-800">プライバシーポリシー</Link>
                      {"をご確認ください。"}
                    </span>
                  </div>

                  {/* Error message */}
                  {submitError && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-600">
                      <p className="font-bold mb-2">{submitError}</p>
                      {debugInfo && (
                        <pre className="mt-2 text-xs bg-red-100 p-2 rounded overflow-x-auto whitespace-pre-wrap">
                          Debug: {debugInfo}
                        </pre>
                      )}
                    </div>
                  )}

                  {/* Submit & Go back */}
                  <div className="flex flex-col items-center gap-4 pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 border-2 border-black bg-white text-black font-bold text-base px-10 py-3.5 rounded-full hover:bg-black hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? '送信中...' : 'Apply'}
                      {!isSubmitting && <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>}
                    </button>
                    <button
                      type="button"
                      onClick={() => setApplyingJob(null)}
                      className="inline-flex items-center gap-2 text-sm font-bold text-black hover:text-black/60 transition-colors"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
                      {"Go back"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="w-full py-12 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-8">
              <Link href="/" className="text-2xl font-bold text-white hover:opacity-80 transition-opacity">Newce</Link>
              <nav className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                <Link href="/about" className="text-sm text-white hover:underline">Company</Link>
                <Link href="/service" className="text-sm text-white hover:underline">Service</Link>
                <Link href="/news" className="text-sm text-white hover:underline">News</Link>
                <Link href="/recruit" className="text-sm text-white hover:underline">Recruit</Link>
                <Link href="/contact" className="text-sm text-white hover:underline">Contact</Link>
              </nav>
              <p className="text-xs text-gray-400">&copy; 2026 Newce Inc. All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
