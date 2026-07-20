"use client";

import Link from "next/link";
import {
  createContext,
  useContext,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { AppIcon as Icon } from "./AppIcon";
import { GoogleAnalytics } from "./GoogleAnalytics";

type ConsentStatus = "accepted" | "rejected" | null;

type CookieConsentContextValue = {
  status: ConsentStatus;
  acceptCookies: () => void;
  rejectCookies: () => void;
  resetConsent: () => void;
};

const storageKey = "labor-cookie-consent";
const consentEvent = "labor-cookie-consent-change";

const CookieConsentContext = createContext<CookieConsentContextValue | null>(
  null,
);
const emptySubscribe = () => () => {};

function getConsentSnapshot(): ConsentStatus {
  const value = window.localStorage.getItem(storageKey);
  return value === "accepted" || value === "rejected" ? value : null;
}

function subscribeToConsent(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(consentEvent, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(consentEvent, callback);
  };
}

function updateConsent(value: Exclude<ConsentStatus, null> | null) {
  if (value) {
    window.localStorage.setItem(storageKey, value);
  } else {
    window.localStorage.removeItem(storageKey);
  }

  window.dispatchEvent(new Event(consentEvent));
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const status = useSyncExternalStore(
    subscribeToConsent,
    getConsentSnapshot,
    () => null,
  );
  const isHydrated = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  const contextValue: CookieConsentContextValue = {
    status,
    acceptCookies: () => updateConsent("accepted"),
    rejectCookies: () => updateConsent("rejected"),
    resetConsent: () => updateConsent(null),
  };

  return (
    <CookieConsentContext.Provider value={contextValue}>
      {children}
      <GoogleAnalytics enabled={status === "accepted"} />
      {isHydrated &&
        (status === null ? <CookieBanner /> : <FloatingCookieButton />)}
    </CookieConsentContext.Provider>
  );
}

function FloatingCookieButton() {
  const { resetConsent } = useCookieConsent();

  return (
    <button
      type="button"
      onClick={resetConsent}
      aria-label="Modifica le preferenze cookie"
      title="Modifica preferenze cookie"
      className="fixed bottom-5 right-5 z-90 inline-flex size-12 items-center justify-center rounded-full border-2 border-white bg-accent text-primary-dark shadow-[0_8px_28px_rgba(7,86,107,0.28)] transition-transform hover:scale-105 hover:bg-[#cba476]"
    >
      <Icon icon="lucide:cookie" aria-hidden="true" className="text-2xl" />
    </button>
  );
}

function CookieBanner() {
  const { acceptCookies, rejectCookies } = useCookieConsent();

  return (
    <aside
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-description"
      className="fixed inset-x-3 bottom-3 z-[100] mx-auto max-w-4xl rounded-2xl border border-white/15 bg-primary-dark p-5 text-white shadow-[0_18px_60px_rgba(0,0,0,0.28)] sm:inset-x-6 sm:p-6"
    >
      <div className="grid items-center gap-5 md:grid-cols-[1fr_auto]">
        <div>
          <h2 id="cookie-banner-title" className="text-lg font-bold sm:text-xl">
            Preferenze cookie
          </h2>
          <p
            id="cookie-banner-description"
            className="mt-2 max-w-2xl text-sm leading-6 text-white/90"
          >
            Il sito usa strumenti tecnici necessari. Con il tuo consenso può
            attivare Google Analytics e caricare Google Maps e il feed Facebook,
            che potrebbero utilizzare cookie di terze parti.
          </p>
          <Link
            href="/cookie-policy"
            className="mt-2 inline-flex text-sm font-semibold text-accent underline hover:text-white"
          >
            Leggi la Cookie Policy
          </Link>
        </div>
        <div className="flex flex-col-reverse gap-3 sm:flex-row md:flex-col-reverse lg:flex-row">
          <button
            type="button"
            onClick={rejectCookies}
            className="inline-flex min-h-12 min-w-32 items-center justify-center rounded-md border-2 border-white px-5 font-heading text-sm font-bold transition-colors hover:bg-white hover:text-primary-dark"
          >
            Rifiuta
          </button>
          <button
            type="button"
            onClick={acceptCookies}
            className="inline-flex min-h-12 min-w-32 items-center justify-center rounded-md bg-accent px-5 font-heading text-sm font-bold text-primary-dark transition-colors hover:bg-[#cba476]"
          >
            Accetta
          </button>
        </div>
      </div>
    </aside>
  );
}

export function CookiePreferencesButton() {
  const { resetConsent } = useCookieConsent();

  return (
    <button
      type="button"
      onClick={resetConsent}
      className="w-fit text-left text-white/80 underline transition-colors hover:text-white"
    >
      Modifica preferenze cookie
    </button>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);

  if (!context) {
    throw new Error(
      "useCookieConsent deve essere usato dentro CookieConsentProvider",
    );
  }

  return context;
}
