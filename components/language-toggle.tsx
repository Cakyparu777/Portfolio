"use client";

import { useLang } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
  const { lang, setLang } = useLang();
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLang(lang === "en" ? "ja" : "en")}
      className="font-medium text-xs px-3"
    >
      {lang === "en" ? "日本語" : "English"}
    </Button>
  );
}
