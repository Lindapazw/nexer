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
    </main>
  );
}
