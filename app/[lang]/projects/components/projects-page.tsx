"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink, ArrowLeft, Calendar, Users, Clock, Star, Download } from "lucide-react"
import { LanguageSelector } from "../../components/language-selector"
import { ThemeToggle } from "@/components/theme-toggle"

interface ProjectsPageProps {
  dict: any
  lang: string
}

export default function ProjectsPage({ dict, lang }: ProjectsPageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(true)

  // Smooth transition when component mounts
  useEffect(() => {
    // Smooth scroll to top
    window.scrollTo({ 
      top: 0, 
      behavior: "smooth"
    })
    
    // Simple staggered loading
    const timer1 = setTimeout(() => {
      setIsTransitioning(false)
    }, 100)
    
    const timer2 = setTimeout(() => {
      setIsLoaded(true)
    }, 300)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  const projects = [
    {
      id: 1,
      title: dict.projects.project1.title,
      description: dict.projects.project1.description,
      longDescription:
        dict.projectsPage?.project1?.longDescription ||
        dict.projectsPage?.projectLongDescriptions?.project1 ||
        "This comprehensive e-commerce platform was built from the ground up using modern web technologies. It features a complete shopping cart system, secure payment processing through Stripe, user authentication, order management, and an admin dashboard for inventory control. The platform is fully responsive and optimized for performance.",
      image: lang === "en" ? "/s2me-ingles.png" : "/s2me-español.png",
      images: [
        lang === "en" ? "/s2me-ingles.png" : "/ew-español.png",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      tech: ["React.js", "Laravel", "Google Gemini API", "MySQL"],
      category: "fullstack",
      github: "https://github.com/Jorge221z/Script2me",
      live: "https://script2.me",
      date: "2025",
      duration: `3 ${dict.projectsPage?.months || "months"}`,
      team: dict.projectsPage?.teamInfo?.individualProject || dict.projectsPage?.individualProject || "Individual Project",
      status: "completed",
      features: dict.projectsPage?.features?.project1 || [
        "Uso de la API de Google Gemini",
        "Funcion para generar prompts optimizados",
        "Refactorización de código en tiempo real",
        "Escaner de vulnerabilidades en el código",
      ],
    },
    {
      id: 2,
      title: dict.projects.project2.title,
      description: dict.projects.project2.description,
      longDescription:
        dict.projectsPage?.project2?.longDescription ||
        dict.projectsPage?.projectLongDescriptions?.project2 ||
        "A cross-platform mobile application designed for fitness enthusiasts. The app tracks workouts, monitors progress, and provides personalized training plans. It features real-time data synchronization across devices, social features for sharing achievements, and integration with wearable devices.",
      image: lang === "en" ? "/ew-ingles.png" : "/ew-español.png",
      images: [
        lang === "en" ? "/ew-ingles.png" : "/ew-español.png",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      tech: ["React", "Laravel", "Mailgun", "TypeScript", "Inertia"],
      category: "web",
      github: "https://github.com/Jorge221z/EmpleaWorks",
      live: "https://emplea.works/",
      date: "2025",
      duration: `4 ${dict.projectsPage?.months || "months"}`,
      team: `2 ${dict.projectsPage?.teamInfo?.developers || dict.projectsPage?.developers || "developers"}`,
      status: "completed",
      features: dict.projectsPage?.features?.project2 || [
        "Permite a candidatos crear su perfil y aplicar a ofertas",
        "Las empresas pueden publicar sus ofertas de trabajo",
        "Verificacion de email y autenticación con Google",
        "Componentes modulares y reutilizables",
      ],
    },
    {
      id: 3,
      title: dict.projects.project3.title,
      description: dict.projectsPage?.projectDescriptions?.project3 || dict.projects.project3.description || "Advanced analytics platform with machine learning insights and predictive modeling capabilities.",
      longDescription:
        dict.projectsPage?.projectLongDescriptions?.project3 ||
        "An enterprise-grade analytics dashboard that leverages artificial intelligence to provide deep insights into business data. The platform includes machine learning models for predictive analytics, automated report generation, and real-time data visualization. Built with modern technologies and designed for scalability.",
      image: "/collage.jpg",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      tech: ["React Native", "Expo", "GoogleCloud", "TypeScript"],
      category: "mobile",
      github: "https://github.com/Jorge221z/EmpleaWorks-Mobile",
      live: "https://emplea.works/download-app",
      date: "2025",
      duration: `2 ${dict.projectsPage?.months || "month"}`,
      team: dict.projectsPage?.teamInfo?.individualProject || dict.projectsPage?.individualProject || "Individual Project",
      status: "completed",
      buttonType: "download", // Indicador para mostrar "Descargar APK"
      features: dict.projectsPage?.features?.project3 || [
        "Aplicación móvil nativa",
        "Notificaciones push",
        "Búsqueda de empleos offline",
        "Interfaz intuitiva y moderna",
        "Sincronización con la web",
        "Gestión de perfil",
        "Aplicación a ofertas",
        "Historial de aplicaciones",
      ],
    },
    {
      id: 4,
      title: dict.projectsPage?.projectTitles?.project4 || dict.projects.project4?.title || "AI Chatbot REST API",
      description: dict.projectsPage?.projectDescriptions?.project4 || dict.projects.project4?.description || "A modern project management dashboard built with Next.js and TypeScript.",
      longDescription:
        dict.projectsPage?.projectLongDescriptions?.project4 ||
        "A modern project management dashboard built with Next.js and TypeScript. Features include task management, team collaboration tools, real-time updates, file sharing, and comprehensive reporting. The application uses Prisma for database management and includes role-based access control.",
      image: "/api.png",
      images: [
        "/api.png",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      tech: ["React.js", "Laravel", "Mailgun", "TypeScript"],
      category: "web",
      github: "#",
      live: "#",
      date: "2025",
      duration: "...",
      team: dict.projectsPage?.teamInfo?.individualProject || dict.projectsPage?.individualProject || "Individual Project",
      status: "in-progress",
      features: dict.projectsPage?.features?.project4 || [
        "Respuestas en lenguaje natural",
        "Integración con aplicaciones web",
        "Gestión de contexto conversacional",
        "Escalabilidad para múltiples usuarios",
      ],
    },
    {
      id: 5,
      title: dict.projectsPage?.projectTitles?.project5 || "Dev-Horizon",
      description: dict.projectsPage?.projectDescriptions?.project5 || "Secure and transparent voting platform built on blockchain technology for democratic processes.",
      longDescription:
        dict.projectsPage?.projectLongDescriptions?.project5 ||
        "A revolutionary voting system that ensures transparency, security, and immutability through blockchain technology. The platform provides end-to-end encryption, voter anonymity, and real-time result tracking while maintaining the integrity of the democratic process.",
      image: "/dev-horizon.jpg",
      images: [
        "/dev-horizon.jpg",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      tech: ["React Native", "Expo", "Axios", "Laravel Sanctum"],
      category: "blockchain",
      github: "https://github.com/Jorge221z/Dev-Horizon",
      live: "https://github.com/Jorge221z/Dev-Horizon",
      date: "2025",
      duration: `2 ${dict.projectsPage?.months || "months"}`,
      team: dict.projectsPage?.teamInfo?.individualProject || dict.projectsPage?.individualProject || "Individual Project",
      status: "completed",
      buttonType: "repository", // Indicador para mostrar "Visitar Repositorio"
      features: dict.projectsPage?.features?.project5 || [
        "Blockchain security",
        "Voter anonymity",
        "Real-time results",
        "Smart contracts",
        "Decentralized storage",
        "Multi-signature validation",
        "Audit trail",
        "Mobile compatibility",
      ],
    },
    {
      id: 6,
      title: dict.projectsPage?.projectTitles?.project6 || "Vinoteca",
      description: dict.projectsPage?.projectDescriptions?.project6 || "Centralized control system for smart home devices with voice control and automation features.",
      longDescription:
        dict.projectsPage?.projectLongDescriptions?.project6 ||
        "A comprehensive smart home management system that connects and controls various IoT devices. Features include voice control, automated routines, energy monitoring, security integration, and a user-friendly mobile app for remote management.",
      image: "/vinoteca.png",
      images: [
        "/vinoteca.png",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      tech: ["Laravel", "Respository patron", "Tailwind CSS"],
      category: "iot",
      github: "https://github.com/Jorge221z/Vinoteca",
      live: "https://github.com/Jorge221z/Vinoteca",
      date: "2024",
      duration: `2 ${dict.projectsPage?.months || "months"}`,
      team: dict.projectsPage?.teamInfo?.individualProject || dict.projectsPage?.individualProject || "Individual Project",
      status: "completed",
      buttonType: "repository", // Indicador para mostrar "Visitar Repositorio"
      features: dict.projectsPage?.features?.project6 || [
        "Device integration",
        "Voice control",
        "Automated routines",
        "Energy monitoring",
        "Security system",
        "Remote access",
        "Custom scheduling",
        "Real-time alerts",
      ],
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "in-progress":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans transition-all duration-500 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {/* Navigation */}
      <header className={`sticky top-0 z-50 bg-slate-50/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-slate-200 dark:border-zinc-800 transition-all duration-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Link
                href={`/${lang}`}
                className="flex items-center gap-2 bg-white dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-all duration-300 hover:scale-105 px-3 py-2 rounded-md"
              >
                <ArrowLeft className="h-5 w-5 transition-transform duration-300 hover:-translate-x-1" />
                <span className="text-sm font-medium">{dict.projectsPage?.backToHome || "Back to Home"}</span>
              </Link>
              <div className="hidden sm:block h-6 w-px bg-slate-300 dark:bg-zinc-700"></div>
              <span className="hidden sm:block text-xl font-medium text-slate-900 dark:text-white">
                JMC<span className="text-emerald-600 dark:text-emerald-400">.</span>
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <LanguageSelector currentLang={lang} dict={dict} />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`py-16 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-zinc-950 dark:to-zinc-900 transition-all duration-500 delay-100 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white transition-all duration-600 delay-150 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
              {dict.projectsPage?.title || "All Projects"}
            </h1>
            <p className={`text-xl text-slate-600 dark:text-zinc-400 max-w-3xl mx-auto transition-all duration-600 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
              {dict.projectsPage?.subtitle ||
                "Explore my complete portfolio of projects, from web applications to mobile apps and innovative solutions."}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden border border-slate-200 dark:border-zinc-700 hover:border-emerald-500/50 transition-all duration-300 shadow-sm hover:shadow-lg bg-white dark:bg-zinc-800"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className={`w-full h-full ${project.id === 4 ? 'object-cover object-center' : 'object-cover'} transition-transform duration-500 group-hover:scale-105`}
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={`${getStatusColor(project.status)} border-0`}>
                      {project.status === "completed"
                        ? dict.projectsPage?.completed || "Completed"
                        : dict.projectsPage?.inProgress || "In Progress"}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="flex gap-2 ml-2">
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                      >
                        <Github className="h-4 w-4" />
                      </Link>
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                  <CardDescription className="text-slate-600 dark:text-zinc-400">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Project Meta */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-slate-500 dark:text-zinc-500 pr-2">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 flex-shrink-0" />
                      <span className="whitespace-nowrap">{project.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 flex-shrink-0" />
                      <span className="whitespace-nowrap">{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="h-3.5 w-3.5 flex-shrink-0" />
                      <span className="whitespace-nowrap">{project.team}</span>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 4).map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-slate-100 dark:bg-zinc-700 text-slate-700 dark:text-zinc-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 4 && (
                      <Badge
                        variant="secondary"
                        className="text-xs bg-slate-100 dark:bg-zinc-700 text-slate-700 dark:text-zinc-300"
                      >
                        +{project.tech.length - 4}
                      </Badge>
                    )}
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-sm font-medium mb-2 text-slate-900 dark:text-white">
                      {dict.projectsPage?.keyFeatures || "Key Features"}
                    </h4>
                    <ul className="text-xs text-slate-600 dark:text-zinc-400 space-y-1">
                      {project.features.slice(0, 4).map((feature: string, index: number) => (
                        <li key={index} className="flex items-center gap-2">
                          <Star className="h-3 w-3 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Spacer for better visual separation */}
                  <div className="pt-4 border-t border-slate-100 dark:border-zinc-700 mt-4">
                    {/* Action Button */}
                    <Button
                      asChild
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                      disabled={project.live === "#"}
                    >
                      {project.live !== "#" ? (
                        <Link
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.buttonType === "download" ? (
                            <>
                              <Download className="mr-2 h-4 w-4" />
                              {dict.projectsPage?.downloadApp || "Download APK"}
                            </>
                          ) : project.buttonType === "repository" ? (
                            <>
                              <Github className="mr-2 h-4 w-4" />
                              {dict.projectsPage?.visitRepository || "Visit Repository"}
                            </>
                          ) : (
                            <>
                              <ExternalLink className="mr-2 h-4 w-4" />
                              {dict.projectsPage?.visitWebsite || "Visit Website"}
                            </>
                          )}
                        </Link>
                      ) : (
                        <span className="cursor-not-allowed opacity-50">
                          {dict.projectsPage?.visitWebsite || "Visit Website"}
                        </span>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>


        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950/20 dark:to-emerald-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
            {dict.projectsPage?.ctaTitle || "Interested in working together?"}
          </h2>
          <p className="text-xl text-slate-600 dark:text-zinc-400 mb-8">
            {dict.projectsPage?.ctaDescription || "Let's discuss your next project and bring your ideas to life."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white">
              <Link href={`/${lang}#contact`}>{dict.projectsPage?.getInTouch || "Get In Touch"}</Link>
            </Button>
            <Button
              variant="outline"
              asChild
              className="bg-white dark:bg-zinc-800 border-slate-300 dark:border-zinc-700 text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800"
            >
              <Link href={`/${lang}`}>{dict.projectsPage?.backToHome || "Back to Home"}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
