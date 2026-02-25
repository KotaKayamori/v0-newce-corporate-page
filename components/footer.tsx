import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center">
          {/* Newce Logo */}
          <Link href="/" className="mb-10" prefetch={true}>
            <span className="text-3xl font-bold">Newce</span>
          </Link>

          {/* Navigation Links - PC: horizontal, Mobile: vertical */}
          <nav className="flex flex-col md:flex-row items-center gap-6 md:gap-10 mb-10">
            <Link href="/about" className="text-sm hover:underline" prefetch={true}>
              Company
            </Link>
            <Link href="/service" className="text-sm hover:underline" prefetch={true}>
              Service
            </Link>
            <Link href="/news" className="text-sm hover:underline" prefetch={true}>
              News
            </Link>
            <Link href="/recruit" className="text-sm hover:underline" prefetch={true}>
              Recruit
            </Link>
            <Link href="/contact" className="text-sm hover:underline" prefetch={true}>
              Contact
            </Link>
          </nav>

          {/* Copyright */}
          <p className="text-xs text-gray-400 text-center">
            &copy; 2026 Newce Inc. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
