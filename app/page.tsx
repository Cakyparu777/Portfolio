'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code, Github, Linkedin, Mail, User } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { SkillBadge } from "@/components/skill-badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { AnimatedText } from "@/components/animated-text";
import { AnimatedSection } from "@/components/animated-section";
import { ContactForm } from "@/components/contact-form";
import { ExperienceTimeline } from "@/components/experience-timeline";

export default function Home() {
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

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
              <Link href="#about" className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                About
              </Link>
              <Link href="#skills" className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                Skills
              </Link>
              <Link href="#projects" className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                Projects
              </Link>
              <Link href="#experience" className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                Experience
              </Link>
              <Link href="#contact" className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
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
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About</div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Aiming for Excellence as a Versatile Full-Stack Engineer
                </h2>
                <p className="text-muted-foreground">
                  I am a full-stack engineer with almost 3 years of experience.
                  My goal is to be the go-to person for any developer in need, providing support and expertise 
                  across the entire stack.
                </p>
                <p className="text-muted-foreground">
                  Proficient in both frontend and backend technologies, I strive to be an invaluable asset to any development team. My commitment to continuous learning and problem-solving enables me to tackle complex challenges.
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
                  src="/user1.jpg"
                  alt="Profile"
                  width={350}
                  height={350}
                  priority
                  className="object-cover"
                  loading="eager"
                  style={{ width: "auto", height: "auto" }}
                />
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="skills" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="mx-auto max-w-[58rem] space-y-6 text-center">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Skills & Technologies
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                My Technical Toolkit
              </h2>
              <p className="text-muted-foreground">
                I have worked with a variety of technologies across the full stack.
              </p>
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
                <SkillBadge name="PostgreSQL" level={80} />
                <SkillBadge name="MySQL" level={80} />
                <SkillBadge name="AWS" level={75} />
                <SkillBadge name="Docker" level={70} />
                <SkillBadge name="Tailwind CSS" level={90} />
                <SkillBadge name="Git" level={90} />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="projects" className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-[58rem] space-y-6 text-center">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Featured Projects
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Recent Work
              </h2>
              <p className="text-muted-foreground">
                Here are some of the projects I've worked on recently
              </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="MangaAI"
                description="Automatically translates Japanese manga using OpenAI models."
                tags={["Python", "FastAPI", "OpenAI API", "MySQL, React"]}
                image="/manga.png"
                link="https://example.com/project1"
              />
              <ProjectCard
                title="Meeting Summary Tool"
                description="Summarizes and translates meeting notes while extracting action items."
                tags={["Python", "FastAPI", "OpenAI API", "PostgreSQL, Streamlit, AWS"]}
                image="/meeting_summary.png"
                link="https://example.com/project2"
              />
              <ProjectCard
                title="SNS Data Visualization Platform"
                description="Analyzes and visualizes SNS data using Instagram and Twitter APIs."
                tags={["Python", "FastAPI", "PostgreSQL", "React", "Chart.js", 'AWS']}
                image="/data_visualization.png"
                link="https://example.com/project3"
              />
              <ProjectCard
                title="3D Simulation Environment"
                description="Advanced 3D simulation for facilities and robots using Nvidia Isaac Sim."
                tags={["Python", "Nvidia Isaac Sim", "ROS2", "Docker"]}
                image="/simulation.jpg"
                link="https://example.com/project4"
              />
              <ProjectCard
                title="Salary Calculation Tool"
                description="A web app that automatically calculates employee salaries and generates reports."
                tags={["React", "Next.js", "MongoDB", 'Ubuntu', "Tailwind CSS"]}
                image="/salary.png"
                link="https://example.com/project5"
              />
              <ProjectCard
                title="ML Image Recognition Tool"
                description="A web app for recognizing and classifying images using machine learning."
                tags={["React", "Node.js", "TensorFlow", 'AWS SageMaker', "Tailwind CSS", 'Yolov5']}
                image="/image.png"
                link="https://example.com/project6"
              />
            </div>
            <div className="mt-12 text-center">
              <Button variant="outline" asChild>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> 
                  View More on GitHub
                </Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="experience" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="mx-auto max-w-[58rem] space-y-6 text-center">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                 Career Journey
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Work Experience
              </h2>
              <p className="text-muted-foreground">
                An overview of my professional background and career milestones.
              </p>
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
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Get in Touch
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Let's Work Together
                </h2>
                <p className="text-muted-foreground">
                  I welcome inquiries regarding potential job opportunities, collaborations, or projects where my skills and experience may be a strong fit.
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
              {/* <div> */}
                {/* <ContactForm /> */}
              {/* </div> */}
            </div>
          </div>
        </AnimatedSection>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            <p className="text-sm text-muted-foreground">
              © 2025 CodyPortfolio. All rights reserved.
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
  );
}