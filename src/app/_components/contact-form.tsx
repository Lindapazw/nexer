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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

const TERMS = (
  <>
    <h2 className="font-bold">AVISO LEGAL</h2>
    
    <p>
      Este sitio web es propiedad de NEXER SOLAR S.L., con domicilio en <a target="_blank" className="underline" 
          href="https://www.google.com/maps/search/AVENIDA+DE+BRUSELAS+31,+28108,+ALCOBENDAS,+MADRID?entry=gmail&source=g">
          AVENIDA DE BRUSELAS 31, 28108, ALCOBENDAS, MADRID
        </a>
      , con NIF B-88236096 e inscrita en el Registro Mercantil de Madrid en el tomo 38614, 
      folio 1, hoja M-686705. 
      Para cualquier consulta, nos puede contactar por e-mail: info@nexer.es, 
      o en el teléfono +34 911 68 12 19.
    </p>

    <h3 className="font-bold">Ley Aplicable</h3>

    <p>
      El sitio web <a target="_blank" className="underline" href="http://nexer.es/">www.nexer.es</a>, se rige por la normativa 
      exclusivamente aplicable en España, 
      quedando sometida a ella, tanto nacionales como extranjeros que utilicen este sitio web.
    </p>

    <h3 className="font-bold">Condiciones de uso</h3>

    <p>
      Las condiciones de acceso y uso del presente sitio web se rigen por la legalidad vigente 
      y por el principio de buena fe comprometiéndose el usuario a realizar un buen uso del sitio web. 
      No se permiten conductas que vayan contra la ley, los derechos o intereses de terceros.
    </p>

    <h2 className="font-bold">POLÍTICA DE PRIVACIDAD</h2>

    <p>
      Siguiendo los principios de licitud, lealtad y transparencia, 
      ponemos a su disposición la presente Política de Privacidad.
    </p>

    <h3 className="font-bold">¿Quién es el responsable del tratamiento de sus datos?</h3>

    <ul>
      <li>NEXER SOLAR S.L.</li>
      <li>NIF B-88236096</li>
      <li>Domicilio Social: <a target="_blank" className="underline" href="https://www.google.com/maps/search/AVENIDA+DE+BRUSELAS+31,+28108,+ALCOBENDAS,+MADRID?entry=gmail&source=g">
          AVENIDA DE BRUSELAS 31, 28108, ALCOBENDAS, MADRID
        </a>.
      </li>
    </ul>

    <p>
      Email: <a target="_blank" className="underline" href="http://nexer.es/">info@nexer.es</a>  
    </p>

    <p>
      Teléfono: +34 911 68 12 19.
    </p>

    <h3 className="font-bold">¿Con qué finalidad tratamos sus datos personales?</h3>

    <p>
      En NEXER SOLAR S.L. tratamos la información que nos 
      facilitan las personas interesadas con el fin de 
      gestionar el envío de la información que nos soliciten 
      y facilitar a los interesados ofertas de nuestros servicios.
    </p>

    <h3 className="font-bold">¿Por cuánto tiempo conservaremos sus datos personales?</h3>

    <p>
      Sus datos, serán conservados el tiempo mínimo necesario 
      para la correcta prestación del servicio ofrecido, 
      así como para atender las responsabilidades que se pudieran derivar del mismo 
      y de cualquier otra exigencia legal.
    </p>

    <h3 className="font-bold">¿Cuál es la legitimación para el tratamiento de sus datos?</h3>

    <p>
      La base legal para el tratamiento de sus datos personales puede ser la ejecución 
      de una relación contractual potencial y/o suscrita, el interés legítimo, 
      la habilitación legal y/o el consentimiento del propio interesado. 
      Los datos que le solicitamos son adecuados, pertinentes y estrictamente necesarios 
      y en ningún caso está obligado a facilitárnoslos, pero su no comunicación podrá afectar 
      a la finalidad del servicio o la imposibilidad de prestarlo.
    </p>

    <h3 className="font-bold">¿A qué destinatarios se comunicarán sus datos?</h3>

    <p>
      NEXER SOLAR S.L. no comunicará sus datos a ningún tercero, 
      salvo autorización expresa u obligación legal.
    </p>

    <h3 className="font-bold">¿Cuáles son sus derechos cuando nos facilita sus datos?</h3>

    <p>
      Los derechos de protección de datos de los que son titulares los interesados son:
      <ul>
        <li>Derecho a solicitar el acceso a los datos personales relativos al interesado</li>
        <li>Derecho de rectificación o supresión</li>
        <li>Derecho de oposición</li>
        <li>Derecho a solicitar la limitación de su tratamiento</li>
        <li>Derecho a la portabilidad de los datos</li>
      </ul>
    </p>

    <p>
      Los titulares de los datos personales obtenidos podrán ejercer sus derechos 
      de protección de datos personales dirigiendo una comunicación por escrito al domicilio 
      social de NEXER SOLAR S.L. o al correo electrónico habilitado a tal efecto, 
      indicados en el inicio del presente Aviso Legal, incluyendo en ambos casos fotocopia 
      de su DNI u otro documento de identificación equivalente.
    </p>

    <p>
      Modelos, formularios y más información disponible sobre sus derechos en 
      la página web de la autoridad de control nacional, Agencia Española de Protección de Datos, 
      en adelante, AEPD, <a target="_blank" className="underline" href="http://www.agpd.es/">www.agpd.es</a>.
    </p>

    <h3 className="font-bold">¿Puedo retirar el consentimiento?</h3>

    <p>
      Usted tiene la posibilidad y el derecho a retirar el consentimiento para cualquiera finalidad 
      específica otorgada en su momento, sin que ello afecte a la licitud del tratamiento 
      basado en el consentimiento previo a su retirada.
    </p>

    <h3 className="font-bold">¿Dónde puedo reclamar en caso de que considere que no se tratan mis datos correctamente?</h3>

    <p>
      Si algún interesado considera que sus datos no son tratados correctamente por NEXER SOLAR S.L.,
      puede dirigir sus reclamaciones al correo <a target="_blank" className="underline" href="http://nexer.es/">info@nexer.es</a> o a la autoridad 
      de protección de datos que corresponda, siendo la AEPD la indicada en el territorio nacional, <a target="_blank" className="underline" href="http://www.agpd.es/">www.agpd.es</a>.
    </p>

    <h3 className="font-bold">Seguridad y actualización de sus datos personales</h3>

    <p>
      Con el objetivo de salvaguardar la seguridad de sus datos personales, 
      le informamos que NEXER SOLAR S.L. ha adoptado todas las medidas de índole técnica 
      y organizativa necesarias para garantizar la seguridad de los datos personales suministrados. 
      Todo ello para evitar su alteración, pérdida, y/o tratamientos o accesos no autorizados, 
      tal como exige la normativa, si bien la seguridad absoluta no existe.
    </p>

    <p>
      Es importante que, para que podamos mantener sus datos personales actualizados, 
      nos informe siempre que se produzca una modificación de los mismos.
    </p>

    <h3 className="font-bold">Confidencialidad</h3>

    <p>
      NEXER SOLAR S.L. le informa que sus datos serán tratados con el máximo celo 
      y confidencialidad por todo el personal que intervenga en cualquiera de las fases del tratamiento. 
      No cederemos ni comunicaremos a ningún tercero sus datos, excepto en los casos legalmente previstos, 
      o salvo que el interesado nos hubiera autorizado expresamente.
    </p>

    <p>
      NEXER SOLAR S.L. puede alterar la presente política de privacidad para adaptarla a 
      las modificaciones que se produzcan en el sitio web, así como por los cambios 
      legislativos sobre datos personales que vayan apareciendo y afecten a dicha política. 
      Por ello, se exige su lectura, cada vez que nos facilite sus datos a través del sitio web.
    </p>

  </>
)

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
    /> */

          <Dialog>
            <DialogTrigger asChild>
              <div className=" cursor-pointer">
                <p>Si continúas, aceptas los <span className="underline span"> Términos y Condiciones</span>. </p>
              </div>
            </DialogTrigger>

            <DialogContent className="max-h-full overflow-y-auto">
              <DialogHeader className="sticky -top-6 bg-white py-2">
                <DialogTitle>Términos y Condiciones:</DialogTitle>
              </DialogHeader>

              {TERMS}
            </DialogContent>
          </Dialog>

        }

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
