import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jorge Muñoz Castillo | Full Stack Developer',
  description: 'Desarrollador Full Stack especializado en React, Laravel, IA y tecnologías modernas. Explora mi portafolio con proyectos innovadores y soluciones web.',
  generator: 'Next.js',
  applicationName: 'Jorge Muñoz Castillo Portfolio',
  keywords: ['Jorge Muñoz Castillo', 'Full Stack Developer', 'React', 'Next.js', 'Node.js', 'TypeScript', 'Desarrollo Web', 'Portafolio'],
  authors: [{ name: 'Jorge Muñoz Castillo' }],
  creator: 'Jorge Muñoz Castillo',
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
