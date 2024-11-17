import HeroCards from "./hero-cards";

const HomeHero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <iframe
        className="hero-video absolute left-1/2 top-1/2 h-full w-screen -translate-x-1/2 -translate-y-1/2"
        src="https://www.youtube.com/embed/AGhZvaz0eCo?loop=1&autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&disablekb=1&playlist=AGhZvaz0eCo&fs=0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Hero video"
      ></iframe>

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
