import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

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
  title: "Labor Patronato e CAF Giovinazzo",
  description:
    "Assistenza fiscale, previdenziale e pratiche CAF e Patronato a Giovinazzo. Contatta Labor per informazioni, documenti e appuntamenti.",
  appleWebApp: {
    capable: true,
    title: "Labor - Patronato e CAF",
    statusBarStyle: "default",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
