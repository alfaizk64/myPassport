import { notFound } from "next/navigation";
import { HindiServicePage } from "@/components/HindiPages";
import { HI_PAGES } from "@/lib/content-hi";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

const slugOf = (p) => p.path.replace(/^\/hi\//, "").replace(/\/$/, "");
const find = (slug) => HI_PAGES.find((p) => slugOf(p) === slug);

export function generateStaticParams() {
  return HI_PAGES.map((p) => ({ slug: slugOf(p) }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = find(slug);
  return page
    ? buildMetadata({
        title: page.title,
        description: page.description,
        path: page.path,
        locale: "hi_IN",
      })
    : {};
}

export default async function Page({ params }) {
  const { slug } = await params;
  const page = find(slug);
  if (!page) notFound();
  return <HindiServicePage page={page} />;
}
