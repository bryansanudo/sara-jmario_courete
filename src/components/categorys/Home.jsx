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

import video1 from "@/assets/categorys/saraHome/video1.mp4";
import video2 from "@/assets/categorys/saraHome/video2.mp4";

import Navigate from "@/components/categorys/Navigate";

const Home = () => {
  const portfolios = [
    {
      id: 1,
      src: product1,
      category: "Titulo",
      code: "https://www.instagram.com/p/CDWzI5ghaPfhzviVuUBtS0S2AwV2wPqTNSMYjY0/",
      brand: "@sarazapata144",
    },
    {
      id: 2,
      src: product2,
      category: "Titulo",
      code: "https://www.instagram.com/p/Cbvr52XrJ8VJf-1I3TkSUUXcNMROySfDnB1e_U0/",
      brand: "@sarazapata144",
    },
    {
      id: 3,
      src: product3,
      category: "Titulo",
      code: "https://www.instagram.com/p/CdEvSMyLrAfJdlnjJ0DW9pIhEntdSNcTTWpO7U0/",
      brand: "@sarazapata144",
    },
    {
      id: 4,
      src: product4,
      category: "Titulo",
      code: "https://www.instagram.com/p/CaHhXFUutXN8xjauvDxsuVPv89wsxLExHooVV80/",
      brand: "@sarazapata144",
    },
    {
      id: 5,
      src: product5,
      category: "Titulo",
      code: "https://www.instagram.com/p/CltzF9Zu6A6dBTT_yDi_mErPsdhF7vl4XHbpH40/",
      brand: "@sarazapata144",
    },
    {
      id: 6,
      src: product6,
      category: "Titulo",
      code: "https://www.instagram.com/p/CoBFfJyOpgkWzZz8FRyAbjeObUEm91y5b6Wq7E0/",
      brand: "@sarazapata144",
    },
    {
      id: 7,
      src: product7,
      category: "Titulo",
      code: "https://www.instagram.com/p/CghQpdSOT6l_Kx5zTEFtIESujykarg_qmMbK8Q0/",
      brand: "@sarazapata144",
    },
    {
      id: 8,
      src: product8,
      category: "Titulo",
      code: "https://www.instagram.com/p/CekCUqVNkIE/",
      brand: "@sarazapata144",
    },
    {
      id: 9,
      src: product9,
      category: "Titulo",
      code: "https://www.instagram.com/p/CoSRhTquBP1X2M3r8ptNOd_CnFlmxDN4bN-BpQ0/",
      brand: "@sarazapata144",
    },
    {
      id: 10,
      src: product10,
      category: "Titulo",
      code: "https://www.instagram.com/p/ChYb5fYu6b5_AuYQhbMeRLncjxCyC-ZxIesnkI0/",
      brand: "@sarazapata144",
    },
    {
      id: 11,
      src: product11,
      category: "Titulo",
      code: "https://www.instagram.com/p/ChGe8KNOebU7H9VTHiNRA59D9ipZ8tyCxNDuXg0/",
      brand: "@sarazapata144",
    },
    {
      id: 12,
      src: product12,
      category: "Titulo",
      code: "https://www.instagram.com/p/CoN9GwjOP43A-wUqZqjQJyVW-9lNj8GoJP1uqM0/",
      brand: "@sarazapata144",
    },
    {
      id: 13,
      src: product13,
      category: "Titulo",
      code: "https://www.instagram.com/p/CZ-f59Tr3e46ZUwOsRQmQPRA8ITJ0T0Gobswkc0/",
      brand: "@sarazapata144",
    },
  ];

  return (
    <PageSection
      name="portafolio"
      title="Titulo Producto 1"
      subtitle={`
    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Dignissimos sunt enim eum possimus, culpa veritatis hic aspernatur
    numquam ducimus exercitationem fuga nemo consequatur odit
    laudantium voluptate facilis veniam perferendis pariatur?`}
    >
      <div className="w-full bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4 ">
          <Navigate />
          <div className="grid gap-8 md:px-12 grid-cols-1 sm:grid-cols-2  lg:grid-cols-2">
            <div className="rounded-lg shadow-lg shadow-thSecondary duration-200 hover:scale-105">
              <a
                href="https://www.instagram.com/p/CfK4ggtFZ_X5ivtmxHGsBFmGPl34dGaJSbfMPY0/"
                target="_blank"
                rel="noreferrer"
              >
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
                  <p className="m-4 capitalize text-sm md:text-lg">
                    @sarazapata144
                  </p>
                </div>
              </a>
            </div>
            <div className="rounded-lg shadow-lg shadow-thSecondary duration-200 hover:scale-105">
              <a
                href="https://www.instagram.com/p/Cc8hcCaFeDfxTU2HaD6gyfwPSFT3Kpg5ZljInU0/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex flex-col items-center justify-center">
                  <video
                    autoPlay
                    src={video1}
                    loop
                    type="video/mp4"
                    playsInline
                    muted
                    className="h-[330px] md:h-[500px]  w-full  object-cover rounded-t-xl"
                  />
                  <p className="m-4 capitalize text-sm md:text-lg">
                    @sarazapata144
                  </p>
                </div>
              </a>
            </div>
            {portfolios.map(({ id, src, code, category, brand }) => (
              <div
                key={id}
                className="rounded-lg shadow-lg shadow-thSecondary duration-200 hover:scale-105"
              >
                <a href={code} target="_blank" rel="noreferrer">
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src={src}
                      className="h-[330px] md:h-[500px]  w-full  object-cover rounded-t-xl "
                    />
                    <p className="m-4 capitalize text-sm md:text-lg">
                      {category}
                    </p>
                    <p className="m-4 text-sm md:text-lg">{brand}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default Home;
