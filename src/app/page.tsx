import Image from "next/image";
import { Header } from "./components/Header";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import Footer from "./components/Footer";

export default function Home() {
  const products_list = [
    {
      id: 1,
      name: "Ninho Color",
      image: "/images/caramelizada.webp",
      description:
        "A clássica pipoca gourmet como você nunca provou! Com o sabor cremoso do leite Ninho Colorido, ela combina o croc croc da pipoca com o toque suave e aveludado que todo mundo ama.",
    },
    {
      id: 2,
      name: "Ninho com nutela",
      image: "/images/ninho-com-nutella.webp",
      description:
        "A clássica pipoca gourmet como você nunca provou! Com o sabor cremoso do leite Ninho com Nutella, ela combina o croc croc da pipoca com o toque suave e aveludado que todo mundo ama.",
    },
    {
      id: 3,
      name: "Morango",
      image: "/images/morango.webp",
      description:
        "A clássica pipoca gourmet como você nunca provou! Com o sabor cremoso de morango, ela combina o croc croc da pipoca com o toque suave e aveludado que todo mundo ama.",
    },
    {
      id: 4,
      name: "Maracuja",
      image: "/images/maracuja.webp",
      description:
        "A clássica pipoca gourmet como você nunca provou! Com o sabor cremoso do leite Ninho, ela combina o croc croc da pipoca com o toque suave e aveludado que todo mundo ama",
    },
    {
      id: 5,
      name: "Ninho",
      image: "/images/ninho.webp",
      description:
        "A clássica pipoca gourmet como você nunca provou! Com o sabor cremoso do leite Ninho, ela combina o croc croc da pipoca com o toque suave e aveludado que todo mundo ama.",
    },
    {
      id: 6,
      name: "Ovomaltine",
      image: "/images/ovomaltine.webp",
      description:
        "A clássica pipoca gourmet como você nunca provou! Agora com o sabor inconfundível de Ovomaltine: aquela crocância deliciosa com o gostinho maltado e chocolatudo que conquista todo mundo.",
    },
    {
      id: 7,
      name: "Paçoca",
      image: "/images/pacoca.webp",
      description:
        "A clássica pipoca gourmet como você nunca provou! Agora com o sabor irresistível de paçoca, ela une o melhor dos dois mundos: o croc croc da pipoca gourmet com o gostinho marcante do amendoim que todo brasileiro ama.",
    },
    {
      id: 8,
      name: "Doce",
      image: "/images/doce.webp",
      description:
        "A clássica pipoca gourmet como você nunca provou! Simples, elegante e irresistível: o sabor doce que abraça o paladar e transforma qualquer momento em festa.",
    },
  ];
  const revenue_list = [
    {
      id: 1,
      name: "Pit Stop Universitário Campus ll",
      image: "/images/revenue-1.webp",
    },
    {
      id: 2,
      name: "Aki Tem Utilidades",
      image: "/images/revenue-2.webp",
    },
    {
      id: 3,
      name: "Bar e Lanchonete do Gérão",
      image: "/images/revenue-3.webp",
    },
    {
      id: 4,
      name: "Churrascaria Carvão de Ouro",
      image: "/images/revenue-4.webp",
    },

  ];
  return (
    <>
      <Header />
      <main>
        <section className='flex justify-center items-center h-[calc(100vh-7rem)] bg-[url("/images/hero-bg.webp")] bg-cover bg-top relative px-4'>
          <div className='absolute inset-0 bg-black/30'></div>
          <div className='text-center space-y-6 max-w-96 lg:max-w-3xl z-1'>
            <h1 className='text-4xl lg:text-7xl font-medium text-white'>
              A Pipoca Gourmet mais gostosa do Brasil
            </h1>
            {/* <p className='text-2xl text-white'>Explore nossos produtos e revendedores</p> */}
          </div>
        </section>
        <section className='bg-[#262626] py-6' id='products'>
          <div className='container mx-auto flex flex-col gap-6'>
            <h2 className='text-white text-2xl md:text-4xl text-center font-semibold'>
              Nossos produtos
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
              {products_list.map((product) => (
                <div
                  key={product.id}
                  className='rounded-4xl border-2 border-zinc-900 flex flex-col'
                >
                  <div>
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={250}
                      height={250}
                      className='object-contain h-64 w-full p-4'
                    />
                  </div>
                  <div className='bg-[#1D1D1D] p-4 rounded-b-4xl text-center flex-1'>
                    <h3 className='text-2xl font-semibold text-white'>
                      {product.name}
                    </h3>
                    <p className='text-gray-200 text-sm line-clamp-3'>{product.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className='bg-[#121212] py-6' id='revenuers'>
          <div className='container mx-auto flex flex-col gap-6'>
            <h2 className='text-white text-2xl md:text-4xl text-center font-semibold  lg:max-w-xl mx-auto'>
              Encontre nossos revendedores ou torne-se um parceiro
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {revenue_list.map((product) => (
                <div
                  key={product.id}
                  className='rounded-4xl overflow-hidden  border-2 border-zinc-900 relative'
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={250}
                    height={250}
                    className='w-full h-full object-cover'
                  />
                  <div className='bg-black/40 backdrop-blur p-4 text-center absolute bottom-0 rounded-b-4xl w-full'>
                    <h3 className='lg:text-xl font-semibold text-white'>
                      {product.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
            <a href="https://wa.me/5518997416262?text=Ol%C3%A1%2C%20gostaria%20de%20me%20tornar%20um%20revendedor%20de%20Pipoca%20Gourmet." target="_blank" className='bg-yellow-400 text-zinc-900 px-6 py-2 rounded-full mx-auto block font-semibold text-2xl'>
              Seja um revendedor
            </a>
          </div>
        </section>
        <section className='bg-[#262626] py-6 ' id='services'>
          <div className='container mx-auto flex flex-col gap-6'>
            <h2 className='text-white text-2xl md:text-4xl text-center font-semibold  lg:max-w-xl mx-auto'>
              Nossos Serviços
            </h2>
            <ul className='gap-8 flex flex-col  lg:[&>li:nth-child(even)]:flex-row-reverse lg:[&>li:nth-child(even)>div]:text-right lg:[&>li:nth-child(even)>div]:items-end '>
              <li className='flex flex-col text-center lg:text-left lg:flex-row items-center gap-6'>
                <Image
                  src='/images/cart-pop-show.webp'
                  alt='Vercel Logo'
                  width={500}
                  height={500}
                  className='rounded-3xl'
                />
                <div className='flex flex-col flex-wrap gap-4 text-white max-w-2xl'>
                  <h2 className='text-2xl lg:text-3xl font-semibold'>
                    Pop show para seu evento
                  </h2>
                  <p className='text-sx lg:text-base text-gray-300'>
                    Leve o sabor e o cheirinho da pipoca para o seu
                    evento!Nosso carrinho Pop Show é ideal para aniversários,
                    casamentos, eventos corporativos e muito mais.Um atendente
                    acompanha o carrinho, preparando as pipocas na hora — um
                    verdadeiro show à parte!
                  </p>
                  <div className='flex justify-center lg:justify-start'>
                    <a href="https://wa.me/5518997416262?text=Ol%C3%A1%2C%20gostaria%20de%20alugar%20o%20carrinho%20de%20pipoca%20para%20minha%20festa." target="_blank" className='bg-yellow-400 text-zinc-900 px-6 py-2 rounded-full block font-semibold text-2xl'>
                      Alugue para sua Festa
                    </a>
                  </div>
                </div>
              </li>
              <li className='flex flex-col text-center lg:text-left lg:flex-row items-center gap-6'>
                <Image
                  src='/images/delivery.webp'
                  alt='Vercel Logo'
                  width={500}
                  height={500}
                  className='rounded-3xl'
                />
                <div className='flex flex-col flex-wrap gap-4 text-white max-w-2xl'>
                  <h2 className='text-2xl lg:text-3xl font-semibold'>
                    Pop Show Delivery
                  </h2>
                  <p className='text-sx lg:text-base text-gray-300'>
                    Peça agora e receba pipocas gourmet <br /> no
                    conforto da sua casa
                  </p>
                  <div className='flex justify-center lg:justify-start'>
                    <a
                      href='https://www.ifood.com.br/delivery/presidente-prudente-sp/pop-show-pipoca-gourmet-jardim-vale-do-sol/d5fad01b-ac07-49e4-8c0b-d90c0ef28ee8'
                      target='_blank'
                      className='bg-yellow-400 text-zinc-900 px-6 py-2 rounded-full block font-semibold text-2xl'
                    >
                      Pedir pelo Ifood
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className='bg-[#121212] py-6 px-4' id='contact'>
          <div className=' mx-auto flex flex-col gap-6'>
            <h2 className='text-white text-2xl md:text-4xl text-center font-semibold  lg:max-w-xl mx-auto'>
              Contato e redes sociais
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto text-center'>
              <div className='bg-[#262626] rounded-lg py-6 px-2 lg:px-8 flex flex-col items-center justify-between gap-4'>
                <FaInstagram className='text-white text-5xl lg:text-6xl' />
                <span className='text-white text-2xl font-semibold'>
                  @pop_show_pipoca_gourmet
                </span>
                <p className='text-white'>
                  Siga a Pop Show Pipoca Gourmet no Instagram e acompanhe de
                  perto nossas delícias, novidades e bastidores cheios de sabor!
                </p>
                <a
                  className='bg-yellow-400 text-zinc-900 px-6 py-2 rounded-full block font-semibold text-2xl'
                  href='https://www.instagram.com/pop_show_pipoca_gourmet/'
                  target='_blank'
                >
                  Ir para o Instagram
                </a>
              </div>
              <div className='bg-[#262626] rounded-lg py-6 px-2 lg:px-8 flex flex-col items-center justify-between gap-4'>
                <FaWhatsapp className='text-white text-5xl lg:text-6xl' />
                <span className='text-white text-2xl font-semibold'>
                  +55 (18) 99741-6262
                </span>
                <p className='text-white'>
                  Fale com a gente pelo WhatsApp e peça já a sua pipoca gourmet!
                </p>
                <a
                  className='bg-yellow-400 text-zinc-900 px-6 py-2 rounded-full block font-semibold text-2xl'
                  href='https://wa.me/5518997416262?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20pedido%20de%20Pipoca%20Gourmet.'
                  target='_blank'
                >
                  Ir para o WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
