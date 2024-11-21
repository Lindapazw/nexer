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
      <div className="flex">
        <div className="relative flex h-[80vh] w-[50vw] flex-col justify-center lg:pl-20">
          <h3 className="h2 text-start text-white md:mt-5">Nuestra oficina</h3>

          <p className="p mb-10 pr-10 text-white">
            Nexer se especializa en energías renovables y proyectos de
            transición energética. Contáctanos para saber más sobre nuestros
            servicios y cómo podemos ayudarte a impulsar un futuro sostenible.
          </p>

          <ol className="p flex flex-col gap-10 text-white">
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
        <div className="relative h-[80vh] w-[50vw]">
          <MapWithNoSSR />
        </div>
      </div>
    </section>
  );
};
export default HomeLocation;
