import Link from "next/link";
import { ElyveLogo } from "../elyve-logo";
import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted/40">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <ElyveLogo />
            <p className="text-sm text-muted-foreground">
              Sua jornada para uma vida mais saudável, guiada por IA e especialistas.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 md:col-span-2">
            <div className="space-y-4">
              <h4 className="font-headline text-lg font-semibold">Elyve</h4>
              <ul className="space-y-2">
                <li><Link href="/sobre" className="text-sm text-muted-foreground hover:text-primary">Sobre Nós</Link></li>
                <li><Link href="/#features" className="text-sm text-muted-foreground hover:text-primary">Funcionalidades</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-headline text-lg font-semibold">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/termos" className="text-sm text-muted-foreground hover:text-primary">Termos e Condições</Link></li>
                <li><Link href="/termos#privacidade" className="text-sm text-muted-foreground hover:text-primary">Política de Privacidade</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between border-t pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Elyve. Todos os direitos reservados.
          </p>
          <div className="mt-4 flex space-x-4 sm:mt-0">
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
