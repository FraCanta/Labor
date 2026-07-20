"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-white shadow-[0_1px_12px_rgba(7,86,107,0.06)]">
      <div className="mx-auto flex h-20 w-full max-w-[1200px] items-center justify-between px-5 sm:px-8 lg:h-[88px] lg:px-10">
        <a href="#hero" onClick={closeMenu} className="inline-flex shrink-0" aria-label="LABOR Patronato e CAF, torna all'inizio">
          <Image
            src="/labor-logo2.svg"
            alt="LABOR Patronato e CAF"
            width={1584}
            height={708}
            priority
            className="h-12 w-auto sm:h-14"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigazione principale">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="text-base font-bold text-primary-dark transition-colors hover:text-primary focus-visible:text-primary">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:0802376085"
          className="hidden min-h-11 items-center gap-2 rounded-md bg-accent px-5 font-heading text-sm font-bold uppercase tracking-[0.04em] text-primary-dark transition-colors hover:bg-[#cba476] lg:inline-flex"
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

      {isMenuOpen && (
        <button
          type="button"
          aria-label="Chiudi il menu"
          onClick={closeMenu}
          className="fixed inset-x-0 bottom-0 top-20 z-0 cursor-default bg-primary-dark/55 backdrop-blur-[2px] lg:hidden"
        />
      )}

      <nav
        id="mobile-navigation"
        aria-label="Navigazione mobile"
        className={`${isMenuOpen ? "flex" : "hidden"} absolute inset-x-0 top-full z-10 flex-col border-t border-primary/10 bg-white px-5 pb-6 pt-2 shadow-lg lg:hidden`}
      >
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu} className="border-b border-primary/10 py-4 font-heading text-base font-bold text-primary-dark">
            {item.label}
          </a>
        ))}
        <a href="tel:0802376085" onClick={closeMenu} className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-accent px-5 font-heading text-sm font-bold uppercase tracking-[0.04em] text-primary-dark">
          <Icon icon="lucide:phone" aria-hidden="true" className="text-lg" />
          Chiama ora
        </a>
      </nav>
    </header>
  );
}
