import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
import partsImage from '../../../public/pecas-s-fundo.png'
import Image from "next/image";

export default function Hero() {
    return(
        <section className="bg-gradient-to-r from-blue-950 to-blue-800 text-white relative overflow-hidden">

            <div>
                <Image 
                    src={partsImage}
                    alt="foto do cachorro"
                    fill
                    sizes="100vw"
                    priority
                    className="object-cover opacity-60 lg:hidden"
                />
                <div className="absolute inset-0 bg-black opacity-40 md:hidden">

                </div>
            </div>

            <div className="container mx-auto pb-16 pt-16 px-4 relative">
                <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10">
                            Sua oficina merece peças confiáveis, com entrega rápida e o melhor custo-benefício
                        </h1>

                        <p className="lg:text-lg">
                            Distribuímos peças atomotivas de alta qualidade para carros nacionais e importados. Atendemos oficinas, auto centers e clientes finais com eficiência e agilidade.
                        </p>

                        <div>
                            <a href="#" className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"><WhatsappLogoIcon className="w-5 h-5" /> Contato via WhatsApp</a>
                        </div>

                        <div className="mt-8">
                            <p className="text-sm mb-4">
                                <b className="bg-black text-white px-2 py-1 rounded-md">10% OFF</b> na primeira compra pelo WhatsApp. Aproveite! 
                            </p>
                        </div>
                    </div>

                    <div className="hidden md:block h-full relative">
                        <Image 
                            src={partsImage}
                            alt="foto peças"
                            className=" object-contain"
                            fill
                            sizes="(max-width: 768px) 0vw, 50vw"
                            quality={100}
                            priority
                        />
                    </div>

                </article>
            </div>

        </section>
    )
}