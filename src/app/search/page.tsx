import type { Metadata } from "next";
import { SearchIndex } from "@/components/search-index";
import { buildSearchRecords, defaultSchoolId } from "@/data/schools";

export const metadata: Metadata = { title: "搜索指南", description: "搜索河南工程学院新生指南、校区、问答和行李清单。" };
export default function SearchPage() { return <div className="search-page"><header><p className="folio-label">全册索引</p><h1>你现在想找什么？</h1></header><SearchIndex records={buildSearchRecords()} schoolId={defaultSchoolId} /></div>; }
