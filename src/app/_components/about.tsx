"use client";
import Image from "next/image";

const HomeAbout = () => {
  return (
    <section className="container relative mx-auto grid min-h-[calc(100vh-3.25rem)] w-full gap-4 py-4 lg:grid-cols-2 xl:gap-10">
      <div className="absolute -top-[3.25rem]" id="about"></div>

      {/* <div className="grid min-h-full w-full grid-cols-1 gap-4 py-4 lg:grid-cols-2 xl:gap-10"> */}
      {/* Texto */}
      <div className="max-h-min lg:order-2">
        <h3 className="h3">IMPULSANDO EL CAMBIO</h3>
        <h2 className="h2 xl:my-6">
          Participa en la construcción de un{" "}
          <span className="span">modelo energético </span>
          sostenible
        </h2>
        <div className="h-1 w-1/3 bg-accent"></div>

        {/* Texto visible en pantallas pequeñas (sm) */}
        <div className="p my-8">
          <p className="p">
            Somos una firma independiente especializada en la identificación y
            <span className="span"> desarrollo de proyectos </span> innovadores
            que hacen realidad la Transición Energética{" "}
            <span className="span underline lg:hidden">ver más</span>
          </p>

          {/* Texto adicional visible solo en pantallas grandes (lg) */}
          {/* <p className="p hidden lg:block">
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
          </ol> */}
        </div>
      </div>

      {/* Imagen */}
      <div className="relative h-full w-full lg:order-1">
        <Image
          src="/images/about2.png"
          alt="about Nexer image"
          fill
          className="rounded-xl object-cover"
        />
      </div>
      {/* </div> */}
    </section>
  );
};

export default HomeAbout;
