"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollReveal from "@/components/scroll-reveal"

const allArticles = [
  { href: "/news/recruitment-filing", date: "2026.02.21", year: 2026, category: "お知らせ", title: "特定募集情報等提供事業の届出完了について", thumbnail: "/images/news/recruitment-filing.jpg" },
  { href: "/news/corporate-renewal", date: "2026.02.20", year: 2026, category: "お知らせ", title: "コーポレートサイトのリニューアルに関するお知らせ", thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%83%95%E3%82%9A%E3%83%AC%E3%82%B9%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9%E7%94%BB%E5%83%8F-pBzqkfRVcNcO92jC8IOZwd6tajhcfo.png" },
  { href: "/news/service-site", date: "2025.12.11", year: 2025, category: "お知らせ", title: "サービスサイトの公開に関するお知らせ", thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/service-5O1GQnTYqA36chdwAqt55F3WEm2Gh8.webp" },
  { href: "/news/lp-site", date: "2025.12.02", year: 2025, category: "お知らせ", title: "店舗様向けLPサイトの公開に関するお知らせ", thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/misecle_app-sz8DwuoplsY6JCcBh2GC6L2cVgOZrH.webp" },
  { href: "/news/trial", date: "2025.11.21", year: 2025, category: "プレスリリース", title: "ミセクル試験運用の開始について", thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rectangle_large_type_2_c1849dfb9ecbb3f5a0607ecde050558e-ImNgaXwZZCz5HjcKTLP7hDy0OELtKo.webp" },
  { href: "/news/browser-release", date: "2025.11.21", year: 2025, category: "プレスリリース", title: "ブラウザ版サービスの提供開始のお知らせ", thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rectangle_large_type_2_728ed3f79bbdb61f6a8cc5c4e05de4af-rmqpPND8HO7fYJNwx6yONMKvgnBIfR.webp" },
  { href: "/news/line-account", date: "2025.09.04", year: 2025, category: "お知らせ", title: "株式会社Newceの公式LINEアカウントを開設しました", thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rectangle_large_type_2_40912932b3f605d687acce3960d8ab24-BQ9x8zPtnxdbqWNoz3LR3soSqwuRNu.webp" },
]

const categories = ["すべて", "お知らせ", "プレスリリース", "メディア掲載"]
const years = ["すべて", "2026年", "2025年"]

function MobileDropdown({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-bold text-black flex-shrink-0 w-10">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 bg-gray-100 border border-black rounded-md px-4 py-3 text-sm font-bold text-black focus:outline-none focus:ring-2 focus:ring-black"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  )
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("すべて")
  const [selectedYear, setSelectedYear] = useState("すべて")
  const [visibleCount, setVisibleCount] = useState(5)

  const filtered = allArticles
    .filter((a) => {
      const catMatch = selectedCategory === "すべて" || a.category === selectedCategory
      const yearMatch = selectedYear === "すべて" || a.year === parseInt(selectedYear)
      return catMatch && yearMatch
    })
    .sort((a, b) => b.date.replace(/\./g, "").localeCompare(a.date.replace(/\./g, "")))

  const visible = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  function handleCategoryChange(v: string) {
    setSelectedCategory(v)
    setVisibleCount(5)
  }
  function handleYearChange(v: string) {
    setSelectedYear(v)
    setVisibleCount(5)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* News Section */}
        <section className="w-full pt-12 pb-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="w-full max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="ml-2 md:-ml-8 mt-24 md:mt-0">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none text-left">News</h1>
                  <p className="text-base text-black text-left mt-2 font-bold">お知らせ</p>
                </div>
              </ScrollReveal>

              <div className="h-16 md:h-20"></div>

              {/* Filters - PC */}
              <ScrollReveal delay={100}>
                <div className="hidden md:block mb-8 space-y-5">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-bold text-black flex-shrink-0">種別</span>
                    <div className="flex items-center gap-2">
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => handleCategoryChange(cat)}
                          className={`px-5 py-2 rounded-lg text-sm font-bold border border-black transition-colors ${selectedCategory === cat ? "bg-black text-white" : "bg-gray-100 text-black hover:bg-black hover:text-white"}`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-bold text-black flex-shrink-0">年代</span>
                    <div className="flex items-center gap-2">
                      {years.map((yr) => (
                        <button
                          key={yr}
                          onClick={() => handleYearChange(yr)}
                          className={`px-5 py-2 rounded-lg text-sm font-bold border border-black transition-colors ${selectedYear === yr ? "bg-black text-white" : "bg-gray-100 text-black hover:bg-black hover:text-white"}`}
                        >
                          {yr}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Filters - Mobile */}
              <ScrollReveal delay={100}>
                <div className="md:hidden mb-8 space-y-3">
                  <MobileDropdown label="種別" options={categories} value={selectedCategory} onChange={handleCategoryChange} />
                  <MobileDropdown label="年代" options={years} value={selectedYear} onChange={handleYearChange} />
                </div>
              </ScrollReveal>

              {/* News list - Card Layout (Timee style) */}
              <ScrollReveal delay={200}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                {filtered.length === 0 ? (
                  <div className="col-span-full py-12 text-center">
                    <p className="text-sm text-gray-500">該当する記事がありません</p>
                  </div>
                ) : (
                  visible.map((article) => (
                    <Link key={article.href} href={article.href} className="block group">
                      <div className="h-full flex flex-col">
                        {/* 1. Thumbnail - 16:9 aspect ratio, full width */}
                        <div className="w-full aspect-[16/9] bg-gray-100 overflow-hidden rounded-sm">
                          <img
                            src={article.thumbnail}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        {/* 2. Category (left) & Date (right) - directly below image */}
                        <div className="flex items-center justify-between pt-5">
                          <span className="bg-black text-white px-4 py-1.5 text-xs font-bold">{article.category}</span>
                          <span className="text-gray-500 text-sm">{article.date}</span>
                        </div>
                        {/* 3. Title - with good spacing */}
                        <div className="pt-4 pb-5 flex-1">
                          <h3 className="text-base leading-relaxed text-black line-clamp-3 group-hover:text-gray-600 transition-colors">{article.title}</h3>
                        </div>
                        {/* 4. Black underline - thick border */}
                        <div className="border-b-[3px] border-black"></div>
                      </div>
                    </Link>
                  ))
                )}
              </div>
              </ScrollReveal>

              {/* Load more button */}
              {hasMore && (
                <div className="flex justify-center mt-10">
                  <button
                    onClick={() => setVisibleCount((prev) => prev + 5)}
                    className="inline-flex items-center justify-center px-10 py-3 border border-black bg-white text-black font-medium text-base rounded-full hover:bg-black hover:text-white transition-colors duration-300 gap-2"
                  >
                    {"もっと見る"}
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
