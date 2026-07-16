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
    </SectionShell>
  );
}
