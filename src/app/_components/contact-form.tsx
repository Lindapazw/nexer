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
import { zodResolver } from "@hookform/resolvers/zod";
import { isValidPhoneNumber, parsePhoneNumber } from "libphonenumber-js/min";
import { CircleX, LoaderCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { sendContactInfo } from "../actions/send-contact-info";

export const contactSchema = z.object({
  name: z.string().min(1, { message: "Campo obligatorio." }),
  company: z.string().optional(),
  email: z.string().email({ message: "Formato de correo inválido." }),
  message: z.string().min(1, { message: "Campo obligatorio." }),
  phoneNumber: z
    .string()
    .refine(
      (value) => !value || isValidPhoneNumber(value),
      "Formato de teléfono inválido.",
    )
    .transform((value) =>
      value ? parsePhoneNumber(value)?.number.toString() : "",
    )
    .optional(),
  // privacyAgreement: z.literal<boolean>(true),
});

const ContactForm = () => {
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
    <Form {...form}>
      <form
        className="grid w-full grid-cols-1 gap-4 md:grid-cols-2"
        onSubmit={form.handleSubmit(onSubmit, onSubmitInvalid)}
      >
        <p className="p hidden text-xl font-bold lg:block">
          Completa los campos:
        </p>

        <FormField
          control={form.control}
          name="name"
          render={({ field, fieldState }) => (
            <FormItem className="md:col-span-2">
              <FormLabel>Nombre*:</FormLabel>
              <div className="relative">
                <FormControl>
                  <Input
                    {...field}
                    className={cn(
                      fieldState.error && "border-destructive pr-8",
                    )}
                  />
                </FormControl>

                {fieldState.error && (
                  <CircleX className="absolute right-2 top-1/2 size-4 -translate-y-1/2 text-destructive" />
                )}
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="company"
          render={({ field, fieldState }) => (
            <FormItem className="md:col-span-2">
              <FormLabel>Empresa:</FormLabel>
              <div className="relative">
                <FormControl>
                  <Input
                    {...field}
                    className={cn(
                      fieldState.error && "border-destructive pr-8",
                    )}
                  />
                </FormControl>

                {fieldState.error && (
                  <CircleX className="absolute right-2 top-1/2 size-4 -translate-y-1/2 text-destructive" />
                )}
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Email*:</FormLabel>
              <div className="relative">
                <FormControl>
                  <Input
                    {...field}
                    className={cn(
                      fieldState.error && "border-destructive pr-8",
                    )}
                  />
                </FormControl>

                {fieldState.error && (
                  <CircleX className="absolute right-2 top-1/2 size-4 -translate-y-1/2 text-destructive" />
                )}
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Teléfono:</FormLabel>
              <div className="relative">
                <FormControl>
                  <Input
                    {...field}
                    className={cn(
                      fieldState.error && "border-destructive pr-8",
                    )}
                  />
                </FormControl>

                {fieldState.error && (
                  <CircleX className="absolute right-2 top-1/2 size-4 -translate-y-1/2 text-destructive" />
                )}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field, fieldState }) => (
            <FormItem className="md:col-span-2">
              <FormLabel>Mensaje*:</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className={cn(fieldState.error && "border-destructive")}
                  rows={4}
                />
              </FormControl>
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
          className="w-full font-semibold md:col-span-2"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting && (
            <LoaderCircle className="animate-spin" />
          )}
          Enviar
        </Button>
      </form>
    </Form>
  );
};
export default ContactForm;
