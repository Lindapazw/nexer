"use client";

import { Button } from "@/components/ui/button";
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
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { phone } from "@/lib/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { sendContactInfo } from "../actions/send-contact-info";

export const contactSchema = z.object({
  name: z.string().min(1, { message: "Campo obligatorio." }),
  company: z.string().optional(),
  email: z.string().email({ message: "Formato de correo inválido." }),
  message: z.string().min(1, { message: "Campo obligatorio." }),
  phoneNumber: phone(z.string(), "Teléfono inválido."),
  // privacyAgreement: z.literal<boolean>(true),
});

const HomeContact = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      message: "",
      phoneNumber: "",
      // privacyAgreement: false,
    },
  });

  const onSubmit = async (data: z.infer<typeof contactSchema>) => {
    try {
      await sendContactInfo(data);

      form.reset();
      toast({
        title: "¡Gracias por tu mensaje!",
        description: "Nos pondremos en contacto con usted lo antes posible.",
        variant: "success",
      });
    } catch {
      toast({
        title: "Ha ocurrido un error al enviar el mensaje.",
        description: "Por favor, inténtalo de nuevo más tarde.",
        variant: "destructive",
      });
    }
  };

  const onSubmitInvalid = () => {
    toast({
      title: `Por favor, completa los campos marcados.`,
      variant: "destructive",
    });
  };

  return (
    <section className="container relative mx-auto flex min-h-[calc(100vh-3.25rem)] flex-col items-center justify-center py-6 lg:flex-row lg:gap-20">
      <div id="contact" className="absolute -top-[3.25rem] h-[3.25rem]"></div>

      <div className="flex flex-col justify-center gap-2 lg:gap-4">
        <h2 className="h2 text-center lg:hidden lg:text-start">
          Cada paso cuenta
        </h2>

        <p className="p text-center lg:hidden lg:text-start">
          Estás mas cerca de construir un futuro sostenible
        </p>

        <video
          autoPlay
          muted
          loop
          playsInline
          className="mt-6 hidden h-full w-full max-w-96 lg:block"
        >
          <source src="/videos/contact_video.mp4" type="video/mp4" />
          <Image
            src="/images/about_image.jpg"
            alt="hero video"
            fill
            className="h-full w-full"
            priority
            sizes="50vw"
          />
        </video>
      </div>

      <Form {...form}>
        <form
          className="mt-8 flex w-full max-w-[32rem] flex-col gap-6 rounded-md bg-accent p-8 text-white shadow-xl lg:w-[32rem]"
          onSubmit={form.handleSubmit(onSubmit, onSubmitInvalid)}
        >
          <h3 className="h3 mb-0 text-center">¿Hablamos?</h3>

          <FormField
            control={form.control}
            name="name"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel className="text-base font-medium">
                  Nombre*:
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className={cn(
                      "rounded-sm border-x-0 border-b-4 border-t-0 border-white bg-accent-light text-lg text-black",
                      fieldState.error && "border-destructive",
                    )}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel className="text-base font-medium">
                  Empresa:
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className={cn(
                      "rounded-sm border-x-0 border-b-4 border-t-0 border-white bg-accent-light text-lg text-black",
                      fieldState.error && "border-destructive",
                    )}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel className="text-base font-medium">Email*:</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className={cn(
                      "rounded-sm border-x-0 border-b-4 border-t-0 border-white bg-accent-light text-lg text-black",
                      fieldState.error && "border-destructive",
                    )}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel className="text-base font-medium">
                  Mensaje*:
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    className={cn(
                      "rounded-sm border-x-0 border-b-4 border-t-0 border-white bg-accent-light text-lg text-black",
                      fieldState.error && "border-destructive",
                    )}
                    rows={4}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel className="text-base font-medium">
                  Teléfono*:
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className={cn(
                      "rounded-sm border-x-0 border-b-4 border-t-0 border-white bg-accent-light text-lg text-black",
                      fieldState.error && "border-destructive",
                    )}
                  />
                </FormControl>
                <FormMessage className="text-white" />
              </FormItem>
            )}
          />

          {/* 
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
          /> */}

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
