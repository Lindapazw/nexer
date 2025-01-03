import Image from "next/image";
import Link from "next/link";
import Linkedin from "./_icons.tsx/linkedin";
import Mail from "./_icons.tsx/mail";
import Whatsapp from "./_icons.tsx/whatsapp";

const HomeFooter = () => {
  return (
    <div className="container mx-auto flex min-h-[calc(20vh-3.25rem)] items-center justify-between border-t-2 border-secondary">
      <Link href="/#home" aria-label="Volver al inicio">
        <Image src="/logos/logo.png" alt="team" height={80} width={160} />
      </Link>

      <div className="flex gap-6">
        <Link href="tel:+34627250509" aria-label="Ir al contacto por whatsapp">
          <Whatsapp className="h-5 w-5 cursor-pointer text-accent lg:h-8 lg:w-8" />
        </Link>
        <Link
          href="https://www.linkedin.com/company/nexer-renovables/?originalSubdomain=es"
          target="_blank"
          aria-label="Ir al contacto por linkedin"
        >
          <Linkedin className="h-5 w-5 cursor-pointer text-accent lg:h-8 lg:w-8" />
        </Link>
        <Link href="mailto:info@nexer.es" aria-label="Ir al contacto por email">
          <Mail className="h-5 w-5 cursor-pointer text-accent lg:h-8 lg:w-8" />
        </Link>
      </div>
    </div>
  );
};

export default HomeFooter;
