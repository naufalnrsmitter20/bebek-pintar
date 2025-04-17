import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <div className="w-full py-14 px-[22px] xl:px-32 bg-white">
        <div className="mx-auto">
          <ul className="block text-center space-y-3 lg:space-y-0 md:text-start md:flex justify-center items-center gap-6">
            {[
              { name: "Beranda", href: "#beranda" },
              { name: "Fitur", href: "#fitur" },
              { name: "Testimoni", href: "#testimoni" },
              { name: "Media Sosial Kami", href: "#media-sosial" },
            ].map((item, idx) => (
              <li data-aos="fade-right" data-aos-delay={300 * idx} key={idx} className="font-jakarta-sans font-normal text-[16px] text-black hover:text-primary-600 transition-colors duration-200">
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>

          <h2 data-aos="fade-up" className="mt-12 font-jakarta-sans text-[32px] font-bold text-center text-primary-500">
            Bebek Pintar
          </h2>
          <p data-aos="fade-up" className="mt-4 font-jakarta-sans text-lg text-tertiary-600 text-center">
            © 2025 LKS Marketing Online - SMK Telkom Malang
          </p>
        </div>
      </div>
    </>
  );
}
