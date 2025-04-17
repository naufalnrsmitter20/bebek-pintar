import Image, { StaticImageData } from "next/image";
import React from "react";
import user from "@/public/svg/user-example.png";
import reza from "@/public/svg/gambarreza.svg";
import naufal from "@/public/svg/Naufal Keren.jpg";
import kutip from "@/public/svg/kutip.svg";
import orang1 from "@/public/svg/orang 1.jpg";
import orang2 from "@/public/svg/orang 2.jpg";

interface testimoniProps {
  author: string;
  status: string;
  img: StaticImageData;
  desc: string;
}

export default function Testimoni() {
  const cardProperty: testimoniProps[] = [
    {
      author: "Reza, Jakarta",
      img: reza,
      desc: "Suka banget! Nyampe kosan ga bingung nyari remote, cuman pake bebek pintar aja gampang",
      status: "Mahasiswa",
    },
    {
      author: "Rey, Surabaya",
      img: user,
      desc: "Harganya terjangkau tapi ga mengorbankan fungsionalitas. Mantap",
      status: "Tech Enthusiast",
    },
    {
      author: "Naufal, Malang",
      img: naufal,
      desc: "Awalnya cuman nyobain karena penasaran, ternyata works banget di kost, terima kasih bebek pintar",
      status: "Mahasiswa",
    },
    {
      author: "Effi, Jember",
      img: orang1,
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
              <p className="mb-4 text-black">Anakku suka naruh remot sembarangan, sekarang udah ga cape-cape lagi buat nyalain AC 👍🏻</p>
              <div className="flex items-center gap-3">
                <Image src={orang2} alt="user example" className="w-10 h-10 rounded-xl object-cover" />
                <div>
                  <p className="font-medium text-lg text-black">Deasy, Yogyakarta</p>
                  <p className="text-base text-tertiary-500">Ibu Rumah Tangga</p>
                </div>
              </div>
            </div>
            {cardProperty.map((x, i) => (
              <div data-aos="fade-up" data-aos-delay={(i + 1) * 500} key={i} className="bg-tertiary-100 p-8 rounded-4xl shadow">
                <Image src={kutip} alt="kutip" className="mb-5" />
                <p className="mb-4 text-black">{x.desc}</p>
                <div className="flex items-center gap-3">
                  <Image src={x.img} alt="user example" className="w-10 h-10 rounded-xl object-cover" />
                  <div>
                    <p className="font-medium text-lg text-black">{x.author}</p>
                    <p className="text-base text-tertiary-500">{x.status}</p>
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
