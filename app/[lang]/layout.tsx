import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }]
}

export const metadata: Metadata = {
  title: "Jorge Muñoz Castillo | Full Stack Developer",
  description: "Portfolio showcasing modern web development projects and skills",
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
