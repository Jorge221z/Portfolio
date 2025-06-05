"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Smartphone,
  Server,
  Database,
  Send,
  MapPin,
  Calendar,
  ArrowRight,
  Menu,
  X,
} from "lucide-react"
import { LanguageSelector } from "./language-selector"
import { ThemeToggle } from "@/components/theme-toggle"

interface PortfolioProps {
  dict: any
  lang: string
}

export default function Portfolio({ dict, lang }: PortfolioProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({})

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      Object.entries(sectionsRef.current).forEach(([section, ref]) => {
        if (ref && ref.offsetTop <= scrollPosition && ref.offsetTop + ref.offsetHeight > scrollPosition) {
          setActiveSection(section)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      // Ajustar offset especial para la sección de proyectos
      const offset = sectionId === "projects" ? 10 : 80
      window.scrollTo({
        top: section.offsetTop - offset,
        behavior: "smooth",
      })
    }
    setMenuOpen(false)
  }

  const skills = {
    frontend: ["React", "TypeScript", "Tailwind CSS", "Vue.js", "Next.js"],
    backend: ["Laravel", "Node.js", "Express", "PHP", "FastAPI", "WordPress", "Moodle"],
    mobile: ["React Native", "Expo", "CI/CD con EAS", "Firebase"],
    tools: ["Docker", "Google Cloud", "Git", "Figma", "MongoDB", 'SQL'],
  }

  const projects = [
    {
      title: dict.projects.project1.title,
      description: dict.projects.project1.description,
      image: lang === "en" ? "/s2me-ingles.png" : "/s2me-español.png",
      tech: ["React.js", "Laravel", "Google Gemini API", "MySQL"],
      github: "https://github.com/Jorge221z/Script2me",
      live: "https://script2.me",
    },
    {
      title: dict.projects.project2.title,
      description: dict.projects.project2.description,
      image: lang === "en" ? "/ew-ingles.png" : "/ew-español.png",
      tech: ["React.js", "Laravel", "Mailgun", "TypeScript"],
      github: "https://github.com/Jorge221z/EmpleaWorks",
      live: "https://emplea.works/",
    },
    {
      title: dict.projects.project3.title,
      description: dict.projects.project3.description,
      image: "/collage.jpg",
      tech: ["React Native", "Expo", "GoogleCloud", "TypeScript"],
      github: "https://github.com/Jorge221z/EmpleaWorks-Mobile",
      live: "https://emplea.works/download-app",
    },
  ]

  const experience = [
    {
      title: dict.experience.exp1.title,
      company: dict.experience.exp1.company,
      period: dict.experience.exp1.period,
      description: dict.experience.exp1.description,
    },
  ]

  const education = [
    {
      degree: dict.education.degree1.title,
      institution: dict.education.degree1.institution,
      period: dict.education.degree1.period,
      description: dict.education.degree1.description,
    },
    {
      degree: dict.education.degree2.title,
      institution: dict.education.degree2.institution,
      period: dict.education.degree2.period,
      description: dict.education.degree2.description,
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans transition-colors duration-300 overflow-x-hidden">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-50/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-slate-200 dark:border-zinc-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-medium text-slate-900 dark:text-white">
                JMC<span className="text-emerald-600 dark:text-emerald-400">.</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {["home", "projects", "experience", "about", "education", "skills", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === section
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-slate-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                  }`}
                >
                  {dict.nav[section]}
                </button>
              ))}
            </nav>

            {/* Desktop Controls */}
            <div className="hidden lg:flex items-center space-x-4">
              <LanguageSelector currentLang={lang} dict={dict} />
              <ThemeToggle />
            </div>

            {/* Tablet Controls - Theme and Language only */}
            <div className="hidden md:flex lg:hidden items-center space-x-4">
              <LanguageSelector currentLang={lang} dict={dict} />
              <ThemeToggle />
            </div>

            {/* Mobile Controls - Centered layout */}
            <div className="md:hidden flex items-center justify-center flex-1">
              <div className="flex items-center space-x-3">
                <LanguageSelector currentLang={lang} dict={dict} />
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white focus:outline-none"
              >
                {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Tablet Menu Button */}
            <div className="hidden md:flex lg:hidden items-center">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white focus:outline-none"
              >
                {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="lg:hidden bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["home", "projects", "experience", "about", "education", "skills", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                    activeSection === section
                      ? "bg-emerald-100 dark:bg-zinc-800 text-emerald-600 dark:text-emerald-400"
                      : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white"
                  }`}
                >
                  {dict.nav[section]}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-16" ref={(el) => { sectionsRef.current.home = el }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="inline-block mb-4">
                <span className="relative text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm font-semibold tracking-wider uppercase 
                                bg-gradient-to-r from-emerald-50 via-emerald-100 to-emerald-50 
                                dark:bg-gradient-to-r dark:from-emerald-950/80 dark:via-emerald-900/60 dark:to-emerald-950/80
                                border border-emerald-200/60 dark:border-emerald-400/30 
                                shadow-lg shadow-emerald-100/50 dark:shadow-emerald-900/30
                                backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 
                                transition-all duration-300 ease-in-out 
                                hover:shadow-xl hover:shadow-emerald-200/60 dark:hover:shadow-emerald-800/40
                                hover:scale-105 hover:border-emerald-300/80 dark:hover:border-emerald-400/50
                                before:absolute before:inset-0 before:rounded-full 
                                before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
                                dark:before:via-white/10 before:opacity-0 hover:before:opacity-100 
                                before:transition-opacity before:duration-300
                                text-center break-words whitespace-normal leading-tight">
                  {dict.hero.badge}
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-slate-900 dark:text-white">
                Jorge <span className="text-emerald-600 dark:text-emerald-400">Muñoz</span> Castillo
              </h1>

              <p className="text-xl text-slate-600 dark:text-zinc-400 mb-8 max-w-lg">{dict.hero.description}</p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="group relative bg-gradient-to-r from-emerald-600 via-emerald-600 to-emerald-700 
                           hover:from-emerald-700 hover:via-emerald-600 hover:to-emerald-800
                           dark:from-emerald-500 dark:via-emerald-500 dark:to-emerald-600 
                           dark:hover:from-emerald-600 dark:hover:via-emerald-500 dark:hover:to-emerald-700
                           text-white font-semibold rounded-xl px-8 py-3 
                           shadow-lg shadow-emerald-500/25 dark:shadow-emerald-400/20
                           hover:shadow-xl hover:shadow-emerald-500/40 dark:hover:shadow-emerald-400/30
                           transform transition-all duration-300 ease-in-out 
                           hover:scale-105 hover:-translate-y-0.5
                           border border-emerald-500/20 dark:border-emerald-400/20
                           overflow-hidden
                           before:absolute before:inset-0 before:bg-gradient-to-r 
                           before:from-transparent before:via-white/20 before:to-transparent 
                           before:translate-x-[-100%] hover:before:translate-x-[100%] 
                           before:transition-transform before:duration-700 before:ease-in-out"
                >
                  <span className="relative z-10 flex items-center">
                    {dict.hero.getInTouch}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>

                <Button
                  onClick={() => scrollToSection("projects")}
                  variant="outline"
                  className="group relative bg-gradient-to-r from-white via-zinc-50 to-white 
                           dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900
                           hover:from-zinc-50 hover:via-white hover:to-zinc-50
                           dark:hover:from-zinc-800 dark:hover:via-zinc-700 dark:hover:to-zinc-800
                           border-2 border-slate-300/60 dark:border-zinc-600/60 
                           hover:border-slate-400/80 dark:hover:border-zinc-500/80
                           text-slate-700 dark:text-zinc-300 
                           hover:text-zinc-900 dark:hover:text-white 
                           font-semibold rounded-xl px-8 py-3
                           shadow-lg shadow-slate-200/50 dark:shadow-zinc-900/30
                           hover:shadow-xl hover:shadow-slate-300/60 dark:hover:shadow-zinc-800/40
                           transform transition-all duration-300 ease-in-out 
                           hover:scale-105 hover:-translate-y-0.5
                           backdrop-blur-sm
                           overflow-hidden
                           before:absolute before:inset-0 before:bg-gradient-to-r 
                           before:from-transparent before:via-slate-100/50 before:to-transparent 
                           dark:before:via-zinc-700/30
                           before:translate-x-[-100%] hover:before:translate-x-[100%] 
                           before:transition-transform before:duration-700 before:ease-in-out"
                >
                  <span className="relative z-10">
                    {dict.hero.viewProjects}
                  </span>
                </Button>
              </div>

              <div className="flex gap-4">
                <Link
                  href="https://github.com/Jorge221z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/jorge-muñoz-castillo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="mailto:jorgemunozcast12@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative max-w-lg mx-auto overflow-hidden">
                {/* Main container with floating cards */}
                <div className="relative h-96 w-full">
                  
                  {/* Central profile card */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-2xl shadow-emerald-500/10 dark:shadow-emerald-400/10 border border-zinc-200/60 dark:border-zinc-700/60 backdrop-blur-sm w-48 h-48 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20 dark:hover:shadow-emerald-400/20">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 dark:from-emerald-400 dark:to-emerald-500 rounded-full flex items-center justify-center mb-3 shadow-lg">
                        <Code className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-2">Jorge Muñoz</h3>
                      <div className="text-center">
                        <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mb-1">Junior Developer</p>
                      </div>
                    </div>
                  </div>

                  {/* Floating stat cards */}
                  <div className="absolute top-8 left-4 z-10 animate-float">
                    <div className="bg-white/90 dark:bg-zinc-800/90 backdrop-blur-md rounded-xl p-4 shadow-lg border border-zinc-200/50 dark:border-zinc-700/50 w-24 h-20 flex flex-col items-center justify-center transition-all duration-300 hover:scale-110">
                      <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400">1+</div>
                      <div className="text-xs text-slate-600 dark:text-zinc-400">{dict.hero.years}</div>
                    </div>
                  </div>

                  <div className="absolute top-16 right-2 z-10 animate-float" style={{ animationDelay: "0.5s" }}>
                    <div className="bg-white/90 dark:bg-zinc-800/90 backdrop-blur-md rounded-xl p-4 shadow-lg border border-zinc-200/50 dark:border-zinc-700/50 w-24 h-20 flex flex-col items-center justify-center transition-all duration-300 hover:scale-110">
                      <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400">6+</div>
                      <div className="text-xs text-slate-600 dark:text-zinc-400">{dict.hero.projects}</div>
                    </div>
                  </div>

                  <div className="absolute bottom-12 left-8 z-10 animate-float" style={{ animationDelay: "1s" }}>
                    <div className="bg-white/90 dark:bg-zinc-800/90 backdrop-blur-md rounded-xl p-4 shadow-lg border border-zinc-200/50 dark:border-zinc-700/50 w-24 h-20 flex flex-col items-center justify-center transition-all duration-300 hover:scale-110">
                      <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400">10+</div>
                      <div className="text-xs text-slate-600 dark:text-zinc-400">{dict.hero.technologies}</div>
                    </div>
                  </div>

                  {/* Tech stack icons floating */}
                  <div className="absolute top-20 right-16 z-5 animate-float" style={{ animationDelay: "1.5s" }}>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 dark:from-blue-400/20 dark:to-blue-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-blue-200/30 dark:border-blue-400/30">
                      <Smartphone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>

                  <div className="absolute bottom-20 right-4 z-5 animate-float" style={{ animationDelay: "2s" }}>
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-600/20 dark:from-purple-400/20 dark:to-purple-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-purple-200/30 dark:border-purple-400/30">
                      <Server className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                  </div>

                  <div className="absolute top-32 left-0 z-5 animate-float" style={{ animationDelay: "2.5s" }}>
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-orange-600/20 dark:from-orange-400/20 dark:to-orange-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-orange-200/30 dark:border-orange-400/30">
                      <Database className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                    </div>
                  </div>

                  {/* Animated background elements */}
                  <div className="absolute inset-0 -z-10">
                    <div className="absolute top-16 left-12 w-32 h-32 bg-emerald-500/5 dark:bg-emerald-400/5 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-16 right-8 w-24 h-24 bg-emerald-500/10 dark:bg-emerald-400/10 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
                    <div className="absolute top-32 right-20 w-16 h-16 bg-emerald-500/5 dark:bg-emerald-400/5 rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>
                  </div>

                  {/* Decorative grid pattern */}
                  <div className="absolute inset-0 -z-20 opacity-30">
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,150,105,0.03)_1px,transparent_1px),linear-gradient(rgba(5,150,105,0.03)_1px,transparent_1px)] bg-[size:20px_20px] dark:bg-[linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px)]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-8 bg-slate-100 dark:bg-zinc-900 transition-colors duration-300"
        ref={(el) => { sectionsRef.current.projects = el }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="text-emerald-600 dark:text-emerald-400 text-sm font-medium tracking-wider uppercase">
                {dict.projects.badge}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900 dark:text-white">
                {dict.projects.title}
              </h2>
            </div>
            <p className="text-slate-600 dark:text-zinc-400 mt-4 md:mt-0 max-w-md whitespace-pre-line">{dict.projects.description}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-zinc-800 rounded-xl overflow-hidden border border-slate-200 dark:border-zinc-700 hover:border-emerald-500/50 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className={`w-full h-full ${index === 1 ? 'object-cover' : 'object-cover'} transition-transform duration-500 group-hover:scale-105`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-zinc-400 text-sm mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-slate-100 dark:bg-zinc-700 text-slate-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-600"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                      <span className="sr-only">Live Demo</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              asChild
              className="relative overflow-hidden bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:via-emerald-500 hover:to-teal-500 text-white shadow-2xl hover:shadow-emerald-500/25 transform hover:scale-110 transition-all duration-500 rounded-xl px-10 py-4 text-lg font-bold group border-2 border-emerald-400/30 hover:border-emerald-300/50"
            >
              <Link
                href={`/${lang}/projects`}
                className="flex items-center relative z-10"
              >
                <span className="mr-3 tracking-wide">{dict.projects.viewAll}</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-500" />
                
                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out -z-10"></div>
                
                {/* Glowing overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-teal-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
                
                {/* Pulse effect */}
                <div className="absolute inset-0 rounded-xl bg-emerald-400/20 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-20"></div>
                
                {/* Additional glow effect around button */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-30"></div>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-300"
        ref={(el) => { sectionsRef.current.experience = el }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 dark:text-emerald-400 text-sm font-medium tracking-wider uppercase">
              {dict.experience.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900 dark:text-white">
              {dict.experience.title}
            </h2>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="relative bg-white dark:bg-zinc-800 rounded-xl border border-slate-200 dark:border-zinc-700 p-6 hover:border-emerald-500/50 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                {/* Logo en la esquina superior derecha */}
                <div className="absolute top-4 right-4">
                  <Image
                    src="/skillsdivers.svg"
                    alt="Skills Divers Logo"
                    width={56}
                    height={56}
                    className="w-14 h-14 opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                
                <div className="flex flex-col md:flex-row md:items-start mb-4 pr-20">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.title}</h3>
                    <p className="text-emerald-600 dark:text-emerald-400">{exp.company}</p>
                  </div>
                  <div className="mt-3 md:mt-0 md:ml-4">
                    <span className="inline-block bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-zinc-400">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-8 bg-slate-100 dark:bg-zinc-900 transition-colors duration-300"
        ref={(el) => { sectionsRef.current.about = el }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-emerald-600/10 dark:bg-emerald-400/10 rounded-2xl transform rotate-3"></div>
                <div className="absolute inset-0 bg-white dark:bg-zinc-800 rounded-2xl border border-slate-200 dark:border-zinc-700 overflow-hidden shadow-lg">
                  <div className="h-full w-full p-8 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-4 w-full">
                      <div className="aspect-square bg-zinc-100/50 dark:bg-zinc-700/50 rounded-lg p-4 flex flex-col items-center justify-center">
                        <Image
                          src="/docker-logo.svg"
                          alt="Docker"
                          width={48}
                          height={48}
                          className="mb-2"
                        />
                        <span className="text-sm text-slate-700 dark:text-zinc-300">{dict.about.dockerization}</span>
                      </div>
                      <div className="aspect-square bg-zinc-100/50 dark:bg-zinc-700/50 rounded-lg p-4 flex flex-col items-center justify-center">
                        <Image
                          src="/rest-api-icon.svg"
                          alt="REST API"
                          width={48}
                          height={48}
                          className="mb-2"
                        />
                        <span className="text-sm text-slate-700 dark:text-zinc-300">{dict.about.restApiDevelopment}</span>
                      </div>
                      <div className="aspect-square bg-zinc-100/50 dark:bg-zinc-700/50 rounded-lg p-4 flex flex-col items-center justify-center">
                        <Image
                          src="/shell.svg"
                          alt="Shell Scripting"
                          width={48}
                          height={48}
                          className="mb-2"
                        />
                        <span className="text-sm text-slate-700 dark:text-zinc-300 text-center">{dict.about.deploymentScripting}</span>
                      </div>
                      <div className="aspect-square bg-zinc-100/50 dark:bg-zinc-700/50 rounded-lg p-4 flex flex-col items-center justify-center">
                        <Image
                          src="/gemini-logo.svg"
                          alt="Gemini AI"
                          width={48}
                          height={48}
                          className="mb-2"
                        />
                        <span className="text-sm text-slate-700 dark:text-zinc-300">{dict.about.aiImplementation}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 h-12 w-12 border border-emerald-500/20 rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 h-12 w-12 border border-emerald-500/20 rounded-full"></div>
            </div>

            <div>
              <span className="text-emerald-600 dark:text-emerald-400 text-sm font-medium tracking-wider uppercase">
                {dict.about.badge}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-slate-900 dark:text-white">
                {dict.about.title}
              </h2>

              <div className="space-y-6 text-slate-700 dark:text-zinc-300">
                <p>{dict.about.description1}</p>
                <p>{dict.about.description2}</p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-3 bg-zinc-100/50 dark:bg-zinc-800/50 rounded-lg px-4 py-3 border border-zinc-200 dark:border-zinc-700">
                  <MapPin className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-slate-700 dark:text-zinc-300">{dict.about.location}</span>
                </div>
                <div className="flex items-center gap-3 bg-zinc-100/50 dark:bg-zinc-800/50 rounded-lg px-4 py-3 border border-zinc-200 dark:border-zinc-700">
                  <Calendar className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-slate-700 dark:text-zinc-300">{dict.about.availability}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-300"
        ref={(el) => { sectionsRef.current.education = el }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 dark:text-emerald-400 text-sm font-medium tracking-wider uppercase">
              {dict.education.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900 dark:text-white">{dict.education.title}</h2>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-slate-50 dark:bg-zinc-900 rounded-xl border border-slate-200 dark:border-zinc-700 p-6 hover:border-emerald-500/50 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{edu.degree}</h3>
                    <p className="text-emerald-600 dark:text-emerald-400 font-medium">{edu.institution}</p>
                  </div>
                  <div className="mt-2 md:mt-0 md:ml-4">
                    <span className="inline-block bg-slate-100 dark:bg-zinc-700 text-slate-700 dark:text-zinc-300 text-sm px-3 py-1 rounded-full">
                      {edu.period}
                    </span>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-zinc-400">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-24 bg-slate-100 dark:bg-zinc-900 transition-colors duration-300"
        ref={(el) => { sectionsRef.current.skills = el }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 dark:text-emerald-400 text-sm font-medium tracking-wider uppercase">
              {dict.skills.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900 dark:text-white">{dict.skills.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-zinc-800 rounded-xl border border-slate-200 dark:border-zinc-700 p-6 hover:border-emerald-500/50 transition-all duration-300 shadow-sm hover:shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-emerald-600/10 dark:bg-emerald-400/10">
                  <Code className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-medium text-slate-900 dark:text-white">{dict.skills.frontend}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <Badge
                    key={skill}
                    className="bg-slate-100 dark:bg-zinc-700 text-slate-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-600"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-xl border border-slate-200 dark:border-zinc-700 p-6 hover:border-emerald-500/50 transition-all duration-300 shadow-sm hover:shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-emerald-600/10 dark:bg-emerald-400/10">
                  <Server className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-medium text-slate-900 dark:text-white">{dict.skills.backend}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <Badge
                    key={skill}
                    className="bg-slate-100 dark:bg-zinc-700 text-slate-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-600"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-xl border border-slate-200 dark:border-zinc-700 p-6 hover:border-emerald-500/50 transition-all duration-300 shadow-sm hover:shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-emerald-600/10 dark:bg-emerald-400/10">
                  <Smartphone className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-medium text-slate-900 dark:text-white">{dict.skills.mobile}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.mobile.map((skill) => (
                  <Badge
                    key={skill}
                    className="bg-slate-100 dark:bg-zinc-700 text-slate-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-600"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-xl border border-slate-200 dark:border-zinc-700 p-6 hover:border-emerald-500/50 transition-all duration-300 shadow-sm hover:shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-emerald-600/10 dark:bg-emerald-400/10">
                  <Database className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-medium text-slate-900 dark:text-white">{dict.skills.tools}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <Badge
                    key={skill}
                    className="bg-slate-100 dark:bg-zinc-700 text-slate-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-600"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-8 bg-white dark:bg-zinc-950 transition-colors duration-300"
        ref={(el) => { sectionsRef.current.contact = el }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-emerald-600 dark:text-emerald-400 text-sm font-medium tracking-wider uppercase">
              {dict.contact.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-slate-900 dark:text-white">
              {dict.contact.title}
            </h2>

            <p className="text-lg text-slate-600 dark:text-zinc-400 mb-12 whitespace-pre-line">
              {dict.contact.description}
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-800 rounded-xl border border-slate-200 dark:border-zinc-700 p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-600/10 dark:bg-emerald-400/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-600 dark:text-zinc-400">{dict.contact.email}</p>
                  <p className="text-sm sm:text-base text-slate-900 dark:text-zinc-200 font-medium break-all">jorgemunozcast12@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-600/10 dark:bg-emerald-400/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-600 dark:text-zinc-400">{dict.contact.location}</p>
                  <p className="text-slate-900 dark:text-zinc-200 font-medium">{dict.about.location}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-8 pt-8 border-t border-slate-200 dark:border-zinc-700">
              <Link
                href="https://github.com/Jorge221z"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white dark:bg-zinc-700 rounded-lg flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-600 transition-colors border border-zinc-200 dark:border-zinc-600 hover:border-emerald-500/50"
              >
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/jorge-muñoz-castillo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white dark:bg-zinc-700 rounded-lg flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-600 transition-colors border border-zinc-200 dark:border-zinc-600 hover:border-emerald-500/50"
              >
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:jorgemunozcast12@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white dark:bg-zinc-700 rounded-lg flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-600 transition-colors border border-zinc-200 dark:border-zinc-600 hover:border-emerald-500/50"
              >
                <Mail className="w-6 h-6" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-medium text-slate-900 dark:text-white">
                JMC<span className="text-emerald-600 dark:text-emerald-400">.</span>
              </span>
            </div>

            <p className="text-slate-600 dark:text-zinc-400 text-sm">
              © {new Date().getFullYear()} Jorge Muñoz Castillo. {dict.footer.rights}
            </p>

            <div className="flex gap-4 mt-4 md:mt-0">
              <Link
                href="https://github.com/Jorge221z"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/jorge-muñoz-castillo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:jorgemunozcast12@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
