"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Produtos", href: "#products" },
  { label: "Revendedores", href: "#revenuers" },
  { label: "Contato", href: "#contact" },
];

export const Header = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };
    const checkScrollIsOnTop = () => {
      setIsIntersecting(window.scrollY > 0);
    };
    checkScrollIsOnTop();
    checkScreen();
    window.addEventListener("resize", checkScreen);
    window.addEventListener("scroll", checkScrollIsOnTop);

    window.removeEventListener("scroll", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (isMobile === null) return null;
  if (isMobile)
    return (
      <>
        <header
          className={`fixed top-0 left-0 right-0 z-50 text-white px-6 py-2.5 ${
            (isIntersecting || isOpen) && "backdrop-blur-md bg-black/20"
          }`}
        >
          <nav className='flex justify-between items-center container mx-auto '>
            <a href='#'>
              <Image
                src='/images/logo.webo'
                alt='Vercel Logo'
                width={55}
                height={55}
                priority
              />
            </a>
            <button onClick={handleClick}>
              <FaBars />
            </button>
          </nav>
          <ul
            className={`flex flex-col gap-10 font-semibold items-center max-h-0 overflow-hidden transition-all duration-300 ease-in-out [&>li]:last-of-type:pb-3 ${
              isOpen ? "max-h-screen" : ""
            }`}
          >
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a onClick={handleClick} href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </header>
      </>
    );
  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 text-white px-6 py-2  ${
          isIntersecting && "backdrop-blur-md bg-black/20"
        }`}
      >
        <nav className='flex justify-between items-center container mx-auto'>
          <a href='#'>
            <Image
              src='/images/logo.webo'
              alt='Vercel Logo'
              width={70}
              height={70}
              priority
            />
          </a>

          <ul className='flex gap-12 font-semibold list-disc'>
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
          <a
            className='font-semibold border border-white px-6 py-3 rounded'
            href='#'
          >
            Nossos Produtos
          </a>
        </nav>
      </header>
    </>
  );
};
