import React from "react";
import imgMiguel from "../assets/img/img-miguel-blue.png";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import cv from "../assets/cv-miguel-marquez.pdf"

export const Header = () => {
  return (
    <div className="bg-neutral-950 bg-fixed">
      <div className=" text-white md:max-w-screen-md mx-auto w-full flex flex-col justify-center items-center gap-5 md:pt-0 sm:pt-48 relative md:px-0 px-4 h-screen">
        <div className=" bg-fixed absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="flex flex-col justify-center items-center gap-5 relative">
          <h5>
            <i>Hola Soy</i>
          </h5>
          <h1 className="font-semibold text-5xl">Miguel Marquez</h1>
          <h5 className="text-yellow-500/90">Desarrollador Frontend</h5>
          <div className="flex gap-5">
            <a href={cv} target="_blank" download className="py-2 px-5 border-white border rounded hover:border-blue-700 transition-all duration-300 hover:bg-blue-600">
              Descargar CV
            </a>
            <a href="https://wa.link/he7prp" target="_blank" className="py-2 px-5 bg-blue-600 border-blue-600 border rounded hover:bg-blue-700 hover:border-blue-700 transition-all duration-300">
              Hablemos
            </a>
          </div>
          <img
            src={imgMiguel}
            alt="foto miguel"
            className="mt-10  md:w-auto sm:w-2/3 w-2/3"
          />
        </div>
        <div className="sm:absolute left-0 bottom-0 sm:flex sm:flex-col flex flex-row gap-5 py-5 text-xl text-gray-400">
          <FaInstagram />
          <FaFacebook />
          <FaGithub />
        </div>
        <a
          href="#about"
          className="hidden sm:block absolute rotate-90 right-0 bottom-12 text-gray-400"
        >
          Scroll Down
        </a>
      </div>
    </div>
  );
};
