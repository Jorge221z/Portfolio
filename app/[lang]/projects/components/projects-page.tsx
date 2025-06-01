"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink, ArrowLeft, Calendar, Users, Clock, Star, Filter, Search } from "lucide-react"
import { LanguageSelector } from "../../components/language-selector"
import { ThemeToggle } from "@/components/theme-toggle"
import { Input } from "@/components/ui/input"

interface ProjectsPageProps {
  dict: any
  lang: string
}

export default function ProjectsPage({ dict, lang }: ProjectsPageProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Reset scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const projects = [
    {
      id: 1,
      title: dict.projects.project1.title,
      description: dict.projects.project1.description,
      longDescription:
        dict.projectsPage?.project1?.longDescription ||
        "This comprehensive e-commerce platform was built from the ground up using modern web technologies. It features a complete shopping cart system, secure payment processing through Stripe, user authentication, order management, and an admin dashboard for inventory control. The platform is fully responsive and optimized for performance.",
      image: "/placeholder.svg?height=400&width=600",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Express", "JWT"],
      category: "fullstack",
      github: "#",
      live: "#",
      date: "2023",
      duration: "3 months",
      team: "4 developers",
      status: "completed",
      features: [
        "User authentication & authorization",
        "Shopping cart & checkout system",
        "Payment processing with Stripe",
        "Admin dashboard",
        "Inventory management",
        "Order tracking",
        "Responsive design",
        "SEO optimization",
      ],
    },
    {
      id: 2,
      title: dict.projects.project2.title,
      description: dict.projects.project2.description,
      longDescription:
        dict.projectsPage?.project2?.longDescription ||
        "A cross-platform mobile application designed for fitness enthusiasts. The app tracks workouts, monitors progress, and provides personalized training plans. It features real-time data synchronization across devices, social features for sharing achievements, and integration with wearable devices.",
      image: "/placeholder.svg?height=400&width=600",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      tech: ["React Native", "Firebase", "Redux", "Expo", "TypeScript"],
      category: "mobile",
      github: "#",
      live: "#",
      date: "2023",
      duration: "4 months",
      team: "3 developers",
      status: "completed",
      features: [
        "Workout tracking",
        "Progress monitoring",
        "Social features",
        "Wearable device integration",
        "Offline mode",
        "Push notifications",
        "Custom workout plans",
        "Achievement system",
      ],
    },
    {
      id: 3,
      title: dict.projects.project3.title,
      description: dict.projects.project3.description,
      longDescription:
        dict.projectsPage?.project3?.longDescription ||
        "A modern project management dashboard built with Next.js and TypeScript. Features include task management, team collaboration tools, real-time updates, file sharing, and comprehensive reporting. The application uses Prisma for database management and includes role-based access control.",
      image: "/placeholder.svg?height=400&width=600",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "NextAuth"],
      category: "web",
      github: "#",
      live: "#",
      date: "2024",
      duration: "5 months",
      team: "5 developers",
      status: "completed",
      features: [
        "Task management",
        "Team collaboration",
        "Real-time updates",
        "File sharing",
        "Role-based access",
        "Reporting dashboard",
        "Time tracking",
        "Calendar integration",
      ],
    },
    {
      id: 4,
      title: "AI-Powered Analytics Dashboard",
      description: "Advanced analytics platform with machine learning insights and predictive modeling capabilities.",
      longDescription:
        "An enterprise-grade analytics dashboard that leverages artificial intelligence to provide deep insights into business data. The platform includes machine learning models for predictive analytics, automated report generation, and real-time data visualization. Built with modern technologies and designed for scalability.",
      image: "/placeholder.svg?height=400&width=600",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      tech: ["Python", "React", "TensorFlow", "PostgreSQL", "Docker", "AWS"],
      category: "ai",
      github: "#",
      live: "#",
      date: "2024",
      duration: "6 months",
      team: "6 developers",
      status: "in-progress",
      features: [
        "Machine learning models",
        "Predictive analytics",
        "Real-time visualization",
        "Automated reporting",
        "Data pipeline management",
        "Custom dashboards",
        "API integration",
        "Cloud deployment",
      ],
    },
    {
      id: 5,
      title: "Blockchain Voting System",
      description: "Secure and transparent voting platform built on blockchain technology for democratic processes.",
      longDescription:
        "A revolutionary voting system that ensures transparency, security, and immutability through blockchain technology. The platform provides end-to-end encryption, voter anonymity, and real-time result tracking while maintaining the integrity of the democratic process.",
      image: "/placeholder.svg?height=400&width=600",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      tech: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS", "MetaMask"],
      category: "blockchain",
      github: "#",
      live: "#",
      date: "2024",
      duration: "4 months",
      team: "3 developers",
      status: "completed",
      features: [
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
      title: "IoT Smart Home Hub",
      description: "Centralized control system for smart home devices with voice control and automation features.",
      longDescription:
        "A comprehensive smart home management system that connects and controls various IoT devices. Features include voice control, automated routines, energy monitoring, security integration, and a user-friendly mobile app for remote management.",
      image: "/placeholder.svg?height=400&width=600",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      tech: ["Arduino", "Raspberry Pi", "React Native", "MQTT", "Node.js", "MongoDB"],
      category: "iot",
      github: "#",
      live: "#",
      date: "2023",
      duration: "7 months",
      team: "4 developers",
      status: "completed",
      features: [
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

  const categories = [
    { id: "all", name: dict.projectsPage?.categories?.all || "All Projects" },
    { id: "fullstack", name: dict.projectsPage?.categories?.fullstack || "Full Stack" },
    { id: "mobile", name: dict.projectsPage?.categories?.mobile || "Mobile" },
    { id: "web", name: dict.projectsPage?.categories?.web || "Web" },
    { id: "ai", name: dict.projectsPage?.categories?.ai || "AI/ML" },
    { id: "blockchain", name: dict.projectsPage?.categories?.blockchain || "Blockchain" },
    { id: "iot", name: dict.projectsPage?.categories?.iot || "IoT" },
  ]

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tech.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "in-progress":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans transition-colors duration-300">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-slate-50/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-slate-200 dark:border-zinc-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Link
                href={`/${lang}`}
                className="flex items-center gap-2 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span className="text-sm font-medium">{dict.projectsPage?.backToHome || "Back to Home"}</span>
              </Link>
              <div className="h-6 w-px bg-slate-300 dark:bg-zinc-700"></div>
              <span className="text-xl font-medium text-slate-900 dark:text-white">
                JM<span className="text-emerald-600 dark:text-emerald-400">.</span>
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
      <section className="py-16 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-zinc-950 dark:to-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
              {dict.projectsPage?.title || "All Projects"}
            </h1>
            <p className="text-xl text-slate-600 dark:text-zinc-400 max-w-3xl mx-auto">
              {dict.projectsPage?.subtitle ||
                "Explore my complete portfolio of projects, from web applications to mobile apps and innovative solutions."}
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white dark:bg-zinc-900 border-b border-slate-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400 dark:text-zinc-500" />
              <Input
                placeholder={dict.projectsPage?.searchPlaceholder || "Search projects..."}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-slate-50 dark:bg-zinc-800 border-slate-200 dark:border-zinc-700"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={
                    selectedCategory === category.id
                      ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                      : "border-slate-300 dark:border-zinc-700 text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800"
                  }
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          <div className="mt-4 text-sm text-slate-600 dark:text-zinc-400">
            {dict.projectsPage?.showingResults || "Showing"} {filteredProjects.length} {dict.projectsPage?.of || "of"}{" "}
            {projects.length} {dict.projectsPage?.projects || "projects"}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
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
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
                    <CardTitle className="text-xl font-bold group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="flex gap-2 ml-2">
                      <Link
                        href={project.github}
                        className="text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                      >
                        <Github className="h-4 w-4" />
                      </Link>
                      <Link
                        href={project.live}
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
                  <div className="grid grid-cols-3 gap-4 text-xs text-slate-500 dark:text-zinc-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{project.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      <span>{project.team}</span>
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
                      {project.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Star className="h-3 w-3 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {project.features.length > 3 && (
                        <li className="text-emerald-600 dark:text-emerald-400 font-medium">
                          +{project.features.length - 3} {dict.projectsPage?.moreFeatures || "more features"}
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* View Details Button */}
                  <Button
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                    onClick={() => {
                      // Here you could navigate to a detailed project page
                      // For now, we'll just scroll to show more info
                      alert(`${dict.projectsPage?.viewDetails || "View Details"}: ${project.title}`)
                    }}
                  >
                    {dict.projectsPage?.viewDetails || "View Details"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-slate-400 dark:text-zinc-500 mb-4">
                <Filter className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-xl font-medium mb-2">{dict.projectsPage?.noResults || "No projects found"}</h3>
                <p>{dict.projectsPage?.noResultsDescription || "Try adjusting your search or filter criteria"}</p>
              </div>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("all")
                }}
                className="border-slate-300 dark:border-zinc-700 text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800"
              >
                {dict.projectsPage?.clearFilters || "Clear Filters"}
              </Button>
            </div>
          )}
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
              className="border-slate-300 dark:border-zinc-700 text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800"
            >
              <Link href={`/${lang}`}>{dict.projectsPage?.backToHome || "Back to Home"}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
