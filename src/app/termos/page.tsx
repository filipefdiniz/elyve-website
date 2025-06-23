import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermosPage() {
    const sections = [
        { 
            id: "termos-uso",
            title: "1. Termos de Uso",
            content: "Ao utilizar o aplicativo Elyve, você concorda em seguir estes termos e condições. O serviço oferecido consiste em uma plataforma de nutrição que utiliza inteligência artificial para gerar planos alimentares personalizados, que são subsequentemente revisados e validados por nutricionistas profissionais. O uso do aplicativo é de sua total responsabilidade."
        },
        { 
            id: "privacidade",
            title: "2. Política de Privacidade",
            content: "Nós levamos sua privacidade a sério. Todas as informações coletadas durante a anamnese e uso do aplicativo são confidenciais e utilizadas exclusivamente para a personalização da sua experiência. Seus dados são armazenados de forma segura e não serão compartilhados com terceiros sem o seu consentimento explícito, exceto quando exigido por lei."
        },
        { 
            id: "garantia-revisao",
            title: "3. Garantia de Revisão por Nutricionistas",
            content: "Comprometemo-nos a garantir que todo plano alimentar gerado pela nossa inteligência artificial passe por um rigoroso processo de revisão por um de nossos nutricionistas parceiros. Esta etapa é fundamental para garantir a segurança, adequação e eficácia do seu plano alimentar. Nenhuma dieta é liberada para o usuário sem a aprovação profissional."
        },
        { 
            id: "seguranca-lgpd",
            title: "4. Segurança de Dados e LGPD",
            content: "O Elyve está em total conformidade com a Lei Geral de Proteção de Dados (LGPD). Empregamos medidas técnicas e organizacionais para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Você tem o direito de solicitar o acesso, correção e a exclusão de seus dados a qualquer momento através dos canais de suporte do aplicativo."
        },
        { 
            id: "exclusao-conta",
            title: "5. Exclusão de Conta",
            content: "Você pode solicitar a exclusão da sua conta e de todos os seus dados associados a qualquer momento. O processo pode ser iniciado diretamente nas configurações do seu perfil dentro do aplicativo. Uma vez confirmada, a exclusão é permanente e irreversível."
        }
    ];

    return (
        <div className="py-16 md:py-24 bg-card">
            <div className="container max-w-4xl mx-auto">
                <header className="text-center mb-12">
                    <h1 className="font-headline text-4xl font-bold text-primary sm:text-5xl">Termos e Condições</h1>
                    <p className="mt-4 text-lg text-muted-foreground">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
                </header>
                
                <div className="space-y-8">
                    {sections.map(section => (
                        <Card key={section.id} id={section.id}>
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">{section.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
