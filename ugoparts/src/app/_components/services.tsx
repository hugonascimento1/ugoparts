'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, MedalIcon, PackageCheckIcon, ShoppingBasketIcon, TruckIcon, WrenchIcon } from 'lucide-react'
import { WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr'

const services = [
    {
        title: "Peças Automotivas de Qualidade",
        description: "Trabalhamos com peçças originais, paralelas e de marcas reconhecidas no mercado automotivo.",
        icon: <WrenchIcon />
    },
    {
        title: "Entrega Rápida e Segura",
        description: "Entregamos em tempo recorde para garantir que seu veículo ou sua loja não pare.",
        icon: <TruckIcon />
    },
    {
        title: "Atacado e Varejo",
        description: "Atendemos desde oficinas e revendas até o cliente final com preços competitivos.",
        icon: <PackageCheckIcon />
    },
    {
        title: "Atendimento Personalizado via WhatsApp",
        description: "Tire dúvidas e faça seus pedidos com rapidez e praticidade direto pelo WhatsApp.",
        icon: <WhatsappLogoIcon />
    },
    {
        title: "Catálogo Variado de Produtos",
        description: "Filtros, pastilhas, correias, suspensões e muito mais. Tudo em um só lugar.",
        icon: <ShoppingBasketIcon />
    },
    {
        title: "Preços Competitivos",
        description: "Oferecemos o melhor custo-benefício sem abrir mão da qualidade.",
        icon: <MedalIcon />
    },
]

export default function Services() {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            "(min-width: 768px)": { slidesToScroll: 3 }
        }
    })

    return (
        <section className=" py-16">
            <div className="container mx-auto px-4">

                <h2 className="text-4xl font-bold mb-12">Serviços</h2>

                <div className='relative'>
                    <div className='overflow-hidden' ref={emblaRef}>
                        <div className='flex'>
                            {services.map((item, index) => (
                                <div key={index} className='flex-[0_0_100%] min-w-0 md:flex-[0_0_33.33%] px-3'>
                                    <article className='bg-gray-700 rounded-2xl p-6 space-y-4 h-full flex flex-col'>
                                        <div className='flex-1 flex items-start justify-between'>
                                            <div className='flex gap-3'>
                                                <span className='text-3xl text-white'>{item.icon}</span>

                                                <div>
                                                    <h3 className='font-bold text-gray-200 my-1 select-none'>{item.title}</h3>
                                                    <p className='text-gray-400 text-sm select-none'>{item.description}</p>
                                                </div>
                                            </div>

                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}