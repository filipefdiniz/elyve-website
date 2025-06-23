import Image from "next/image";
import DietasImage from "@/assets/dietas.png";
import DietaImage from "@/assets/dieta.png";
import RefeicaoImage from "@/assets/refeicao.png";

export default function ScreenshotsSection() {
  return (
    <section id="screenshots" className="py-16 md:py-24 lg:py-32">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
            Veja o Elyve em Ação
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Navegue por algumas das telas do nosso aplicativo e descubra como é
            fácil gerenciar sua nutrição.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex justify-center">
            <Image
              src={DietasImage}
              width={500}
              height={800}
              alt="App Screenshot 1"
              className="rounded-xl object-cover object-center transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src={DietaImage}
              width={500}
              height={800}
              alt="App Screenshot 2"
              className="rounded-xl object-cover object-center transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src={RefeicaoImage}
              width={500}
              height={800}
              alt="App Screenshot 3"
              className="rounded-xl object-cover object-center transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
