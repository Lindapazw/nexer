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
                <CarouselItem className="relative basis-full pl-6 md:basis-1/2 lg:basis-1/3">
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
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>José Luis Galindo Iranzo</DialogTitle>
                  <DialogDescription>Partner</DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            <CarouselItem className="relative basis-full pl-6 md:basis-1/2 lg:basis-1/3">
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

            <CarouselItem className="relative basis-full pl-6 md:basis-1/2 lg:basis-1/3">
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
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
export default HomeTeam;
