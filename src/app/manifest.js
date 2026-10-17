import { SITE } from "@/lib/site";

export default function manifest() {
  return {
    name: SITE.name,
    short_name: SITE.shortName,
    description:
      "Passport, PAN card and driving licence assistance in Dewas, Madhya Pradesh.",
    start_url: "/",
    display: "standalone",
    background_color: "#F8F7F3",
    theme_color: "#172B4D",
    icons: [
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
