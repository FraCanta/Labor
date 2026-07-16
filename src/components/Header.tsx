"use client";

import { useState } from "react";
import { AppIcon as Icon } from "./AppIcon";

const navigation = [
  { label: "Servizi", href: "#servizi" },
  { label: "Chi siamo", href: "#chi-siamo" },
  { label: "Orari", href: "#orari" },
  { label: "Contatti", href: "#contatti" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-white shadow-[0_1px_12px_rgba(7,86,107,0.06)]">
      <div className="mx-auto flex h-20 w-full max-w-[1200px] items-center justify-between px-5 sm:px-8 lg:h-[88px] lg:px-10">
        <a href="#hero" onClick={closeMenu} className="group flex flex-col text-primary-dark" aria-label="LABOR Patronato e CAF, torna all'inizio">
          <span className="font-heading text-[1.65rem] font-extrabold leading-none tracking-tight sm:text-[1.8rem]">
            LABOR
          </span>
          <span className="mt-1 border-t-2 border-accent pt-1 text-[0.57rem] font-bold tracking-[0.16em] sm:text-[0.62rem]">
            PATRONATO e CAF
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigazione principale">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-bold text-primary-dark transition-colors hover:text-primary focus-visible:text-primary">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:0802376085"
          className="hidden min-h-11 items-center gap-2 rounded-md bg-accent px-5 font-heading text-sm font-bold text-primary-dark transition-colors hover:bg-[#cba476] lg:inline-flex"
        >
          <Icon icon="lucide:phone" aria-hidden="true" className="text-lg" />
          Chiama ora
        </a>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md text-primary-dark transition-colors hover:bg-surface lg:hidden"
          aria-label={isMenuOpen ? "Chiudi il menu" : "Apri il menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <Icon icon={isMenuOpen ? "lucide:x" : "lucide:menu"} aria-hidden="true" className="text-3xl" />
        </button>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Navigazione mobile"
        className={`${isMenuOpen ? "flex" : "hidden"} absolute inset-x-0 top-full flex-col border-t border-primary/10 bg-white px-5 pb-6 pt-2 shadow-lg lg:hidden`}
      >
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu} className="border-b border-primary/10 py-4 font-heading text-sm font-bold text-primary-dark">
            {item.label}
          </a>
        ))}
        <a href="tel:0802376085" onClick={closeMenu} className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-accent px-5 font-heading text-sm font-bold text-primary-dark">
          <Icon icon="lucide:phone" aria-hidden="true" className="text-lg" />
          Chiama ora
        </a>
      </nav>
    </header>
  );
}
