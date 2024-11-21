"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const HomeAbout = () => {
  const [visible, setVisible] = useState(false);

  return (
    <section className="container relative mx-auto flex min-h-[calc(100vh-3.25rem)] w-full flex-col py-6 lg:grid lg:grid-cols-2 lg:gap-20 lg:py-40">
      {/* Texto */}

      <div className="lg:order-2">
        <motion.h3
          className="h3"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
        >
          IMPULSANDO EL CAMBIO
        </motion.h3>
        <motion.h2
          className="h2 xl:my-6"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Nos involucramos en la transición hacia un sistema energético
          sostenible
        </motion.h2>
        <motion.div
          className="h-1 w-1/3 bg-accent"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        ></motion.div>
        <div className="mt-8">
          <motion.p
            className="p mb-4 lg:hidden"
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
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
            viewport={{ once: false, amount: 0.5 }}
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
            viewport={{ once: false, amount: 0.5 }}
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
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Check />
              <p>Expertos en proyectos energéticos</p>
            </motion.li>
            <motion.li
              className="span flex gap-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Check />
              <p>Equipo interdisciplinario</p>
            </motion.li>
            <motion.li
              className="span flex gap-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Check />
              <p>Soluciones sostenibles</p>
            </motion.li>
            <motion.li
              className="span flex gap-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Check />
              <p>Multitecnología</p>
            </motion.li>
          </ol>
        </div>

        <motion.button
          className="font-bold underline lg:hidden"
          onClick={() => setVisible((prev) => !prev)}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
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

      <motion.div
        className={cn("relative flex-grow", visible && "hidden lg:block")}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Image
          src="/images/about_image.png"
          alt="about Nexer image"
          fill
          className="absolute w-full rounded-xl object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </motion.div>

      <div id="about" className="absolute -top-[3.25rem] h-[3.25rem]"></div>
    </section>
  );
};

export default HomeAbout;
