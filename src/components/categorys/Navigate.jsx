import React from "react";
import { Link } from "react-router-dom";
import { GiSkirt } from "react-icons/gi";
import { IoHome } from "react-icons/io5";

import logoJmario from "@/assets/logoJmarioCouture.jpg";

const Navigate = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row p-5 mb-12 gap-5 items-center justify-center ">
        <Link to="/">
          <div className="flex flex-col w-full md:flex-row justify-center items-center md:gap-8 rounded-full shadow-lg shadow-thSecondary hover:scale-105 duration-200 px-8 p-3 cursor-pointer ">
            <div className="flex gap-4">
              <IoHome size={40} className="text-thSecondary" />
            </div>
          </div>
        </Link>
        <Link to="/producto1">
          <div className="flex flex-col w-full md:flex-row justify-center items-center md:gap-8 rounded-full shadow-lg shadow-[#f782b3] hover:scale-105 duration-200 px-8 p-3 cursor-pointer ">
            <div className="flex gap-4">
              <img
                src={logoJmario}
                alt="contact us"
                className="rounded-full object-cover w-10 h-10 shadow-lg shadow-[#f782b3]  "
              />
            </div>
          </div>
        </Link>
        <Link to="/producto2">
          <div className="flex flex-col w-full md:flex-row justify-center items-center md:gap-8 rounded-full shadow-lg shadow-[#fd6033] hover:scale-105 duration-200 px-8 p-3 cursor-pointer ">
            <div className="flex gap-4">
              <img
                src={logoJmario}
                alt="contact us"
                className="rounded-full object-cover w-10 h-10 shadow-lg shadow-[#fd6033]  "
              />
            </div>
          </div>
        </Link>
        <Link to="/producto3">
          <div className="flex flex-col w-full md:flex-row justify-center items-center md:gap-8 rounded-full shadow-lg shadow-white hover:scale-105 duration-200 px-8 p-3 cursor-pointer ">
            <div className="flex gap-4">
              <img
                src={logoJmario}
                alt="contact us"
                className="rounded-full object-cover w-10 h-10 shadow-lg shadow-white  "
              />
            </div>
          </div>
        </Link>
        <Link to="/producto4">
          <div className="flex flex-col w-full md:flex-row justify-center items-center md:gap-8 rounded-full shadow-lg shadow-[#5a979a] hover:scale-105 duration-200 px-8 p-3 cursor-pointer ">
            <div className="flex gap-4">
              <img
                src={logoJmario}
                alt="contact us"
                className="rounded-full object-cover w-10 h-10 shadow-lg shadow-[#5a979a]   "
              />
            </div>
          </div>
        </Link>
        <Link to="/producto5">
          <div className="flex flex-col w-full md:flex-row justify-center items-center md:gap-8 rounded-full shadow-lg shadow-gray-600 hover:scale-105 duration-200 px-8 p-3 cursor-pointer ">
            <div className="flex gap-4">
              <img
                src={logoJmario}
                alt="contact us"
                className="rounded-full object-cover w-10 h-10 shadow-lg shadow-gray-600   "
              />
            </div>
          </div>
        </Link>

        <Link to="/producto6">
          <div className="flex flex-col w-full md:flex-row justify-center items-center md:gap-8 rounded-full shadow-lg shadow-[#0627ce] hover:scale-105 duration-200 px-8 p-3 cursor-pointer ">
            <div className="flex gap-4">
              <img
                src={logoJmario}
                alt="contact us"
                className="rounded-full object-cover w-10 h-10 shadow-lg shadow-[#0627ce]  "
              />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Navigate;
