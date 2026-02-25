"use client"

import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollingBanner from "@/components/scrolling-banner"

export default function RadioPage() {
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
                <span>Newceのラジオ</span>
              </div>

              <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none text-left mt-24">
                Newceのラジオ
              </h1>

              {/* Coming Soon Section */}
              <div className="w-full mt-12">
                <div className="max-w-3xl mx-auto text-center">
                  <div className="p-12 border-2 border-gray-200 rounded-xl">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">このページは現在準備中です</h2>
                    <p className="text-gray-600">
                      Newceのラジオページは現在準備中です。近日公開予定ですので、今しばらくお待ちください。
                    </p>
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
