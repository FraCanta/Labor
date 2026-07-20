"use client";

import Link from "next/link";
import { AppIcon as Icon } from "./AppIcon";
import { useCookieConsent } from "./CookieConsent";

export function MapEmbed() {
  const { status, acceptCookies } = useCookieConsent();

  return (
    <div className="mt-6 aspect-[16/10] w-full overflow-hidden rounded-xl bg-primary/10 sm:aspect-video">
      {status === "accepted" ? (
        <iframe
          title="Mappa della sede LABOR a Giovinazzo"
          src="https://www.google.com/maps?q=Via%20Marconi%2095%2C%20Giovinazzo%20BA&output=embed"
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center px-5 text-center">
          <Icon icon="lucide:map-pin" aria-hidden="true" className="text-4xl text-primary-dark" />
          <p className="mt-3 max-w-sm text-sm leading-6 text-ink">
            {status === "rejected"
              ? "Hai rifiutato i cookie di terze parti. Puoi abilitarli per visualizzare Google Maps."
              : "Accetta i cookie di terze parti per visualizzare Google Maps."}
          </p>
          <button
            type="button"
            onClick={acceptCookies}
            className="mt-4 inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-5 font-heading text-sm font-bold text-white transition-colors hover:bg-primary-dark"
          >
            Accetta e carica la mappa
          </button>
          <Link href="/cookie-policy" className="mt-3 text-sm font-semibold text-primary-dark underline hover:text-primary">
            Informativa cookie
          </Link>
        </div>
      )}
    </div>
  );
}
