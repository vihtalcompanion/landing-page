"use client";

import Logo from "./logo";
import { useTranslations } from "next-intl";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  const t = useTranslations('Footer');
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-6 py-8 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Logo className="h-8 w-auto" />
          <p className="text-center text-sm leading-loose md:text-left">
            {t('text')}
          </p>
        </div>
      </div>
    </footer>
  );
}
