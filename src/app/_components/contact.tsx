"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { sendContactInfo } from "../actions/send-contact-info";

export const contactSchema = z.object({
  name: z.string().min(3, { message: "Campo obligatorio." }),
  company: z.string().min(3, { message: "Campo obligatorio." }),
  email: z.string().email({ message: "Formato de correo inválido." }),
  message: z.string().min(10, { message: "Campo obligatorio." }),
  privacyAgreement: z.literal<boolean>(true),
});

const HomeContact = () => {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      message: "",
      privacyAgreement: false,
    },
  });

  const onSubmit = async (data: z.infer<typeof contactSchema>) => {
    try {
      await sendContactInfo(data);

      form.reset();
      toast.success("¡Gracias por tu mensaje!", {
        description: "Nos pondremos en contacto con usted lo antes posible.",
      });
    } catch {
      toast.error("Ha ocurrido un error al enviar el mensaje.", {
        description: "Por favor, inténtalo de nuevo más tarde.",
      });
    }
  };

  return (
    <section className="container relative mx-auto flex min-h-[calc(100vh-3.25rem)] flex-col items-center justify-center py-6 lg:flex-row lg:gap-20">
      <div id="contact" className="absolute -top-[3.25rem] h-[3.25rem]"></div>

      <div>
        <h2 className="h2">Cada paso cuenta</h2>

        <p className="p">Estás mas cerca de construir un futuro sostenible</p>
      </div>

      <Form {...form}>
        <form
          className="mt-8 flex flex-col gap-6 rounded-md bg-accent p-8 text-white"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <h3 className="h3 mb-0 text-center">¿Hablamos?</h3>

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-medium">Nombre:</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="rounded-sm border-x-0 border-b-2 border-t-0 border-white bg-accent-light text-lg"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-medium">
                  Empresa:
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="rounded-sm border-x-0 border-b-2 border-t-0 border-white bg-accent-light text-lg"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-medium">Email:</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="rounded-sm border-x-0 border-b-2 border-t-0 border-white bg-accent-light text-lg"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-medium">
                  Mensaje:
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    className="rounded-sm border-x-0 border-b-2 border-t-0 border-white bg-accent-light text-lg"
                    rows={4}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="privacyAgreement"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="rounded-sm border-white bg-accent-light text-lg data-[state=checked]:bg-white data-[state=checked]:text-accent"
                  />
                </FormControl>
                <FormLabel className="!mt-0 text-base font-medium leading-none">
                  Estoy de acuerdo con la {""}
                  <Link
                    href="/#contact"
                    className="underline"
                    aria-label="Leer más sobre la política de privacidad"
                  >
                    política de privacidad
                  </Link>
                  .
                </FormLabel>
              </FormItem>
            )}
          />

          <Button
            aria-labelledby="botón de enviar email"
            type="submit"
            variant="secondary"
            className="w-full font-semibold text-accent"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting && (
              <LoaderCircle className="animate-spin" />
            )}
            Enviar
          </Button>
        </form>
      </Form>
    </section>
  );
};
export default HomeContact;
