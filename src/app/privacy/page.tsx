import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Labor Patronato e CAF Giovinazzo",
  description: "Informativa sul trattamento dei dati personali del sito Labor Patronato e CAF Giovinazzo.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        Questa informativa descrive come vengono trattati i dati personali degli utenti che visitano il sito di Labor Patronato e CAF Giovinazzo, ai sensi del Regolamento (UE) 2016/679 (“GDPR”).
      </p>

      <h2>1. Titolare del trattamento</h2>
      <p>
        Il titolare del trattamento è Labor Patronato e CAF Giovinazzo, con sede in Via Marconi, 95, 70054 Giovinazzo (BA). Per richieste relative alla privacy è possibile scrivere a <a href="mailto:labor.giovinazzo@gmail.com">labor.giovinazzo@gmail.com</a> o telefonare al <a href="tel:0802376085">080 237 60 85</a>.
      </p>

      <h2>2. Dati trattati</h2>
      <ul>
        <li>Dati tecnici di navigazione, come indirizzo IP, data e ora della richiesta, browser, dispositivo e risorse richieste.</li>
        <li>Dati forniti volontariamente quando l’utente contatta Labor tramite telefono o posta elettronica.</li>
        <li>Dati trasmessi a Google solo se l’utente sceglie di caricare la mappa incorporata.</li>
      </ul>
      <p>Il sito non contiene moduli e non raccoglie direttamente documenti fiscali, previdenziali o sanitari.</p>

      <h2>3. Finalità e basi giuridiche</h2>
      <ul>
        <li>Fornire il sito, garantirne sicurezza e corretto funzionamento: legittimo interesse del titolare.</li>
        <li>Rispondere a richieste di informazioni o appuntamento: esecuzione di misure precontrattuali richieste dall’interessato.</li>
        <li>Adempiere a obblighi normativi o richieste dell’autorità: obbligo legale.</li>
        <li>Caricare Google Maps: consenso espresso mediante il banner o il pulsante dedicato.</li>
      </ul>

      <h2>4. Modalità del trattamento e conservazione</h2>
      <p>
        I dati sono trattati con misure tecniche e organizzative adeguate. Le richieste ricevute via email o telefono sono conservate per il tempo necessario a gestirle e per gli eventuali obblighi di legge. I log tecnici sono conservati secondo i tempi applicati dal fornitore di hosting e per esigenze di sicurezza.
      </p>

      <h2>5. Destinatari e fornitori</h2>
      <p>
        I dati possono essere trattati da fornitori tecnici strettamente necessari, tra cui Vercel per hosting e distribuzione del sito, provider di posta elettronica e telecomunicazioni e, solo dopo scelta dell’utente, Google per la mappa. Tali soggetti operano secondo i rispettivi ruoli e condizioni privacy.
      </p>

      <h2>6. Trasferimenti fuori dallo Spazio Economico Europeo</h2>
      <p>
        Alcuni fornitori possono trattare dati anche fuori dallo Spazio Economico Europeo. In tali casi il trasferimento avviene sulla base degli strumenti previsti dal GDPR, come decisioni di adeguatezza o clausole contrattuali standard.
      </p>

      <h2>7. Diritti dell’interessato</h2>
      <p>
        Nei casi previsti dagli articoli 15–22 del GDPR è possibile chiedere accesso, rettifica, cancellazione, limitazione, portabilità e opposizione al trattamento, nonché revocare il consenso senza pregiudicare la liceità del trattamento precedente. Le richieste possono essere inviate ai contatti del titolare.
      </p>
      <p>
        È inoltre possibile proporre reclamo al <a href="https://www.garanteprivacy.it/" target="_blank" rel="noreferrer">Garante per la protezione dei dati personali</a>.
      </p>

      <h2>8. Aggiornamenti</h2>
      <p>Questa informativa può essere aggiornata per modifiche normative, tecniche o dei servizi utilizzati.</p>
    </LegalPage>
  );
}
