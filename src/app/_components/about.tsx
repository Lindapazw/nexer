import Image from "next/image";

const HomeAbout = () => {
  return (
    <section className="container h-[90vh] bg-blue-400 mx-auto">
      <h3 className="h3">IMPULSANDO EL CAMBIO</h3>
      <h2 className="h2">
        Participa en la construcción de un{" "}
        <span className="span">modelo energético </span>
        sostenible
      </h2>
      <p className="p">
        Somos una firma independiente especializada en la identificación y
        <span className="span"> desarrollo de proyectos </span> innovadores que
        hacen realidad la Transición Energética{" "}
        <span className="span underline">ver más</span>
      </p>

      <div className="relative w-full h-full">
        {" "}
        <Image
          src="/images/about.png"
          alt="about nexer image"
          fill
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
};
export default HomeAbout;
