import React from "react";
import PageSection from "@/components/PageSection";

import product1 from "@/assets/categorys/saraHome/product1.jpg";
import product2 from "@/assets/categorys/saraHome/product2.jpg";
import product3 from "@/assets/categorys/saraHome/product3.jpg";
import product4 from "@/assets/categorys/saraHome/product4.jpg";
import product5 from "@/assets/categorys/saraHome/product5.jpg";
import product6 from "@/assets/categorys/saraHome/product6.jpg";
import product7 from "@/assets/categorys/saraHome/product7.jpg";
import product8 from "@/assets/categorys/saraHome/product8.jpg";
import product9 from "@/assets/categorys/saraHome/product9.jpg";
import product10 from "@/assets/categorys/saraHome/product10.jpg";
import product11 from "@/assets/categorys/saraHome/product11.jpg";
import product12 from "@/assets/categorys/saraHome/product12.jpg";
import product13 from "@/assets/categorys/saraHome/product13.jpg";

import video2 from "@/assets/categorys/saraHome/video2.mp4";

import Navigate from "@/components/categorys/Navigate";

import IconInstagram from "@/icons/IconInstagram";
import IconWpp from "@/icons/IconWpp";

const Home = () => {
  const portfolios = [
    {
      id: 1,
      src: product1,
      category: "Titulo",
      codeInstagram:
        "https://www.instagram.com/p/CDWzI5ghaPfhzviVuUBtS0S2AwV2wPqTNSMYjY0/",
      codeWpp: "https://api.whatsapp.com/send?phone=3043300238",
    },
    {
      id: 2,
      src: product2,
      category: "Titulo",
      codeInstagram:
        "https://www.instagram.com/p/Cbvr52XrJ8VJf-1I3TkSUUXcNMROySfDnB1e_U0/",
      codeWpp: "https://api.whatsapp.com/send?phone=3043300238",
    },
    {
      id: 3,
      src: product3,
      category: "Titulo",
      codeInstagram:
        "https://www.instagram.com/p/CdEvSMyLrAfJdlnjJ0DW9pIhEntdSNcTTWpO7U0/",
      codeWpp: "https://api.whatsapp.com/send?phone=3043300238",
    },
    {
      id: 4,
      src: product4,
      category: "Titulo",
      codeInstagram:
        "https://www.instagram.com/p/CaHhXFUutXN8xjauvDxsuVPv89wsxLExHooVV80/",
      codeWpp: "https://api.whatsapp.com/send?phone=3043300238",
    },
    {
      id: 5,
      src: product5,
      category: "Titulo",
      codeInstagram:
        "https://www.instagram.com/p/CltzF9Zu6A6dBTT_yDi_mErPsdhF7vl4XHbpH40/",
      codeWpp: "https://api.whatsapp.com/send?phone=3043300238",
    },
    {
      id: 6,
      src: product6,
      category: "Titulo",
      codeInstagram:
        "https://www.instagram.com/p/CoBFfJyOpgkWzZz8FRyAbjeObUEm91y5b6Wq7E0/",
      codeWpp: "https://api.whatsapp.com/send?phone=3043300238",
    },
    {
      id: 7,
      src: product7,
      category: "Titulo",
      codeInstagram:
        "https://www.instagram.com/p/CghQpdSOT6l_Kx5zTEFtIESujykarg_qmMbK8Q0/",
      codeWpp: "https://api.whatsapp.com/send?phone=3043300238",
    },
    {
      id: 8,
      src: product8,
      category: "Titulo",
      codeInstagram: "https://www.instagram.com/p/CekCUqVNkIE/",
      codeWpp: "https://api.whatsapp.com/send?phone=3043300238",
    },
    {
      id: 9,
      src: product9,
      category: "Titulo",
      codeInstagram:
        "https://www.instagram.com/p/CoSRhTquBP1X2M3r8ptNOd_CnFlmxDN4bN-BpQ0/",
      codeWpp: "https://api.whatsapp.com/send?phone=3043300238",
    },
    {
      id: 10,
      src: product10,
      category: "Titulo",
      codeInstagram:
        "https://www.instagram.com/p/ChYb5fYu6b5_AuYQhbMeRLncjxCyC-ZxIesnkI0/",
      codeWpp: "https://api.whatsapp.com/send?phone=3043300238",
    },
    {
      id: 11,
      src: product11,
      category: "Titulo",
      codeInstagram:
        "https://www.instagram.com/p/ChGe8KNOebU7H9VTHiNRA59D9ipZ8tyCxNDuXg0/",
      codeWpp: "https://api.whatsapp.com/send?phone=3043300238",
    },
    {
      id: 12,
      src: product12,
      category: "Titulo",
      codeInstagram:
        "https://www.instagram.com/p/CoN9GwjOP43A-wUqZqjQJyVW-9lNj8GoJP1uqM0/",
      codeWpp: "https://api.whatsapp.com/send?phone=3043300238",
    },
    {
      id: 13,
      src: product13,
      category: "Titulo",
      codeInstagram:
        "https://www.instagram.com/p/CZ-f59Tr3e46ZUwOsRQmQPRA8ITJ0T0Gobswkc0/",
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
            <div className="rounded-lg shadow-lg shadow-thSecondary group">
              <div className="flex flex-col items-center justify-center">
                <video
                  autoPlay
                  src={video2}
                  loop
                  type="video/mp4"
                  playsInline
                  muted
                  className="h-[330px] md:h-[500px]  w-full  object-cover rounded-t-xl"
                />
                <p className="m-4 capitalize text-sm md:text-lg">Título</p>
                <div className="flex gap-5">
                  <p>S-M-L-XL</p>
                  <p>$$$</p>
                </div>
                <div className="m-4 capitalize text-sm md:text-lg flex items-center justify-center gap-5">
                  <article className="group-hover:scale-125 duration-300">
                    <a
                      href="https://www.instagram.com/p/CfK4ggtFZ_X5ivtmxHGsBFmGPl34dGaJSbfMPY0/"
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
                className="rounded-lg shadow-lg shadow-thSecondary group"
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

export default Home;
