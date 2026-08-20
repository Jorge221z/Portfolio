import type React from "react"
import type { Metadata } from "next"

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
    ? "Projects | Jorge Muñoz Castillo"
    : "Proyectos | Jorge Muñoz Castillo"

  const description = isEn
    ? "Explore my portfolio of web and mobile applications: LinkSight (Native Android), Script2me (AI), EmpleaWorks, SkillPilot and more."
    : "Explora mis proyectos de desarrollo web y móvil: LinkSight (Android Nativo), Script2me (IA), EmpleaWorks, SkillPilot y más."

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${lang}/projects`,
      languages: {
        es: `${baseUrl}/es/projects`,
        en: `${baseUrl}/en/projects`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${lang}/projects`,
      locale: isEn ? 'en_US' : 'es_ES',
      images: ['/foto-seo.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/foto-seo.png'],
    },
  }
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
