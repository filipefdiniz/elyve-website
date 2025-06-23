import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { BookOpenCheck, FileText, Lightbulb, Newspaper, TrendingUp, UserCheck } from "lucide-react";

const features = [
  {
    icon: <FileText className="w-10 h-10 text-primary mb-4" />,
    title: "Anamnese Completa",
    description: "Um questionário detalhado para entendermos seu perfil e objetivos."
  },
  {
    icon: <BookOpenCheck className="w-10 h-10 text-primary mb-4" />,
    title: "Cards de Dieta",
    description: "Receitas e planos diários em cards fáceis de seguir."
  },
  {
    icon: <Lightbulb className="w-10 h-10 text-primary mb-4" />,
    title: "Dicas Diárias",
    description: "Receba dicas de saúde e bem-estar geradas por IA."
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-primary mb-4" />,
    title: "Página de Desempenho",
    description: "Visualize seu progresso com gráficos e métricas intuitivas."
  },
  {
    icon: <UserCheck className="w-10 h-10 text-primary mb-4" />,
    title: "Aprovação Profissional",
    description: "Sua dieta é sempre validada por um nutricionista."
  },
  {
    icon: <Newspaper className="w-10 h-10 text-primary mb-4" />,
    title: "Tendências para Nutris",
    description: "Conteúdo e notícias relevantes para profissionais da área."
  },
];


export default function FeaturesSection() {
  return (
    <section id="features" className="w-full py-16 md:py-24 lg:py-32 bg-card">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Funcionalidades Pensadas para Você
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore as ferramentas que o Elyve oferece para transformar sua relação com a comida e alcançar seus objetivos.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
            {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center justify-center space-y-2 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-300">
                    {feature.icon}
                    <h3 className="font-headline text-xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
