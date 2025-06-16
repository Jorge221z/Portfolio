import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Proyectos | Jorge Muñoz Castillo",
  description: "Explora mis proyectos de desarrollo web. Aplicaciones modernas creadas con React, Next.js, Node.js y las últimas tecnologías.",
  openGraph: {
    title: "Proyectos | Jorge Muñoz Castillo",
    description: "Explora mis proyectos de desarrollo web. Aplicaciones modernas creadas con React, Next.js, Node.js y las últimas tecnologías.",
    images: ['/collage.jpg'],
  },
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
