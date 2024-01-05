import React from "react";
import project from "../assets/img/lost-peru.jpg";
import { Wordpress } from "../assets/icons/Wordpress";
import { Tailwind } from "../assets/icons/Tailwind";
import { Elementor } from "../assets/icons/Elementor";


const TAGS = {
  WORDPRESS: {
    name: "WordPress",
    class: "bg-white text-[#21759b] font-semibold",
    icon: Wordpress,
  },
  TAILWIND: {
    name: "Tailwind css",
    class: "bg-blue-950 text-white font-semibold",
    icon: Tailwind,
  },
  ELEMENTOR: {
    name: "Elementor",
    class: "bg-[#ffc5f3] text-[#92003b] font-semibold",
    icon: Elementor,
  },
};

const projects = [
  {
    title: `Página Web - Agencia de Viajes LOST IN PERU`,
    description:
      "Desarrollo del sitio web responsivo. Optimizado para SEO y rendimiento. Consultoria de marketing digital.",
    link: "https://lostinperu.com",
    image: project,
    tags: [TAGS.WORDPRESS, TAGS.TAILWIND, TAGS.ELEMENTOR],
  },
];
console.log(projects);

export const Projects = () => {
  return (
    <div className="bg-neutral-950 text-white lg:py-32 py-16" id="about">
      <div className="md:max-w-screen-md mx-auto w-full md:px-4 px-4">
        <h2 className="text-center font-semibold text-2xl text-blue-400 pb-12">
          Proyectos
        </h2>
        {projects.map((items) => (
          <div key={items.link}>
            <h3 className="text-lg font-semibold text-white dark:text-white">
              {items.title}
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              {items.description}
            </p>
            <div className="flex gap-2">
              {items.tags.map((tag) => (
                <span
                  className={`${tag.class} flex items-center gap-2 px-2 rounded-xl text-sm py-1`}
                  key={tag}
                >
                  <tag.icon /> {tag.name}
                </span>
              ))}
            </div>
            <a href={items.link} target="_blank" className="mt-5 block">
              <img src={items.image} alt="project" className="rounded-xl" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
