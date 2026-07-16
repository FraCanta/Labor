import { AppIcon as Icon } from "./AppIcon";
import { SectionShell } from "./SectionShell";

const openingHours = [
  {
    icon: "lucide:calendar-days",
    days: "Lunedì – Venerdì",
    hours: "9:30 – 13:00",
  },
  {
    icon: "lucide:clock-3",
    days: "Martedì – Giovedì",
    hours: "16:30 – 19:00",
  },
];

export function LocationSection() {
  return (
    <SectionShell
      id="orari"
      aria-label="Orari e sede"
      className="scroll-mt-20 bg-white lg:scroll-mt-[88px]"
    >
      <div className="grid overflow-hidden rounded-2xl bg-[#eef6f8] shadow-[0_12px_36px_rgba(7,86,107,0.07)] lg:grid-cols-2">
        <section aria-labelledby="hours-title" className="px-6 py-9 sm:px-10 sm:py-12 lg:px-12">
          <div className="flex items-center gap-3 text-primary-dark">
            <Icon icon="lucide:clock" aria-hidden="true" className="shrink-0 text-3xl" />
            <h2 id="hours-title" className="text-xl font-bold uppercase sm:text-2xl">
              Orari di apertura
            </h2>
          </div>

          <dl className="mt-8 divide-y divide-primary-dark/20">
            {openingHours.map((item) => (
              <div key={item.days} className="flex gap-4 py-6 first:pt-0 last:pb-0">
                <Icon icon={item.icon} aria-hidden="true" className="mt-0.5 shrink-0 text-2xl text-primary-dark/70" />
                <div>
                  <dt className="font-heading font-bold text-primary-dark">{item.days}</dt>
                  <dd className="mt-2 text-base font-medium text-ink">{item.hours}</dd>
                </div>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="location-title" className="border-t border-primary-dark/15 px-6 py-9 sm:px-10 sm:py-12 lg:border-l lg:border-t-0 lg:px-12">
          <div className="flex items-center gap-3 text-primary-dark">
            <Icon icon="lucide:map-pin" aria-hidden="true" className="shrink-0 text-3xl" />
            <h2 id="location-title" className="text-xl font-bold uppercase sm:text-2xl">
              Dove siamo
            </h2>
          </div>

          <address className="mt-6 not-italic leading-7 text-ink">
            Via Marconi, 95
            <br />
            Giovinazzo (BA)
          </address>

          <div className="mt-6 aspect-[16/10] w-full overflow-hidden rounded-xl bg-primary/10 sm:aspect-video">
            <iframe
              title="Mappa della sede LABOR a Giovinazzo"
              src="https://www.google.com/maps?q=Via%20Marconi%2095%2C%20Giovinazzo%20BA&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </section>
      </div>
    </SectionShell>
  );
}
