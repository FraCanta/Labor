export function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-title" className="flex w-full scroll-mt-20 items-center bg-primary py-20 text-white sm:py-24 lg:min-h-[580px] lg:scroll-mt-[88px] lg:py-16">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center px-5 text-center sm:px-8 lg:px-10">
        <h1 id="hero-title" className="text-[clamp(3.5rem,9vw,6.75rem)] font-extrabold leading-[0.88] tracking-[-0.045em]">
          LABOR
        </h1>
        <div className="my-5 h-[3px] w-full max-w-[23rem] bg-accent sm:my-6" aria-hidden="true" />
        <p className="font-heading text-[clamp(1.15rem,3.2vw,2rem)] font-semibold tracking-[0.16em] sm:tracking-[0.22em]">
          PATRONATO e CAF
        </p>
        <p className="mt-8 max-w-2xl text-base font-medium leading-relaxed sm:text-lg">
          Assistenza fiscale e previdenziale a Giovinazzo, con un supporto chiaro e professionale per ogni pratica.
        </p>
        <div className="mt-9 flex w-full max-w-md flex-col gap-4 sm:w-auto sm:max-w-none sm:flex-row">
          <a href="#servizi" className="inline-flex min-h-12 items-center justify-center rounded-md bg-accent px-8 font-heading text-sm font-bold text-primary-dark transition-colors hover:bg-[#cba476] sm:min-w-48">
            Scopri i servizi
          </a>
          <a href="#contatti" className="inline-flex min-h-12 items-center justify-center rounded-md border-2 border-white px-8 font-heading text-sm font-bold text-white transition-colors hover:bg-white hover:text-primary-dark sm:min-w-48">
            Contattaci
          </a>
        </div>
      </div>
    </section>
  );
}
