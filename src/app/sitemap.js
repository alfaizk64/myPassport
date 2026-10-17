import { PAGES } from "@/lib/pages";
import { SITE } from "@/lib/site";

export default function sitemap() {
  const lastModified = SITE.contentReviewedISO;
  return [
    { url: `${SITE.url}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    ...PAGES.map((p) => ({
      url: `${SITE.url}${p.path}`,
      lastModified,
      changeFrequency: "monthly",
      priority: p.kind === "overview" ? 0.9 : 0.8,
    })),
    { url: `${SITE.url}/privacy-policy/`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE.url}/terms/`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
