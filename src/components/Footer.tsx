import { AppIcon as Icon } from "./AppIcon";

export function Footer() {
  return (
    <footer className="w-full bg-primary-dark text-white">
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[0.8fr_1.3fr_0.9fr] lg:gap-12 lg:px-10 lg:py-14">
        <div>
          <a href="#hero" className="inline-flex flex-col" aria-label="LABOR Patronato e CAF, torna all'inizio">
            <span className="font-heading text-3xl font-extrabold leading-none tracking-tight">LABOR</span>
            <span className="mt-2 border-t-2 border-accent pt-2 text-[0.65rem] font-bold tracking-[0.18em]">
              PATRONATO e CAF
            </span>
          </a>
        </div>

        <address className="space-y-4 border-white/25 not-italic lg:border-x lg:px-12">
          <div className="flex items-start gap-3">
            <Icon icon="lucide:map-pin" aria-hidden="true" className="mt-0.5 shrink-0 text-xl text-accent" />
            <p>
              Via Marconi, 95
              <br />
              Giovinazzo (BA)
            </p>
          </div>
          <a href="mailto:labor.giovinazzo@gmail.com" className="flex max-w-full items-center gap-3 transition-colors hover:text-accent">
            <Icon icon="lucide:mail" aria-hidden="true" className="shrink-0 text-xl text-accent" />
            <span className="min-w-0 [overflow-wrap:anywhere]">labor.giovinazzo@gmail.com</span>
          </a>
          <a href="tel:0802376085" className="flex w-fit items-center gap-3 transition-colors hover:text-accent">
            <Icon icon="lucide:phone" aria-hidden="true" className="shrink-0 text-xl text-accent" />
            080 237 60 85
          </a>
        </address>

        <div>
          <h2 className="text-sm font-bold tracking-[0.12em]">SEGUICI</h2>
          <p className="mt-3 text-white/90">CAF Labor Giovinazzo</p>
        </div>
      </div>

      <div className="bg-accent px-5 py-4 text-center text-sm font-medium text-ink">
        <p>© 2026 Labor Patronato e CAF – Tutti i diritti riservati</p>
      </div>
    </footer>
  );
}
