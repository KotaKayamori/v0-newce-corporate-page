"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Company", jpName: "会社情報", href: "/about" },
    { name: "Service", jpName: "事業紹介", href: "/service" },
    { name: "News", jpName: "お知らせ", href: "/news" },
    { name: "Recruit", jpName: "採用情報", href: "/recruit" },
    { name: "Contact", jpName: "お問い合わせ", href: "/contact" },
  ]

  return (
    <>
      {/* PC Navigation */}
      <div className="hidden md:block fixed top-0 left-0 right-0 z-50 px-4 pt-5">
        <div className="w-full flex h-20 items-center justify-between px-8 lg:px-12 bg-white/70 backdrop-blur-md border-2 border-black rounded-full shadow-sm">
          {/* PCナビゲーションの"Newce"ロゴ */}
          <Link href="/" className="flex items-center">
            <Image src="/images/newce-logo.png" alt="Newce" width={120} height={40} className="h-10 w-auto object-contain" priority />
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

      {/* Mobile Navigation */}
      <header className={`md:hidden fixed top-0 z-50 w-full px-4 pt-4 ${isOpen ? "pointer-events-none" : ""}`}>
        <div className="flex h-16 items-center justify-between px-5 bg-white/70 backdrop-blur-md border-2 border-black rounded-full shadow-sm pointer-events-auto">
          <Link href="/" className="flex items-center mt-0 pl-2">
            <Image src="/images/newce-logo.png" alt="Newce" width={100} height={36} className="h-9 w-auto object-contain" priority />
          </Link>
          <div className="flex">
            <button
              className="flex items-center text-black transition-colors hover:text-black/80"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="h-8 w-8" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Full screen mobile menu overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-[60] bg-white flex flex-col px-8">
          {/* Top bar with X */}
          <div className="flex items-start pt-6 pb-8">
            <button
              className="text-black"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-8 w-8" strokeWidth={2.5} />
            </button>
          </div>

          {/* Newce logo left-aligned */}
          <div
            className="mb-12 opacity-0"
            style={{ animation: "menuFadeInDown 0.4s ease forwards", animationDelay: "0.05s" }}
          >
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Image src="/images/newce-logo.png" alt="Newce" width={140} height={48} className="h-12 w-auto object-contain" />
            </Link>
          </div>

          {/* Navigation links left-aligned */}
          <nav className="flex flex-col items-start gap-7">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex flex-col items-start text-black hover:text-black/60 transition-colors duration-200 opacity-0"
                style={{ animation: "menuFadeInDown 0.4s ease forwards", animationDelay: `${0.1 + index * 0.08}s` }}
                onClick={() => setIsOpen(false)}
              >
                <span className="text-2xl font-bold leading-tight">{item.name}</span>
                <span className="text-xs leading-tight mt-0.5">{item.jpName}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
      <style jsx global>{`
        @keyframes slideRight {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        
        @keyframes slideOut {
          from { transform: translateX(0); }
          to { transform: translateX(100%); }
        }

        @keyframes menuFadeInDown {
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
    </>
  )
}
