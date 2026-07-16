import { AppIcon as Icon } from "./AppIcon";
import { SectionShell } from "./SectionShell";

export function AboutSection() {
  return (
    <SectionShell id="chi-siamo" aria-labelledby="about-title" className="scroll-mt-20 bg-white lg:scroll-mt-[88px]">
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <div className="max-w-2xl">
          <div className="mb-5 h-[3px] w-12 bg-accent" aria-hidden="true" />
          <h2 id="about-title" className="max-w-xl text-3xl font-bold leading-tight text-primary-dark sm:text-4xl">
            Un punto di riferimento per le tue pratiche
          </h2>
          <p className="mt-6 text-base leading-8 text-ink sm:text-lg">
            Labor Giovinazzo offre assistenza per pratiche fiscali, previdenziali e assistenziali. Ti aiutiamo a comprendere ogni passaggio e a gestire la documentazione con maggiore semplicità.
          </p>
        </div>

        <article className="flex min-h-72 flex-col items-center justify-center rounded-2xl bg-surface px-6 py-10 text-center shadow-[0_12px_36px_rgba(7,86,107,0.08)] sm:px-10">
          <div className="flex size-24 items-center justify-center rounded-full border border-primary-dark/30 text-primary-dark" aria-hidden="true">
            <Icon icon="lucide:user-round" className="text-5xl" />
          </div>
          <h3 className="mt-6 text-xl font-bold text-primary-dark sm:text-2xl">MARISA CANTALE</h3>
          <p className="mt-2 text-base leading-relaxed text-ink">
            Responsabile zonale
            <br />
            Giovinazzo
          </p>
        </article>
      </div>
    </SectionShell>
  );
}
