import Script from 'next/script'

interface StructuredDataProps {
  lang: string
}

export function StructuredData({ lang }: StructuredDataProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://jorgemunoz.pro'
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jorge Muñoz Castillo",
    "jobTitle": "Full Stack Developer",
    "description": lang === 'es' 
      ? "Desarrollador Full Stack especializado en React, Laravel, IA y tecnologías modernas."
      : "Full Stack Developer specialized in React, Laravel, AI and modern technologies.",
    "url": `${baseUrl}/${lang}`,
    "sameAs": [
      // Aquí puedes agregar tus perfiles de redes sociales cuando los tengas
      // "https://linkedin.com/in/tu-perfil",
      // "https://github.com/tu-usuario",
    ],
    "knowsAbout": [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "Full Stack Development",
      "Web Development"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full Stack Developer",
      "occupationLocation": {
        "@type": "Country",
        "name": "Chile"
      }
    }
  }

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Jorge Muñoz Castillo Portfolio",
    "description": lang === 'es'
      ? "Portafolio profesional de Jorge Muñoz Castillo, desarrollador Full Stack"
      : "Professional portfolio of Jorge Muñoz Castillo, Full Stack developer",
    "url": `${baseUrl}/${lang}`,
    "author": {
      "@type": "Person",
      "name": "Jorge Muñoz Castillo"
    },
    "inLanguage": lang === 'es' ? "es-ES" : "en-US"
  }

  return (
    <>
      <Script
        id="structured-data-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Script
        id="structured-data-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData),
        }}
      />
    </>
  )
}
