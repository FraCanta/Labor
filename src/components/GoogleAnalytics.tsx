"use client";

import { useEffect } from "react";

const measurementId = "G-4G02GC7J5B";

type GoogleTagWindow = Window & {
  gtag?: (...args: unknown[]) => void;
};

export function GoogleAnalytics({ enabled }: { enabled: boolean }) {
  useEffect(() => {
    const gtag = (window as GoogleTagWindow).gtag;
    if (!gtag) return;

    gtag("consent", "update", {
      analytics_storage: enabled ? "granted" : "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });

    if (enabled) {
      gtag("config", measurementId, {
        anonymize_ip: true,
        send_page_view: true,
      });
    }
  }, [enabled]);

  return null;
}
