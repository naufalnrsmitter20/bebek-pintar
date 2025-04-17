import Image, { StaticImageData } from "next/image";
import React from "react";
import user from "@/public/svg/user-example.png";
import kutip from "@/public/svg/kutip.svg";

interface testimoniProps {
  author: string;
  status: string;
  img: StaticImageData;
  desc: string;
}

export default function Testimoni() {
  const cardProperty: testimoniProps[] = [
    {
      author: "Effi Malang",
      img: user,
      desc: "Sebagai ibu rumah tangga yang suka multitasking, ini cocok banget buat saya!",
      status: "Ibu Rumah Tangga",
    },
    {
      author: "Effi Malang",
      img: user,
      desc: "Sebagai ibu rumah tangga yang suka multitasking, ini cocok banget buat saya!",
      status: "Ibu Rumah Tangga",
    },
    {
      author: "Effi Malang",
      img: user,
      desc: "Sebagai ibu rumah tangga yang suka multitasking, ini cocok banget buat saya!",
      status: "Ibu Rumah Tangga",
    },
    {
      author: "Effi Malang",
      img: user,
      desc: "Sebagai ibu rumah tangga yang suka multitasking, ini cocok banget buat saya!",
      status: "Ibu Rumah Tangga",
    },
  ];
  return (
    <>
      <div id="testimoni" className="py-14 w-full px-[32px] md:px-[62px] xl:px-[124px]">
        <div data-aos="fade-in" className="bg-primary-50 font-jakarta-sans px-[40px] py-[36px] rounded-4xl overflow-hidden">
          <h1 data-aos="fade-left" data-aos-delay="500" className="font-bold text-[40px] text-primary-600 text-center leading-11">
            Apa Kata Mereka?
          </h1>
          <p data-aos="fade-right" data-aos-delay="500" className="text-center leading-6 mt-[20px] text-black text-lg">
            Mereka udah coba duluan, dan hasilnya? Pada jatuh cinta sama Bebek Pintar! Yuk, intip pendapat mereka yang udah merasakan serunya punya rumah pintar.
          </p>
        </div>
        <div className="mt-14 font-jakarta-sans">
          <div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row-dense lg:grid-cols-3 gap-8">
            <div data-aos="fade-up" className="bg-tertiary-100 p-8 rounded-4xl shadow col-span-1 lg:col-span-2">
              <Image src={kutip} alt="kutip" className="mb-5" />
              <p className="mb-4">Sebagai ibu rumah tangga yang suka multitasking, ini cocok banget buat saya!</p>
              <div className="flex items-center gap-3">
                <Image src={user} alt="user example" className="w-10 h-10 rounded-xl object-cover" />
                <div>
                  <p className="font-medium text-lg text-black">Effi, Malang</p>
                  <p className="text-base text-tertiary-500">Ibu Rumah Tangga</p>
                </div>
              </div>
            </div>
            {cardProperty.map((x, i) => (
              <div data-aos="fade-up" data-aos-delay={(i + 1) * 500} key={i} className="bg-tertiary-100 p-8 rounded-4xl shadow">
                <Image src={kutip} alt="kutip" className="mb-5" />
                <p className="mb-4">Sebagai ibu rumah tangga yang suka multitasking, ini cocok banget buat saya!</p>
                <div className="flex items-center gap-3">
                  <Image src={user} alt="user example" className="w-10 h-10 rounded-xl object-cover" />
                  <div>
                    <p className="font-medium text-lg text-black">Effi, Malang</p>
                    <p className="text-base text-tertiary-500">Ibu Rumah Tangga</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
