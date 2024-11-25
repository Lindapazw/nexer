"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
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
  { name: "Ekhi", image: "/images/client_ekhi.png" },
  { name: "Estabanell", image: "/images/client_estabanell.jpeg" },
  { name: "Millenium", image: "/images/client_millennium2.jpeg" },
  { name: "Opengy", image: "/images/client_opengy.webp" },
  { name: "Reden", image: "/images/client_reden.png" },
];

const HomeServices = () => {
  const autoplayPluginServices = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  );
  const autoScrollPluginClients = useRef(
    AutoScroll({ speed: 0.8, stopOnInteraction: false }),
  );

  return (
    <section className="container relative mx-auto flex min-h-[calc(100vh-3.25rem)] flex-col justify-center py-6 text-center">
      <motion.h2
        className="h2"
        initial={{ opacity: 0, y: 70, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        ¿Por qué elegir Nexer?
      </motion.h2>

      <motion.p
        className="p"
        initial={{ opacity: 0, y: 70, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        En Nexer, impulsamos la transición hacia un modelo energético sostenible
        con soluciones personalizadas. <br />
        Descubre cómo nuestro compromiso y experiencia pueden marcar la
        diferencia.
      </motion.p>

      <Carousel
        className="w-full lg:mt-10 xl:px-36"
        opts={{ startIndex: 1, loop: true }}
        plugins={[autoplayPluginServices.current]}
      >
        <CarouselContent className="-ml-6">
          {SERVICES.map((service) => (
            <CarouselItem
              key={service.name}
              className="relative mt-10 flex basis-full justify-center pl-6 md:basis-1/2 lg:basis-1/3"
            >
              <Card className="h-full max-w-80 bg-accent text-white lg:max-w-96">
                <CardHeader className="relative">
                  <div className="absolute -top-8 left-1/2 z-10 max-w-min -translate-x-1/2 rounded-full bg-[#7A8D82] p-4 text-white">
                    {service.icon}
                  </div>

                  <CardTitle className="px-10 pt-2 text-xl">
                    {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="p mt-0 text-white">{service.description}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <motion.h2
        className="h2 mt-5 lg:mt-20"
        initial={{ opacity: 0, y: 70, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Nuestros clientes
      </motion.h2>
      <motion.p
        className="p"
        initial={{ opacity: 0, y: 70, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        Colaboramos con empresas comprometidas con un futuro más sostenible
      </motion.p>

      <Carousel
        className="container mx-auto w-full xl:mt-5"
        opts={{ loop: true }}
        plugins={[autoScrollPluginClients.current]}
      >
        <CarouselContent className="-ml-10">
          {CLIENTS.map((client) => (
            <CarouselItem key={client.name} className="basis-auto pl-10">
              <div className="relative aspect-video h-16 lg:h-32">
                <Image
                  src={client.image}
                  alt={client.name}
                  fill
                  className="object-scale-down object-center"
                  sizes="(max-width: 768px) 10rem, 20rem"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div id="services" className="absolute -top-[3.25rem] h-[3.25rem]"></div>
    </section>
  );
};
export default HomeServices;
