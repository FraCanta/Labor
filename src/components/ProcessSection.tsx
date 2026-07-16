import { AppIcon as Icon } from "./AppIcon";
import { SectionShell } from "./SectionShell";

const steps = [
  {
    number: "01",
    icon: "lucide:phone-call",
    title: "Contattaci",
    description: "Scrivi o telefona per spiegare la pratica di cui hai bisogno.",
  },
  {
    number: "02",
    icon: "lucide:folder-open",
    title: "Prepara i documenti",
    description: "Ti indichiamo quali documenti sono necessari.",
  },
  {
    number: "03",
    icon: "lucide:handshake",
    title: "Vieni in sede",
    description: "Gestiamo insieme la pratica e ti seguiamo durante tutto il percorso.",
  },
];

export function ProcessSection() {
  return (
    <SectionShell
      id="come-funziona"
      aria-labelledby="process-title"
      className="scroll-mt-20 bg-white lg:scroll-mt-[88px]"
    >
      <header className="text-center">
        <div className="mx-auto mb-4 h-[3px] w-12 bg-accent" aria-hidden="true" />
        <h2 id="process-title" className="text-3xl font-bold uppercase text-primary-dark sm:text-4xl">
          Come funziona
        </h2>
      </header>

      <ol className="mt-12 grid gap-14 lg:grid-cols-3 lg:gap-24">
        {steps.map((step, index) => (
          <li
            key={step.number}
            className={`relative flex flex-col items-center text-center ${
              index < steps.length - 1
                ? "lg:after:absolute lg:after:left-[calc(100%+1rem)] lg:after:top-[5.25rem] lg:after:h-px lg:after:w-16 lg:after:bg-accent lg:after:content-['']"
                : ""
            }`}
          >
            <span className="flex size-10 items-center justify-center rounded-full bg-accent font-heading text-sm font-bold text-white">
              {step.number}
            </span>
            <Icon icon={step.icon} aria-hidden="true" className="mt-5 text-5xl text-primary-dark" />
            <h3 className="mt-5 text-lg font-bold uppercase text-primary-dark">{step.title}</h3>
            <p className="mt-3 max-w-xs text-base leading-7 text-ink">{step.description}</p>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
