const HomeLocation = () => {
  return (
    <div className="relative min-h-[80vh] w-full">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/about_image.jpg")',
        }}
      />

      {/* Contenido superpuesto */}
      <div className="container relative z-10 flex h-full w-full flex-col items-center justify-center py-6">
        <h2 className="h2 text-white">Nuestra oficina</h2>

        <div className="flex w-full justify-center">
          <div className="h-1 w-1/3 bg-white"></div>
        </div>

        <p className="p mt-6 text-center text-white md:mt-12">
          Contáctanos para saber más sobre nuestros servicios y cómo podemos
          ayudarte a impulsar un futuro sostenible.
        </p>
      </div>
    </div>
  );
};
export default HomeLocation;
