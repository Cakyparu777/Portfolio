// Project: Portfolio Website
'use client'
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code, Github, Linkedin, Mail, User, Languages, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedText } from "@/components/animated-text"
import { AnimatedSection } from "@/components/animated-section"
import { ContactForm } from "@/components/contact-form"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { useTheme } from "next-themes"

export default function Home() {
  const { theme } = useTheme() // Move the hook inside the component
  console.log(theme) // Logs "light" or "dark"

return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Code className="h-6 w-6" />
              <span className="font-bold inline-block">Home</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link
                href="#about"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                About
              </Link>
              <Link
                href="#skills"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Skills
              </Link>
              <Link
                href="#projects"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Projects
              </Link>
              <Link
                href="#experience"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Experience
              </Link>
              <Link
                href="#contact"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="outline" size="icon" asChild>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild >
              {/* <Link href="#" target="_blank" rel="noopener noreferrer"> */}
              <span>
                <Globe className="h-4 w-4" />
                <span className="sr-only">Languages</span>
              </span>
              {/* </Link> */}
            </Button> 
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative overflow-hidden py-24 md:py-32">
          <div className="container flex flex-col items-center justify-center text-center">
            <AnimatedText
              text="Fullstack Engineer"
              className={`text-xl font-medium tracking-tight mb-4`}
              direction="up"
              delay={0.2}
            />
            <AnimatedText
              text="Building Digital Experiences"
              className="text-4xl font-bold  sm:text-5xl md:text-6xl lg:text-7xl mb-6"
              direction="up"
              delay={0.3}
            />
            <AnimatedText
              text="Transforming ideas into elegant, functional solutions"
              className={`text-xl font-medium tracking-tight mb-4`}
              direction="up"
              delay={0.4}
            />
            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0"
              style={{ animationDelay: "500ms", animationFillMode: "forwards" }}
            >
              <Button asChild size="lg">
                <Link href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
          </div>
          <div className="absolute inset-0 -z-10 h-full w-full bg-background">
            <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
          </div>
        </section>

        <AnimatedSection id="about" className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto grid max-w-[58rem] grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Me</div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Driven to Excel as a Versatile Fullstack Engineer
                </h2>
                <p className="text-muted-foreground">
                  I am a dedicated fullstack engineer with over 2 years of experience. 
                  My goal is to be the go-to person for any developer in need, providing support and expertise 
                  across the entire stack.
                </p>
                <p className="text-muted-foreground">
                With a comprehensive understanding of both frontend and backend technologies, I strive to be 
                the linchpin in any development team, ensuring seamless collaboration and integration. My 
                commitment to continuous learning and problem-solving makes me an invaluable resource for 
                tackling complex challenges.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" asChild>
                    <Link href="/resume.pdf" target="_blank">
                      <User className="mr-2 h-4 w-4" /> Resume
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="mailto:contact@example.com">
                      <Mail className="mr-2 h-4 w-4" /> Email Me
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[500px] w-[350px] overflow-hidden rounded-lg">
                <Image
                  src="/user1.jpg" // Ensure this path is correct
                  alt="Profile"
                  width={350}
                  height={350}
                  className="object-cover"
                  loading="eager"
                />
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="skills" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="mx-auto max-w-[58rem] space-y-6 text-center">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Skills & Technologies</div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Technical Toolkit</h2>
              <p className="text-muted-foreground">I've worked with a variety of technologies across the full stack.</p>
            </div>
            <div className="mx-auto mt-12 max-w-[64rem]">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                <SkillBadge name="Python" level={90} />
                <SkillBadge name="FastAPI" level={90} />
                <SkillBadge name="Django" level={80} />
                <SkillBadge name="JavaScript" level={90} />
                <SkillBadge name="React" level={90} />
                <SkillBadge name="Next.js" level={85} />
                <SkillBadge name="TypeScript" level={90} />
                {/* <SkillBadge name="Node.js" level={85} /> */}
                {/* <SkillBadge name="Express" level={80} /> */}
                {/* <SkillBadge name="MongoDB" level={75} /> */}
                <SkillBadge name="PostgreSQL" level={80} />
                <SkillBadge name="MySQL" level={80} />
                {/* <SkillBadge name="GraphQL" level={70} /> */}
                <SkillBadge name="AWS" level={75} />
                <SkillBadge name="Docker" level={70} />
                <SkillBadge name="Tailwind CSS" level={90} />
                {/* <SkillBadge name="Redux" level={85} />
                <SkillBadge name="Jest" level={75} />
                <SkillBadge name="CI/CD" level={80} /> */}
                <SkillBadge name="Git" level={90} />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="projects" className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-[58rem] space-y-6 text-center">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Featured Projects</div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Recent Work</h2>
              <p className="text-muted-foreground">Here are some of the projects I've worked on recently.</p>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="MangaAI"
                description="Using OpenAI models to translate japanese Manga Automatically."
                tags={["Python", "FastAPI", "OpenAI API", "MySQL, React"]}
                image="/placeholder.svg?height=200&width=300"
                link="https://example.com/project1"
              />
              <ProjectCard
                title="Meeting reporting tool"
                description="Uses OpenAI models to summarize meeting notes, translates and action items."
                tags={["Python", "FastAPI", "OpenAI API", "PostgreSQL, Streamlit, AWS"]}
                image="/placeholder.svg?height=200&width=300"
                link="https://example.com/project2"
              />
              <ProjectCard
                title="Social data visualization platform"
                description="A web application for visualizing and analyzing social media data using InstagramAPI, TwitterAPI data."
                tags={["Python", "FastAPI", "PostgreSQL", "React", "Chart.js", 'AWS']}
                image="/placeholder.svg?height=200&width=300"
                link="https://example.com/project3"
              />
              <ProjectCard
                title="3D Simulation Environment"
                description="An advanced 3D simulation environment for facilities and robotics using Nvidia Isaac Sim."
                tags={["Python", "Nvidia Isaac Sim", "ROS2", "Docker"]}
                image="/placeholder.svg?height=200&width=300"
                link="https://example.com/project4"
              />
              <ProjectCard
                title="Salary Calculation Tool"
                description="A web application that automatically calculates and generates reports for employees' monthly salaries."
                tags={["React", "Next.js", "MongoDB", 'Ubuntu', "Tailwind CSS"]}
                image="/placeholder.svg?height=200&width=300"
                link="https://example.com/project5"
              />
              <ProjectCard
                title="ML Image recognition tool"
                description="A web application that uses machine learning to recognize and classify images."
                tags={["React", "Node.js", "TensorFlow", 'AWS SageMaker', "Tailwind CSS", 'Yolov5']}
                image="/placeholder.svg?height=200&width=300"
                link="https://example.com/project6"
              />
            </div>
            <div className="mt-12 text-center">
              <Button variant="outline" asChild>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> View More on GitHub
                </Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="experience" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="mx-auto max-w-[58rem] space-y-6 text-center">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Professional Journey</div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Work Experience</h2>
              <p className="text-muted-foreground">My professional background and career milestones.</p>
            </div>
            <div className="mx-auto mt-12 max-w-3xl">
              <ExperienceTimeline />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="contact" className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto grid max-w-[58rem] gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Get in Touch</div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let's Work Together</h2>
                <p className="text-muted-foreground">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
                  vision.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="mr-2 h-5 w-5 text-muted-foreground" />
                    <span>tuguldur.gee.2001@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="mr-2 h-5 w-5 text-muted-foreground" />
                    <span>linkedin.com/in/tuguldur-ganbaatar-05a5b1290</span>
                  </div>
                  <div className="flex items-center">
                    <Github className="mr-2 h-5 w-5 text-muted-foreground" />
                    <span>github.com/Cakyparu777</span>
                  </div>
                </div>
              </div>
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} CodyPortfolio. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}