"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  { src: "/images/about_image.jpg", alt: "Second Nexer Image" },
  { src: "/images/project_hita_tardio.jpg", alt: "Proyecto hita tardío" },
  { src: "/images/project_talega.jpg", alt: "Proyecto talega" },
];

const HomeAbout = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  // Cambiar la imagen automáticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container relative mx-auto flex min-h-[calc(100vh-3.25rem)] w-full flex-col py-6 lg:grid lg:grid-cols-2 lg:gap-20 lg:py-40">
      {/* Texto */}

      <div className="lg:order-2">
        <motion.h2
          className="h2 xl:mb-6"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Nos involucramos en la transición hacia un sistema energético
          sostenible
        </motion.h2>
        <div className="mt-8">
          <motion.p
            className="p mb-4 lg:hidden"
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Somos una firma independiente especializada en la identificación y
            <span className="span"> desarrollo de proyectos </span> innovadores
            que hacen realidad la Transición Energética{" "}
          </motion.p>

          <motion.p
            className="p hidden lg:block"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Somos una firma independiente especializada en la identificación y
            <span className="span"> desarrollo de proyectos </span> innovadores
            que hacen realidad la Transición Energética{" "}
          </motion.p>
          <motion.p
            className="p hidden lg:block"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Disponemos de un carácter pionero y una predisposición a la
            innovación en todos los ámbitos del sector, creando valor para
            nuestros clientes a través de nuestra especialización y
            capacitación.
          </motion.p>

          <ol className="p my-4 hidden flex-col gap-3 lg:flex xl:my-6">
            <motion.li
              className="span flex gap-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Check />
              <p>Expertos en proyectos energéticos</p>
            </motion.li>
            <motion.li
              className="span flex gap-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Check />
              <p>Equipo interdisciplinario</p>
            </motion.li>
            <motion.li
              className="span flex gap-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Check />
              <p>Soluciones sostenibles</p>
            </motion.li>
            <motion.li
              className="span flex gap-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Check />
              <p>Multitecnología</p>
            </motion.li>
          </ol>
        </div>

        <motion.button
          className="mb-4 font-bold underline lg:hidden"
          onClick={() => setVisible((prev) => !prev)}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          Ver más
        </motion.button>

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

      {/* Carrusel */}
      <div className="relative w-full">
        <div className="relative min-h-[50vh] w-full overflow-hidden">
          <AnimatePresence>
            {images.map(
              (image, index) =>
                index === currentIndex && (
                  <motion.div
                    key={image.src}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="absolute inset-0 rounded-md object-cover"
                      sizes="100vw"
                    />
                  </motion.div>
                ),
            )}
          </AnimatePresence>
        </div>
      </div>
      <div id="about" className="absolute -top-[3.25rem] h-[3.25rem]"></div>
    </section>
  );
};

export default HomeAbout;
