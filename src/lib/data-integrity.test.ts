import { describe, expect, it } from "vitest";
import {
  buildSearchRecords,
  campuses,
  checklist,
  defaultSchoolId,
  notes,
  questions,
  schools,
  sources,
  stages,
  topics,
} from "@/data/schools";

describe("河南工程学院内容卷册", () => {
  it("完整提供 14 个互不重复的主题", () => {
    const schoolTopics = topics.filter((topic) => topic.schoolId === defaultSchoolId);
    expect(schoolTopics).toHaveLength(14);
    expect(new Set(schoolTopics.map((topic) => topic.slug)).size).toBe(14);
  });

  it("所有学校关联均指向同一所已注册学校", () => {
    const schoolIds = new Set(schools.map((school) => school.id));
    for (const record of [...campuses, ...stages, ...notes, ...topics, ...questions, ...checklist, ...sources]) {
      expect(schoolIds.has(record.schoolId)).toBe(true);
    }
  });

  it("章节、批注、来源和问答之间没有悬空引用", () => {
    const topicSlugs = new Set(topics.map((topic) => topic.slug));
    const noteIds = new Set(notes.map((note) => note.id));
    const sourceIds = new Set(sources.map((source) => source.id));

    for (const stage of stages) {
      stage.topicSlugs.forEach((slug) => expect(topicSlugs.has(slug)).toBe(true));
    }
    for (const topic of topics) {
      topic.sourceIds.forEach((id) => expect(sourceIds.has(id)).toBe(true));
      topic.sections.flatMap((section) => section.noteIds ?? []).forEach((id) => expect(noteIds.has(id)).toBe(true));
    }
    for (const question of questions) {
      expect(sourceIds.has(question.sourceId)).toBe(true);
      question.relatedTopicSlugs.forEach((slug) => expect(topicSlugs.has(slug)).toBe(true));
    }
  });

  it("构建的搜索索引严格按学校隔离", () => {
    const records = buildSearchRecords(defaultSchoolId);
    expect(records.length).toBeGreaterThan(14);
    expect(records.every((record) => record.schoolId === defaultSchoolId)).toBe(true);
    expect(buildSearchRecords("future-school")).toEqual([]);
  });
});
