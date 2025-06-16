import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Proyectos | Jorge Muñoz Castillo",
  description: "Explora mis proyectos de desarrollo web. Aplicaciones modernas creadas con React, Laravel, IA y las últimas tecnologías.",
  openGraph: {
    title: "Proyectos | Jorge Muñoz Castillo",
    description: "Explora mis proyectos de desarrollo web. Aplicaciones modernas creadas con React, Laravel, IA y las últimas tecnologías.",
    images: ['/foto-seo.png'],
  },
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
