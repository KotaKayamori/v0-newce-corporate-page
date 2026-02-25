"use client"
import { useRouter } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollReveal from "@/components/scroll-reveal"

export default function PrivacyPolicyPage() {
  const router = useRouter()
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full pt-12 pb-6 md:pb-12 bg-gray-100">
          <div className="container px-4 md:px-6">
            <ScrollReveal>
              <div className="flex flex-col items-start">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none text-left mt-24">
                  Privacy Policy
                </h1>
                <p className="text-base text-black text-left mt-2 font-bold">プライバシーポリシー</p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="w-full py-6 md:py-12 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="w-full max-w-4xl mx-auto">
              <div className="h-10 md:h-16"></div>
              <ScrollReveal delay={200}>
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
                  <div className="space-y-10 text-sm md:text-base text-black leading-relaxed">
                    <p>
                      {"株式会社Newce（以下、「当社」といいます。）は、「個人情報の保護に関する法律」及び関連する政省令、ガイドライン等（以下、「法令等」といいます。）を遵守し、以下のとおり、個人情報を適切に管理・利用いたします。"}
                    </p>

                    <div>
                      <h2 className="text-lg font-bold text-black mb-3">{"1. 個人情報の取得"}</h2>
                      <p>{"当社は、適切かつ適法な手段により個人情報を取得します。"}</p>
                    </div>

                    <div>
                      <h2 className="text-lg font-bold text-black mb-3">{"2. 個人情報の利用目的"}</h2>
                      <p className="mb-3">{"当社は、取得した個人情報を以下の目的のために利用します。"}</p>
                      <ul className="space-y-2 pl-1">
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black flex-shrink-0"></span>
                          <span>{"お問い合わせへの対応：お問い合わせいただいた内容への回答および資料送付のため"}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black flex-shrink-0"></span>
                          <span>{"採用活動：当社への採用応募者に対する選考・連絡・および採用後の人事管理のため"}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black flex-shrink-0"></span>
                          <span>{"サービスの提供・案内：当社サービスの提供、運営、および新サービス・イベント等のご案内のため"}</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-lg font-bold text-black mb-3">{"3. 個人情報利用の制限"}</h2>
                      <p>{"当社は、あらかじめご本人の同意を得ず、利用目的の達成に必要な範囲を超えて個人情報を取り扱うことはありません。ただし、法令に基づく場合等は、この限りではありません。"}</p>
                    </div>

                    <div>
                      <h2 className="text-lg font-bold text-black mb-3">{"4. 個人情報の安全管理"}</h2>
                      <p>{"当社は、個人情報の漏洩、滅失またはき損の防止その他個人情報の安全管理が図られるよう、適切な情報セキュリティー対策を講じ、必要かつ適切な監督を行います。"}</p>
                    </div>

                    <div>
                      <h2 className="text-lg font-bold text-black mb-3">{"5. 第三者提供の制限"}</h2>
                      <p className="mb-3">{"当社は、次に掲げる場合を除くほか、あらかじめご本人の同意を得ないで、個人情報を第三者に提供しません。"}</p>
                      <ul className="space-y-2 pl-1">
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black flex-shrink-0"></span>
                          <span>{"法令に基づく場合"}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black flex-shrink-0"></span>
                          <span>{"人の生命、身体または財産の保護のために必要がある場合であって、ご本人の同意を得ることが困難であるとき"}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black flex-shrink-0"></span>
                          <span>{"公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合"}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black flex-shrink-0"></span>
                          <span>{"国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合"}</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-lg font-bold text-black mb-3">{"6. 個人情報の開示・訂正・利用停止"}</h2>
                      <p>{"当社は、ご本人から個人情報の開示・内容の訂正・追加・削除、または利用の停止を求められた場合には、法令に従い遅延なく対応いたします。"}</p>
                    </div>

                    <div>
                      <h2 className="text-lg font-bold text-black mb-3">{"7. お問い合わせ窓口"}</h2>
                      <p className="mb-3">{"当社のプライバシーポリシーに関するお問い合わせは、下記までお願いいたします。"}</p>
                      <div className="space-y-1 whitespace-nowrap">
                        <p>{"〒150-0043"}</p>
                        <p>{"東京都渋谷区道玄坂1-10-8 渋谷道玄坂東急ビル2F-C"}</p>
                        <p>{"株式会社Newce"}</p>
                        <p>{"プライバシーポリシー管理担当"}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <div className="flex justify-center mt-10 mb-4">
                <button
                  onClick={() => router.back()}
                  className="inline-flex items-center justify-center gap-2 px-10 py-3 border border-black bg-white text-black font-medium text-base rounded-full hover:bg-black hover:text-white transition-colors duration-300"
                >
                  <span>{"←"}</span>
                  <span>Go back</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
