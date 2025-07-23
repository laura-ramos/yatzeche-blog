
'use client';
import Navbar from "./Navbar";
import { useEffect, useState } from 'react';
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const links = [
    { href: '/', label: 'Inicio' },
    { href: '/blog', label: 'Tradiciones' },
    { href: '/dialecto', label: 'Dialecto' },
    { href: '/cultura', label: 'Cultura' },
  ];
  const pathname = usePathname();

  return (
    <header className={`fixed top-0 w-full z-50 backdrop-blur-sm ${scrolled || pathname !== '/' ? 'bg-white/80 shadow text-primary' : 'text-white'}`}>
      <Navbar title="Santa Ines" links={links} />
    </header>
  )
}