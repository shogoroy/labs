import "./globals.css"

import type { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: "Labs",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
