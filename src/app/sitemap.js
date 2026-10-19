import { HI_PAGES } from "@/lib/content-hi";
import { GUIDES } from "@/lib/guides";
import { PAGES } from "@/lib/pages";
import { SITE } from "@/lib/site";

export default function sitemap() {
  const lastModified = SITE.contentReviewedISO;
  const entry = (path, priority, changeFrequency = "monthly") => ({
    url: `${SITE.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  });

  return [
    entry("/", 1),
    entry("/hi/", 0.9),
    ...PAGES.map((p) => entry(p.path, p.kind === "overview" ? 0.9 : 0.8)),
    ...HI_PAGES.map((p) => entry(p.path, 0.8)),
    entry("/guides/", 0.7),
    ...GUIDES.map((g) => entry(g.path, 0.7)),
    entry("/about/", 0.6),
    entry("/privacy-policy/", 0.3, "yearly"),
    entry("/terms/", 0.3, "yearly"),
  ];
}
