import type { Metadata } from 'next'
import { Geist, Geist_Mono, Yuji_Syuku } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import ScrollToTop from '@/components/scroll-to-top'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const yujiSyuku = Yuji_Syuku({ weight: "400", subsets: ["latin"], variable: "--font-yuji-syuku" });

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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
