"use client";

import { useSyncExternalStore } from "react";

function getCurrentYear() {
  return new Date().getFullYear();
}

function subscribe(callback: () => void) {
  const interval = window.setInterval(callback, 60 * 60 * 1000);
  return () => window.clearInterval(interval);
}

export function CurrentYear() {
  const year = useSyncExternalStore(subscribe, getCurrentYear, getCurrentYear);
  return <>{year}</>;
}
