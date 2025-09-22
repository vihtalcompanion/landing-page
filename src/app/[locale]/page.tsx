import Image from "next/image";
import { locales } from "@/navigation";
// Required for static export with dynamic [locale] route
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
import {
  Code,
  BookText,
  ShieldCheck,
  FlaskConical,
  Megaphone,
  Target,
  Users,
  Award,
  Mail,
  Phone,
} from "lucide-react";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import DonationTiers from "@/app/components/donation-tiers";
import ImpactStories from "@/app/components/impact-stories";
import PersonalizedMessageCta from "@/app/components/personalized-message-cta";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import SubscriptionForm from "@/app/components/subscription-form";
import Logo from "../components/logo";


const heroImage = PlaceHolderImages.find((img) => img.id === "hero-image");

const SvgLogo = () => (
    <svg viewBox="0 0 172 104" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary">
        <path d="M59.22 0C54.44 0 50.34 2.1 47.46 5.8L34.14 22.48L20.82 5.8C17.94 2.1 13.84 0 9.06 0C4.06 0 0 4.08 0 9.09V9.09C0 12.33 1.34 15.29 3.58 17.29L26.32 37.67C24.58 40.01 23.28 42.67 22.5 45.55L2.48 83.15C0.94 88.75 0 94.63 0 100.77C0 102.57 1.44 104 3.22 104H3.22C5 104 6.44 102.57 6.44 100.77C6.44 95.91 7.2 91.21 8.68 86.83L28.18 50.89C28.74 49.13 29.58 47.47 30.66 46.03L32.8 48.61L9.06 77.53C6.82 79.53 5.48 82.49 5.48 85.73V85.73C5.48 90.74 9.54 94.81 14.54 94.81C19.32 94.81 23.42 92.71 26.3 89.01L39.62 72.33L52.94 89.01C55.82 92.71 59.92 94.81 64.7 94.81C69.7 94.81 73.78 90.74 73.78 85.73V85.73C73.78 82.49 72.44 79.53 70.2 77.53L46.46 48.61L48.6 46.03C49.68 47.47 50.52 49.13 51.08 50.89L70.58 86.83C72.06 91.21 72.86 95.91 72.86 100.77C72.86 102.57 74.3 104 76.08 104H76.08C77.86 104 79.3 102.57 79.3 100.77C79.3 94.63 78.36 88.75 76.82 83.15L56.8 45.55C56.02 42.67 54.72 40.01 52.98 37.67L75.72 17.29C77.96 15.29 79.3 12.33 79.3 9.09V9.09C79.3 4.08 75.24 0 70.24 0C65.46 0 61.36 2.1 58.48 5.8L45.16 22.48L31.84 5.8C28.96 2.1 24.86 0 20.08 0C15.08 0 11.02 4.08 11.02 9.09V9.09C11.02 10.31 11.32 11.49 11.84 12.53L22.92 37.89H56.38L67.46 12.53C67.98 11.49 68.28 10.31 68.28 9.09V9.09C68.28 4.08 64.22 0 59.22 0Z" fill="currentColor"/>
        <defs><linearGradient id="paint0_linear_10_25" x1="120.322" y1="19.1419" x2="162.894" y2="92.4259" gradientUnits="userSpaceOnUse"><stop stopColor="#D92121"/><stop offset="1" stopColor="#6A1677"/></linearGradient></defs>
        <path d="M171.32 64.1259C168.1 55.6059 162.06 48.2459 154.1 43.1259C156.4 41.3459 158.06 38.8659 158.62 35.9859C159.9 28.5259 156.28 21.3659 150.1 17.4059C145.42 14.4459 139.66 13.9259 134.5 16.1459C128.98 18.5059 125.68 23.8859 125.1 29.8259C124.98 31.3459 125.1 32.8859 125.5 34.3459L120.76 33.2259C121.18 25.4259 125.18 18.0259 131.62 13.0659C139.78 6.70594 150.36 5.82594 159.24 11.1259C167.54 16.0259 171.74 24.8459 170.22 34.0059C169.2 40.0659 166.42 45.4259 162.48 49.5259C168.04 53.9459 171.84 59.9859 171.44 66.8059C171.18 71.3059 169.58 75.5259 166.94 79.0659C160.98 86.9659 151.02 91.4659 141.22 90.2859C132.84 89.2659 125.42 83.3259 121.72 75.2659C119.22 69.8059 118.8 63.6059 120.52 57.8659L125.22 58.8859C123.68 64.3859 124.1 70.0859 126.38 74.9859C129.56 81.9859 135.96 87.1259 143.24 87.9459C151.78 88.9259 160.54 85.0459 165.7 78.1459C168.16 74.8859 169.46 71.0259 169.66 67.0659C170.04 60.8459 166.72 55.4459 161.76 51.5259C156.44 47.3859 149.7 46.2259 143.46 48.3659L142.12 43.8259C149.02 41.3859 156.4 42.9259 162.3 47.5059C162.88 47.9659 163.44 48.4259 163.98 48.9259C149.54 59.2259 131.7 78.4459 122.12 88.9259C120.94 90.2659 119.82 91.5459 118.78 92.7659C118.52 93.1059 118.24 93.4459 117.96 93.7659L117.54 94.2659C120.14 90.4459 122.68 86.8259 125.18 83.3659L129.52 84.4459C127.18 87.5859 124.78 90.9459 122.34 94.4659L122.06 94.0459C121.82 93.7059 121.58 93.3859 121.34 93.0659C133.56 79.5259 146.46 64.3659 164.24 50.8259C164.54 50.5659 164.82 50.3259 165.12 50.0659C168.36 53.6459 170.56 58.2059 171.32 64.1259Z" fill="url(#paint0_linear_10_25)"/>
    </svg>
);

export default function Home() {
  const t = useTranslations();
  const goal = 15000;
  const raised = 10;
  const progress = (raised / goal) * 100;

  const fundAllocation = [
    {
      percentage: "50%",
      area: t('About.fundAllocation.development.title'),
      details: t('About.fundAllocation.development.details'),
      icon: <Code className="w-8 h-8 text-primary" />,
    },
    {
      percentage: "20%",
      area: t('About.fundAllocation.content.title'),
      details: t('About.fundAllocation.content.details'),
      icon: <BookText className="w-8 h-8 text-primary" />,
    },
    {
      percentage: "15%",
      area: t('About.fundAllocation.security.title'),
      details: t('About.fundAllocation.security.details'),
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    },
    {
      percentage: "10%",
      area: t('About.fundAllocation.testing.title'),
      details: t('About.fundAllocation.testing.details'),
      icon: <FlaskConical className="w-8 h-8 text-primary" />,
    },
    {
      percentage: "5%",
      area: t('About.fundAllocation.marketing.title'),
      details: t('About.fundAllocation.marketing.details'),
      icon: <Megaphone className="w-8 h-8 text-primary" />,
    },
  ];

  const impactPoints = [
    {
      title: t('Impact.points.safe.title'),
      description: t('Impact.points.safe.description'),
      icon: <SvgLogo />,
    },
    {
      title: t('Impact.points.empower.title'),
      description: t('Impact.points.empower.description'),
      icon: <Target className="w-8 h-8 text-primary" />,
    },
    {
      title: t('Impact.points.community.title'),
      description: t('Impact.points.community.description'),
      icon: <Users className="w-8 h-8 text-primary" />,
    },
  ]

  const { locale } = useTranslations as any;
  // Next.js in app router: puedes obtener el locale de los params si lo necesitas
  // Pero next-intl también lo expone en el contexto
  // Si no funciona, se puede usar props.params.locale
  const currentLocale = typeof window !== 'undefined' ? window.location.pathname.split('/')[1] : 'es';
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 lg:py-40 bg-accent/20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
                  {t('Hero.title')}
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  {t('Hero.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="#donate">{t('Hero.button')}</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-64 md:h-auto min-h-[300px]">
                {heroImage ? (
                  <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    data-ai-hint={heroImage.imageHint}
                    fill
                    className="rounded-lg object-contain shadow-2xl "
                    priority
                    style={{objectPosition: 'center'}}
                  />
                ) : (
                  <div className="w-full h-full bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Hero Image</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t('About.title')}</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
                {t('About.subtitle', {goal: goal.toLocaleString()})}
              </p>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>{t('About.fundUse')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  {fundAllocation.map((item) => (
                    <div key={item.area} className="flex items-start gap-4">
                      <div className="bg-accent/50 p-3 rounded-full">{item.icon}</div>
                      <div>
                        <h3 className="font-bold">{item.percentage} – {item.area}</h3>
                        <p className="text-sm text-muted-foreground">{item.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Funding Section */}
        <section id="funding" className="w-full py-12 md:py-24 lg:py-32 bg-accent/20">
          <div className="container px-4 md:px-6 space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t('Funding.title')}</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
                {t('Funding.subtitle')}
              </p>
            </div>
            
            <Card className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-end flex-wrap gap-2">
                  <h3 className="text-2xl font-bold">${raised.toLocaleString()}</h3>
                  <p className="text-muted-foreground">{t('Funding.raisedOf', {goal: `$${goal.toLocaleString()}`})}</p>
                </div>
                <Progress value={progress} />
                <p className="text-sm text-muted-foreground">
                  {t('Funding.disclaimer')}
                </p>
              </div>
            </Card>

            <DonationTiers />
          </div>
        </section>
        
        {/* Early Access Section */}
        <section id="early-access" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-accent/50 px-3 py-1 text-sm text-primary font-medium">{t('EarlyAccess.exclusive')}</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {t('EarlyAccess.title')}
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  {t('EarlyAccess.description')}
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Award className="w-32 h-32 text-primary" />
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section id="impact" className="w-full py-12 md:py-24 lg:py-32 bg-accent/20">
          <div className="container px-4 md:px-6 space-y-12">
            <div className="grid gap-10 md:grid-cols-2 lg:gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t('Impact.title')}</h2>
                <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
                  {t('Impact.description')}
                </p>
              </div>
              <div className="space-y-6">
                {impactPoints.map(point => (
                  <div key={point.title} className="flex items-start gap-4">
                    <div className="bg-accent/50 p-3 rounded-full">{point.icon}</div>
                    <div>
                      <h3 className="font-bold">{point.title}</h3>
                      <p className="text-sm text-muted-foreground">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <Separator className="my-12" />

            <div>
              <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl text-center mb-8">{t('Impact.storiesTitle')}</h3>
              <ImpactStories />
            </div>
          </div>
        </section>

        {/* Subscription Section */}
        <section id="subscribe" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">{t('Subscription.title')}</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t('Subscription.description')}
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <SubscriptionForm />
            </div>
          </div>
        </section>

        {/* Donate CTA Section */}
        <section id="donate" className="w-full py-12 md:py-24 lg:py-32 bg-accent/20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <PersonalizedMessageCta />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">{t('Contact.title')}</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t('Contact.description')}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="mailto:joshuamoises1995@gmail.com" className="inline-flex items-center gap-2 text-lg font-medium hover:text-primary transition-colors">
                    <Mail className="w-5 h-5" />
                    joshuamoises1995@gmail.com
                </a>
                <Separator orientation="vertical" className="h-6 hidden sm:block" />
                <a href="tel:+584244074025" className="inline-flex items-center gap-2 text-lg font-medium hover:text-primary transition-colors">
                    <Phone className="w-5 h-5" />
                    +58 424-4074025
                </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {/* Botón flotante para más información */}
      <a
        href={`/${currentLocale}/project-details`}
        className="fixed bottom-6 right-6 z-50 px-6 py-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-all text-base font-semibold"
        style={{boxShadow: '0 4px 24px rgba(0,0,0,0.15)'}}
      >
        ¿Quieres saber más del proyecto?
      </a>
    </div>
  );
}
