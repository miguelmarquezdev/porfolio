import React from "react";

export const Experience = () => {
  return (
    <div className="bg-neutral-950 text-white lg:py-32 py-16" id="about">
      <div className="md:max-w-screen-md mx-auto w-full md:px-4 px-4">
        <h2 className="text-center font-semibold text-2xl text-blue-400 pb-12">
          Mis Ultimos Trabajos
        </h2>

        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-sky-300 dark:text-gray-500">
              Actualmente...
            </time>
            <h3 className="text-lg font-semibold text-white dark:text-white">
              SEO/SEM - <span className="text-yellow-400">Proyecto Personal</span>
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Creador de Contenido optimizado para motores de Búsqueda. Publicidad en Facebook de Paquetes Turísticos para agencias de viaje en Cusco, Perú.
            </p>
            <a
              href="https://wa.link/7kgcgx" target="_blank"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded hover:bg-white hover:border-white hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              Saber Más{" "}
              <svg
                className="w-3 h-3 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-sky-300 dark:text-gray-500">
              Febrero 2022
            </time>
            <h3 className="text-lg font-semibold text-white dark:text-white">
              Principal Frontend y Creador de Contenido -{" "}
              <span className="text-red-500">AB Expeditions</span>
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Responsable del desarrollo y mantenimiento de las diferentes
              plataformas en la empresa. Mejora del contenido en un 30% en SEO.
              Implementación de analítica web.
            </p>
          </li>
          
        </ol>
      </div>
    </div>
  );
};
