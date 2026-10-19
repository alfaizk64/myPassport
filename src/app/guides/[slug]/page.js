import { notFound } from "next/navigation";
import GuidePage from "@/components/GuidePage";
import { GUIDES, getGuide } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const g = getGuide(slug);
  return g ? buildMetadata({ title: g.title, description: g.description, path: g.path }) : {};
}

export default async function Page({ params }) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) notFound();
  return <GuidePage guide={g} />;
}
