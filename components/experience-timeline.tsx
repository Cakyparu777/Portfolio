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
      company: "Akatsuki AI Technologies",
      period: "Nov 2025 – Present",
      location: "Tokyo, Japan",
      achievements: [
        "Developed a marketing support system that generates customer personas from purchasing data using AI.",
        "Designed and implemented Generative AI chat features with a focus on UI/UX.",
        "Implemented strict access control and permission management for handling sensitive client data."
      ]
    },
    {
      id: 2,
      role: "Full Stack Engineer (Frontend Lead)",
      company: "CAL Co., Ltd.",
      period: "Mar 2025 – Nov 2025",
      location: "Tokyo, Japan",
      achievements: [
        "Leading frontend development for an AI-based security knowledge assessment system for NEC.",
        "Implemented AWS Cognito for authentication and managed deployments using AWS Amplify & Lambda.",
        "Established Git approval flows and code review processes to ensure high code quality."
      ]
    },
    {
      id: 3,
      role: "Full Stack Engineer / Team Lead",
      company: "Mirai Technologies LLC",
      period: "May 2024 – Mar 2025",
      location: "Ulaanbaatar, Mongolia",
      achievements: [
        "Led a 4-person team in building a 3D robot simulation environment using NVIDIA Isaac Sim & ROS2.",
        "Developed a web-based Attendance & Payroll system using Next.js and MongoDB, automating complex calculations.",
        "Managed project requirements, design, and team task allocation."
      ]
    },
    {
      id: 4,
      role: "Web Developer",
      company: "Dentsu Data Artist Mongol",
      period: "Apr 2023 – May 2024",
      location: "Ulaanbaatar, Mongolia",
      achievements: [
        "Developed an AI Chatbot for Golf Reservations using React, Django, and OpenAI API, replacing manual call center tasks.",
        "Built an internal AI Meeting Summary tool with Python/FastAPI and AWS, supporting multi-language translation.",
        "Handled full-cycle development from infrastructure (Docker/AWS) to frontend and backend implementation."
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
