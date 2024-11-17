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
import Image from "next/image";
import { useRef } from "react";

const HomeTeam = () => {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  );

  return (
    <section className="relative flex min-h-[calc(100vh-3.25rem)] flex-col text-center text-white">
      <div
        id="team"
        className="absolute -top-[3.25rem] h-[3.25rem] w-full"
      ></div>

      <Image
        src="/images/team_background.png"
        alt="team"
        fill
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="flex grow flex-col items-center justify-center py-4 md:py-16">
        <h2 className="z-10 text-sm font-medium md:text-lg">NUESTRO EQUIPO</h2>

        <h3 className="z-10 mt-3 text-2xl font-medium md:mt-5 md:text-4xl">
          Conoce a nuestros expertos
        </h3>

        <div className="z-10 mt-2 h-0.5 w-36 bg-white md:mt-4 md:h-1"></div>

        <Carousel
          className="container mx-auto mt-8 w-full md:mt-20"
          opts={{ startIndex: 1, loop: true }}
          plugins={[autoplayPlugin.current]}
        >
          <CarouselContent className="-ml-6">
            <Dialog>
              <DialogTrigger asChild>
                <CarouselItem className="relative basis-full cursor-pointer pl-6 md:basis-1/2 lg:basis-1/3">
                  <div className="relative mb-8 aspect-[200/241] w-full">
                    <Image
                      src="/images/team_jose.png"
                      alt="team"
                      fill
                      className="absolute inset-0 object-cover object-center"
                    />
                  </div>

                  <Card className="absolute inset-x-8 bottom-0 ml-6 rounded-md">
                    <CardHeader className="px-8 py-3">
                      <CardTitle className="text-accent">
                        José Luis Galindo Iranzo
                      </CardTitle>
                      <CardDescription className="font-semibold text-gray-300">
                        Partner
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </CarouselItem>
              </DialogTrigger>

              <DialogContent className="max-h-full overflow-y-auto">
                <DialogHeader className="sticky -top-6 bg-white py-2">
                  <DialogTitle>José Luis Galindo Iranzo</DialogTitle>
                  <DialogDescription>Partner</DialogDescription>
                </DialogHeader>

                <p>
                  José Luis cuenta con más de 20 años de experiencia en el
                  sector de las energías renovables e infraestructuras,
                  gestionando proyectos por valor de 1.000 M€.
                </p>
                <p>
                  Socio fundador de Enertis, grupo que inició su actividad en
                  2006, y que bajo su dirección ha crecido para consolidarse
                  como una de las compañías líderes en servicios de
                  asesoramiento, ingeniería y control de calidad, acumulando más
                  de 200 GW de experiencia en proyectos de energía solar
                  fotovoltaica en todo el mundo. José Luis ejerció de CEO hasta
                  la reciente adquisición de Enertis por el grupo Applus+.
                </p>
                <p>
                  Su actividad inversora y directiva se complementa con una
                  larga experiencia previa en Dragados (Grupo ACS), liderando
                  proyectos de infraestructuras y ocupando posiciones directivas
                  en el ámbito nacional e internacional.
                </p>
                <p>
                  Actualmente participa en diversas empresas y vehículos de
                  inversión aprovechando las sinergias y experiencia acumulada
                  dentro de la cadena de valor del sector de las Energías
                  Renovables, destacando Nexer Solar S.L., proyecto empresarial
                  del que es co-fundador y se especializa en las actividades de
                  promoción y desarrollo de proyectos.
                </p>
                <p>
                  José Luis es Ingeniero de Caminos, Canales y Puertos, por la
                  Universidad Politécnica de Madrid.
                </p>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <CarouselItem className="relative basis-full cursor-pointer pl-6 md:basis-1/2 lg:basis-1/3">
                  <div className="relative mb-8 aspect-[200/241] w-full">
                    <Image
                      src="/images/team_manuel.png"
                      alt="team"
                      fill
                      className="absolute inset-0 object-cover object-center"
                    />
                  </div>

                  <Card className="absolute inset-x-8 bottom-0 ml-6 rounded-md">
                    <CardHeader className="px-8 py-3">
                      <CardTitle className="text-accent">
                        Manuel de Castro Zurita
                      </CardTitle>
                      <CardDescription className="font-semibold text-gray-300">
                        Partner
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </CarouselItem>
              </DialogTrigger>

              <DialogContent className="max-h-full overflow-y-auto">
                <DialogHeader className="sticky -top-6 bg-white py-2">
                  <DialogTitle>Manuel de Castro Zurita</DialogTitle>
                  <DialogDescription>Partner</DialogDescription>
                </DialogHeader>

                <p>
                  Manuel cuenta con más de 15 años de experiencia en el sector
                  de energías renovables, tanto en el mercado nacional como
                  latinoamericano, así como en el segmento de generación
                  distribuida, autoconsumo y PPAs.
                </p>
                <p>
                  A lo largo de su carrera, Manuel ha fundado y liderado
                  iniciativas empresariales dentro del sector renovable en
                  España y Latam, como Nexer o Pacific Solar. Ha gestionado la
                  promoción y venta de plantas solares por más más de 700 MW,
                  entre ellas, la 2ª planta fotovoltaica más grande de Latam
                  (2014). Durante este periodo, impulsó la actividad de
                  autoconsumo y PPAs para el segmento residencial y comercial en
                  México.
                </p>
                <p>
                  Actualmente participa en diversas empresas y vehículos de
                  inversión aprovechando las sinergias y experiencia acumulada
                  dentro de la cadena de valor del sector de las Energías
                  Renovables, destacando Nexer Solar S.L., proyecto empresarial
                  del que es co-fundador y se especializa en las actividades de
                  promoción y desarrollo de proyectos.
                </p>
                <p>
                  Manuel es Ingeniero Agrónomo por la Universidad Politécnica de
                  Madrid, Máster en Financiación de Energías Renovables por el
                  IEB (Madrid), Especialista en Mercado Eléctrico por UNESA.
                </p>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <CarouselItem className="relative basis-full cursor-pointer pl-6 md:basis-1/2 lg:basis-1/3">
                  <div className="relative mb-8 aspect-[200/241] w-full">
                    <Image
                      src="/images/team_laura.png"
                      alt="team"
                      fill
                      className="absolute inset-0 object-cover object-center"
                    />
                  </div>

                  <Card className="absolute inset-x-8 bottom-0 ml-6 rounded-md">
                    <CardHeader className="px-8 py-3">
                      <CardTitle className="text-accent">
                        Laura del Hierro Higuera
                      </CardTitle>
                      <CardDescription className="font-semibold text-gray-300">
                        Managing Director
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </CarouselItem>
              </DialogTrigger>

              <DialogContent className="max-h-full overflow-y-auto">
                <DialogHeader className="sticky -top-6 bg-white py-2">
                  <DialogTitle>Laura del Hierro Higuera</DialogTitle>
                  <DialogDescription>Managing Director</DialogDescription>
                </DialogHeader>

                <p>
                  Laura cuenta con más de 12 años de experiencia en el sector de
                  energías renovables, enfocada principalmente en el desarrollo
                  y ejecución de proyectos de diferentes tecnologías destacando
                  su trayectoria en Villar Mir Energía y en el Grupo Enertis.
                </p>
                <p>
                  Ha participado en la originación, diseño, valoración,
                  desarrollo y construcción de multitud de proyectos greenfield
                  y brownfield de las principales tipologías de activos
                  renovables: solar fotovoltaico, eólico e hidráulico,
                  interviniendo en más de 30 proyectos con una potencia agregada
                  superior a 1 GW.
                </p>
                <p>
                  Acumula un gran conocimiento técnico, regulatorio y
                  administrativo en el sector energético, habiendo desarrollado
                  con éxito varios proyectos renovables, como Project Manager,
                  en empresas como Villar Mir Energía y el Grupo Enertis.
                </p>
                <p>
                  Laura es Ingeniero Industrial por la Universidad Politécnica
                  de Madrid (ETSII), con especialidad en Técnicas Energéticas.
                </p>
              </DialogContent>
            </Dialog>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
export default HomeTeam;
