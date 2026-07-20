import type { ReactNode } from "react";
import Link from "next/link";
import { Footer } from "./Footer";

type LegalPageProps = {
  title: string;
  children: ReactNode;
};

export function LegalPage({ title, children }: LegalPageProps) {
  return (
    <>
      <header className="border-b border-primary/10 bg-white">
        <div className="mx-auto flex min-h-20 w-full max-w-[1200px] items-center px-5 sm:px-8 lg:px-10">
          <Link href="/" className="flex flex-col text-primary-dark" aria-label="Torna alla home di Labor">
            <span className="font-heading text-2xl font-extrabold leading-none tracking-tight">LABOR</span>
            <span className="mt-1 border-t-2 border-accent pt-1 text-[0.57rem] font-bold tracking-[0.16em]">
              PATRONATO e CAF
            </span>
          </Link>
        </div>
      </header>
      <main className="bg-surface px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
        <article className="legal-content mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-[0_12px_36px_rgba(7,86,107,0.07)] sm:p-10 lg:p-14">
          <h1>{title}</h1>
          <p className="legal-updated">Ultimo aggiornamento: 20 luglio 2026</p>
          {children}
        </article>
      </main>
      <Footer />
    </>
  );
}
