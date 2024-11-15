"use client";
import { DialogHeader } from "@/components/ui/dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { Check } from "lucide-react";
import Image from "next/image";

const HomeAbout = () => {
  return (
    <section className="xl: container relative mx-auto flex min-h-[calc(100vh-3.25rem)] w-full flex-col py-6 lg:grid lg:grid-cols-2 lg:gap-8 lg:py-20">
      {/* Texto */}
      <div className="lg:order-2">
        <h3 className="h3">IMPULSANDO EL CAMBIO</h3>
        <h2 className="h2 xl:my-6">
          Participa en la construcción de un{" "}
          <span className="span">modelo energético </span>
          sostenible
        </h2>
        <div className="h-1 w-1/3 bg-accent"></div>
        <div className="mt-8">
          <p className="p mb-4 lg:hidden">
            Somos una firma independiente especializada en la identificación y
            <span className="span"> desarrollo de proyectos </span> innovadores
            que hacen realidad la Transición Energética{" "}
          </p>

          <p className="p hidden lg:block">
            Somos una firma independiente especializada en la identificación y
            <span className="span"> desarrollo de proyectos </span> innovadores
            que hacen realidad la Transición Energética{" "}
          </p>
          <p className="p hidden lg:block">
            Disponemos de un carácter pionero y una predisposición a la
            innovación en todos los ámbitos del sector, creando valor para
            nuestros clientes a través de nuestra especialización y
            capacitación.
          </p>
          {/* Lista para pantallas grandes */}
          <ol className="p my-4 hidden flex-col gap-3 lg:flex xl:my-6">
            <li className="span flex gap-2">
              <Check />
              <p>Expertos en proyectos energéticos</p>
            </li>
            <li className="span flex gap-2">
              <Check />
              <p>Equipo interdisciplinario</p>
            </li>
            <li className="span flex gap-2">
              <Check />
              <p>Soluciones sostenibles</p>
            </li>
            <li className="span flex gap-2">
              <Check />
              <p>Multitecnología</p>
            </li>
          </ol>
        </div>
        <div className="mb-8 lg:hidden">
          <Dialog>
            <DialogTrigger>
              <p className="font-bold underline">Ver más</p>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  <h3 className="mt-4 text-start">
                    Disponemos de un carácter pionero y una predisposición a la
                    innovación en todos los ámbitos del sector, creando valor
                    para nuestros clientes a través de nuestra especialización y
                    capacitación.
                  </h3>
                </DialogTitle>

                <DialogDescription>
                  <ol className="p my-4 flex-col gap-3">
                    <li className="span flex gap-2">
                      <Check />
                      <p>Expertos en proyectos energéticos</p>
                    </li>
                    <li className="span flex gap-2">
                      <Check />
                      <p>Equipo interdisciplinario</p>
                    </li>
                    <li className="span flex gap-2">
                      <Check />
                      <p>Soluciones sostenibles</p>
                    </li>
                    <li className="span flex gap-2">
                      <Check />
                      <p>Multitecnología</p>
                    </li>
                  </ol>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="relative flex-grow">
        <Image
          src="/images/about_image.jpg"
          alt="about Nexer image"
          fill
          className="absolute w-full rounded-xl object-cover"
        />
      </div>
    </section>
  );
};

export default HomeAbout;
