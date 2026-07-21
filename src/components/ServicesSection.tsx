import { AppIcon as Icon } from "./AppIcon";
import { SectionShell } from "./SectionShell";

const serviceGroups = [
  {
    title: "CAF",
    icon: "lucide:calculator",
    items: [
      "Dichiarazione dei redditi",
      "Modello 730 e Modello Redditi",
      "ISEE ordinario, universitario e sociosanitario",
      "Contratti di locazione",
      "Contratti per badanti e collaboratori domestici",
    ],
  },
  {
    title: "PATRONATO",
    icon: "lucide:users-round",
    items: [
      "Pensioni",
      "Disoccupazione",
      "Invalidità civile",
      "Danno biologico",
      "Pratiche INAIL",
      "Calcoli e ricostruzioni pensionistiche",
    ],
  },
];

export function ServicesSection() {
  return (
    <SectionShell id="servizi" aria-labelledby="services-title" className="scroll-mt-20 bg-surface lg:scroll-mt-[88px]">
      <header className="mx-auto max-w-2xl text-center">
        <div className="mx-auto mb-4 h-[3px] w-12 bg-accent" aria-hidden="true" />
        <h2 id="services-title" className="text-3xl font-bold uppercase text-primary-dark sm:text-4xl">
          I nostri servizi
        </h2>
        <p className="mt-3 text-base leading-relaxed text-ink sm:text-lg">
          Ti supportiamo in ogni pratica, con competenza e chiarezza.
        </p>
      </header>

      <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-0">
        {serviceGroups.map((group, index) => (
          <article key={group.title} className={index === 1 ? "lg:border-l lg:border-primary-dark/20 lg:pl-16" : "lg:pr-16"}>
            <div className="flex items-center gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-white" aria-hidden="true">
                <Icon icon={group.icon} className="text-2xl" />
              </span>
              <h3 className="text-xl font-bold text-primary-dark sm:text-2xl">{group.title}</h3>
            </div>
            <ul className="mt-6 space-y-3">
              {group.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base leading-6 text-ink">
                  <Icon icon="lucide:circle-check" aria-hidden="true" className="mt-0.5 shrink-0 text-xl text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <article className="mt-12 rounded-2xl border border-accent/70 bg-white p-6 shadow-[0_12px_32px_rgba(7,86,107,0.07)] sm:p-8 lg:mt-14 lg:flex lg:items-center lg:gap-8 lg:p-10">
        <span
          className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary text-white"
          aria-hidden="true"
        >
          <Icon icon="lucide:scale" className="text-3xl" />
        </span>

        <div className="mt-5 min-w-0 flex-1 lg:mt-0">
          <span className="inline-flex rounded-full bg-accent/25 px-3 py-1 font-heading text-xs font-bold uppercase tracking-[0.08em] text-primary-dark">
            Su appuntamento
          </span>
          <h3 className="mt-3 text-xl font-bold uppercase leading-tight text-primary-dark sm:text-2xl">
            Consulenza legale su appuntamento
          </h3>
          <p className="mt-3 max-w-2xl text-base leading-7 text-ink">
            Ricevi assistenza legale direttamente presso la nostra sede, con un professionista disponibile a valutare ogni esigenza in modo riservato e professionale.
          </p>
        </div>

        <a
          href="tel:0802376085"
          className="mt-7 inline-flex min-h-12 w-full shrink-0 items-center justify-center rounded-md bg-accent px-7 font-heading text-sm font-bold uppercase tracking-[0.04em] text-primary-dark transition-colors hover:bg-[#cba476] lg:mt-0 lg:w-auto"
          aria-label="Chiama per fissare un appuntamento per la consulenza legale"
        >
          Fissa un appuntamento
        </a>
      </article>
    </SectionShell>
  );
}
