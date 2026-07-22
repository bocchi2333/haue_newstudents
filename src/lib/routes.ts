import { defaultSchoolId, schools } from "@/data/schools";

export function schoolPath(schoolId: string, path = "") {
  const school = schools.find((item) => item.id === schoolId);
  if (!school) throw new Error(`Unknown school: ${schoolId}`);
  const suffix = path ? `/${path.replace(/^\//, "")}` : "";
  return schoolId === defaultSchoolId ? suffix || "/" : `/schools/${school.slug}${suffix}`;
}

export function withCampus(href: string, campus?: string) {
  if (!campus) return href;
  return `${href}${href.includes("?") ? "&" : "?"}campus=${encodeURIComponent(campus)}`;
}
