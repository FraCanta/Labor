import { AppIcon as Icon } from "./AppIcon";
import Image from "next/image";
import Link from "next/link";
import { CookiePreferencesButton } from "./CookieConsent";
import { CurrentYear } from "./CurrentYear";

export function Footer() {
  return (
    <footer className="w-full bg-primary-dark text-white">
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[0.8fr_1.3fr_0.9fr] lg:gap-12 lg:px-10 lg:py-14">
        <div>
          <Link href="/" className="inline-flex" aria-label="LABOR Patronato e CAF, torna alla home">
            <Image
              src="/logo-positivo.svg"
              alt="LABOR Patronato e CAF"
              width={2048}
              height={2048}
              className="h-24 w-52 object-cover object-center sm:h-28 sm:w-60"
            />
          </Link>
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
          <a
            href="https://www.facebook.com/caflaborgiovinazzo/?locale=it_IT"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex text-white/90 transition-colors hover:text-accent"
          >
            CAF Labor Giovinazzo su Facebook
          </a>
          <nav aria-label="Informazioni legali" className="mt-6 flex flex-col gap-3 text-sm">
            <Link href="/privacy" className="w-fit text-white/80 underline transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/cookie-policy" className="w-fit text-white/80 underline transition-colors hover:text-white">
              Cookie Policy
            </Link>
            <CookiePreferencesButton />
          </nav>
        </div>
      </div>

      <div className="bg-accent px-5 py-4 text-center text-sm font-medium text-ink">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
          <p>© <CurrentYear /> Labor Patronato e CAF</p>
          <span className="hidden sm:inline" aria-hidden="true">•</span>
          <p>
            Sito realizzato da{" "}
            <a
              href="https://www.thallion-dev.it/"
              target="_blank"
              rel="noreferrer"
              className="font-bold underline transition-colors hover:text-primary-dark"
            >
              Thallion Dev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
