import Link from "next/link";
import { useState } from "react";
import { NavLinks} from "./NavLinks";
import { linksMenu } from "@/data/Data";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>      
    <button onClick={toggleMenu} type="button" className="md:hidden p-2 text-primary">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
      {
        isOpen && (
          <div className="md:hidden absolute top-18 right-0 flex flex-col py-3 px-6 gap-3 mr-3 bg-white/50 backdrop-blur-md">
             <NavLinks/>
          </div>
        )
      }
    </>
  );
}