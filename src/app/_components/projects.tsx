"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const PROJECTS = [
  {
    name: "PF Hita del Tardío",
    image: "/images/project_hita_tardio.jpg",
    year: "2022",
    location: "Campo de Criptana (Ciudad Real)",
    power: "2 MW",
    description: "",
  },
  {
    name: "PF Talega",
    image: "/images/project_talega.jpg",
    year: "2022",
    location: "Saelices (Cuenca)",
    power: "2 MW",
    description: "",
  },
  {
    name: "PF Valdecabañas - En prog.",
    image: "/images/valdecabañas.jpg",
    year: "2024",
    location: "Colmenar de Oreja (Madrid)",
    power: "4 MW",
    description: "RtB Mayo 2024 – Próximo inicio de la construcción",
  },
  {
    name: "PF Vallejón (RtB)",
    image: "/images/project_vallejon.jpg",
    year: "2025",
    location: "Cabanillas de la Sierra (Madrid)",
    power: "5,6 MW",
    description:
      "Previsión inicio construcción: 2025.",
  },
  {
    name: "PF Calera (RtB)",
    image: "/images/project_vallejon.jpg",
    year: "2025",
    location: "Cabanillas de la Sierra (Madrid)",
    power: "6,5 MW",
    description:
      "Previsión inicio construcción: 2025.",
  },
  {
    name: "PF Valdesolar",
    image: "/images/project_valdesolar.jpg",
    year: "2020",
    location: "Valdecaballeros (Badajoz)",
    power: "256 MW",
    description: "",
  },
  {
    name: "PF María Elena",
    image: "/images/project_maria_elena.png",
    year: "2014",
    location: "Chile",
    power: "73 MW",
    description: "",
  },
  {
    name: "PF Siberia Solar",
    image: "/images/project_siberia_solar.png",
    year: "2010",
    location: "Valdecaballeros (Badajoz)",
    power: "11,4 MW",
    description: "",
  },
  {
    name: "PF Neosol",
    image: "/images/project_neosol.jpg",
    year: "2024",
    location: "Villanueva del Pardillo (Madrid)",
    power: "10 MW",
    description: "Primera planta",
  },
];

const HomeProjects = () => {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  );

  return (
    <section className="relative min-h-[calc(100vh-3.25rem)]">
      {/* imagen */}
      <div
        className="bg-attach-scroll md:bg-attach-fixed absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/images/project_hita_tardio.jpg")',
        }}
      />

      {/* Contenido */}
      <div className="container relative mx-auto flex min-h-[calc(100vh-3.25rem)] py-6">
        <div className="flex grow flex-col items-center justify-center">
          <motion.h3
            className="h2 text-center text-white md:mt-5"
            initial={{ opacity: 0, y: 70, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Nuestros proyectos
          </motion.h3>

          <motion.p
            className="p mb-4 text-white"
            initial={{ opacity: 0, y: 70, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            Conoce más acerca de nuestros proyectos
          </motion.p>

          <Carousel
            className="container mx-auto mt-0 w-full sm:mt-8 md:mt-20 xl:px-36"
            opts={{ loop: true }}
            plugins={[autoplayPlugin.current]}
          >
            <CarouselContent className="-ml-6">
              {PROJECTS.map((project) => (
                <Dialog key={project.name}>
                  <DialogTrigger asChild>
                    <CarouselItem className="relative basis-full cursor-pointer pl-6 md:basis-1/2 lg:basis-1/3">
                      <div className="relative aspect-[3/4] w-full">
                        <Image
                          src={project.image}
                          alt={`${project.name} image`}
                          fill
                          className="absolute inset-0 object-cover object-center"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />

                        <div className="span absolute inset-x-0 bottom-0 flex h-12 items-center bg-white pl-24 text-xs md:h-16 md:pl-32 md:text-lg">
                          {project.name}
                        </div>
                        <div className="absolute bottom-0 left-4 flex aspect-square w-16 flex-col items-center justify-center bg-accent text-sm font-medium text-white md:w-24 md:text-2xl">
                          <span className="">{project.year}</span>
                          <span className="text-xs md:text-lg">
                            {project.power}
                          </span>
                        </div>

                        <div className="absolute right-2 top-2 flex items-center justify-center rounded-full bg-white p-2">
                          <Search />
                        </div>
                      </div>
                    </CarouselItem>
                  </DialogTrigger>

                  <DialogContent className="max-h-full overflow-y-auto">
                    <DialogHeader className="sticky -top-6 bg-white py-2">
                      <DialogTitle>{project.name}</DialogTitle>
                      <DialogDescription>{project.power}</DialogDescription>
                    </DialogHeader>

                    <p className="p">Año: {project.year}</p>
                    <p className="p">Ubicación: {project.location}</p>
                    <p className="p">Potencia: {project.power}</p>

                    {project.description && (
                      <p className="description">{project.description}</p>
                    )}
                  </DialogContent>
                </Dialog>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      <div id="projects" className="absolute -top-[3.25rem] h-[3.25rem]"></div>
    </section>
  );
};
export default HomeProjects;
