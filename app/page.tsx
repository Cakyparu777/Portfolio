'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code, FileText, Github, Linkedin, Mail, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { SkillBadge } from "@/components/skill-badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { AnimatedText } from "@/components/animated-text";
import { AnimatedSection } from "@/components/animated-section";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { LanguageToggle } from "@/components/language-toggle";
import { useLang } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

export default function Home() {
  const { lang } = useLang();
  const t = translations[lang];
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
                {t.nav.about}
              </Link>
              <Link href="#skills" className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                {t.nav.skills}
              </Link>
              <Link href="#projects" className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                {t.nav.projects}
              </Link>
              <Link href="#experience" className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                {t.nav.experience}
              </Link>
              <Link href="#contact" className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                {t.nav.contact}
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <LanguageToggle />
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
              text={t.hero.role}
              className={`text-xl font-medium tracking-tight mb-4`}
              direction="up"
              delay={0.2}
            />
            <AnimatedText
              text={t.hero.headline}
              className="text-4xl font-bold  sm:text-5xl md:text-6xl lg:text-7xl mb-6"
              direction="up"
              delay={0.3}
            />
            <AnimatedText
              text={t.hero.tagline}
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
                  {t.hero.viewProjects} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#contact">{t.hero.contactMe}</Link>
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
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">{t.about.label}</div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {t.about.title}
                </h2>
                <p className="text-muted-foreground">{t.about.p1}</p>
                <p className="text-muted-foreground">{t.about.p2}</p>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" asChild>
                    <Link href="/Resume_2026.pdf" download="Resume_2026.pdf">
                      <User className="mr-2 h-4 w-4" /> {t.about.resume}
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/Work_History_2026.pdf" download="Work_History_2026.pdf">
                      <User className="mr-2 h-4 w-4" /> {t.about.jobHistory}
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/cv.html" target="_blank">
                      <FileText className="mr-2 h-4 w-4" /> {t.about.resumeEn}
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="tuguldur.gee.2001@gmail.com">
                      <Mail className="mr-2 h-4 w-4" /> {t.about.emailMe}
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
                {t.skills.label}
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {t.skills.title}
              </h2>
              <p className="text-muted-foreground">{t.skills.description}</p>
            </div>
            <div className="mx-auto mt-12 max-w-[64rem]">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                <SkillBadge name="Python" level={95} />
                <SkillBadge name="FastAPI" level={90} />
                <SkillBadge name="Django" level={85} />
                <SkillBadge name="JavaScript" level={90} />
                <SkillBadge name="TypeScript" level={90} />
                <SkillBadge name="React" level={90} />
                <SkillBadge name="Next.js" level={90} />
                <SkillBadge name="AWS" level={80} />
                <SkillBadge name="Docker" level={85} />
                <SkillBadge name="PostgreSQL" level={80} />
                <SkillBadge name="MongoDB" level={80} />
                <SkillBadge name="ROS2" level={75} />
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
                {t.projects.label}
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {t.projects.title}
              </h2>
              <p className="text-muted-foreground">{t.projects.description}</p>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title={t.projects.items[0].title}
                description={t.projects.items[0].description}
                tags={["React", "TypeScript", "AWS Cognito", "AWS Lambda", "Amplify"]}
                image="/security.png"
                link="#"
              />
              <ProjectCard
                title={t.projects.items[1].title}
                description={t.projects.items[1].description}
                tags={["Python", "FastAPI", "React", "Next.js", "PostgreSQL"]}
                image="/persona.png"
                link="#"
              />
              <ProjectCard
                title={t.projects.items[2].title}
                description={t.projects.items[2].description}
                tags={["Python", "ROS2", "Isaac Sim", "MongoDB", "Socket.io"]}
                image="/simulation.jpg"
                link="#"
              />
              <ProjectCard
                title={t.projects.items[3].title}
                description={t.projects.items[3].description}
                tags={["React", "Django", "MongoDB", "OpenAI API", "AWS"]}
                image="/golf.png"
                link="#"
              />
              <ProjectCard
                title={t.projects.items[4].title}
                description={t.projects.items[4].description}
                tags={["Next.js", "React", "MongoDB", "Docker", "FastAPI"]}
                image="/salary.png"
                link="#"
              />
              <ProjectCard
                title={t.projects.items[5].title}
                description={t.projects.items[5].description}
                tags={["Python", "FastAPI", "SQL", "Docker", "AWS"]}
                image="/meeting_summary.png"
                link="#"
              />
            </div>
            <div className="mt-12 text-center">
              <Button variant="outline" asChild>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  {t.projects.viewMore}
                </Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="experience" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="mx-auto max-w-[58rem] space-y-6 text-center">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                {t.experience.label}
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {t.experience.title}
              </h2>
              <p className="text-muted-foreground">{t.experience.description}</p>
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
                  {t.contact.label}
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {t.contact.title}
                </h2>
                <p className="text-muted-foreground">{t.contact.description}</p>
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
              {t.footer.rights}
            </p>
          </div>
          <div className="flex gap-4 !static !w-auto !max-w-none !flex-nowrap">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground !static !w-auto !max-w-none"
              style={{ pointerEvents: "auto" }}
              tabIndex={-1}
            >
              {t.footer.privacy}
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground !static !w-auto !max-w-none"
              style={{ pointerEvents: "auto" }}
              tabIndex={-1}
            >
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </footer>
    </div >
  );
}