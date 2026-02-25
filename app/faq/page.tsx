"use client"

import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollingBanner from "@/components/scrolling-banner"
import ScrollReveal from "@/components/scroll-reveal"

export default function FAQPage() {
  const faqs = [
    {
      question: "Newceのミッションは何ですか？",
      answer:
        "Newceは、『世の中を変える革新的なサービスを生み出し続ける』というミッションを掲げ、最新のIT技術、AI技術を活用して企業のデジタルトランスフォーメーションを推進し、社会全体に革新と持続可能な成長をもたらすことを目指しています。",
    },
    {
      question: "Newceのビジョンとはどのようなものですか？",
      answer:
        "当社のビジョンは『世界で最も必要とされる企業を創る』というビジョンを掲げ、グローバルなデジタルエコシステムを実現することを目指しています。",
    },
    {
      question: "Newceが大切にしているコアバリューは何ですか？",
      answer:
        "誠実さ、素直さ、を柱に、全てのステークホルダーに対して価値あるソリューションを提供することを重視しています。",
    },
    {
      question: "Newceはどのようにして顧客の課題解決に取り組んでいますか？",
      answer:
        "クラウド、AI、データ分析、アプケーションの開発などの先端技術を駆使し、カスタマイズされたソリューションを提供することで、顧客の業務効率化と競争力向上を実現しています。",
    },
    {
      question: "Newceが目指す未来はどのようなものですか？",
      answer:
        "誰もがテクノロジーの恩恵を享受できる社会を実現し、企業と個人がデジタルツールを活用してより効率的で安全な未来を築くことを目指しています。",
    },
    {
      question: "Newceはどのような社会貢献を考えていますか？",
      answer:
        "最新のデジタルソリューションを通じて、環境負荷の低減、地域活性化、デジタルデバイドの解消など、持続可能な社会づくりに積極的に貢献しています。",
    },
    {
      question: "Newceの革新的な取り組みとは何ですか？",
      answer:
        "当社は、AI、機械学習、IoTなどの先端技術を活用し、業界の枠を超えた共創や新規プロダクトの開発に取り組んでいます。これにより、従来のビジネスモデルを刷新するソリューションを提供しています。",
    },
    {
      question: "どのようにして新しいアイデアを生み出し、実現していますか？",
      answer:
        "社内外の多様な専門家やパートナーと連携し、オープンイノベーションを推進することで、革新的なアイデアを実際のプロダクトやサービスに迅速に反映させています。",
    },
    {
      question: "Newceが提供する価値は具体的にどのようなものですか？",
      answer:
        "業務効率の向上、コスト削減、データに基づく意思決定の支援、そして新たなビジネスチャンスの創出など、顧客の成長と競争力強化に直結する価値を提供しています。",
    },
    {
      question: "Newceの今後の長期目標や展望は？",
      answer:
        "当社は、グローバル市場への進出を視野に入れ、さらなる技術革新とサービスの拡充を図るとともに、社会全体がAI時代に適応できる未来の構築を目指しています。",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full pt-12 pb-12 md:pb-24 lg:pb-32 xl:pb-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start">
              {/* Breadcrumb navigation */}
              <div className="text-sm mb-4">
                <Link href="/" className="underline hover:text-gray-600">
                  Home
                </Link>
                <span className="mx-1">・</span>
                <span>よくいただくご質問</span>
              </div>

              <ScrollReveal>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none text-left mt-24">
                  よくいただくご質問
                </h1>
              </ScrollReveal>

              {/* FAQ Section */}
              <div className="w-full mt-12">
                <div className="max-w-3xl mx-auto">
                  <div className="space-y-8">
                    {faqs.map((faq, index) => (
                      <ScrollReveal key={index} delay={index * 100}><div className="border-b border-gray-200 pb-8">
                        <h3 className="text-xl font-bold mb-4">
                          {index + 1}. {faq.question}
                        </h3>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div></ScrollReveal>
                    ))}
                  </div>
                </div>
              </div>
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
