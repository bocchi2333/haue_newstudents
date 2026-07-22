"use client";

import { ArrowCounterClockwise as RotateCcw, Check } from "@phosphor-icons/react";
import { useMemo, useState } from "react";
import type { ChecklistItem } from "@/lib/types";

const storageKey = "hegong-checklist-v1";

export function ChecklistBoard({ items }: { items: ChecklistItem[] }) {
  const [checked, setChecked] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    try { return JSON.parse(window.localStorage.getItem(storageKey) ?? "[]"); } catch { return []; }
  });
  const groups = useMemo(() => Array.from(new Set(items.map((item) => item.group))), [items]);
  const progress = items.length ? Math.round((checked.length / items.length) * 100) : 0;

  function toggle(id: string) {
    const next = checked.includes(id) ? checked.filter((item) => item !== id) : [...checked, id];
    setChecked(next);
    window.localStorage.setItem(storageKey, JSON.stringify(next));
  }

  function reset() { setChecked([]); window.localStorage.removeItem(storageKey); }

  return (
    <div className="checklist-board">
      <header className="checklist-progress"><div><strong>{progress}%</strong><span>已装进行李</span></div><button type="button" onClick={reset}><RotateCcw size={17} />重新整理</button></header>
      {groups.map((group) => (
        <section className="checklist-group" key={group}>
          <h2>{group}</h2>
          <div className="tear-list">
            {items.filter((item) => item.group === group).map((item) => {
              const done = checked.includes(item.id);
              return <label id={item.id} className={done ? "tear-item tear-item--done" : "tear-item"} key={item.id}>
                <input type="checkbox" checked={done} onChange={() => toggle(item.id)} />
                <span className="check-box" aria-hidden="true">{done && <Check size={16} weight="bold" />}</span>
                <span className="tear-copy"><strong>{item.label}{item.required && <em>必带</em>}</strong>{item.detail && <small>{item.detail}</small>}</span>
              </label>;
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
