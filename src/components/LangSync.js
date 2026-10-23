"use client";

import { useEffect } from "react";

// The root <html lang="en-IN"> is fixed at the top layout (Next.js can only render
// one <html> tag). This corrects the rendered document language to hi-IN while a
// /hi/ page is mounted, and restores en-IN on navigating away, so screen readers,
// the browser's "translate this page" prompt and crawlers see the right language.
export default function LangSync({ lang }) {
  useEffect(() => {
    const root = document.documentElement;
    const prev = root.lang;
    root.lang = lang;
    return () => {
      root.lang = prev;
    };
  }, [lang]);
  return null;
}
