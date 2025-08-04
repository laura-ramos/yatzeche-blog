
'use client';
import { useEffect, useState } from 'react';
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { MobileMenu } from "./MobileMenu";

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

  const pathname = usePathname();

  return (
    <header className={`fixed top-0 w-full z-50 backdrop-blur-sm transition-all duration-500 ${scrolled || pathname !== '/' ? 'bg-white shadow text-primary' : 'text-white'}`}>
      <nav className="container max-w-4xl mx-auto px-6 py-4 z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Logo />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>
          <div>
            <MobileMenu />
          </div>
        </div>
      </nav>
    </header>
  )
}