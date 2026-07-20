import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Script from "next/script";
import { CookieConsentProvider } from "@/components/CookieConsent";
import "./globals.css";

const siteUrl = "https://laborpatronatoecafgiovinazzo.vercel.app";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Labor Patronato e CAF Giovinazzo",
  description:
    "Assistenza fiscale, previdenziale e pratiche CAF e Patronato a Giovinazzo. Contatta Labor per informazioni, documenti e appuntamenti.",
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Labor Patronato e CAF Giovinazzo" }],
  creator: "Labor Patronato e CAF Giovinazzo",
  category: "Servizi fiscali e previdenziali",
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "/",
    siteName: "Labor Patronato e CAF Giovinazzo",
    title: "Labor Patronato e CAF Giovinazzo",
    description:
      "Assistenza fiscale, previdenziale e pratiche CAF e Patronato a Giovinazzo. Contatta Labor per informazioni, documenti e appuntamenti.",
    images: [
      {
        url: "/labor-logo.jpg",
        width: 2048,
        height: 2048,
        alt: "Labor Patronato e CAF Giovinazzo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Labor Patronato e CAF Giovinazzo",
    description:
      "Assistenza fiscale, previdenziale e pratiche CAF e Patronato a Giovinazzo.",
    images: ["/labor-logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "x7-icM4iLOe7_4q-TNQ4hSRw1ZGj-TCz2YfooNVGvxg",
  },
  appleWebApp: {
    capable: true,
    title: "Labor - Patronato e CAF",
    statusBarStyle: "default",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <Script id="google-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              wait_for_update: 500
            });
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4G02GC7J5B"
          strategy="beforeInteractive"
        />
        <Script id="google-analytics-config" strategy="beforeInteractive">
          {`
            gtag('js', new Date());
            gtag('config', 'G-4G02GC7J5B', {
              anonymize_ip: true,
              send_page_view: false
            });
          `}
        </Script>
      </head>
      <body className="antialiased">
        <CookieConsentProvider>{children}</CookieConsentProvider>
      </body>
    </html>
  );
}
