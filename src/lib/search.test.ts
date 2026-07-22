import { describe, expect, it } from "vitest";
import { normalizeSearch, searchRecords } from "@/lib/search";
import type { SearchRecord } from "@/lib/types";

const records: SearchRecord[] = [
  { id: "1", schoolId: "haue", kind: "topic", title: "宿舍生活", summary: "龙湖校区住宿", href: "/guide/dorm", keywords: ["床铺", "空调"] },
  { id: "2", schoolId: "haue", kind: "question", title: "空调怎么开？", summary: "查看宿舍说明", href: "/questions#air", keywords: ["空调"] },
  { id: "3", schoolId: "other", kind: "topic", title: "宿舍生活", summary: "另一所学校", href: "/schools/other/dorm", keywords: ["床铺"] },
];

describe("静态搜索", () => {
  it("忽略空格和大小写", () => {
    expect(normalizeSearch("  Wi Fi  ")).toBe("wifi");
  });

  it("标题命中优先于关键词，并排除其他学校", () => {
    expect(searchRecords(records, "空调", "haue").map((record) => record.id)).toEqual(["2", "1"]);
    expect(searchRecords(records, "宿舍", "haue").map((record) => record.id)).not.toContain("3");
  });

  it("空查询不返回噪声", () => {
    expect(searchRecords(records, "   ", "haue")).toEqual([]);
  });
});
