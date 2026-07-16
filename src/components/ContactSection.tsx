import { AppIcon as Icon } from "./AppIcon";
import { SectionShell } from "./SectionShell";

export function ContactSection() {
  return (
    <SectionShell
      id="contatti"
      aria-labelledby="contact-title"
      className="scroll-mt-20 bg-primary text-white lg:scroll-mt-[88px]"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <h2 id="contact-title" className="text-3xl font-bold leading-tight sm:text-4xl">
            Hai bisogno di assistenza?
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-white/90 sm:text-lg">
            Contattaci per ricevere informazioni o fissare un appuntamento.
          </p>
        </div>

        <div>
          <address className="space-y-4 not-italic">
            <a
              href="tel:0802376085"
              className="group flex w-fit items-center gap-4 text-[clamp(1.65rem,4vw,2.35rem)] font-bold leading-none text-white transition-colors hover:text-accent"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent text-primary-dark sm:size-12">
                <Icon icon="lucide:phone" aria-hidden="true" className="text-xl sm:text-2xl" />
              </span>
              080 237 60 85
            </a>
            <a
              href="mailto:labor.giovinazzo@gmail.com"
              className="flex max-w-full items-center gap-4 text-base font-medium text-white transition-colors hover:text-accent sm:text-lg"
            >
              <Icon icon="lucide:mail" aria-hidden="true" className="shrink-0 text-2xl text-accent" />
              <span className="min-w-0 [overflow-wrap:anywhere]">labor.giovinazzo@gmail.com</span>
            </a>
          </address>

          <div className="mt-8 flex w-full flex-col gap-4 sm:flex-row">
            <a
              href="tel:0802376085"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-accent px-7 font-heading text-sm font-bold text-primary-dark transition-colors hover:bg-[#cba476] sm:w-auto sm:min-w-48"
            >
              <Icon icon="lucide:phone" aria-hidden="true" className="text-lg" />
              Chiama ora
            </a>
            <a
              href="mailto:labor.giovinazzo@gmail.com"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border-2 border-white px-7 font-heading text-sm font-bold text-white transition-colors hover:bg-white hover:text-primary-dark sm:w-auto sm:min-w-48"
            >
              <Icon icon="lucide:mail" aria-hidden="true" className="text-lg" />
              Invia un’email
            </a>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
