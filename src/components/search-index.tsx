"use client";

import { ArrowRight, MagnifyingGlass } from "@phosphor-icons/react";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { searchRecords } from "@/lib/search";
import type { SearchRecord } from "@/lib/types";

const kindNames: Record<SearchRecord["kind"], string> = { topic: "指南主题", campus: "校区", question: "学长问答", checklist: "行李清单" };

export function SearchIndex({ records, schoolId }: { records: SearchRecord[]; schoolId: string }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const results = useMemo(() => searchRecords(records, query, schoolId), [records, query, schoolId]);

  useEffect(() => {
    inputRef.current?.focus();
    function shortcut(event: KeyboardEvent) {
      if (event.key === "/" && document.activeElement?.tagName !== "INPUT") { event.preventDefault(); inputRef.current?.focus(); }
    }
    window.addEventListener("keydown", shortcut);
    return () => window.removeEventListener("keydown", shortcut);
  }, []);

  return <div className="search-index">
    <label className="search-field"><MagnifyingGlass size={25} weight="bold" /><input ref={inputRef} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="试试：宿舍、地铁、校园跑" aria-label="搜索指南" /><kbd>/</kbd></label>
    {!query && <div className="search-suggestions"><span>常用搜索</span>{["宿舍", "报到", "地铁", "快递", "电脑"].map((item) => <button type="button" onClick={() => setQuery(item)} key={item}>{item}</button>)}</div>}
    {query && <div className="search-results" aria-live="polite">
      <p>{results.length ? `找到 ${results.length} 条内容` : "没有找到。换一个更短的关键词试试。"}</p>
      {results.map((item) => <Link className="search-result" href={item.href} key={item.id}><span>{kindNames[item.kind]}</span><div><h2>{item.title}</h2><p>{item.summary}</p></div><ArrowRight size={20} weight="bold" /></Link>)}
    </div>}
  </div>;
}
