import type { Metadata } from 'next'
import { Geist, Geist_Mono, Yuji_Syuku } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import ScrollToTop from '@/components/scroll-to-top'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const yujiSyuku = Yuji_Syuku({ weight: "400", subsets: ["latin"], variable: "--font-yuji-syuku" });

export const metadata: Metadata = {
  title: 'Newce | 株式会社Newce',
  description: '株式会社Newce（ニュース）の公式サイトです。サービス開発やIP創出を通じて、世界中により良いコンテンツを届けていきます。',
  generator: 'v0.app',
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Newce',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${yujiSyuku.variable}`}>
        <ScrollToTop />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
