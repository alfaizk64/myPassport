import { HindiHome } from "@/components/HindiPages";
import { HI_HOME } from "@/lib/content-hi";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: HI_HOME.title,
  description: HI_HOME.description,
  path: "/hi/",
  locale: "hi_IN",
});

export default function HindiHomePage() {
  return <HindiHome data={HI_HOME} />;
}
