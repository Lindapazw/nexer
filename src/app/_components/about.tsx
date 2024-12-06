"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Four from "./_icons.tsx/four";
import One from "./_icons.tsx/one";
import Three from "./_icons.tsx/three";
import Two from "./_icons.tsx/two";

const HomeAbout = () => {
  const [visible, setVisible] = useState(false);

  return (
    <section className="container relative mx-auto flex min-h-[calc(100vh-3.25rem)] w-full flex-col items-center justify-center py-6 lg:grid lg:grid-cols-2 lg:gap-20 lg:py-40">
      <div className="lg:order-2">
        <motion.h2
          className="h2 xl:mb-6"
          initial={{ opacity: 0, y: -70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Nos involucramos en la transición hacia un sistema energético
          sostenible
        </motion.h2>
        <div className="mt-8">
          <motion.p
            className="p mb-4 lg:hidden"
            initial={{ opacity: 0, y: -70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Somos una firma independiente especializada en la identificación y
            <span className="span"> desarrollo de proyectos </span> innovadores
            que hacen realidad la Transición Energética{" "}
          </motion.p>

          <motion.p
            className="p hidden lg:block"
            initial={{ opacity: 0, y: -70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Somos una firma independiente especializada en la identificación y
            <span className="span"> desarrollo de proyectos </span> innovadores
            que hacen realidad la Transición Energética{" "}
          </motion.p>
          <motion.p
            className="p hidden lg:block"
            initial={{ opacity: 0, y: -70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Disponemos de un carácter pionero y una predisposición a la
            innovación en todos los ámbitos del sector, creando valor para
            nuestros clientes a través de nuestra especialización y
            capacitación.
          </motion.p>

          <ol className="p my-4 hidden flex-col gap-3 lg:flex xl:my-6">
            <motion.li
              className="span flex gap-2"
              initial={{ opacity: 0, y: -70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <One className="size-7 text-accent" />
              <p>Expertos en proyectos energéticos</p>
            </motion.li>
            <motion.li
              className="span flex gap-2"
              initial={{ opacity: 0, y: -70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Two className="size-7 text-accent" />
              <p>Equipo interdisciplinario</p>
            </motion.li>
            <motion.li
              className="span flex gap-2"
              initial={{ opacity: 0, y: -70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Three className="size-7 text-accent" />
              <p>Soluciones sostenibles</p>
            </motion.li>
            <motion.li
              className="span flex gap-2"
              initial={{ opacity: 0, y: -70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Four className="size-7 text-accent" />
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
                <One className="size-7 text-accent" />
                <p>Expertos en proyectos energéticos</p>
              </li>
              <li className="span flex gap-2">
                <Two className="size-7 text-accent" />
                <p>Equipo interdisciplinario</p>
              </li>
              <li className="span flex gap-2">
                <Three className="size-7 text-accent" />
                <p>Soluciones sostenibles</p>
              </li>
              <li className="span flex gap-2">
                <Four className="size-7 text-accent" />
                <p>Multitecnología</p>
              </li>
            </ol>
          </>
        )}
      </div>

      <motion.div
        className="relative w-full"
        initial={{ opacity: 0, y: 90 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="group relative min-h-[50vh] w-full overflow-hidden rounded-xl">
          <div className="absolute inset-0 transition-transform duration-300 ease-in-out group-hover:scale-110">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full"
            >
              <source src="/videos/contact_video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </motion.div>

      <div id="about" className="absolute -top-[3.25rem] h-[3.25rem]"></div>
    </section>
  );
};

export default HomeAbout;
