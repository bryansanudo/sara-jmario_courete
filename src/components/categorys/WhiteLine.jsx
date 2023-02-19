import React from "react";
import PageSection from "@/components/PageSection";

import product2 from "@/assets/categorys/whiteLine/product2.jpg";
import product1 from "@/assets/categorys/whiteLine/product1.jpg";
import product3 from "@/assets/categorys/whiteLine/product3.jpg";
import product4 from "@/assets/categorys/whiteLine/product4.jpg";
import product5 from "@/assets/categorys/whiteLine/product5.jpg";
import product6 from "@/assets/categorys/whiteLine/product6.jpg";
import product7 from "@/assets/categorys/whiteLine/product7.jpg";
import product8 from "@/assets/categorys/whiteLine/product8.jpg";
import product9 from "@/assets/categorys/whiteLine/product9.jpg";
import product10 from "@/assets/categorys/whiteLine/product10.jpg";
import product11 from "@/assets/categorys/whiteLine/product11.jpg";
import product12 from "@/assets/categorys/whiteLine/product12.jpg";

import Navigate from "@/components/categorys/Navigate";
import IconInstagram from "@/icons/IconInstagram";
import IconWpp from "@/icons/IconWpp";

const WhiteLine = () => {
  const portfolios = [
    {
      id: 1,
      src: product1,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/B5tbbGMHMe1/",
      codeWpp: "https://api.whatsapp.com/send?phone=3043300238",
    },
    {
      id: 2,
      src: product2,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/B2cWXY2Hf6Y/",
      codeWpp: "https://api.whatsapp.com/send?phone=3043300238",
    },
    {
      id: 3,
      src: product3,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/B7ruAEBHblu/",
      codeWpp: "https://api.whatsapp.com/send?phone=3043300238",
    },
    {
      id: 4,
      src: product4,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/ChlTyOMtFvX/",
      codeWpp: "https://api.whatsapp.com/send?phone=3043300238",
    },
    {
      id: 5,
      src: product5,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/B5lYNX4HmE-/",
      codeWpp: "https://api.whatsapp.com/send?phone=3043300238",
    },
    {
      id: 6,
      src: product6,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/BkKBPOiBy2Q/",
      codeWpp: "https://api.whatsapp.com/send?phone=3043300238",
    },
    {
      id: 7,
      src: product7,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/B5JvWXuH36S/",
      codeWpp: "https://api.whatsapp.com/send?phone=3043300238",
    },
    {
      id: 8,
      src: product8,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/B6KTUOJHEOj/",
      codeWpp: "https://api.whatsapp.com/send?phone=3043300238",
    },
    {
      id: 9,
      src: product9,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/Cmb6aWluZGB/",
      codeWpp: "https://api.whatsapp.com/send?phone=3043300238",
    },
    {
      id: 10,
      src: product10,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/B63IYn4nNt_/",
      codeWpp: "https://api.whatsapp.com/send?phone=3043300238",
    },
    {
      id: 11,
      src: product11,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/B7fDWWxHPTa/",
      codeWpp: "https://api.whatsapp.com/send?phone=3043300238",
    },
    {
      id: 12,
      src: product12,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/B4xpKPdHbAh/",
      codeWpp: "https://api.whatsapp.com/send?phone=3043300238",
    },
  ];

  return (
    <PageSection
      name="portafolio"
      title="¡Bienvenidos a J MARIO COUTURE! "
      subtitle={`
      ¿Estás buscando el vestido de baño perfecto para disfrutar del sol y el agua? Nuestros vestidos de baño son muy cómodos y duraderos ¡No esperes más y compra tu vestido de baño ahora! Mira nuestra amplia selección de estilos y tallas.`}
    >
      <div className="w-full bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4 ">
          <Navigate />
          <div className="grid gap-8 md:px-12 grid-cols-1 sm:grid-cols-2  lg:grid-cols-2">
            {portfolios.map(({ id, src, codeInstagram, category, codeWpp }) => (
              <div key={id} className="rounded-lg shadow-lg shadow-white group">
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

export default WhiteLine;
