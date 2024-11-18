import Image from "next/image";
import HomeAbout from "./_components/about";
import HomeContact from "./_components/contact";
import HomeFooter from "./_components/footer";
import HomeHeader from "./_components/header";
import HomeHero from "./_components/hero";
import HomeLocation from "./_components/location";
import HomeProjects from "./_components/projects";
import HomeServices from "./_components/services";
import HomeTeam from "./_components/team";

export default function Home() {
  return (
    <main className="relative bg-white">
      <HomeHeader />
      <HomeHero />
      <HomeAbout />
      <HomeTeam />
      <HomeServices />
      <HomeProjects />
      <HomeContact />
      <HomeLocation />
      <HomeFooter />

      <a
        className="fixed bottom-6 right-6 hidden md:block xl:bottom-20 xl:right-20"
        href="https://wa.link/r9o556"
        target="_blank"
      >
        <Image
          src="/logos/logo_whatsapp.png"
          alt="whatsapp"
          className="h-full"
          width={64}
          height={64}
        />
      </a>
    </main>
  );
}
