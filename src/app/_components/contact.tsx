const HomeContact = () => {
  return (
    <section className="container relative mx-auto flex min-h-[calc(100vh-3.25rem)] gap-20 py-6">
      <div id="contact" className="absolute -top-[3.25rem] h-[3.25rem]"></div>

      <div>
        <h2 className="h2">Cada paso cuenta</h2>

        <p className="p">Estás mas cerda de construir un futuro sostenible</p>
      </div>

      <div className="grow rounded-md bg-accent text-white">
        <h3 className="h3 p-8 text-center">¿Hablamos?</h3>
      </div>
    </section>
  );
};
export default HomeContact;
