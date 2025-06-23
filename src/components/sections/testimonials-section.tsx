import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana Silva",
    role: "Usuária do App",
    avatar: "AS",
    image: "/testimonial-ana.png",
    quote: "O Elyve transformou minha relação com a comida! As dietas são deliciosas e fáceis de seguir. A IA realmente entende o que eu preciso."
  },
  {
    name: "Dr. Carlos Mendes",
    role: "Nutricionista Parceiro",
    avatar: "CM",
    image: "/testimonial-carlos.png",
    quote: "Como profissional, a plataforma otimiza meu tempo. A IA cria uma base excelente, e eu faço os ajustes finos, garantindo qualidade e segurança para o paciente."
  },
  {
    name: "Mariana Costa",
    role: "Usuária do App",
    avatar: "MC",
    image: "/testimonial-mariana.png",
    quote: "Finalmente um app que leva em conta minhas restrições alimentares de forma inteligente. As dicas diárias são um ótimo bônus!"
  },
];

const renderStars = () => {
    return Array(5).fill(null).map((_, i) => (
        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
    ));
};

export default function TestimonialsSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">O que dizem sobre o Elyve</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Veja a opinião de quem usa e confia no nosso trabalho para construir uma vida mais saudável.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-1 md:gap-12 lg:max-w-5xl lg:grid-cols-3 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardContent className="p-6">
                <div className="flex mb-4">{renderStars()}</div>
                <blockquote className="text-lg text-foreground mb-4">"{testimonial.quote}"</blockquote>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
