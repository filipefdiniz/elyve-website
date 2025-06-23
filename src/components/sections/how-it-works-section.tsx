import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Hand, FileCheck, Loader, CheckCircle, Clock, UtensilsCrossed } from "lucide-react";

const steps = [
    {
        icon: <Hand className="w-10 h-10 text-primary" />,
        title: "1. Comece a Mágica",
        description: "Com um simples clique no botão 'Gerar Dieta', você inicia o processo para uma vida mais saudável."
    },
    {
        icon: <FileCheck className="w-10 h-10 text-primary" />,
        title: "2. Verificação Inteligente",
        description: "Um modal abre para que você verifique seus dados de anamnese, garantindo uma dieta 100% personalizada."
    },
    {
        icon: <Loader className="w-10 h-10 text-primary animate-spin" />,
        title: "3. IA em Ação",
        description: "Enquanto você espera, nossa IA trabalha para montar o plano alimentar perfeito, em uma tela de loading animada."
    },
    {
        icon: <CheckCircle className="w-10 h-10 text-primary" />,
        title: "4. Confirmação",
        description: "Você recebe a confirmação de que sua dieta foi gerada e enviada para validação profissional."
    },
    {
        icon: <Clock className="w-10 h-10 text-primary" />,
        title: "5. Aprovação Nutricional",
        description: "Seu card de dieta fica pendente até que um de nossos nutricionistas revise e aprove cada detalhe."
    },
    {
        icon: <UtensilsCrossed className="w-10 h-10 text-primary" />,
        title: "6. Dieta Pronta!",
        description: "Após a aprovação, seu card de dieta fica ativo. Acesse a página da dieta com todas as suas refeições detalhadas."
    }
];

export default function HowItWorksSection() {
    return (
        <section id="how-it-works" className="py-16 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                         <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Como Funciona</div>
                        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Sua Dieta Personalizada em Poucos Passos</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Veja como é fácil e rápido transformar sua alimentação com o Elyve. Nosso processo combina tecnologia e cuidado humano para resultados incríveis.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid items-stretch gap-8 sm:max-w-4xl md:grid-cols-2 lg:max-w-5xl lg:grid-cols-3 mt-12">
                    {steps.map((step, index) => (
                        <Card key={index} className="hover:shadow-lg transition-shadow duration-300 flex flex-col">
                             <CardHeader className="items-center text-center">
                                {step.icon}
                            </CardHeader>
                            <CardContent className="flex flex-col flex-grow items-center text-center space-y-2">
                                <CardTitle className="font-headline text-xl">{step.title}</CardTitle>
                                <p className="text-muted-foreground flex-grow">{step.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
