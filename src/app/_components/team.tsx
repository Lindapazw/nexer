"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

const MEMBERS = [
  {
    name: "José Luis Galindo Iranzo",
    title: "Partner",
    image: "/images/Jose.jpg",
    description: (
      <>
        <p>
          José Luis cuenta con más de 20 años de experiencia en el sector de las
          energías renovables e infraestructuras, gestionando proyectos por
          valor de 1.000 M€.
        </p>
        <p>
          Socio fundador de Enertis, grupo que inició su actividad en 2006, y
          que bajo su dirección ha crecido para consolidarse como una de las
          compañías líderes en servicios de asesoramiento, ingeniería y control
          de calidad, acumulando más de 200 GW de experiencia en proyectos de
          energía solar fotovoltaica en todo el mundo. José Luis ejerció de CEO
          hasta la reciente adquisición de Enertis por el grupo Applus+.
        </p>
        <p>
          Su actividad inversora y directiva se complementa con una larga
          experiencia previa en Dragados (Grupo ACS), liderando proyectos de
          infraestructuras y ocupando posiciones directivas en el ámbito
          nacional e internacional.
        </p>
        <p>
          Actualmente participa en diversas empresas y vehículos de inversión
          aprovechando las sinergias y experiencia acumulada dentro de la cadena
          de valor del sector de las Energías Renovables, destacando Nexer Solar
          S.L., proyecto empresarial del que es co-fundador y se especializa en
          las actividades de promoción y desarrollo de proyectos.
        </p>
        <p>
          José Luis es Ingeniero de Caminos, Canales y Puertos, por la
          Universidad Politécnica de Madrid.
        </p>
      </>
    ),
  },
  {
    name: "Manuel de Castro Zurita",
    title: "Partner",
    image: "/images/Manuel.jpg",
    description: (
      <>
        <p>
          Manuel cuenta con más de 15 años de experiencia en el sector de
          energías renovables, tanto en el mercado nacional como
          latinoamericano, así como en el segmento de generación distribuida,
          autoconsumo y PPAs.
        </p>
        <p>
          A lo largo de su carrera, Manuel ha fundado y liderado iniciativas
          empresariales dentro del sector renovable en España y Latam, como
          Nexer o Pacific Solar. Ha gestionado la promoción y venta de plantas
          solares por más más de 700 MW, entre ellas, la 2ª planta fotovoltaica
          más grande de Latam (2014). Durante este periodo, impulsó la actividad
          de autoconsumo y PPAs para el segmento residencial y comercial en
          México.
        </p>
        <p>
          Actualmente participa en diversas empresas y vehículos de inversión
          aprovechando las sinergias y experiencia acumulada dentro de la cadena
          de valor del sector de las Energías Renovables, destacando Nexer Solar
          S.L., proyecto empresarial del que es co-fundador y se especializa en
          las actividades de promoción y desarrollo de proyectos.
        </p>
        <p>
          Manuel es Ingeniero Agrónomo por la Universidad Politécnica de Madrid,
          Máster en Financiación de Energías Renovables por el IEB (Madrid),
          Especialista en Mercado Eléctrico por UNESA.
        </p>
      </>
    ),
  },
  {
    name: "Laura del Hierro Higuera",
    title: "Managing Director",
    image: "/images/Laura.jpg",
    description: (
      <>
        <p>
          Laura cuenta con más de 12 años de experiencia en el sector de
          energías renovables, enfocada principalmente en el desarrollo y
          ejecución de proyectos de diferentes tecnologías destacando su
          trayectoria en Villar Mir Energía y en el Grupo Enertis.
        </p>
        <p>
          Ha participado en la originación, diseño, valoración, desarrollo y
          construcción de multitud de proyectos greenfield y brownfield de las
          principales tipologías de activos renovables: solar fotovoltaico,
          eólico e hidráulico, interviniendo en más de 30 proyectos con una
          potencia agregada superior a 1 GW.
        </p>
        <p>
          Acumula un gran conocimiento técnico, regulatorio y administrativo en
          el sector energético, habiendo desarrollado con éxito varios proyectos
          renovables, como Project Manager, en empresas como Villar Mir Energía
          y el Grupo Enertis.
        </p>
        <p>
          Laura es Ingeniero Industrial por la Universidad Politécnica de Madrid
          (ETSII), con especialidad en Técnicas Energéticas.
        </p>
      </>
    ),
  },
];

const HomeTeam = () => {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  );

  return (
    <section className="relative min-h-[calc(100vh-3.25rem)] bg-transparent">
  

      {/* Contenido */}
      <div className="container relative mx-auto flex min-h-[calc(100vh-3.25rem)] py-6">
        <div className="flex grow flex-col items-center justify-center">
          <motion.h3
            className="h2 text-center text-black md:mt-5"
            initial={{ opacity: 0, y: 70, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Nuestro equipo
          </motion.h3>

          <motion.p
            className="p mb-4 text-black"
            initial={{ opacity: 0, y: 70, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            Acumulamos proyectos de éxito en el mercado nacional e internacional a lo largo de más de 20 años.
          </motion.p>

          <Carousel
            className="container mx-auto mt-4 w-full px-6 md:mt-8 md:px-0 lg:mt-20 xl:px-36"
            opts={{ startIndex: 1, loop: true }}
            plugins={[autoplayPlugin.current]}
          >
            <CarouselContent className="-ml-6">
              {MEMBERS.map((member) => (
                <Dialog key={member.name}>
                  <DialogTrigger asChild>
                    <CarouselItem className="relative basis-full cursor-pointer pl-6 md:basis-1/2 lg:basis-1/3">
                      <div className="relative mb-8 aspect-[3/4] w-full rounded-md overflow-hidden">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="absolute inset-0 object-cover object-center transition-transform duration-300 ease-in-out hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        
                      </div>
                      <div className="absolute right-2 top-2 flex items-center justify-center rounded-full bg-white p-2">
                          <Search />
                        </div>

                      <Card className="absolute inset-x-8 bottom-0 ml-6">
                        <CardHeader className="px-4 py-2 md:px-8 md:py-4">
                          <CardTitle className="text-center text-sm text-accent md:text-xl">
                            {member.name}
                          </CardTitle>
                          <CardDescription className="text-center text-xs font-semibold text-black md:text-sm">
                            {member.title}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </CarouselItem>
                  </DialogTrigger>

                  <DialogContent className="max-h-full overflow-y-auto">
                    <DialogHeader className="sticky -top-6 bg-white py-2">
                      <DialogTitle>{member.name}</DialogTitle>
                      <DialogDescription>{member.title}</DialogDescription>
                    </DialogHeader>

                    {member.description}
                  </DialogContent>
                </Dialog>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      <div id="team" className="absolute -top-[3.25rem] h-[3.25rem]"></div>
    </section>
  );
};
export default HomeTeam;
