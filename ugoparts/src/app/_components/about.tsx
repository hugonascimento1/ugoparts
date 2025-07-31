import Image from "next/image";
import LogoUgoParts from '../../../public/logoUgoParts.png'
import EstoqueImg from '../../../public/estoque-ugo (1).jpeg'
import { Check, MapPin } from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";

export default function About() {
    return (
        <section className=" py-16 ">
            <div className="container px-4 mx-auto ">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                            <Image
                                src={EstoqueImg}
                                alt="logo UgoParts"
                                fill
                                quality={100}
                                className=" object-cover hover:scale-110 duration-300"
                                priority
                            />
                        </div>

                        <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg border-4 overflow-hidden border-white">
                            <Image
                                src={LogoUgoParts}
                                alt="estoque-ugo"
                                fill
                                quality={100}
                                className=" object-cover hover:scale-110 duration-300"
                                priority
                            />
                        </div>


                    </div>

                    <div className="space-y-6 mt-10">
                        <h2 className="text-4xl font-bold">Sobre</h2>

                        <p>
                            Fundada em 2020, a <strong>UgoParts</strong> é uma distribuidora especializada em peças automotivas 
                            que preza pela <strong>qualidade</strong>, <strong>rapidez</strong> e <strong>confiança</strong>. 
                            Trabalhamos com as melhores marcas do mercado para garantir que você tenha sempre as peças certas para 
                            manter seu veículo em perfeito funcionamento.
                            <br />
                            Nosso compromisso é oferecer um atendimento ágil, suporte dedicado e uma experiência de compra segura, seja no balcão ou online.
                            Com uma equipe pronta para atender via WhatsApp, garantimos praticidade e eficiência para quem realmente entende de autopeças. 
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-center gap-2">
                                <Check className="text-blue-900" />
                                Aberto desde 2020
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-blue-900" />
                                Qualidade é nossa prioridade.
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-blue-900" />
                                Trabalhamos com as melhores marcas do mercado
                            </li>
                        </ul>

                        <div className=" flex gap-2">
                            <a href="#" className="bg-blue-900 text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md">
                                <WhatsappLogoIcon className="w-5 h-5 text-white" />
                                Contato via WhatsApp
                            </a>
                            <a href="#" className=" flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md">
                                <MapPin className="w-5 h-5 text-black" />
                                Endereço da Loja
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}