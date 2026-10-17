import { notFound } from "next/navigation";
import ServicePage from "@/components/ServicePage";
import { getPage, subpages } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";

const BASE = "/pan-card-services-dewas/";

export const dynamicParams = false;

export function generateStaticParams() {
  return subpages("pan-card").map((p) => ({ slug: p.path.slice(BASE.length, -1) }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getPage(`${BASE}${slug}/`);
  return page ? pageMetadata(page) : {};
}

export default async function Page({ params }) {
  const { slug } = await params;
  const page = getPage(`${BASE}${slug}/`);
  if (!page) notFound();
  return <ServicePage page={page} />;
}
