import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BrainCircuit, UserCheck, BarChart, ShieldCheck } from "lucide-react";

const differentiators = [
  {
    icon: <BrainCircuit className="w-8 h-8 text-primary" />,
    title: "Dieta Personalizada com IA",
    description: "Nossa IA analisa sua anamnese para criar um plano alimentar único, focado nos seus objetivos e preferências."
  },
  {
    icon: <UserCheck className="w-8 h-8 text-primary" />,
    title: "Revisão por Nutricionistas",
    description: "Todas as dietas geradas pela IA são cuidadosamente revisadas e aprovadas por nutricionistas qualificados."
  },
  {
    icon: <BarChart className="w-8 h-8 text-primary" />,
    title: "Métricas Completas",
    description: "Acompanhe seu progresso com métricas detalhadas como IMC, TMB, TDEE, e percentual de gordura corporal."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Segurança de Dados (LGPD)",
    description: "Seus dados são protegidos e tratados com a máxima segurança, em conformidade com a LGPD."
  }
];

export default function DifferentiatorsSection() {
  return (
    <section id="differentiators" className="py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">O que é Elyve?</div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Inteligência e Cuidado na sua Nutrição</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Elyve é seu assistente pessoal de nutrição. Combinamos o poder da inteligência artificial para personalização com a expertise de profissionais de saúde para garantir um plano alimentar seguro, eficaz e delicioso para você.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-stretch gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-4 mt-12">
          {differentiators.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <CardHeader className="flex flex-col items-center text-center gap-4 flex-grow">
                {item.icon}
                <div className="space-y-1">
                    <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
