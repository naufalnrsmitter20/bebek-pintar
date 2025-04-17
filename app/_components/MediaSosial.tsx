"use client";
import React from "react";
import bebek1 from "@/public/svg/bebek-bawah-1.svg";
import bebek2 from "@/public/svg/bebek-bawah-2.svg";
import memphismedium from "@/public/svg/memphis-medium-well.svg";
import memphisextralarge from "@/public/svg/memphis-xtralarge.svg";
import upgradeRumah from "@/public/svg/upgrade-rumah.svg";
import tiktok from "@/public/svg/tiktok.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function MediaSosial() {
  const router = useRouter();
  return (
    <>
      <div id="media-sosial" className="w-full px-8 py-8">
        <div className="bg-secondary-300 rounded-[52px] min-h-56 flex items-center justify-center px-6 lg:px-0 relative overflow-hidden">
          <div className="pt-[48px] lg:pt-[92px] pb-[52px] relative z-10">
            <Image data-aos="fade-down" src={upgradeRumah} alt="bebek" className="mb-[52px]" />
            <button data-aos="fade-up" onClick={() => router.push("https://www.tiktok.com/@homerunie")} className="flex items-center bg-white rounded-xl px-6 py-5 gap-4 mx-auto cursor-pointer">
              <Image src={tiktok} alt="tiktok" />
              <div className="font-jakarta-sans">
                <h4 className="text-[20px] font-bold text-black text-start">Bebek Pintar</h4>
                <p className="text-[14px] font-bold text-black text-start">@homerunie</p>
              </div>
            </button>
          </div>

          <Image data-aos="fade-right" data-aos-delay="500" src={memphisextralarge} alt="memphis" className="absolute -left-[500px] -bottom-[460px]" />
          <Image data-aos="fade-left" data-aos-delay="500" src={memphisextralarge} alt="memphis" className="absolute -right-[600px] -bottom-[360px]" />
          <Image data-aos="fade-down" data-aos-delay="500" src={memphismedium} alt="memphis" className="absolute right-[234px] -top-[180px]" />
          <Image data-aos="fade-right" data-aos-delay="1000" src={bebek1} alt="bebek 1" className="absolute -left-36 -bottom-40 scale-75 md:scale-100 md:-left-8 md:-bottom-14" />
          <Image data-aos="fade-left" data-aos-delay="1000" src={bebek2} alt="bebek 1" className="absolute -right-48 -bottom-32 md:-right-36 md:-bottom-20" />
        </div>
      </div>
    </>
  );
}
