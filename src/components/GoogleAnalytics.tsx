"use client";

import Script from "next/script";
import { useEffect } from "react";

const measurementId = "G-4G02GC7J5B";
const disableKey = `ga-disable-${measurementId}`;

export function GoogleAnalytics({ enabled }: { enabled: boolean }) {
  useEffect(() => {
    Object.assign(window, { [disableKey]: !enabled });
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
