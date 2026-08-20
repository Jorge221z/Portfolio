import Script from 'next/script'

interface StructuredDataProps {
  lang: string
}

export function StructuredData({ lang }: StructuredDataProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://jorgemunoz.pro'
  
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${baseUrl}/#person`,
    "name": "Jorge Muñoz Castillo",
    "jobTitle": "Full Stack & Mobile Developer",
    "description": lang === 'es' 
      ? "Desarrollador Full Stack y Mobile especializado en React, Next.js, Laravel, Android Nativo (Kotlin) e Inteligencia Artificial."
      : "Full Stack & Mobile Developer specialized in React, Next.js, Laravel, Native Android (Kotlin) and Artificial Intelligence.",
    "url": `${baseUrl}/${lang}`,
    "sameAs": [
      "https://github.com/Jorge221z",
      "https://www.linkedin.com/in/jorge-muñoz-castillo",
      "https://linksightapp.com"
    ],
    "knowsAbout": [
      "Full Stack Development",
      "Mobile Application Development",
      "Android Native",
      "Kotlin",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Laravel",
      "PHP",
      "Docker",
      "Artificial Intelligence",
      "REST APIs",
      "Radio Frequency Planning"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full Stack Developer",
      "occupationLocation": {
        "@type": "Country",
        "name": "Spain"
      }
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Yecla",
      "addressRegion": "Murcia",
      "addressCountry": "ES"
    }
  }

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    "name": "Jorge Muñoz Castillo Portfolio",
    "description": lang === 'es'
      ? "Portafolio profesional de Jorge Muñoz Castillo, desarrollador Full Stack y Mobile"
      : "Professional portfolio of Jorge Muñoz Castillo, Full Stack & Mobile developer",
    "url": `${baseUrl}/${lang}`,
    "author": {
      "@id": `${baseUrl}/#person`
    },
    "inLanguage": lang === 'es' ? "es-ES" : "en-US"
  }

  const linkSightAppSchema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "LinkSight",
    "operatingSystem": "Android",
    "applicationCategory": "UtilitiesApplication",
    "description": lang === 'es'
      ? "Aplicación móvil nativa Android para planificación de enlaces de radiofrecuencia (RF) punto a punto y cálculo de zonas de Fresnel con datos topográficos globales SRTM90m."
      : "Native Android mobile app for point-to-point RF microwave link planning and instant Fresnel zone calculations using global topography.",
    "url": "https://linksightapp.com",
    "installUrl": "https://play.google.com/store/apps/details?id=com.linksight.app",
    "author": {
      "@id": `${baseUrl}/#person`
    },
    "creator": {
      "@id": `${baseUrl}/#person`
    }
  }

  return (
    <>
      <Script
        id="structured-data-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personData),
        }}
      />
      <Script
        id="structured-data-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData),
        }}
      />
      <Script
        id="structured-data-linksight"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(linkSightAppSchema),
        }}
      />
    </>
  )
}
