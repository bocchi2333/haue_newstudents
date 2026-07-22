import { describe, expect, it } from "vitest";
import { schoolPath, withCampus } from "@/lib/routes";

describe("多学校路由辅助", () => {
  it("默认学校占用根路径", () => {
    expect(schoolPath("haue")).toBe("/");
    expect(schoolPath("haue", "guide/dorm")).toBe("/guide/dorm");
  });

  it("校区参数可安全附加", () => {
    expect(withCampus("/guide/dorm", "longhu-west")).toBe("/guide/dorm?campus=longhu-west");
    expect(withCampus("/search?q=宿舍", "龙湖南区")).toBe("/search?q=宿舍&campus=%E9%BE%99%E6%B9%96%E5%8D%97%E5%8C%BA");
  });

  it("未知学校不会悄悄串数据", () => {
    expect(() => schoolPath("missing")).toThrow("Unknown school");
  });
});
