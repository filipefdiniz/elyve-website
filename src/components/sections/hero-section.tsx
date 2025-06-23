import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import PhoneImage from '@/assets/elyve-home.png'
export default function HeroSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-primary">
                Revolucione sua Nutrição com Elyve
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Elyve une inteligência artificial e supervisão de nutricionistas para criar um plano alimentar perfeito para você. Alcance seus objetivos de saúde e bem-estar com uma dieta verdadeiramente personalizada.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/#download">Baixe Agora</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#features">Conheça o App</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src={PhoneImage}
              width={450}
              height={600}
              alt="App Mockup"
              className="mx-auto aspect-[3/4] overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
