import bosh from '../../../public/bosh.png'
import circuit from '../../../public/circuit.png'
import philips from '../../../public/philips.png'
import nakata from '../../../public/nakata.jpeg'
import fag from '../../../public/fag.png'
import goodyear from '../../../public/good.png'
import Image from 'next/image'
import { FacebookLogoIcon, InstagramLogoIcon, WhatsappLogoIcon, YoutubeLogoIcon } from '@phosphor-icons/react/dist/ssr'

const brands = [
    { name: "Bosh", logo: bosh },
    { name: "Circuit", logo: circuit },
    { name: "Philips", logo: philips },
    { name: "Nakata", logo: nakata },
    { name: "Fag", logo: fag },
    { name: "GoodYear", logo: goodyear },
]


export default function Footer() {


    return (
        <section className='bg-blue-900 py-16 text-white'>
            <div className='container mx-auto px-4'>
                <div className='border-b border-white/20 pb-8'>
                    <h4 className='text-3xl font-semibold mb-8 text-center'>Marcas que trabalhamos</h4>

                    <div className='grid grid-cols-2 gap-8 lg:grid-cols-6'>
                        {brands.map((item, index) => (
                            <div key={index} className='bg-white flex items-center justify-center rounded-md'>
                                <Image
                                    src={item.logo}
                                    alt={item.name}
                                    width={150}
                                    height={70}
                                    quality={100}
                                    style={
                                        {
                                            width: "200px",
                                            height: "100px",
                                        }
                                    }
                                    className='object-contain'
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5'>
                    <div>
                        <h3 className='text-2xl font-semibold mb-2'>UgoParts</h3>
                        <p className='mb-4'>Desempenho começa com a escolha certa.</p>
                        <a href={`https://wa.me/5581987978247?text=Olá vim pelo site e gostaria de mais informações.`} target='_blank' className='bg-green-500 px-4 py-2 rounded-md '>Contato via WhatsApp</a>
                    </div>

                    <div>
                        <h3 className='text-2xl font-semibold mb-2'>Contatos</h3>
                        <p>Email: teste@teste.com</p>
                        <p>Telefone: (XX) 3333-2222</p>
                        <p>Rua XXXX, centro, Recife | PE </p>
                    </div>

                    <div>
                        <h3 className='text-2xl font-semibold mb-2'>Redes Sociais</h3>
                        <div className='flex gap-4'>
                            <a href={`https://wa.me/5581987978247?text=Olá vim pelo site e gostaria de mais informações.`} target='_blank'><WhatsappLogoIcon className='w-8 h-8' /></a>
                            <a href="#" target='_blank'><FacebookLogoIcon className='w-8 h-8' /></a>
                            <a href="#" target='_blank'><InstagramLogoIcon className='w-8 h-8' /></a>
                            <a href="#" target='_blank'><YoutubeLogoIcon className='w-8 h-8' /></a>
                        </div>
                    </div>
                </footer>

            </div>
        </section>
    )
}