'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, MedalIcon, PackageCheckIcon, ShoppingBasketIcon, TruckIcon, WrenchIcon } from 'lucide-react'
import { WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import customer1 from '../../../public/customer1.jpeg'
import customer2 from '../../../public/customer2.jpeg'
import customer3 from '../../../public/customer3.jpeg'

const testimonials = [
    {
        content:
            "Trabalhar com a equipe da UgoParts foi uma experiência extremamente positiva. Desde o primeiro contato, demonstraram profissionalismo, atenção aos detalhes e, principalmente, compromisso com a qualidade. Fiquei impressionado com a agilidade no atendimento e com a clareza nas informações técnicas. Hoje, com o sistema implementado, economizamos tempo e aumentamos nossa produtividade. Recomendo fortemente!",
        author: "João Pedro Silva",
        role: "Gerente de Logística",
        image: customer1,
    },
    {
        content:
            "Precisei de uma solução personalizada para o meu negócio e a UgoParts atendeu perfeitamente às minhas expectativas. A equipe não só entendeu minhas necessidades como também sugeriu melhorias que eu nem havia considerado. O resultado foi um sistema robusto, rápido e intuitivo. O suporte técnico também é excelente, sempre prontos para ajudar com qualquer dúvida. Sem dúvidas, uma das melhores decisões que tomei este ano.",
        author: "Gabriela Costa",
        role: "Empresária",
        image: customer3,
    },
    {
        content:
            "Confesso que estava receoso em contratar uma solução tecnológica para a minha oficina, mas a UgoParts me surpreendeu desde o primeiro contato. O sistema é simples de usar, muito bem pensado e trouxe uma enorme praticidade para o meu dia a dia. Agora consigo gerenciar peças, pedidos e clientes com muito mais eficiência. Agradeço à equipe pelo excelente atendimento e suporte constante.",
        author: "Carlos Menezes",
        role: "Proprietário de Oficina",
        image: customer2,
    },
];



export default function Testimonials() {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,

    })

    function scrollPrev() {
        emblaApi?.scrollPrev();
    }

    function scrollNext() {
        emblaApi?.scrollNext();
    }

    return (
        <section className="bg-black py-16">
            <div className="container mx-auto px-4 flex flex-col items-center justify-center">

                <h2 className="text-4xl text-white text-center font-bold mb-12">Depoimentos dos nossos clientes</h2>

                <div className='relative max-w-4xl mx-auto'>
                    <div className='overflow-hidden' ref={emblaRef}>
                        <div className='flex'>
                            {testimonials.map((item, index) => (
                                <div key={index} className='flex-[0_0_100%] min-w-0 w-[100px] md:w-auto px-3'>
                                    <article className='bg-gray-700 rounded-2xl p-6 space-y-4 h-full flex flex-col'>
                                        <div className='flex flex-col items-center text-center space-y-4'>
                                            <div className='relative w-24 h-24'>
                                                <Image
                                                    src={item.image}
                                                    alt={item.author}
                                                    fill
                                                    sizes='96px'
                                                    className='object-cover rounded-full'
                                                />
                                            </div>

                                            <p className='text-gray-200'>{item.content}</p>

                                            <div>
                                                <p className='font-bold text-white'>{item.author}</p>
                                                <p className='text-sm text-gray-400'>{item.role}</p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button onClick={scrollPrev} className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'>
                        <ChevronLeft className='w-6 h-6 text-gray-600 ' />
                    </button>

                    <button onClick={scrollNext} className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'>
                        <ChevronRight className='w-6 h-6 text-gray-600 ' />
                    </button>

                </div>
            </div>
        </section>
    )
}