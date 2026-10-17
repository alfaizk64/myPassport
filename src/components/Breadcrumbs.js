import Link from "next/link";
import { ChevronRight } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";

export default function Breadcrumbs({ trail }) {
  return (
    <>
      <nav aria-label="Breadcrumb" className="crumbs">
        <ol>
          {trail.map((t, i) => (
            <li key={t.path}>
              {i < trail.length - 1 ? (
                <>
                  <Link href={t.path}>{t.name}</Link>
                  <ChevronRight size={14} aria-hidden="true" />
                </>
              ) : (
                <span aria-current="page">{t.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(trail)} />
    </>
  );
}
