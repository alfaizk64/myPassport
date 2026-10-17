"use client";

// Sends an event to Google Analytics only when it has been enabled with
// NEXT_PUBLIC_GA_ID. Never pass phone numbers, names, messages or documents.
export function track(event, params = {}) {
  if (typeof window === "undefined") return;
  try {
    if (typeof window.gtag === "function") window.gtag("event", event, params);
  } catch {
    /* analytics must never break the page */
  }
}
