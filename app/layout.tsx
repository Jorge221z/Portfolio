import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jorge Muñoz Castillo | Full Stack Developer',
  description: 'Portafolio con proyectos modernos de desarrollo web y mis habilidades.',
  generator: 'Next.js',
  applicationName: 'Jorge Muñoz Castillo',
  keywords: ['Jorge Muñoz Castillo', 'Full Stack Developer', 'Portafolio', 'Desarrollo Web', 'Jorge Muñoz'],
  icons: {
    icon: "/favicon.ico",
  },
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
