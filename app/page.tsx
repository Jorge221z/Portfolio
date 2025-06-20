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

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const sectionsRef = useRef({})

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

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      // Ajustar offset especial para la sección de proyectos
      const offset = sectionId === "projects" ? 40 : 80
      window.scrollTo({
        top: section.offsetTop - offset,
        behavior: "smooth",
      })
    }
    setMenuOpen(false)
  }

  const skills = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
    backend: ["Node.js", "Python", "Express", "FastAPI", "PostgreSQL"],
    mobile: ["React Native", "Flutter", "Swift", "Kotlin"],
    tools: ["Docker", "AWS", "Git", "Figma", "MongoDB"],
  }

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#",
    },
    {
      title: "Mobile Fitness App",
      description: "Cross-platform fitness tracking app with real-time data sync",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["React Native", "Firebase", "Redux"],
      github: "#",
      live: "#",
    },
    {
      title: "Task Management Dashboard",
      description: "Modern dashboard for project management with team collaboration features",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      github: "#",
      live: "#",
    },
  ]

  const experience = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Lead development of scalable web applications and mobile solutions for enterprise clients.",
    },
    {
      title: "Mobile Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description: "Developed cross-platform mobile applications using React Native and Flutter.",
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      period: "2018 - 2020",
      description: "Created responsive web interfaces and improved user experience for various clients.",
    },
  ]

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-medium text-white">
                JM<span className="text-emerald-400">.</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {["home", "projects", "about", "skills", "experience", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === section ? "text-emerald-400" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-zinc-400 hover:text-white focus:outline-none"
              >
                {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden bg-zinc-900 border-b border-zinc-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["home", "projects", "about", "skills", "experience", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                    activeSection === section
                      ? "bg-zinc-800 text-emerald-400"
                      : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-16" ref={(el) => (sectionsRef.current.home = el)}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="inline-block mb-4">
                <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase border border-emerald-400/30 rounded-full px-3 py-1">
                  Full Stack Developer
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Jorge <span className="text-emerald-400">Muñoz</span> Castillo
              </h1>

              <p className="text-xl text-zinc-400 mb-8 max-w-lg">
                Crafting exceptional digital experiences with modern technologies and innovative solutions.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-md px-6 py-2.5"
                >
                  Get in touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <Button
                  onClick={() => scrollToSection("projects")}
                  variant="outline"
                  className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white rounded-md px-6 py-2.5"
                >
                  View projects
                </Button>
              </div>

              <div className="flex gap-4">
                <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
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
              <div className="relative z-10 aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-emerald-400/10 rounded-2xl transform rotate-6"></div>
                <div className="absolute inset-0 bg-zinc-800/50 backdrop-blur-sm rounded-2xl border border-zinc-700 transform -rotate-2"></div>
                <div className="absolute inset-0 bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.2),transparent_70%)]"></div>
                  <div className="h-full w-full flex items-center justify-center p-8">
                    <div className="text-center">
                      <Code className="h-16 w-16 text-emerald-400 mx-auto mb-6" />
                      <h3 className="text-2xl font-bold mb-2">Jorge Muñoz</h3>
                      <p className="text-zinc-400 mb-6">Full Stack Developer</p>
                      <div className="flex justify-center gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">5+</div>
                          <div className="text-xs text-zinc-500">Years</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">50+</div>
                          <div className="text-xs text-zinc-500">Projects</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">20+</div>
                          <div className="text-xs text-zinc-500">Technologies</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-1/2 -right-12 h-24 w-24 border border-emerald-500/20 rounded-full"></div>
              <div className="absolute -bottom-8 left-1/3 h-16 w-16 border border-emerald-500/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-zinc-900" ref={(el) => (sectionsRef.current.projects = el)}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase">Portfolio</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">Featured Projects</h2>
            </div>
            <p className="text-zinc-400 mt-4 md:mt-0 max-w-md">
              A selection of my recent work. Each project represents a unique challenge and solution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-zinc-800 rounded-xl overflow-hidden border border-zinc-700 hover:border-emerald-500/50 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge key={tech} className="bg-zinc-700 text-zinc-300 hover:bg-zinc-600">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Link href={project.github} className="text-zinc-400 hover:text-white transition-colors">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href={project.live} className="text-zinc-400 hover:text-white transition-colors">
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
              variant="outline"
              className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white rounded-md px-6 py-2.5"
            >
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24" ref={(el) => (sectionsRef.current.about = el)}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-emerald-400/10 rounded-2xl transform rotate-3"></div>
                <div className="absolute inset-0 bg-zinc-800 rounded-2xl border border-zinc-700 overflow-hidden">
                  <div className="h-full w-full p-8 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-4 w-full">
                      <div className="aspect-square bg-zinc-700/50 rounded-lg p-4 flex flex-col items-center justify-center">
                        <Code className="h-8 w-8 text-emerald-400 mb-2" />
                        <span className="text-sm text-zinc-300">Clean Code</span>
                      </div>
                      <div className="aspect-square bg-zinc-700/50 rounded-lg p-4 flex flex-col items-center justify-center">
                        <Smartphone className="h-8 w-8 text-emerald-400 mb-2" />
                        <span className="text-sm text-zinc-300">Responsive design</span>
                      </div>
                      <div className="aspect-square bg-zinc-700/50 rounded-lg p-4 flex flex-col items-center justify-center">
                        <Server className="h-8 w-8 text-emerald-400 mb-2" />
                        <span className="text-sm text-zinc-300">Scalable</span>
                      </div>
                      <div className="aspect-square bg-zinc-700/50 rounded-lg p-4 flex flex-col items-center justify-center">
                        <Database className="h-8 w-8 text-emerald-400 mb-2" />
                        <span className="text-sm text-zinc-300">Optimized</span>
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
              <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase">About Me</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Passionate Developer & Problem Solver</h2>

              <div className="space-y-6 text-zinc-300">
                <p>
                  I'm a full stack developer with over 5 years of experience creating innovative web and mobile
                  applications. I love turning complex problems into simple, beautiful solutions that users love.
                </p>
                <p>
                  My expertise spans across modern frontend frameworks, robust backend systems, and cross-platform
                  mobile development. I'm always eager to learn new technologies and tackle challenging projects.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-3 bg-zinc-800/50 rounded-lg px-4 py-3 border border-zinc-700">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                  <span className="text-zinc-300">San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-3 bg-zinc-800/50 rounded-lg px-4 py-3 border border-zinc-700">
                  <Calendar className="w-5 h-5 text-emerald-400" />
                  <span className="text-zinc-300">Available for freelance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-zinc-900" ref={(el) => (sectionsRef.current.skills = el)}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase">Tech Stack</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Skills & Technologies</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-800 rounded-xl border border-zinc-700 p-6 hover:border-emerald-500/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-emerald-400/10">
                  <Code className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-xl font-medium">Frontend</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <Badge key={skill} className="bg-zinc-700 text-zinc-300 hover:bg-zinc-600">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl border border-zinc-700 p-6 hover:border-emerald-500/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-emerald-400/10">
                  <Server className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-xl font-medium">Backend</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <Badge key={skill} className="bg-zinc-700 text-zinc-300 hover:bg-zinc-600">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl border border-zinc-700 p-6 hover:border-emerald-500/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-emerald-400/10">
                  <Smartphone className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-xl font-medium">Mobile</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.mobile.map((skill) => (
                  <Badge key={skill} className="bg-zinc-700 text-zinc-300 hover:bg-zinc-600">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl border border-zinc-700 p-6 hover:border-emerald-500/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-emerald-400/10">
                  <Database className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-xl font-medium">Tools</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <Badge key={skill} className="bg-zinc-700 text-zinc-300 hover:bg-zinc-600">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24" ref={(el) => (sectionsRef.current.experience = el)}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase">Work History</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Professional Experience</h2>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="bg-zinc-800 rounded-xl border border-zinc-700 p-6 hover:border-emerald-500/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-emerald-400">{exp.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="inline-block bg-zinc-700 text-zinc-300 text-sm px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                </div>
                <p className="text-zinc-400">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-zinc-900" ref={(el) => (sectionsRef.current.contact = el)}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase">Contact</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Get In Touch</h2>

              <p className="text-zinc-400 mb-8">
                I'm always interested in hearing about new opportunities and exciting projects. Whether you have a
                question or just want to say hi, feel free to reach out!
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-400/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400">Email</p>
                    <p className="text-zinc-200">jorge@example.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-400/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400">Location</p>
                    <p className="text-zinc-200">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <Link
                  href="#"
                  className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl border border-zinc-700 p-6">
              <h3 className="text-xl font-bold mb-6">Send a Message</h3>

              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      className="bg-zinc-700 border-zinc-600 text-white placeholder:text-zinc-400 focus:border-emerald-500 focus:ring-emerald-500/20"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="bg-zinc-700 border-zinc-600 text-white placeholder:text-zinc-400 focus:border-emerald-500 focus:ring-emerald-500/20"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    placeholder="Subject"
                    className="bg-zinc-700 border-zinc-600 text-white placeholder:text-zinc-400 focus:border-emerald-500 focus:ring-emerald-500/20"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    className="bg-zinc-700 border-zinc-600 text-white placeholder:text-zinc-400 focus:border-emerald-500 focus:ring-emerald-500/20"
                  />
                </div>
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-medium text-white">
                JM<span className="text-emerald-400">.</span>
              </span>
            </div>

            <p className="text-zinc-400 text-sm">
              © {new Date().getFullYear()} Jorge Muñoz Castillo. All rights reserved.
            </p>

            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
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
