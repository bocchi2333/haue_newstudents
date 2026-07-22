import type { SearchRecord } from "@/lib/types";

export function normalizeSearch(value: string) {
  return value.trim().toLocaleLowerCase("zh-CN").replace(/\s+/g, "");
}

export function searchRecords(records: SearchRecord[], query: string, schoolId: string) {
  const normalized = normalizeSearch(query);
  if (!normalized) return [];

  return records
    .filter((record) => record.schoolId === schoolId)
    .map((record) => {
      const title = normalizeSearch(record.title);
      const keywords = normalizeSearch(record.keywords.join(" "));
      const summary = normalizeSearch(record.summary);
      const score = title === normalized ? 100 : title.includes(normalized) ? 60 : keywords.includes(normalized) ? 30 : summary.includes(normalized) ? 10 : 0;
      return { record, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || a.record.title.localeCompare(b.record.title, "zh-CN"))
    .map((entry) => entry.record);
}
