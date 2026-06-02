import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Ken J Schmidt - Mortgage Broker | Chicago, IL',
  description: 'Premier mortgage lending professional with 25+ years of experience. Specializing in construction loans, jumbo financing, and self-employed borrowers.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/img/logo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/img/logo.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/img/logo.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/img/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-slate-50">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
