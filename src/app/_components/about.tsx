import Image from "next/image";

const HomeAbout = () => {
  return (
    <section className="container h-[90vh] bg-blue-400 flex flex-col justify-center items-start py-4">
      <h3 className="h3">IMPULSANDO EL CAMBIO</h3>
      <h2 className="h2">
        Participa en la construcción de un{" "}
        <span className="span">modelo energético </span>
        sostenible
      </h2>
      <div className="w-1/2 bg-accent h-2"></div>
      <p className="p py-4">
        Somos una firma independiente especializada en la identificación y
        <span className="span"> desarrollo de proyectos </span> innovadores que
        hacen realidad la Transición Energética{" "}
        <span className="span underline">ver más</span>
      </p>

      <div className="relative w-full h-[50%]">
        <Image
          src="/images/about2.png"
          alt="about Nexer image"
          fill
          className="object-cover rounded-xl"
        />
      </div>
    </section>
  );
};
export default HomeAbout;
