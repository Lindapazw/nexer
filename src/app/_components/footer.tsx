import Image from "next/image";
import Link from "next/link";
import Whatsapp from "./_icons.tsx/whatsapp";

const HomeFooter = () => {
  return (
    <div className="container mx-auto flex min-h-[calc(20vh-3.25rem)] justify-between">
      <Link href="/#home">
        <Image src="/logos/logo.png" alt="team" height={200} width={200} />
      </Link>
      <div>
        <Link href="/#home">
          <Whatsapp className="h-5 w-5 text-accent" />
        </Link>
      </div>
    </div>
  );
};

export default HomeFooter;
