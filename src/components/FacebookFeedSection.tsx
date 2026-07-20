"use client";

import Link from "next/link";
import Script from "next/script";
import { useCookieConsent } from "./CookieConsent";
import { SectionShell } from "./SectionShell";

const facebookPageUrl =
  "https://www.facebook.com/caflaborgiovinazzo/?locale=it_IT";

export function FacebookFeedSection() {
  const { status, acceptCookies } = useCookieConsent();

  return (
    <SectionShell id="facebook-feed" className="bg-primary/5">
      <div className="text-center">
        <span
          className="mx-auto mb-5 block h-0.5 w-12 bg-accent"
          aria-hidden="true"
        />
        <h2
          id="facebook-title"
          className="text-3xl font-bold leading-tight text-primary-dark sm:text-4xl"
        >
          Ultime da Facebook
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-ink/85 sm:text-lg">
          Aggiornamenti, comunicazioni e informazioni
        </p>
      </div>

      <div className="mt-10 min-h-72 overflow-hidden rounded-2xl bg-white p-4 shadow-[0_12px_36px_rgba(7,86,107,0.08)] sm:p-6">
        {status === "accepted" ? (
          <>
            <Script
              src="https://elfsightcdn.com/platform.js"
              strategy="lazyOnload"
            />
            <div
              className="elfsight-app-1c1655a5-0833-49db-9e17-c1d91ff26323"
              data-elfsight-app-lazy
            />
          </>
        ) : (
          <div className="flex min-h-64 flex-col items-center justify-center px-2 py-8 text-center">
            <h3 className="text-xl font-bold text-primary-dark">
              Feed Facebook
            </h3>
            <p className="mt-4 max-w-lg text-sm leading-6 text-ink/80 sm:text-base">
              Accetta i cookie di terze parti per visualizzare gli ultimi post
              della pagina Facebook.
            </p>
            <button
              type="button"
              onClick={acceptCookies}
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-accent px-6 font-heading text-sm font-bold uppercase tracking-[0.04em] text-primary-dark transition-colors hover:bg-[#cba476] sm:w-auto"
            >
              Accetta e carica il feed
            </button>
            <div className="mt-4 flex flex-col items-center gap-3 text-sm sm:flex-row sm:gap-5">
              <Link
                href="/cookie-policy"
                className="font-semibold text-primary-dark underline hover:text-primary"
              >
                Informativa cookie
              </Link>
              <a
                href={facebookPageUrl}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-primary-dark underline hover:text-primary"
              >
                Apri la pagina Facebook
              </a>
            </div>
          </div>
        )}
      </div>
    </SectionShell>
  );
}
