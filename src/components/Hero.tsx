export function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-title" className="flex w-full scroll-mt-20 items-center bg-primary py-20 text-white sm:py-24 lg:min-h-[580px] lg:scroll-mt-[88px] lg:py-16">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center px-5 text-center sm:px-8 lg:px-10">
        <h1 id="hero-title" className="inline-flex w-max max-w-full flex-col items-stretch font-heading">
          <span className="whitespace-nowrap text-[clamp(3.5rem,9vw,6.75rem)] font-extrabold leading-[0.9] tracking-[0.015em]">
            LABOR
          </span>
          <span className="my-3 h-[3px] w-full bg-accent sm:my-4" aria-hidden="true" />
          <span className="w-full whitespace-nowrap text-center text-[clamp(1.2rem,4vw,2.15rem)] font-medium tracking-[0.12em]">
            PATRONATO e CAF
          </span>
        </h1>
        <p className="mt-8 max-w-2xl text-base font-medium leading-relaxed sm:text-lg">
          <span className="sm:hidden">
            <span className="block">Assistenza fiscale e previdenziale</span>
            <span className="block">a Giovinazzo, con un supporto</span>
            <span className="block">chiaro e professionale per ogni pratica.</span>
          </span>
          <span className="hidden sm:inline">
            Assistenza fiscale e previdenziale a Giovinazzo,
            <br />
            con un supporto chiaro e professionale per ogni pratica.
          </span>
        </p>
        <div className="mt-9 flex w-full max-w-md flex-col gap-4 sm:w-auto sm:max-w-none sm:flex-row">
          <a href="#servizi" className="inline-flex min-h-12 items-center justify-center rounded-md bg-accent px-8 font-heading text-sm font-bold uppercase tracking-[0.04em] text-primary-dark transition-colors hover:bg-[#cba476] sm:min-w-48">
            Scopri i servizi
          </a>
          <a href="#contatti" className="inline-flex min-h-12 items-center justify-center rounded-md border-2 border-white px-8 font-heading text-sm font-bold uppercase tracking-[0.04em] text-white transition-colors hover:bg-white hover:text-primary-dark sm:min-w-48">
            Contattaci
          </a>
        </div>
      </div>
    </section>
  );
}
