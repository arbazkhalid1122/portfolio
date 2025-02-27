import './globals.css'
import type { Metadata } from 'next'

// const inter = Inter({ subsets: [''] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio of Arbaz Khalid',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={''}>{children}</body>
    </html>
  )
}
