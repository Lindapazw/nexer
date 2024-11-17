import Image from "next/image";
import Link from "next/link";
import Linkedin from "./_icons.tsx/linkedin";
import Mail from "./_icons.tsx/mail";
import Whatsapp from "./_icons.tsx/whatsapp";

const HomeFooter = () => {
  return (
    <div className="container mx-auto flex min-h-[calc(20vh-3.25rem)] items-center justify-between">
      <Link href="/#home">
        <Image src="/logos/logo.png" alt="team" height={80} width={160} />
      </Link>

      <div className="flex gap-6">
        <Link href="/#home">
          <Whatsapp className="h-5 w-5 cursor-pointer text-accent lg:h-8 lg:w-8" />
        </Link>
        <Link href="/#home">
          <Linkedin className="h-5 w-5 cursor-pointer text-accent lg:h-8 lg:w-8" />
        </Link>
        <Link href="mailto:info@nexer.es">
          <Mail className="h-5 w-5 cursor-pointer text-accent lg:h-8 lg:w-8" />
        </Link>
      </div>
    </div>
  );
};

export default HomeFooter;
