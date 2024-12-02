"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "./contact-form";
import Map from "./map";

const nexerData = [
  {
    id: "1",
    icon: MapPin,
    value: "Avenida de Bruselas, 31, 28108 Alcobendas, Madrid, España",
  },
  {
    id: "2",
    icon: Clock3,
    value: "Lunes - Viernes 09:00 - 18:00",
  },
  {
    id: "3",
    icon: Phone,
    value: "+34 911 68 12 19",
  },
  {
    id: "4",
    icon: Mail,
    value: "info@nexer.es",
  },
];

const HomeContact = () => {
  return (
    <section className="container relative mx-auto flex min-h-[calc(100vh-3.25rem)] flex-col items-center justify-center py-6">
      <div id="contact" className="absolute -top-[3.25rem] h-[3.25rem]"></div>

      <motion.h3
        className="h2 text-center text-black md:mt-5"
        initial={{ opacity: 0, y: 70, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Contáctanos
      </motion.h3>

      <motion.p
        className="p mb-4 text-black"
        initial={{ opacity: 0, y: 70, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        Para saber más sobre nuestros servicios y cómo podemos ayudarte a
        impulsar un futuro sostenible.
      </motion.p>

      <motion.div
        className="mt-12 flex flex-col items-center gap-12 lg:flex-row lg:gap-20"
        initial={{ opacity: 0, y: 70, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <ContactForm />

        <article className="flex flex-col gap-6 rounded-xl bg-accent px-8 py-6 text-white">
          <h2 className="h3 mb-0">Información</h2>

          {nexerData.map((item) => (
            <div className="flex items-center gap-4" key={item.id}>
              <item.icon className="size-8 min-w-8" />

              <p className="p text-base font-semibold text-white">
                {item.value}
              </p>
            </div>
          ))}

          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="secondary"
                className="w-full font-bold text-accent"
              >
                Ver mapa
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogTitle>Ubicación</DialogTitle>

              <Map />
            </DialogContent>
          </Dialog>
        </article>
      </motion.div>
    </section>
  );
};
export default HomeContact;
