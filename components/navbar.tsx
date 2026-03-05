"use client"

import { useState } from "react"
import Link from "next/link"
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
        <div className="w-full flex h-20 items-center justify-between px-8 lg:px-12 bg-white/50 backdrop-blur-md rounded-full shadow-sm">
          {/* PCナビゲーションの"Newce"ロゴ */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-3xl font-bold text-black">Newce</span>
          </Link>
          <nav className="flex items-center space-x-8 lg:space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link-hover relative flex flex-col items-center text-black overflow-hidden px-2 py-1"
              >
                <span className="relative z-10 text-lg font-bold leading-tight">{item.name}</span>
                <span className="relative z-10 text-[10px] leading-tight mt-0.5">{item.jpName}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      <header className={`md:hidden fixed top-0 z-50 w-full px-4 pt-4 ${isOpen ? "pointer-events-none" : ""}`}>
        <div className="flex h-16 items-center justify-between px-5 bg-white/50 backdrop-blur-md rounded-full shadow-sm pointer-events-auto">
          <Link href="/" className="flex items-center space-x-2 mt-0">
            <span className="text-3xl font-bold text-black pl-2">
              Newce
            </span>
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
              <span className="text-4xl font-bold text-black">Newce</span>
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

        .nav-link-hover::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: black;
          transform: translateX(-100%);
          transition: transform 0.3s ease;
          z-index: 0;
          border-radius: 4px;
        }

        .nav-link-hover:hover::before {
          animation: navFlash 0.4s ease forwards;
        }

        .nav-link-hover:hover span {
          color: white;
          transition: color 0.15s ease;
        }

        @keyframes navFlash {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </>
  )
}
