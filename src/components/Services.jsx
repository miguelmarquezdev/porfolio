import React from "react";

const desarrolloWeb = [
  { id: 1, nombre: "Diseño y desarrollo de sitios web responsive." },
  { id: 2, nombre: "Creación y mantenimiento de tiendas online." },
  {
    id: 3,
    nombre:
      "Optimización de la velocidad del sitio y experiencia del usuario (UX).",
  },
  {
    id: 4,
    nombre: "Cms entendible para cada usuario.",
  },
];
const SeoSem = [
  { id: 1, nombre: "Análisis de mercado y competencia." },
  {
    id: 2,
    nombre: "Planificación de estrategias de marketing personalizadas.",
  },
  {
    id: 3,
    nombre: "Creación y gestión de perfiles en plataformas sociales.",
  },
  {
    id: 4,
    nombre:
      "Campañas de publicidad en redes sociales (Facebook, Instagram, LinkedIn, Twitter, Pinterest, TikTok).",
  },
  {
    id: 5,
    nombre: "Campañas de pago por clic (CPC) en Google Ads, Bing Ads y redes sociales (Meta Ads).",
  },
  {
    id: 6,
    nombre: "Auditorías SEO y optimización on-page.",
  },
];
const DiseñoWeb = [
  { id: 1, nombre: "Creación y rediseño de identidad corporativa." },
  { id: 2, nombre: "Diseño de material gráfico para digital y print." },
  {
    id: 3,
    nombre:
      "Creación de banners publicitarios en (Photoshop, Illustrator, CorelDraw, Canva)",
  },
  {
    id: 4,
    nombre:
      "Creación de Logos corporativos reflejando los valores de cada empresa.",
  },
];

const Services = () => {
  return (
    <div className="bg-neutral-950 text-white lg:py-32 py-16" id="about">
      <div className="md:max-w-screen-xl mx-auto w-full md:px-4 px-4">
        <h2 className="text-center font-semibold text-2xl text-blue-400 pb-12">
          Los Servicios que Ofresco
        </h2>
        <div className="flex lg:flex-row sm:flex-col flex-col gap-10">
          <div className="lg:w-1/3 border border-blue-600 bg-white/5 rounded-2xl overflow-hidden group hover:bg-transparent transition-all duration-300 cursor-pointer">
            <h3 className="w-full bg-blue-600 text-white text-center py-3">
              Desarrollo Web y E-commerce
            </h3>
            <ul className="p-10  ">
              {desarrolloWeb.map((items) => (
                <li key={items.id} value={items.id} className="list-disc">
                  {items.nombre}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/3  border border-blue-600 bg-white/5 rounded-2xl overflow-hidden group hover:bg-transparent transition-all duration-300 cursor-pointer">
            <h3 className="w-full bg-blue-600 text-white text-center py-3">
              Marketing Digital SEO/SEM
            </h3>
            <ul className="p-10">
              {SeoSem.map((items) => (
                <li key={items.id} value={items.id} className="list-disc">
                  {items.nombre}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/3  border border-blue-600 bg-white/5 rounded-2xl overflow-hidden group hover:bg-transparent transition-all duration-300 cursor-pointer">
            <h3 className="w-full bg-blue-600 text-white text-center py-3">
              Diseño Gráfico
            </h3>
            <ul className="p-10  ">
              {DiseñoWeb.map((items) => (
                <li key={items.id} value={items.id} className="list-disc">
                  {items.nombre}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
