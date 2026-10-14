import type { Metadata, Viewport } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })

export const metadata: Metadata = {
  title: 'Marvelous Web — Website Designer & Portfolio',
  description:
    'Modern, responsive websites designed to help businesses and professionals build a strong online presence.',
}

export const viewport: Viewport = {
  themeColor: '#eef2fd',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
