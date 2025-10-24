import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-[#262626] pt-4'>
      <div className='container flex flex-col md:flex-row text-center md:text-left justify-center  items-center gap-2 md:gap-8'>
        <Image src='/images/logo.webo' alt='logo' width={60} height={60} />

        <div className='flex flex-col gap-2'>
          <p className='text-white md:text-sm text-xs'>
            © {currentYear} Pop Show Pipoca Gourmet - Todos os direitos
            reservados.
          </p>
          <p className='text-[10px] md:text-xs text-zinc-500'>
            Algumas das imagens exibidas neste site têm caráter ilustrativo e
            foram geradas por inteligência artificial ou obtidas de bancos de
            imagens gratuitos. Não representam situações ou pessoas reais.
          </p>
        </div>
      </div>
      <div className='flex flex-col items-center mt-2 bg-black'>
        <a
          className='text-sm text-zinc-400 flex items-center py-0.5'
          href='https://www.github.com/matt-carmo'
          target='_blank'
        >
          Made with ❤️ by{" "}
          <span className='ml-2 flex items-center gap-1'>
            <FaGithub /> Matheus Carmo
          </span>
        </a>
      </div>
    </footer>
  );
}
