import ServicePage from "@/components/ServicePage";
import { getPage } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";

const PATH = "/driving-licence-services-dewas/";

export const metadata = pageMetadata(getPage(PATH));

export default function Page() {
  return <ServicePage page={getPage(PATH)} />;
}
