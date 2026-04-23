"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowForward, IoMdMenu, IoMdClose } from "react-icons/io";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="relative flex justify-between items-center mx-auto w-full max-w-8xl py-5 px-4 md:px-10 bg-black">
        <Link href="/">
          <Image src="/images/betopialogo.png" alt="Betopia Group" width={100} height={50} className="hover:scale-105 cursor-pointer" />
        </Link>
        
        {/* Hamburger Menu Icon - Mobile Only */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-white text-3xl focus:outline-none z-50 p-2 -mr-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-5 cursor-pointer text-white">
          <li className="group flex items-center gap-1 hover:underline hover:text-orange-400">What we do <IoIosArrowDown className="transition-transform duration-400 group-hover:rotate-180" />
          </li>
          <li className="group flex items-center gap-1 hover:underline hover:text-orange-400">Who we are  <IoIosArrowDown className="transition-transform duration-400 group-hover:rotate-180" /></li>
          <li className="group flex items-center gap-1 hover:underline hover:text-orange-400">Impact & Insights  <IoIosArrowDown className="transition-transform duration-400 group-hover:rotate-180" /></li>
          <li className="group flex items-center gap-1 hover:underline hover:text-orange-400">News & Media <IoIosArrowDown className="transition-transform duration-400 group-hover:rotate-180" /></li>
          <li className="hover:underline hover:text-orange-400">Career</li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-2 text-sm">
            <Link href="/consutation" className="group flex items-center gap-1 px-4 py-2 border border-orange-400 rounded-lg font-semibold text-sm hover:cursor-pointer bg-linear-to-r from-orange-600 via-orange-500 to-orange-400 text-white hover:from-orange-600 hover:via-orange-600 hover:to-orange-500 hover:scale-95">Book a Consultation <IoIosArrowForward /></Link>
            <button className="px-5 py-2 rounded-lg border border-orange-400 font-semibold text-sm hover:cursor-pointer hover:bg-linear-to-r from-orange-600 via-orange-500 to-orange-400 text-white hover:scale-95">Sign In</button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black z-50 flex flex-col items-center justify-center gap-6 text-white">
          <ul className="flex flex-col gap-6 cursor-pointer text-center text-lg">
            <li className="group flex items-center justify-center gap-1 hover:underline hover:text-orange-400">What we do <IoIosArrowDown className="transition-transform duration-400 group-hover:rotate-180" /></li>
            <li className="group flex items-center justify-center gap-1 hover:underline hover:text-orange-400">Who we are <IoIosArrowDown className="transition-transform duration-400 group-hover:rotate-180" /></li>
            <li className="group flex items-center justify-center gap-1 hover:underline hover:text-orange-400">Impact & Insights <IoIosArrowDown className="transition-transform duration-400 group-hover:rotate-180" /></li>
            <li className="group flex items-center justify-center gap-1 hover:underline hover:text-orange-400">News & Media <IoIosArrowDown className="transition-transform duration-400 group-hover:rotate-180" /></li>
            <li className="hover:underline hover:text-orange-400">Career</li>
          </ul>
          <div className="flex flex-col gap-4 text-sm w-full px-10">
            <Link href="/consutation" className="group flex items-center justify-center gap-1 px-4 py-2 border border-orange-400 rounded-lg font-semibold text-sm bg-linear-to-r from-orange-600 via-orange-500 to-orange-400 text-white hover:ring-1 hover:ring-orange-400">Book a Consultation <IoIosArrowForward /></Link>
            <button className="px-5 py-2 rounded-lg border border-orange-400 font-semibold hover:bg-linear-to-r from-orange-600 via-orange-500 to-orange-400 text-white">Sign In</button>
          </div>
        </div>
      )}
    </>
  );
};
