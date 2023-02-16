import React from "react";
import { Link } from "react-router-dom";
import { GiSkirt, GiDress, GiLargeDress, GiAmpleDress } from "react-icons/gi";
import logoJmario from "@/assets/logoJmarioCouture.jpg";

const Navigate = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row p-5 mb-12 gap-5 items-center justify-center ">
        <Link to="/">
          <div className="flex flex-col w-full md:flex-row justify-center items-center md:gap-8 rounded-full shadow-lg shadow-white hover:scale-105 duration-200 px-12 p-3 cursor-pointer ">
            <div className="flex gap-4">
              <img
                src={logoJmario}
                alt="contact us"
                className="rounded-full object-cover w-9 h-9 shadow-lg shadow-thOrange   "
              />
              <GiSkirt size={40} className="text-white" />
            </div>
          </div>
        </Link>
        <Link to="/producto2">
          <div className="flex flex-col w-full md:flex-row justify-center items-center md:gap-8 rounded-full shadow-lg shadow-[#5a979a] hover:scale-105 duration-200 px-12 p-3 cursor-pointer ">
            <div className="flex gap-4">
              <img
                src={logoJmario}
                alt="contact us"
                className="rounded-full object-cover w-9 h-9 shadow-lg shadow-thOrange   "
              />
              <GiDress size={40} className="text-[#5a979a]" />
            </div>
          </div>
        </Link>
        <Link to="/producto3">
          <div className="flex flex-col w-full md:flex-row justify-center items-center md:gap-8 rounded-full shadow-lg shadow-[#8fbbeb] hover:scale-105 duration-200 px-12 p-3 cursor-pointer ">
            <div className="flex gap-4">
              <img
                src={logoJmario}
                alt="contact us"
                className="rounded-full object-cover w-9 h-9 shadow-lg shadow-thOrange   "
              />
              <GiLargeDress size={40} className="text-[#8fbbeb]" />
            </div>
          </div>
        </Link>
        <Link to="/producto4">
          <div className="flex flex-col w-full md:flex-row justify-center items-center md:gap-8 rounded-full shadow-lg shadow-[#0627ce] hover:scale-105 duration-200 px-12 p-3 cursor-pointer ">
            <div className="flex gap-4">
              <img
                src={logoJmario}
                alt="contact us"
                className="rounded-full object-cover w-9 h-9 shadow-lg shadow-thOrange   "
              />
              <GiAmpleDress size={40} className="text-[#0627ce]" />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Navigate;
