"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Experience {
  id: number
  role: string
  company: string
  period: string
  description: string
}

const experiences: Experience[] = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Cal LLC",
    period: "2025 - Current",
    description:
      "Working on my AWS Practitioner Certificate, own portfolio website and AI chatbot reservation system using Python, Next.js, React, PostgreSQL.",
 },
  {
    id: 2,
    role: "Frontend Developer",
    company: "OrchArd Consulting",
    period: "2025.1 - 2025.3",
    description:
      "Developed the frontend of a web application that automatically calculates and generates reports for employees' monthly salaries. Collaborated closely with backend developers to ensure seamless data integration and user experience. Specialized in React and  TailwindCSS to create an intuitive and responsive interface."    },
{
    id: 3,
    role: "Fullstack Developer",
    company: "Mirai Technologies LLC",
    period: "2024.5 - 2025.1",
    description:
      "Successfully led a team of four in developing an advanced 3D simulation environment for facilities and robotics, utilizing Nvidia Isaac Sim, ROS2, and Python to enhance operational efficiency and innovation."  },

  {
    id: 4,
    role: "Junior Developer",
    company: "Dentsu Data Artist Mongol LLC",
    period: "2023.4 - 2024.5",
    description:
    "Developed a web application for marketing purposes, focusing on backend development with Python. Implemented CI/CD pipelines and successfully deployed the application on AWS to ensure seamless integration and scalability."   
},
]

export function ExperienceTimeline() {
  return (
    <div className="space-y-8">
      {experiences.map((experience, index) => (
        <motion.div
          key={experience.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Briefcase className="h-4 w-4 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{experience.role}</CardTitle>
                </div>
                <span className="text-sm text-muted-foreground">{experience.period}</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="font-medium">{experience.company}</p>
                <p className="text-sm text-muted-foreground">{experience.description}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
