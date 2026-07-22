"use client";

import { ArrowUpRight, MapPin } from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";
import type { Campus } from "@/lib/types";

export function CampusFolds({ campuses }: { campuses: Campus[] }) {
  const [active, setActive] = useState(() => {
    if (typeof window === "undefined") return campuses[0]?.id ?? "";
    const campus = new URLSearchParams(window.location.search).get("campus");
    return campus && campuses.some((item) => item.id === campus) ? campus : campuses[0]?.id ?? "";
  });

  const current = campuses.find((item) => item.id === active) ?? campuses[0];
  if (!current) return null;

  function choose(id: string) {
    setActive(id);
    const url = new URL(window.location.href);
    url.searchParams.set("campus", id);
    window.history.replaceState({}, "", url);
  }

  return (
    <section className="campus-folds" aria-labelledby="campus-fold-title">
      <div className="section-heading-stack">
        <h2 id="campus-fold-title">先确认你要去的校区</h2>
        <p>同一条建议在不同校区可能完全不同。切换折页，先看最关键的到校信息。</p>
      </div>
      <div className="fold-tabs" role="tablist" aria-label="选择校区">
        {campuses.map((campus) => <button key={campus.id} type="button" role="tab" aria-selected={campus.id === current.id} onClick={() => choose(campus.id)}>{campus.shortName}</button>)}
      </div>
      <div className="fold-sheet" role="tabpanel">
        <div className="fold-sheet__number" aria-hidden="true">{String(campuses.indexOf(current) + 1).padStart(2, "0")}</div>
        <div>
          <p className="folio-label">{current.address}</p>
          <h3>{current.name}</h3>
          <p className="fold-lead">{current.arrival}</p>
        </div>
        <div className="fold-facts">
          <div><MapPin size={21} weight="fill" /><span>交通</span><p>{current.transit.join("；")}</p></div>
          <div><span>快递</span><p>{current.express}</p></div>
          <div><span>住宿</span><p>{current.dorm}</p></div>
        </div>
        <Link className="text-link" href={`/campuses/${current.slug}/`}>查看完整校区页 <ArrowUpRight size={18} /></Link>
      </div>
    </section>
  );
}
