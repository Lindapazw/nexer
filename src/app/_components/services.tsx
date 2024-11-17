"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import Autoplay from "embla-carousel-autoplay";
import { ChartColumnBig, Handshake, Presentation } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const SERVICES = [
  {
    icon: <Presentation />,
    name: "Desarrollo de Proyectos",
    description:
      "Identificamos, diseñamos y desarrollamos proyectos desde su fase inicial hasta su puesta en marcha, asegurando la viabilidad técnica.",
  },
  {
    icon: <ChartColumnBig />,
    name: "Planificación Estratégica",
    description:
      "Creamos estrategias adaptadas para maximizar el impacto y la eficiencia de los proyectos, alineándonos con objetivos de sostenibilidad.",
  },
  {
    icon: <Handshake />,
    name: "Consultoría Energética",
    description:
      "Como expertos involucrados con el sector, brindamos asesoramiento especializado adaptándonos a las necesidades de nuestros clientes",
  },
];

const CLIENTS = [
  { name: "Repsol", image: "/images/client_repsol.png" },
  { name: "Hive Energy", image: "/images/client_hive.png" },
  { name: "Greenwood Energy", image: "/images/client_greenwood.png" },
  { name: "Elecnor", image: "/images/client_elecnor.png" },
  { name: "Blacksalt", image: "/images/client_blacksalt.png" },
  { name: "Acciona", image: "/images/client_acciona.png" },
  { name: "SunEdison", image: "/images/client_sunedison.png" },
];

const HomeServices = () => {
  const autoplayPluginServices = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  );
  const autoScrollPluginClients = useRef(
    AutoScroll({ speed: 0.8, stopOnInteraction: false }),
  );

  return (
    <section className="container relative mx-auto flex min-h-[calc(100vh-3.25rem)] flex-col justify-center text-center">
      <div id="services" className="absolute -top-[3.25rem] h-[3.25rem]"></div>

      <h2 className="text-2xl font-bold sm:text-3xl">¿Por qué elegir Nexer?</h2>

      <div className="mx-auto mt-2 h-0.5 w-36 bg-accent md:mt-4 md:h-1"></div>

      <p className="mt-4 md:mt-6">
        En Nexer, impulsamos la transición hacia un modelo energético sostenible
        con soluciones personalizadas.
      </p>
      <p>
        Descubre cómo nuestro compromiso y experiencia pueden marcar la
        diferencia.
      </p>

      <Carousel
        className="mt-6 w-full"
        opts={{ startIndex: 1, loop: true }}
        plugins={[autoplayPluginServices.current]}
      >
        <CarouselContent className="-ml-6">
          {SERVICES.map((service) => (
            <CarouselItem
              key={service.name}
              className="relative mt-8 basis-full pl-6 md:basis-1/2 lg:basis-1/3"
            >
              <Card className="h-full bg-accent text-white">
                <CardHeader className="relative">
                  <div className="absolute -top-8 left-1/2 z-10 max-w-min -translate-x-1/2 rounded-full bg-accent-light p-4 text-white">
                    {service.icon}
                  </div>

                  <CardTitle className="px-10 pt-2 text-xl">
                    {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{service.description}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <h2 className="mt-6 text-2xl font-bold sm:text-3xl">Nuestros clientes</h2>

      <div className="mx-auto mt-2 h-0.5 w-36 bg-accent md:mt-4 md:h-1"></div>

      <Carousel
        className="container mx-auto mt-6 w-full"
        opts={{ loop: true }}
        plugins={[autoScrollPluginClients.current]}
      >
        <CarouselContent className="-ml-6">
          {CLIENTS.map((client) => (
            <CarouselItem
              key={client.name}
              className="basis-1/3 pl-6 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
            >
              <div className="relative h-16">
                <Image
                  src={client.image}
                  alt={client.name}
                  fill
                  className="object-scale-down object-center"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
export default HomeServices;
