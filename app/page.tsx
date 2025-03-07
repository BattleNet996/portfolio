"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, ExternalLink, Github, Linkedin, Mail, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Smooth scroll function
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      // Close mobile menu if open
      if (isMenuOpen) setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="font-bold text-xl">
              PORTFOLIO
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, "projects")}
              className="text-sm font-medium hover:text-gray-300 transition-colors"
            >
              Projects
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, "about")}
              className="text-sm font-medium hover:text-gray-300 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="text-sm font-medium hover:text-gray-300 transition-colors"
            >
              Contact
            </a>
            <Button
              variant="outline"
              className="border-white/20 bg-black text-white hover:bg-white hover:text-black transition-colors"
            >
              Download CV
            </Button>
          </nav>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="absolute top-16 left-0 right-0 bg-black border-b border-white/10 md:hidden">
              <div className="container py-4 flex flex-col gap-4">
                <a
                  href="#projects"
                  onClick={(e) => scrollToSection(e, "projects")}
                  className="text-sm font-medium hover:text-gray-300"
                >
                  Projects
                </a>
                <a
                  href="#about"
                  onClick={(e) => scrollToSection(e, "about")}
                  className="text-sm font-medium hover:text-gray-300"
                >
                  About
                </a>
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "contact")}
                  className="text-sm font-medium hover:text-gray-300"
                >
                  Contact
                </a>
                <Button
                  variant="outline"
                  className="w-full border-white/20 bg-black text-white hover:bg-white hover:text-black transition-colors"
                >
                  Download CV
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container">
            <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Charles Chen</h1>
              <p className="text-xl text-gray-400">
                Crafting clean, functional websites and applications with a focus on user experience
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={(e) => scrollToSection(e as any, "projects")} asChild>
                  <a href="#projects">
                    View My Work <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="border-white/20 bg-black text-white hover:bg-white hover:text-black transition-colors"
                  onClick={(e) => scrollToSection(e as any, "contact")}
                  asChild
                >
                  <a href="#contact">Get In Touch</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="py-20 bg-white/5">
          <div className="container space-y-12">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
              <p className="text-gray-400">A selection of my recent Work</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src="/Charles.png"
                  alt="Developer Photo"
                  width={600}
                  height={600}
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">About Me</h2>
                <p className="text-gray-400">
                  I'm Chen Wenjie (Charles Chen), currently pursuing a Master's in Management (MiM) at Tsinghua University's School of Economics and Management. My program is affiliated with the CEMS Global Alliance in Management Education, and I will complete my CEMS exchange at the University of St. Gallen, Switzerland in Spring 2025.
                </p>
                <p className="text-gray-400">
                  My academic background combines management expertise with technical skills. My master's curriculum covers strategic management and business analytics, while my undergraduate studies in Information Science focused on big data processing, information systems, and data mining.
                </p>
                <p className="text-gray-400">
                  I have a strong interest in international organizations, with focus areas including: 1) sustainable development and energy transition, 2) global population migration, and 3) AI and entrepreneurial innovation. My experience includes project management, research analysis, and external relations management across multiple international projects.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-3 py-1 bg-white/20 border border-white/30 rounded-full text-sm text-white"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white/5">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Get In Touch</h2>
                <p className="text-gray-400">
                  Have a project in mind or want to learn more about my work? I'd love to hear from you. Reach out
                  through any of the channels below or send me a message directly.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Button size="icon" variant="outline" className="border-white/20 text-white hover:bg-white/5">
                      <Mail className="h-5 w-5" />
                    </Button>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="font-medium">charleschen01@foxmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Button size="icon" variant="outline" className="border-white/20 text-white hover:bg-white/5">
                      <Github className="h-5 w-5" />
                    </Button>
                    <div>
                      <p className="text-sm text-gray-400">Github</p>
                      <p className="font-medium">github.com/battlenet996</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Button size="icon" variant="outline" className="border-white/20 text-white hover:bg-white/5">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                    <div>
                      <p className="text-sm text-gray-400">LinkedIn</p>
                      <p className="font-medium">www.linkedin.com/in/charleschenthu</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-black border border-white/10">
                <form className="p-6 space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-white/30 focus:border-white/30 transition"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-white/30 focus:border-white/30 transition"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-white/30 focus:border-white/30 transition"
                      placeholder="Message subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md text-sm text-white placeholder:text-gray-500 resize-none focus:outline-none focus:ring-1 focus:ring-white/30 focus:border-white/30 transition"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="container flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Battlenet996. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/BattleNet996/" target="_blank" rel="noopener noreferrer">
              <Button size="icon" variant="ghost" className="text-white hover:bg-white/5">
                <Github className="h-5 w-5" />
                <span className="sr-only">Github</span>
              </Button>
            </Link>
            <Link href="www.linkedin.com/in/charleschenthu" target="_blank" rel="noopener noreferrer">
              <Button size="icon" variant="ghost" className="text-white hover:bg-white/5">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:charleschen01@foxmail.com">
              <Button size="icon" variant="ghost" className="text-white hover:bg-white/5">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Project Card Component
function ProjectCard({ project }) {
  return (
    <Card className="overflow-hidden group bg-black border border-white/10 hover:border-white/30 transition-all duration-300">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={600}
          height={340}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link href={project.link}>
            <Button
              variant="outline"
              className="border-white/20 bg-black/50 text-white hover:bg-white hover:text-black transition-colors"
            >
              View Project <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg">{project.title}</h3>
            <span className="text-xs px-2 py-1 bg-white/20 border border-white/30 rounded-full text-white">
              {project.category}
            </span>
          </div>
          <p className="text-gray-400 line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="text-xs px-2 py-1 bg-white/20 border border-white/30 rounded-full text-white">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Sample data
const projects = [
  {
    id: 1,
    title: "MakeFashionSustainable",
    description: "Promoting circular fashion principles and sustainable practices through our credit system and educational initiatives.",
    image: "/makefashionsustainable.jpg?height=340&width=600",
    category: "Web",
    technologies: ["React", "Next.js", "Tailwind CSS", "Stripe"],
    link: "http://charleschen.top:3001",
  },
  {
    id: 2,
    title: "Leadership Flow Simulator",
    description: "Welcome to the Leadership Flow Simulator! Develop your leadership skills and guide your team to achieve optimal flow state through strategic interactions and decisionmaking.",
    image: "/leadership.jpg?height=340&width=600",
    category: "App",
    technologies: ["React Native", "Firebase", "Redux"],
    link: "http://charleschen.top:3000",
  },
  {
    id: 3,
    title: "Corporate Website Design",
    description: "Modern corporate website design for a tech company showcasing products and services.",
    image: "/placeholder.svg?height=340&width=600",
    category: "Design",
    technologies: ["Figma", "Adobe XD", "Photoshop"],
    link: "#",
  },
  {
    id: 4,
    title: "Social Media Platform",
    description: "A social media website allowing users to share content and interact.",
    image: "/placeholder.svg?height=340&width=600",
    category: "Web",
    technologies: ["Vue.js", "Node.js", "MongoDB", "Socket.io"],
    link: "#",
  },
  {
    id: 5,
    title: "Task Management App",
    description: "An app helping teams collaborate and manage projects.",
    image: "/placeholder.svg?height=340&width=600",
    category: "App",
    technologies: ["Flutter", "Firebase", "GetX"],
    link: "#",
  },
  {
    id: 6,
    title: "Brand Identity Design",
    description: "Brand identity and visual identity systems designed for multiple businesses.",
    image: "/placeholder.svg?height=340&width=600",
    category: "Design",
    technologies: ["Illustrator", "InDesign", "Photoshop"],
    link: "#",
  },
]

// Skills list
const skills = [
  "Data Collection & Cleaning",
  "Python",
  "R",
  "C++",
  "Data Visualization",
  "Tableau",
  "ECharts",
  "Mathematical Modeling",
  "Machine Learning",
  "Causal Inference",
  "System Simulation",
  "AI",
  "Microsoft Office",
  "English Proficiency",
  "Project Management",
  "Research & Analysis",
]
