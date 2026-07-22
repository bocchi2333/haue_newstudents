"use client";

import { NotePencil, X } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import type { MarginNote, SourceReference } from "@/lib/types";

export function MarginNoteButton({ note, source }: { note: MarginNote; source?: SourceReference }) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    function onKeyDown(event: KeyboardEvent) { if (event.key === "Escape") setOpen(false); }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button type="button" className="margin-note-trigger" onClick={() => setOpen(true)}><NotePencil size={17} weight="fill" /><span>{note.title}</span></button>
      {open && <div className="note-backdrop" onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}>
        <aside className="note-drawer" role="dialog" aria-modal="true" aria-labelledby={`note-${note.id}`}>
          <button ref={closeRef} type="button" className="icon-button note-close" onClick={() => setOpen(false)} aria-label="关闭批注"><X size={20} weight="bold" /></button>
          <p className="folio-label">学长批注 · {note.asOf}</p>
          <h2 id={`note-${note.id}`}>{note.title}</h2>
          <p>{note.body}</p>
          <div className="note-source"><strong>来源说明</strong><span>{source?.title ?? "河工利享整理"}</span><small>经验信息，以学校和学院最新通知为准。</small></div>
        </aside>
      </div>}
    </>
  );
}
