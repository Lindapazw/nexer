"use client";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const HomeAbout = () => {
  const [visible, setVisible] = useState(false);

  return (
    <section className="container relative mx-auto flex min-h-[calc(100vh-3.25rem)] w-full flex-col py-6 lg:grid lg:grid-cols-2 lg:gap-20 lg:py-40">
      {/* Texto */}
      <div className="lg:order-2">
        <h3 className="h3">IMPULSANDO EL CAMBIO</h3>
        <h2 className="h2 xl:my-6">
          Nos involucramos en la transición hacia un sistema energético
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

        <button
          className="font-bold underline lg:hidden"
          onClick={() => setVisible((prev) => !prev)}
        >
          Ver más
        </button>

        {visible && (
          <>
            <h3 className="mt-4 text-start lg:hidden">
              Disponemos de un carácter pionero y una predisposición a la
              innovación en todos los ámbitos del sector, creando valor para
              nuestros clientes a través de nuestra especialización y
              capacitación.
            </h3>

            <ol className="p my-4 flex-col gap-3 pb-6 lg:hidden">
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
          </>
        )}
      </div>

      <div className={cn("relative flex-grow", visible && "hidden lg:block")}>
        <Image
          src="/images/about_image.jpg"
          alt="about Nexer image"
          fill
          className="absolute w-full rounded-xl object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </div>

      <div id="about" className="absolute -top-[3.25rem] h-[3.25rem]"></div>
    </section>
  );
};

export default HomeAbout;
