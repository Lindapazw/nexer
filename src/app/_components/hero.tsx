import Image from "next/image";
import HeroCards from "./hero-cards";

const HomeHero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover object-center"
      >
        <source src="/videos/hero_video.mp4" type="video/mp4" />
        <Image
          src="/images/about_image.jpg"
          alt="hero video"
          fill
          className="h-full w-full"
          priority
          sizes="50vw"
        />
      </video>

      <div className="absolute inset-0 h-full w-full bg-black/25"></div>

      <div className="container mx-auto">
        <h1 className="absolute inset-x-0 top-1/4 flex flex-col items-center text-white lg:inset-x-auto lg:top-1/2 lg:-translate-y-1/2 lg:items-start">
          Promoviendo la
          <span className="font-bold">Energía sostenible</span>
          del futuro
        </h1>

        <HeroCards className="absolute inset-x-0 top-1/2 w-full flex-col pb-12 lg:bottom-0 lg:top-auto lg:flex-row" />
      </div>
    </section>
  );
};
export default HomeHero;
