import Hour from "./_icons.tsx/hour";
import Location from "./_icons.tsx/location";
import Mail from "./_icons.tsx/mail";
import Phone from "./_icons.tsx/phone";

const HomeLocation = () => {
  return (
    <div className="relative min-h-[80vh]">
      {/* imagen */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/images/about_image.jpg")',
          backgroundAttachment: "fixed",
        }}
      />

      {/* Contenido */}
      <div className="relative pt-6">
        <div className="container">
          <h2 className="h2 text-center text-white">Nuestra oficina</h2>

          <div className="flex w-full justify-center">
            <div className="h-1 w-1/3 bg-white"></div>
          </div>

          <p className="p mt-6 text-start text-white md:mt-12">
            Contáctanos para saber más sobre nuestros servicios y cómo podemos
            ayudarte a impulsar un futuro sostenible.
          </p>

          <ol className="p my-4 flex w-full flex-col gap-4">
            <li className="span flex gap-2 text-white">
              <Location className="h-5 w-5" />
              <p>Avenida de Bruselas, 31. 28108 Alcobendas, Madrid, España</p>
            </li>
            <li className="span flex gap-2 text-white">
              <Hour className="h-5 w-5" />
              <p>Lunes - Viernes 09:00 - 18:00</p>
            </li>
            <li className="span flex gap-2 text-white">
              <Phone className="h-6 w-6" />
              <p>+34 911 68 12 19</p>
            </li>
            <li className="span flex gap-2 text-white">
              <Mail className="h-5 w-5" />
              <p>info@nexer.es</p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};
export default HomeLocation;
