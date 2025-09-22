"use client";

import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";
import Logo from "./logo";
import LanguageSwitcher from "./language-switcher";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations('Header');

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Logo className="h-8 w-auto mr-2" />
          <Link href="/" className="font-bold text-lg">
            {t('appName')}
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/#about" className="transition-colors hover:text-primary">{t('about')}</Link>
          <Link href="/#funding" className="transition-colors hover:text-primary">{t('funding')}</Link>
          <Link href="/#impact" className="transition-colors hover:text-primary">{t('impact')}</Link>
          <Link href="/#subscribe" className="transition-colors hover:text-primary">{t('updates')}</Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <LanguageSwitcher />
          <Button asChild>
            <Link href="/#donate">{t('donate')}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
