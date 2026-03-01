import type { Metadata } from 'next'
import { Geist, Geist_Mono, Yuji_Syuku, Dancing_Script } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import ScrollToTop from '@/components/scroll-to-top'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const yujiSyuku = Yuji_Syuku({ weight: "400", subsets: ["latin"], variable: "--font-yuji-syuku" });
const dancingScript = Dancing_Script({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-breathing" });

export const metadata: Metadata = {
  title: '株式会社Newce',
  description: '株式会社Newceの公式ホームページです。Newceのサービス、採用情報などをご紹介しています。',
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Newce',
  },
  openGraph: {
    title: '株式会社Newce',
    description: '株式会社Newceの公式ホームページです。Newceのサービス、採用情報などをご紹介しています。',
    type: 'website',
    locale: 'ja_JP',
    siteName: '株式会社Newce',
  },
  twitter: {
    card: 'summary',
    title: '株式会社Newce',
    description: '株式会社Newceの公式ホームページです。Newceのサービス、採用情報などをご紹介しています。',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${yujiSyuku.variable} ${dancingScript.variable}`}>
        <ScrollToTop />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
