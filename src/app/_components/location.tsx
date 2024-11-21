"use client";

import dynamic from "next/dynamic";
import Hour from "./_icons.tsx/hour";
import Location from "./_icons.tsx/location";
import Mail from "./_icons.tsx/mail";
import Phone from "./_icons.tsx/phone";

const MapWithNoSSR = dynamic(() => import("../_components/map"), {
  ssr: false,
});

const HomeLocation = () => {
  return (
    <section id="location" className="relative min-h-[80vh]">
      {/* imagen */}
      <div
        className="bg-attach-scroll md:bg-attach-fixed absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/images/about_image.jpg")',
        }}
      />

      {/* contenido */}
      <div className="container mx-auto flex flex-col lg:flex-row lg:gap-16">
        <div className="relative flex h-full w-full flex-col justify-center lg:h-[80vh] lg:w-[60vw]">
          <h3 className="h2 mt-6 text-start text-white">Nuestra oficina</h3>

          <p className="p mb-6 text-white lg:mb-10">
            Nexer se especializa en energías renovables y proyectos de
            transición energética. Contáctanos para saber más sobre nuestros
            servicios y cómo podemos ayudarte a impulsar un futuro sostenible.
          </p>

          <ol className="p flex flex-col gap-4 text-white lg:gap-10">
            <li className="span flex items-center gap-2">
              <Location className="h-5 w-5" />
              <p>Avenida de Bruselas, 3. 28108 Alcobendas, Madrid, España</p>
            </li>
            <li className="span flex items-center gap-2">
              <Hour className="h-5 w-5" />
              <p>Lunes - Viernes 09:00 - 18:00</p>
            </li>
            <li className="span flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <p>+34 911 68 12 19</p>
            </li>
            <li className="span flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <p>info@nexer.es</p>
            </li>
          </ol>
        </div>

        <div className="relative h-96 w-full py-6 lg:h-[80vh] lg:w-[40vw] lg:py-16">
          <div className="h-full overflow-hidden rounded-xl">
            <MapWithNoSSR />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeLocation;
