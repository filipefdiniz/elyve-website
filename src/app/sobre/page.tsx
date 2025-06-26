import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, ShieldCheck, UserCheck } from "lucide-react";
import ElyveLogo from "@/assets/logo-text-green.png";
import Filipe from "@/assets/filipe.jpeg";
import Pedro from "@/assets/pedro.jpeg";
import Yuri from "@/assets/yuri.jpeg";
import Artur from "@/assets/artur.jpeg";
import Vinicius from "@/assets/vinicius.jpeg";
const teamMembers = [
  {
    name: "Filipe",
    role: "Project Manager, Product Owner e Desenvolvedor",
    image: Filipe,
  },
  { name: "Yuri", role: "UI/UX e Desenvolvedor", image: Yuri },
  { name: "Pedro", role: "QA e Desenvolvedor", image: Pedro },
  { name: "Vinicius", role: "Desenvolvedor", image: Vinicius },
  { name: "Arthur", role: "Desenvolvedor", image: Artur },
];

export default function SobrePage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <section className="text-center">
          <h1 className="font-headline text-4xl font-bold text-primary sm:text-5xl md:text-6xl">
            Sobre o Elyve
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl">
            Nossa missão é democratizar o acesso à nutrição de qualidade,
            combinando tecnologia de ponta com o cuidado humano.
          </p>
        </section>

        <section className="mt-16 md:mt-24">
          <Card>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <CardContent className="p-8 md:p-12 space-y-4">
                <h2 className="font-headline text-3xl font-bold">
                  Nossa História
                </h2>
                <p className="text-muted-foreground">
                  O Elyve nasceu da ideia de que todos merecem uma orientação
                  nutricional personalizada e acessível. Cansados de dietas
                  genéricas e informações conflitantes, unimos especialistas em
                  tecnologia e nutrição para criar uma solução verdadeiramente
                  inovadora. Nosso objetivo é simples: ajudar você a alcançar
                  seus objetivos de saúde e bem-estar de forma sustentável,
                  segura e prazerosa.
                </p>
                <p className="text-muted-foreground">
                  Acreditamos que a combinação da inteligência artificial para
                  personalização em escala com a validação de nutricionistas
                  experientes é o futuro da nutrição.
                </p>
              </CardContent>
              <div className="relative h-64 md:h-full w-full">
                <Image
                  src={ElyveLogo}
                  layout="fill"
                  objectFit="contain"
                  alt="Equipe Elyve"
                  className="rounded-r-lg"
                />
              </div>
            </div>
          </Card>
        </section>

        <section className="mt-16 md:mt-24 text-center">
          <h2 className="font-headline text-3xl font-bold">
            Nossos Diferenciais
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center space-y-2">
              <BrainCircuit className="w-12 h-12 text-primary" />
              <h3 className="font-headline text-xl font-semibold">
                IA + Nutricionistas
              </h3>
              <p className="text-muted-foreground">
                O melhor dos dois mundos: precisão da IA com a empatia e
                conhecimento de especialistas.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <ShieldCheck className="w-12 h-12 text-primary" />
              <h3 className="font-headline text-xl font-semibold">
                Personalização Real
              </h3>
              <p className="text-muted-foreground">
                Sua dieta é sua. Adaptada ao seu corpo, rotina, preferências e
                objetivos.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <UserCheck className="w-12 h-12 text-primary" />
              <h3 className="font-headline text-xl font-semibold">
                Segurança e Confiança
              </h3>
              <p className="text-muted-foreground">
                Dados protegidos pela LGPD e planos validados por profissionais
                de saúde.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 md:mt-24 text-center">
          <h2 className="font-headline text-3xl font-bold">Nossa Equipe</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Conheça algumas das pessoas que trabalham para tornar o Elyve
            possível.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {teamMembers.map((member) => (
              <Card
                key={member.name}
                className="text-center transition-transform duration-300 hover:scale-105"
              >
                <CardHeader>
                  <Image
                    src={member.image}
                    width={120}
                    height={120}
                    alt={member.name}
                    className="rounded-full mx-auto"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className="font-headline text-xl">
                    {member.name}
                  </CardTitle>
                  <p className="text-primary">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
