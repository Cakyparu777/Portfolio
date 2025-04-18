"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import "@/lib/i18n";

interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export function ExperienceTimeline() {
  const { t } = useTranslation("translation");

  const experiences: Experience[] = [
    {
      id: 1,
      role: "Full Stack Developer",
      company: "Cal LLC",
      period: "2025 - Current",
      description: t("experience1"),
    },
    {
      id: 2,
      role: "Frontend Developer",
      company: "OrchArd Consulting",
      period: "2025.1 - 2025.3",
      description: t("experience2"),
    },
    {
      id: 3,
      role: "Fullstack Developer",
      company: "Mirai Technologies LLC",
      period: "2024.5 - 2025.1",
      description: t("experience3"),
    },
    {
      id: 4,
      role: "Junior Developer",
      company: "Dentsu Data Artist Mongol LLC",
      period: "2023.4 - 2024.5",
      description: t("experience4"),
    },
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
              <div className="space-y-2">
                <p className="font-medium">{experience.company}</p>
                <p className="text-sm text-muted-foreground">{experience.description}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
