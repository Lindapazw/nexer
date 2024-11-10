import HeroCards from "./hero-cards";

const HomeHero = () => {
  return (
    <section className="relative h-screen">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 h-full w-full object-cover object-center"
      >
        <source src="/videos/hero_video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 h-full w-full bg-black/25"></div>

      <div className="container mx-auto">
        <h1 className="absolute top-1/2 flex -translate-y-1/2 flex-col text-white">
          Promoviendo la
          <span className="font-bold">Energía sostenible</span>
          del futuro
        </h1>

        <HeroCards className="absolute inset-x-0 bottom-0 w-full py-6" />
      </div>
    </section>
  );
};
export default HomeHero;
