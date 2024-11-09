import HomeAbout from "./_components/about";
import HomeClients from "./_components/clients";
import HomeFooter from "./_components/footer";
import HomeHeader from "./_components/header";
import HomeHero from "./_components/hero";
import HomeLocation from "./_components/location";
import HomeProjects from "./_components/projects";
import HomeServices from "./_components/services";
import HomeTeam from "./_components/team";

export default function Home() {
  return (
    <main>
      <HomeHeader />
      <HomeHero />
      <HomeAbout />
      <HomeTeam />
      <HomeServices />
      <HomeClients />
      <HomeProjects />
      <HomeLocation />
      <HomeFooter />
    </main>
  );
}
