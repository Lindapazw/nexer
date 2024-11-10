"use client";
import { Check } from "lucide-react";
import Image from "next/image";

const HomeAbout = () => {
  return (
    <section className="container mx-auto h-[90vh] bg-blue-400 flex flex-col justify-center items-start py-4">
      <h3 className="h3">IMPULSANDO EL CAMBIO</h3>
      <h2 className="h2">
        Participa en la construcción de un{" "}
        <span className="span">modelo energético </span>
        sostenible
      </h2>
      <div className="w-1/3 bg-accent h-1"></div>
      <div className="p py-4">
        {/* Texto visible en pantallas pequeñas (sm) */}
        <p className="p">
          Somos una firma independiente especializada en la identificación y
          <span className="span"> desarrollo de proyectos </span> innovadores
          que hacen realidad la Transición Energética{" "}
          <span className="span underline lg:hidden">ver más</span>
        </p>

        {/* Texto adicional visible solo en pantallas grandes (lg) */}
        <p className="hidden lg:block p">
          Disponemos de un carácter pionero y una predisposición a la innovación
          en todos los ámbitos del sector, creando valor para nuestros clientes
          a través de nuestra especialización y capacitación.
        </p>

        <ol className="hidden lg:flex flex-col gap-3 my-4 p">
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

      <div className="relative w-full h-[50%]">
        <Image
          src="/images/about2.png"
          alt="about Nexer image"
          fill
          className="object-cover rounded-xl"
        />
      </div>
    </section>
  );
};
export default HomeAbout;
