export type SchoolTheme = {
  accent: string;
  paper: string;
  ink: string;
  tint: string;
};

export type SchoolConfig = {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  englishName: string;
  edition: string;
  updatedAt: string;
  theme: SchoolTheme;
  mark: string;
  contact?: { enabled: boolean; label: string; qrAsset?: string };
};

export type Campus = {
  id: string;
  schoolId: string;
  slug: string;
  name: string;
  shortName: string;
  address: string;
  arrival: string;
  transit: string[];
  express: string;
  dorm: string;
  image?: string;
};

export type JourneyStage = {
  id: string;
  schoolId: string;
  title: string;
  subtitle: string;
  description: string;
  topicSlugs: string[];
};

export type MarginNote = {
  id: string;
  schoolId: string;
  title: string;
  body: string;
  campusIds?: string[];
  asOf: string;
  sourceId: string;
};

export type GuideSection = {
  id: string;
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  noteIds?: string[];
  image?: string;
};

export type GuideTopic = {
  schoolId: string;
  slug: string;
  title: string;
  shortTitle: string;
  stageId: string;
  summary: string;
  keywords: string[];
  campusIds?: string[];
  sections: GuideSection[];
  sourceIds: string[];
};

export type QuestionAnswer = {
  id: string;
  schoolId: string;
  question: string;
  answer: string;
  campusIds?: string[];
  relatedTopicSlugs: string[];
  sourceId: string;
  asOf: string;
};

export type ChecklistItem = {
  id: string;
  schoolId: string;
  group: "证件材料" | "住宿生活" | "学习电子" | "健康军训";
  label: string;
  detail?: string;
  required?: boolean;
};

export type SourceReference = {
  id: string;
  schoolId: string;
  title: string;
  type: "handbook" | "survey" | "official-reminder";
  url?: string;
  attribution: string;
  asOf: string;
};

export type SearchRecord = {
  id: string;
  schoolId: string;
  kind: "topic" | "campus" | "question" | "checklist";
  title: string;
  summary: string;
  href: string;
  keywords: string[];
};
