import type { Metadata } from 'next'
import Script from 'next/script'
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
      <body>
        {children}
        <Script
          src="http://15.237.138.40:3100/script.js"
          data-website-id="d8d0ccea-994a-4daa-ae76-7c0b96c46b31"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
