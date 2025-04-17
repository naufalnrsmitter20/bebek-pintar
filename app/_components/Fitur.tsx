import React from "react";
import duck from "@/public/svg/bebek-pintar-left.svg";
import gear from "@/public/svg/gray-gear.svg";
import cart from "@/public/svg/gray-cart.svg";
import mic from "@/public/svg/gray-mic.svg";
import Image, { StaticImageData } from "next/image";

interface CardProps {
  title: string;
  img: StaticImageData;
  desc: string;
  className: string;
}

export default function Fitur() {
  const cardProperty: CardProps[] = [
    {
      title: "Voice Control Assistant",
      img: mic,
      desc: "Perintah suara untuk menghidupkan AC, TV, dan lampu malam",
      className: "absolute -left-10 -bottom-2",
    },
    {
      title: "Ramah di Kantong",
      img: cart,
      desc: "Harga murah tanpa mengorbankan fungsionalitas",
      className: "absolute -left-10 -bottom-6",
    },
    {
      title: "Tanpa Wi-Fi & Bluetooth",
      img: gear,
      desc: "Cukup colok USB, langsung berfungsi",
      className: "absolute -left-10 -bottom-6",
    },
    {
      title: "Desain Menggemaskan",
      img: duck,
      desc: "Karakter yang lucu dan menyegarkan, cocok untuk menjadi pelengkap rumah",
      className: "absolute -left-8 -bottom-5 rotate-12",
    },
  ];
  return (
    <>
      <div id="fitur" className="w-full py-14 px-[32px] md:px-[62px] xl:px-[124px]">
        <div data-aos="fade-out" className="bg-primary-50 lg:flex justify-between items-center font-jakarta-sans px-[40px] py-[36px] rounded-4xl overflow-hidden">
          <h1 data-aos="fade-right" data-aos-delay="500" className="font-bold text-[40px] text-primary-600 max-w-sm leading-11">
            Kenapa Sih Harus Bebek Pintar?
          </h1>
          <p data-aos="fade-left" data-aos-delay="500" className="lg:text-right mt-6 lg:mt-0 max-w-sm leading-6 text-black text-lg">
            Bebek Pintar adalah inovasi smart home yang mengutamakan kemudahan, efisiensi, dan lokalitas. Dirancang untuk menjawab kebutuhan rumah tangga modern
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {cardProperty.map((x, i) => (
            <div data-aos="fade-right" data-aos-delay={i * 300} key={i} className="bg-tertiary-100 rounded-4xl p-8">
              <div className="relative w-full h-[210px] bg-tertiary-300 rounded-[20px] overflow-hidden font-jakarta-sans">
                <Image src={x.img} alt={x.title} className={x.className} />
              </div>
              <h3 className="text-2xl text-black font-bold mt-[20px]">{x.title}</h3>
              <p className="text-base font-medium mt-[20px] text-tertiary-800">{x.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
