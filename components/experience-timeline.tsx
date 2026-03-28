"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLang } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

export function ExperienceTimeline() {
  const { lang } = useLang();
  const t = translations[lang].experience;

  return (
    <div className="space-y-8">
      {t.items.map((experience, index) => (
        <motion.div
          key={index}
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
