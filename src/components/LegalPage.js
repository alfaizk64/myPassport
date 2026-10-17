import Link from "next/link";
import { SITE } from "@/lib/site";

export default function LegalPage({ title, children }) {
  return (
    <div className="legal">
      <div className="container">
        <div className="legal__in">
          <Link href="/" className="official">
            &larr; Back to home
          </Link>
          <h1>{title}</h1>
          <p className="meta">Last updated {SITE.contentReviewed}</p>
          {children}
        </div>
      </div>
    </div>
  );
}
