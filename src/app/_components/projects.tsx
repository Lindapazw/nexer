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
    name: "PF Valdecabañas",
    image: "/images/project_valdecabanas.png",
    year: "2024",
    location: "Colmenar de Oreja (Madrid)",
    power: "4 MW",
    description: "RtB Mayo 2024 – Próximo inicio de la construcción",
  },
  {
    name: "PF Vallejón",
    image: "/images/project_vallejon.jpg",
    year: "2025",
    location: "Cabanillas de la Sierra (Madrid)",
    power: "5,6 MW",
    description:
      "La imagen corresponde a una simulación hiperrealista del estudio de integración paisajística. Previsión inicio construcción: 2025.",
  },
  {
    name: "PF Calera",
    image: "/images/project_calera.jpg",
    year: "2025",
    location: "Cabanillas de la Sierra (Madrid)",
    power: "6,5 MW",
    description:
      "La imagen corresponde a una simulación hiperrealista del estudio de integración paisajística. Previsión inicio construcción: 2025.",
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
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/images/project_hita_tardio.jpg")',
          backgroundAttachment: "fixed",
        }}
      />

      {/* Contenido */}
      <div className="container relative mx-auto flex min-h-[calc(100vh-3.25rem)]">
        <div className="flex grow flex-col items-center justify-center">
          <h2 className="h3 text-white">NUESTROS PROYECTOS</h2>

          <h3 className="h2 text-center text-white md:mt-5">
            Conoce algunos de nuestro proyectos
          </h3>

          <Carousel
            className="container mx-auto mt-8 w-full md:mt-20 xl:px-36"
            opts={{ loop: true }}
            plugins={[autoplayPlugin.current]}
          >
            <CarouselContent className="-ml-6">
              {PROJECTS.map((project) => (
                <Dialog key={project.name}>
                  <DialogTrigger asChild>
                    <CarouselItem className="relative basis-full cursor-pointer pl-6 md:basis-1/2 lg:basis-1/3">
                      <div className="relative h-[30rem] w-full">
                        <Image
                          src={project.image}
                          alt={`${project.name} image`}
                          fill
                          className="absolute inset-0 object-cover object-center"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />

                        <div className="span absolute inset-x-0 bottom-0 flex h-16 items-center bg-white pl-32 text-lg">
                          {project.name}
                        </div>
                        <div className="absolute bottom-0 left-4 flex aspect-square w-24 flex-col items-center justify-center bg-accent text-2xl font-medium text-white">
                          <span>{project.year}</span>
                          <span className="text-lg">{project.power}</span>
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
