const HomeLocation = () => {
  return (
    <section id="location" className="relative min-h-[80vh]">
      {/* imagen */}
      <div
        className="bg-attach-scroll md:bg-attach-fixed absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/images/about_image.jpg")',
        }}
      />

      {/* contenido */}
      <div className="relative pt-6">
        <div className="container">Contenido</div>
      </div>
    </section>
  );
};
export default HomeLocation;
