import { Button } from "../ui/button";
import { AppStoreIcon } from "../icons/app-store-icon";
import { GooglePlayIcon } from "../icons/google-play-icon";
import Link from "next/link";

export default function DownloadSection() {
    return (
        <section id="download" className="py-16 md:py-24 lg:py-32">
            <div className="container text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Comece sua jornada saudável hoje
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl mt-4">
                    Disponível para iOS e Android. Baixe o Elyve e dê o primeiro passo para uma nova versão de si mesmo.
                </p>
                <div className="mt-8 flex justify-center gap-4 flex-wrap">
                    <Button asChild size="lg" className="h-14 text-base bg-black hover:bg-gray-800 text-white dark:bg-white dark:hover:bg-gray-200 dark:text-black w-56">
                        <Link href="#">
                            <AppStoreIcon className="w-6 h-6 mr-3" />
                            <div>
                                <p className="text-xs text-left">Download na</p>
                                <p className="text-xl font-semibold">App Store</p>
                            </div>
                        </Link>
                    </Button>
                    <Button asChild size="lg" className="h-14 text-base bg-black hover:bg-gray-800 text-white dark:bg-white dark:hover:bg-gray-200 dark:text-black w-56">
                        <Link href="#">
                            <GooglePlayIcon className="w-6 h-6 mr-3" />
                             <div>
                                <p className="text-xs text-left">Disponível no</p>
                                <p className="text-xl font-semibold">Google Play</p>
                            </div>
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
