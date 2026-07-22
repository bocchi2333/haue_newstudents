import { notFound } from "next/navigation";
import Home from "@/app/page";
import { schools } from "@/data/schools";

export const dynamicParams = false;
export function generateStaticParams() { return schools.map((school) => ({ schoolSlug: school.slug })); }
export default async function SchoolAliasPage({ params }: { params: Promise<{ schoolSlug: string }> }) {
  const { schoolSlug } = await params;
  const school = schools.find((item) => item.slug === schoolSlug);
  if (!school) notFound();
  return <Home />;
}
