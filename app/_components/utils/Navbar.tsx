"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative w-full h-auto flex flex-col z-50">
      <div className="max-w-[94%] lg:max-w-[87.5%] xl:max-w-[1502px] mx-auto">
        <nav
          data-aos="fade-down"
          className="fixed transition-transform bg-white/85 backdrop-blur-md duration-500 top-8 w-[90%] 2xl:max-w-[1440px] xl:max-w-[1322px] lg:max-w-[1024px] xs:max-w-[480px] rounded-[64px] shadow-shadow-2 items-center py-4 px-6 left-1/2 transform -translate-x-1/2"
        >
          <div className="lg:px-10 flex items-center justify-between">
            <h3 className="font-bold text-[28px] font-jakarta-sans text-primary-600">Bebek Pintar</h3>
            <ul className="hidden md:flex justify-center items-center gap-6">
              {[
                { name: "Beranda", href: "#beranda" },
                { name: "Fitur", href: "#fitur" },
                { name: "Testimoni", href: "#testimoni" },
                { name: "Media Sosial Kami", href: "#media-sosial" },
              ].map((item, idx) => (
                <li key={idx} className="font-jakarta-sans font-normal text-[16px] text-black hover:text-primary-600 transition-colors duration-200">
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>

            <button onClick={toggleMenu} className="md:hidden text-black">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {isOpen && (
            <ul className="flex flex-col gap-4 mt-6 md:hidden text-center">
              {[
                { name: "Beranda", href: "#beranda" },
                { name: "Fitur", href: "#fitur" },
                { name: "Testimoni", href: "#testimoni" },
                { name: "Media Sosial Kami", href: "#media-sosial" },
              ].map((item, idx) => (
                <li key={idx} className="font-jakarta-sans font-medium text-[16px] text-black hover:text-primary-600 transition-colors duration-200">
                  <Link href={item.href} onClick={() => setIsOpen(false)}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </div>
    </div>
  );
}
