import type { Metadata } from "next";
import { ChecklistBoard } from "@/components/checklist-board";
import { checklist, defaultSchoolId } from "@/data/schools";

export const metadata: Metadata = { title: "新生行李清单", description: "河工新生报到证件、住宿、学习和军训用品清单。" };
export default function ChecklistPage() { return <div className="utility-page"><header className="utility-cover"><p className="folio-label">可撕清单 · 进度保存在本机</p><h1>把重要的先装好</h1><p>不追求一次带齐。证件和个人必需品优先，大部分生活用品都可以到校再买。</p></header><ChecklistBoard items={checklist.filter((item) => item.schoolId === defaultSchoolId)} /></div>; }
