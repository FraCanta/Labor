import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy | Labor Patronato e CAF Giovinazzo",
  description: "Informativa sui cookie e sui servizi di terze parti del sito Labor Patronato e CAF Giovinazzo.",
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <LegalPage title="Cookie Policy">
      <p>
        Questa informativa spiega l’uso di cookie e tecnologie simili sul sito Labor Patronato e CAF Giovinazzo.
      </p>

      <h2>1. Cosa sono i cookie</h2>
      <p>
        I cookie sono piccoli file o identificatori che un sito può memorizzare sul dispositivo dell’utente per consentire funzioni tecniche, ricordare preferenze o raccogliere informazioni sulla navigazione.
      </p>

      <h2>2. Cookie utilizzati dal sito</h2>
      <p>
        Il sito non utilizza cookie pubblicitari o di profilazione. Il banner consente di accettare o rifiutare Google Analytics e il caricamento di Google Maps. Questi servizi restano disattivati fino alla scelta dell’utente.
      </p>
      <p>
        La preferenza espressa viene conservata nel browser tramite memoria locale, così da ricordare la scelta. È possibile riaprire il banner in qualsiasi momento tramite “Modifica preferenze cookie” nel footer. L’infrastruttura può inoltre utilizzare strumenti necessari alla sicurezza, alla distribuzione e al corretto funzionamento del sito; i dati tecnici di richiesta possono essere trattati dal fornitore di hosting Vercel.
      </p>

      <h2>3. Google Analytics</h2>
      <p>
        Previo consenso, il sito utilizza Google Analytics 4 con identificativo di misurazione G-4G02GC7J5B per raccogliere informazioni aggregate sull’utilizzo delle pagine. Google può trattare dati tecnici relativi al browser, al dispositivo, alle pagine visitate e alle interazioni effettuate. Il consenso può essere modificato in qualsiasi momento tramite il pulsante dedicato alle preferenze cookie.
      </p>
      <p>
        Per maggiori informazioni è possibile consultare le <a href="https://policies.google.com/privacy?hl=it" target="_blank" rel="noreferrer">Norme sulla privacy di Google</a>.
      </p>

      <h2>4. Google Maps</h2>
      <p>
        La mappa di Google è bloccata per impostazione predefinita. Viene caricata soltanto dopo che l’utente seleziona “Accetta” nel banner oppure “Accetta e carica la mappa” nel relativo riquadro. Da quel momento Google può ricevere dati tecnici, come indirizzo IP e informazioni sul dispositivo, e utilizzare cookie o tecnologie proprie secondo la sua informativa.
      </p>
      <p>
        Per maggiori informazioni è possibile consultare le <a href="https://policies.google.com/privacy?hl=it" target="_blank" rel="noreferrer">Norme sulla privacy di Google</a>.
      </p>

      <h2>5. Gestione tramite browser</h2>
      <p>
        L’utente può eliminare o bloccare i cookie attraverso le impostazioni del proprio browser. La disabilitazione di strumenti tecnici può compromettere alcune funzionalità. Per rimuovere eventuali cookie già impostati da Google è necessario utilizzare le impostazioni del browser o del proprio account Google.
      </p>

      <h2>6. Modifiche all’informativa</h2>
      <p>
        Questa Cookie Policy sarà aggiornata qualora vengano introdotti servizi pubblicitari, nuovi contenuti incorporati o altri strumenti di tracciamento.
      </p>

      <h2>7. Contatti</h2>
      <p>
        Per chiarimenti è possibile scrivere a <a href="mailto:labor.giovinazzo@gmail.com">labor.giovinazzo@gmail.com</a> o consultare la <Link href="/privacy">Privacy Policy</Link>.
      </p>
    </LegalPage>
  );
}
