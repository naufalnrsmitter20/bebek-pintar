"use client";
import Image from "next/image";
import React from "react";
import DuckTitle from "@/public/svg/RumahPintarBersamaBebekPintar.svg";
import BebekJumbo from "@/public/svg/bebek-pintar-jumbo.svg";
import MemphisLarge from "@/public/svg/memphis-xl.svg";
import MemphisMedium from "@/public/svg/memphis-sm.svg";
import MemphisSmall from "@/public/svg/memphis-xs.svg";
import { MoveRight } from "lucide-react";
import { sendEvent } from "@/lib/gtag";

export default function Beranda() {
  return (
    <>
      <div id="beranda" className="bg-secondary-300 min-h-screen w-full h-full rounded-b-[104px] lg:rounded-b-[128px] relative flex flex-col justify-center px-[32px] md:px-[62px] xl:px-[124px] pb-28 lg:pt-64 overflow-hidden">
        <div className="w-full max-w-3xl relative z-40">
          <Image data-aos="fade-right" src={DuckTitle} alt="Rumah Pintar Bersama Bebek Pintar!" className="object-contain" />
          <p data-aos="fade-right" data-aos-delay="500" className="text-black font-jakarta-sans text-[18px] max-w-xs mt-[30px] lg:mt-[52px]">
            Perkenalkan Si Bebek Pintar, bebek yang bisa jadi partner kamu dirumah dengan berbagai fitur menarik!{" "}
          </p>
          <button
            onClick={() => {
              sendEvent({
                action: "click_whatsapp",
                category: "interaksi_user",
                label: "Tombol WhatsApp",
                value: 1,
              });

              window.open("https://wa.link/yqdbei", "_blank");
            }}
            data-aos="fade-right"
            data-aos-delay="1000"
            className="bg-primary-600 rounded-full px-6 py-3 cursor-pointer text-white text-[16px] font-medium mt-5 flex justify-center items-center gap-4"
          >
            <span>Pesan Sekarang Juga</span>
            <MoveRight className="text-white" />
          </button>
        </div>
        <Image src={MemphisSmall} data-aos="fade-in" data-aos-delay="1000" alt="memphis" className="absolute bottom-36 lg:right-[454px] lg:top-40" />
        <Image src={MemphisMedium} data-aos="fade-in" data-aos-delay="1000" alt="memphis" className="absolute right-[544px] -bottom-16" />
        <Image src={MemphisLarge} data-aos="fade-left" alt="memphis" className="absolute -right-[140px] md:-right-[340px] -bottom-[100px] md:-bottom-[320px]" />
        <Image src={BebekJumbo} data-aos="fade-left" data-aos-delay="1500" alt="bebek pintar" className="absolute -right-40 -bottom-40" />
      </div>
    </>
  );
}
