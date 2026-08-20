import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { PageTransition } from "./components/page-transition"
import { StructuredData } from "./components/structured-data"

const inter = Inter({ subsets: ["latin"] })

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }]
}

type Props = {
  params: Promise<{ lang: string }>
  children: React.ReactNode
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const isEn = lang === "en"
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://jorgemunoz.pro'

  const title = isEn
    ? "Jorge Muñoz Castillo | Full Stack & Mobile Developer"
    : "Jorge Muñoz Castillo | Desarrollador Full Stack & Mobile"

  const description = isEn
    ? "Full Stack & Mobile Developer specialized in React, Next.js, Laravel, Native Android (Kotlin), AI and modern web solutions. Creator of LinkSight and Script2me."
    : "Desarrollador Full Stack y Mobile especializado en React, Next.js, Laravel, Android Nativo (Kotlin), IA y soluciones web modernas. Creador de LinkSight y Script2me."

  return {
    title,
    description,
    keywords: [
      "Jorge Muñoz Castillo",
      "Full Stack Developer",
      "Desarrollador Web",
      "Android Developer",
      "Kotlin",
      "LinkSight",
      "Script2me",
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Laravel",
      "IA",
      "Portafolio",
      "Yecla",
      "Murcia"
    ],
    authors: [{ name: "Jorge Muñoz Castillo", url: baseUrl }],
    creator: "Jorge Muñoz Castillo",
    publisher: "Jorge Muñoz Castillo",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        es: `${baseUrl}/es`,
        en: `${baseUrl}/en`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${lang}`,
      siteName: isEn ? 'Jorge Muñoz Castillo Portfolio' : 'Portafolio de Jorge Muñoz Castillo',
      locale: isEn ? 'en_US' : 'es_ES',
      type: 'website',
      images: [
        {
          url: '/foto-seo.png',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/foto-seo.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      ],
      shortcut: '/favicon.ico',
      apple: '/favicon.ico',
    },
    manifest: '/manifest.json',
  }
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
      <head>
        <meta name="view-transition" content="same-origin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="color-scheme" content="dark light" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
      </head>
      <body className={`${inter.className} bg-slate-50 dark:bg-zinc-950`}>
        <StructuredData lang={lang} />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          <PageTransition>
            {children}
          </PageTransition>
        </ThemeProvider>
      </body>
    </html>
  )
}
