import React from "react";
import PageSection from "@/components/PageSection";

import product1 from "@/assets/categorys/blueLine/product1.jpg";
import product2 from "@/assets/categorys/blueLine/product2.jpg";
import product3 from "@/assets/categorys/blueLine/product3.jpg";
import product4 from "@/assets/categorys/blueLine/product4.jpg";
import product5 from "@/assets/categorys/blueLine/product5.jpg";
import product6 from "@/assets/categorys/blueLine/product6.jpg";
import Navigate from "@/components/categorys/Navigate";

import blueLineVideo from "@/assets/categorys/blueLine/blueLine.mp4";
import IconInstagram from "@/icons/IconInstagram";
import IconWpp from "@/icons/IconWpp";

const BlueLine = () => {
  const portfolios = [
    {
      id: 1,
      src: product1,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/CoaLXITus-v/",
      codeWpp: "https://api.whatsapp.com/send?phone=3043300238",
    },
    {
      id: 2,
      src: product2,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/CoBIXojuC8N/",
      codeWpp: "https://api.whatsapp.com/send?phone=3043300238",
    },
    {
      id: 3,
      src: product3,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/Cn0QEqfuGtP/",
      codeWpp: "https://api.whatsapp.com/send?phone=3043300238",
    },
    {
      id: 4,
      src: product4,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/Cnjt6vOO3i4/",
      codeWpp: "https://api.whatsapp.com/send?phone=3043300238",
    },
    {
      id: 5,
      src: product5,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/CndGWHAukk8/",
      codeWpp: "https://api.whatsapp.com/send?phone=3043300238",
    },
    {
      id: 6,
      src: product6,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/CVdW5Q8Lf3m/",
      codeWpp: "https://api.whatsapp.com/send?phone=3043300238",
    },
  ];

  return (
    <PageSection
      name="portafolio"
      title="¬°Bienvenidos a J MARIO COUTURE! "
      subtitle={`
      ¬ŅEst√°s buscando el vestido de ba√Īo perfecto para disfrutar del sol y el agua? Nuestros vestidos de ba√Īo son muy c√≥modos y duraderos ¬°No esperes m√°s y compra tu vestido de ba√Īo ahora! Mira nuestra amplia selecci√≥n de estilos y tallas. `}
    >
      <div className="w-full bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4 ">
          <Navigate />
          <div className="grid gap-8 md:px-12 grid-cols-1 sm:grid-cols-2  lg:grid-cols-2">
            <div className="rounded-lg shadow-lg shadow-[#0627ce] group">
              <div className="flex flex-col items-center justify-center">
                <video
                  autoPlay
                  src={blueLineVideo}
                  loop
                  type="video/mp4"
                  playsInline
                  muted
                  className="h-[330px] md:h-[500px]  w-full  object-cover rounded-t-xl"
                />
                <p className="m-4 capitalize text-sm md:text-lg">T√≠tulo</p>
                <div className="flex gap-5">
                  <p>S-M-L-XL</p>
                  <p>$$$</p>
                </div>
                <div className="m-4 capitalize text-sm md:text-lg flex items-center justify-center gap-5">
                  <article className="group-hover:scale-125 duration-300">
                    <a
                      href="https://www.instagram.com/p/Cnszf0tKHix/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <IconInstagram />
                    </a>
                  </article>
                  <article className="group-hover:scale-125 duration-300">
                    <a
                      href="https://api.whatsapp.com/send?phone=3043300238"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <IconWpp />
                    </a>
                  </article>
                </div>
              </div>
            </div>
            {portfolios.map(({ id, src, codeInstagram, category, codeWpp }) => (
              <div
                key={id}
                className="rounded-lg shadow-lg shadow-[#0627ce] group"
              >
                <div className="flex flex-col items-center justify-center">
                  <img
                    src={src}
                    className="h-[330px] md:h-[500px]  w-full  object-cover rounded-t-xl "
                  />
                  <p className="m-4 capitalize text-sm md:text-lg">
                    {category}
                  </p>
                  <div className="flex gap-5">
                    <p>S-M-L-XL</p>
                    <p>$$$</p>
                  </div>
                  <div className="m-4 capitalize text-sm md:text-lg flex items-center justify-center gap-5">
                    <article className="group-hover:scale-125 duration-300">
                      <a href={codeInstagram} target="_blank" rel="noreferrer">
                        <IconInstagram />
                      </a>
                    </article>
                    <article className="group-hover:scale-125 duration-300">
                      <a href={codeWpp} target="_blank" rel="noreferrer">
                        <IconWpp />
                      </a>
                    </article>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default BlueLine;
