"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
}

export function ExperienceTimeline() {
  const experiences: Experience[] = [
    {
      id: 1,
      role: "Full Stack Engineer",
      company: "CAL Co., Ltd.",
      period: "Mar 2025 – Present",
      location: "Tokyo, Japan",
      achievements: [
        "Developed and maintained full-stack applications in AWS cloud environment, utilizing serverless architecture with Lambda functions and API Gateway.",
        "Implemented backend data processing pipelines using AWS services (Glue, Step Functions, Athena, Lambda, S3, Amplify, API Gateway, Cognito) and refactored Python code, reducing processing time by 50%.",
        "Collaborated in agile development environment using Git version control and JIRA project management, contributing to both frontend and backend components across 2 major DataLake projects."
      ]
    },
    {
      id: 2,
      role: "Software Engineer",
      company: "Mirai Technologies LLC",
      period: "May 2024 – Mar 2025",
      location: "Ulaanbaatar, Mongolia",
      achievements: [
        "Led a team of 4 engineers to develop a robotics simulation using NVIDIA Isaac Sim, enabling the AI team to test self-driving robot models for automated car parking tasks.",
        "Integrated a Windows application to transmit binary robot control signals into the simulation, ensuring accurate real-time robot behavior.",
        "Coordinated team efforts and managed project milestones to deliver a robust testing platform for AI model validation."
      ]
    },
    {
      id: 3,
      role: "Junior Full Stack Engineer",
      company: "Dentsu Data Artist Mongol",
      period: "Apr 2023 – May 2024",
      location: "Ulaanbaatar, Mongolia",
      achievements: [
        "Developed full-stack web applications using React.js and JavaScript, integrating OpenAI APIs for AI-powered features.",
        "Built responsive interfaces and backend services for image recognition, reducing processing time by 40%.",
        "Implemented RESTful APIs and database integration for chatbot solutions, ensuring high uptime."
      ]
    }
  ];

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
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{experience.company}</p>
                  <p className="text-sm text-muted-foreground">{experience.location}</p>
                </div>
                <div className="space-y-2">
                  <ul className="space-y-1">
                    {experience.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-current flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
