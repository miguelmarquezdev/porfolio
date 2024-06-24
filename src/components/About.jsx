import React from "react";
import imgabout from "../assets/img/banner-about-us.jpg";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { HiOutlineComputerDesktop } from "react-icons/hi2";

const About = () => {
  return (
    <div className="bg-neutral-950 text-white lg:py-32 py-16" id="about">
      <div className="md:max-w-screen-xl mx-auto w-full md:px-4 px-4">
        <h2 className="text-center font-semibold text-2xl text-blue-400 pb-12">
          Sobre Mi
        </h2>
        <div className="flex lg:flex-row sm:flex-col flex-col gap-20">
          <div className="lg:w-5/12 sm:w-full px-4">
            <div className="bg-gradient-to-r from-transparent to-blue-500 rounded-2xl">
              <img
                src={imgabout}
                alt=""
                className="rounded-2xl rotate-6 hover:rotate-0 transition-all duration-300 w-full"
              />
            </div>
          </div>
          <div className="lg:w-7/12 sm:w-full">
            <div className="grid md:grid-cols-3 grid-cols-2 gap-5 text-center">
              <div className="bg-white/5 rounded-xl p-5 flex justify-center flex-col items-center gap-5 hover:scale-105 transition-all duration-500">
                <div className=" rounded-full bg-white p-2">
                  <PiSuitcaseSimpleLight className="text-2xl text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg">Experiencia</h3>
                <p className="text-neutral-500 text-sm">+5 años de Trabajo</p>
              </div>
              <div className="bg-white/5 rounded-xl p-5 flex justify-center flex-col items-center gap-5 hover:scale-105 transition-all duration-500">
                <div className=" rounded-full bg-white p-2">
                <AiOutlineUsergroupAdd className="text-2xl text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg">Clientes</h3>
                <p className="text-neutral-500 text-sm">
                  +20 clientes Satisfechos
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-5 flex justify-center flex-col items-center gap-5 md:col-span-1 col-span-2 hover:scale-105 transition-all duration-500">
                <div className=" rounded-full bg-white p-2">
                <HiOutlineComputerDesktop className="text-2xl text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg">Proyectos</h3>
                <p className="text-neutral-500 text-sm">
                  +50 Proyectos
                </p>
              </div>
            </div>
            <div className="text-gray-500 pt-5">
              <p>
                Hola, soy Miguel Márquez, un apasionado{" "}
                <span className="text-yellow-600/90">desarrollador web</span>{" "}
                <span className="text-red-300">
                  con un fuerte enfoque en la creación de experiencias digitales
                </span>{" "}
                que cautivan, comunican y funcionan a la perfección. Me
                especializo en el desarrollo frontend, y tengo un profundo
                conocimiento de las tecnologías más actuales en el mercado.
              </p>
              <p>
                Mi trayectoria en el desarrollo web ha estado marcada por la
                constante búsqueda de innovación y la implementación de
                soluciones efectivas para los retos más complejos del diseño y
                programación web. Con un ojo para el detalle y otro en la
                usabilidad, mis proyectos son un equilibrio entre funcionalidad
                y estética.
              </p>
              <a href="https://wa.link/7kgcgx" target="_blank" className="mt-3 text-white py-2 px-5 bg-blue-600 border-blue-600 border rounded hover:bg-blue-700 hover:border-blue-700 transition-all duration-300 w-full lg:w-auto block lg:inline-block text-center">
                Hablemos
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
