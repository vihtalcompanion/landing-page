import { locales } from "@/navigation";
// Required for static export with dynamic [locale] route
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
import Header from "../../components/header";
import Footer from "../../components/footer";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Heart, Bot, Users, Globe, Target, ShieldCheck, MessageCircle, CalendarClock, Lock, Activity, Users2, Shield, BrainCircuit, AlertTriangle, MapPin, HeartPulse } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const heroImage = PlaceHolderImages.find((img) => img.id === "project-details-hero");

export default function ProjectDetails() {
  const objectives = [
    {
      title: "Inteligencia Artificial y Acompañamiento Humano",
      description: "Ofrecer información confiable, apoyo personalizado y herramientas prácticas para la detección, prevención y adherencia al tratamiento del VIH.",
      icon: <Heart className="w-10 h-10 text-primary" />
    },
    {
      title: "Privacidad, Accesibilidad y Empatía",
      description: "Garantizar un espacio seguro y anónimo donde cada persona pueda resolver sus dudas sin temor a ser juzgada.",
      icon: <ShieldCheck className="w-10 h-10 text-primary" />
    },
    {
      title: "Para todos, sin excepción",
      description: "Crear una aplicación multiplataforma (iOS, Android, web) accesible para cualquier persona, sin importar su clase social o dispositivo.",
      icon: <Globe className="w-10 h-10 text-primary" />
    }
  ];

  const coreFeatures = [
      {
        title: "Chat con IA",
        description: "Respuestas sobre salud sexual, VIH, pruebas, prevención, PrEP y salud mental.",
        icon: <BrainCircuit className="w-8 h-8 text-primary" />
      },
      {
        title: "Alertas de Campañas Locales",
        description: "Notificaciones sobre vacunación, pruebas gratuitas y charlas educativas.",
        icon: <AlertTriangle className="w-8 h-8 text-primary" />
      },
      {
        title: "Directorio de Centros de Salud",
        description: "Encuentra laboratorios y centros cercanos mediante geolocalización.",
        icon: <MapPin className="w-8 h-8 text-primary" />
      },
      {
        title: "Foros Anónimos",
        description: "Comparte experiencias y consejos en un espacio seguro y moderado.",
        icon: <Users2 className="w-8 h-8 text-primary" />
      }
  ];

  const advancedFeatures = [
      {
        title: "Agenda de Citas Médicas",
        description: "Integración con tu calendario para no olvidar ninguna consulta.",
        icon: <CalendarClock className="w-8 h-8 text-primary" />
      },
      {
        title: "Historial Personal Encriptado",
        description: "Guarda de forma segura tus preguntas, respuestas y evolución personal.",
        icon: <Lock className="w-8 h-8 text-primary" />
      },
      {
        title: "Seguimiento del Tratamiento",
        description: "Registra tu adherencia, síntomas y resultados de laboratorio.",
        icon: <Activity className="w-8 h-8 text-primary" />
      },
      {
        title: "Consejos Personalizados y Soporte Humano",
        description: "Recomendaciones de hábitos saludables y acceso a consejeros y profesionales.",
        icon: <HeartPulse className="w-8 h-8 text-primary" />
      },
  ];


  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full flex items-center justify-center py-12 md:py-20 bg-accent/20">
          <div className="w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl">
            {heroImage ? (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={1200}
                height={400}
                className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover object-center"
                priority
              />
            ) : (
              <div className="w-full h-[400px] bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Hero Image</p>
              </div>
            )}
          </div>
        </section>

        {/* Project Details Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 space-y-16">
            
            {/* Introduction */}
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Un Compañero para una Vida Plena</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                En un mundo donde la tecnología nos conecta, queremos crear un espacio que además nos cuide. <strong>VIHTal Companion</strong> nace de la convicción de que todos merecen un lugar seguro para resolver sus dudas sobre el VIH, sin miedo, sin juicios y con acceso a información de calidad.
              </p>
            </div>

            {/* Vision Highlight Section */}
            <div className="text-center max-w-3xl mx-auto">
                <div className="flex justify-center mb-6">
                  <HeartPulse className="w-16 h-16 text-primary" />
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestra Misión: Tu Bienestar es Posible</h2>
                <p className="mx-auto max-w-[800px] text-lg md:text-xl text-muted-foreground mt-4">
                  Queremos construir un movimiento de apoyo para que cada persona, sin importar quién sea o dónde se encuentre, pueda llevar una vida sana, plena y libre de estigmas.
                </p>
            </div>
            
            {/* Objectives */}
            <div>
              <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">¿Cómo lo Haremos?</h2>
              <div className="grid gap-8 md:grid-cols-3">
                {objectives.map((obj) => (
                  <Card key={obj.title} className="text-center">
                    <CardHeader>
                      <div className="mx-auto bg-accent/50 p-4 rounded-full w-fit">
                        {obj.icon}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <CardTitle className="text-xl">{obj.title}</CardTitle>
                      <p className="text-muted-foreground text-sm">{obj.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-accent/20">
          <div className="container px-4 md:px-6 space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Funcionalidades para Ti</h2>
              <p className="text-lg text-muted-foreground">
                Estas son las herramientas que estamos construyendo para ofrecer un acompañamiento integral y empoderar a cada usuario en su camino.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Apoyo Esencial y Comunitario</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {coreFeatures.map((feature) => (
                    <div key={feature.title} className="flex items-start gap-4">
                      <div className="bg-background/50 p-3 rounded-full">{feature.icon}</div>
                      <div>
                        <h3 className="font-bold">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Herramientas Avanzadas de Seguimiento</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {advancedFeatures.map((feature) => (
                     <div key={feature.title} className="flex items-start gap-4">
                        <div className="bg-background/50 p-3 rounded-full">{feature.icon}</div>
                        <div>
                          <h3 className="font-bold">{feature.title}</h3>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <Separator />
            
            <div className="text-center">
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                <strong>Nota:</strong> Aunque existen soluciones parciales, ninguna integra IA, comunidad, acompañamiento humano, prevención y adherencia terapéutica en una sola plataforma.
              </p>
            </div>

            <div className="mt-12 text-center bg-primary text-primary-foreground py-8 px-6 rounded-lg shadow-lg">
              <p className="text-lg font-semibold">
                ¿Tienes una idea o crees que falta algo?
                <br/>
                <a href="mailto:joshuahernandez.hello@gmail.com" className="font-bold underline hover:text-primary-foreground/80 transition-colors">
                  ¡Siéntete libre de contactarnos y compartir tu visión!
                </a>
              </p>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
