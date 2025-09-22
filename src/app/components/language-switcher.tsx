'use client';

import * as React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/navigation';

const USFlag = () => (
  <svg width="24" height="24" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 11H61V22.2H11V11Z" fill="#F42A41"/>
    <path d="M11 33.3H61V44.4H11V33.3Z" fill="#F42A41"/>
    <path d="M11 22.2H61V33.3H11V22.2Z" fill="#F1F2F2"/>
    <path d="M11 44.4H61V55.5H11V44.4Z" fill="#F1F2F2"/>
    <path d="M11 11H36V44.4H11V11Z" fill="#199AE0"/>
  </svg>
);

const ESFlag = () => (
    <svg width="24" height="24" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 11H61V55.5H11V11Z" fill="#F42A41"/>
    <path d="M11 22.2H61V44.4H11V22.2Z" fill="#FFC400"/>
    </svg>
);

export default function LanguageSwitcher() {
  const t = useTranslations('LanguageSwitcher');
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const changeLanguage = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">{t('label')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLanguage('en')} disabled={locale === 'en'}>
          <div className="flex items-center gap-2">
            <USFlag />
            <span>{t('en')}</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage('es')} disabled={locale === 'es'}>
          <div className="flex items-center gap-2">
            <ESFlag />
            <span>{t('es')}</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
