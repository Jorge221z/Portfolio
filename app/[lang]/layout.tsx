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

export const metadata: Metadata = {
  title: "Jorge Muñoz Castillo | Full Stack Developer",
  description: "Desarrollador Full Stack especializado en React, Laravel, IA y tecnologías modernas. Explora mi portafolio con proyectos innovadores y soluciones web.",
  keywords: ["Jorge Muñoz Castillo", "Full Stack Developer", "React", "Next.js", "Node.js", "TypeScript", "Desarrollo Web", "Portafolio", "JavaScript", "Frontend", "Backend"],
  authors: [{ name: "Jorge Muñoz Castillo" }],
  creator: "Jorge Muñoz Castillo",
  publisher: "Jorge Muñoz Castillo",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://jorgemunoz.pro'),
  alternates: {
    canonical: '/',
    languages: {
      'es': '/es',
      'en': '/en',
    },
  },
  openGraph: {
    title: "Jorge Muñoz Castillo | Full Stack Developer",
    description: "Desarrollador Full Stack especializado en React, Laravel, IA y tecnologías modernas. Explora mi portafolio con proyectos innovadores.",
    url: '/',
    siteName: 'Jorge Muñoz Castillo Portfolio',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/foto-seo.png',
        width: 1200,
        height: 630,
        alt: 'Jorge Muñoz Castillo - Full Stack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Jorge Muñoz Castillo | Full Stack Developer",
    description: "Desarrollador Full Stack especializado en React, Laravel, IA y tecnologías modernas.",
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
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_BASE_URL || 'https://jorgemunoz.pro'}/${lang}`} />
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
