import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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

      <h2 className="h2 text-center">Cada paso cuenta</h2>

      <p className="p text-center">
        Contáctanos para saber más sobre nuestros servicios y cómo podemos
        ayudarte a impulsar un futuro sostenible.
      </p>

      <div className="mt-12 flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
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
      </div>
    </section>
  );
};
export default HomeContact;
