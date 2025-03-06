import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Charles Chen',
  description: 'Charles Chen\'s portfolio website',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
