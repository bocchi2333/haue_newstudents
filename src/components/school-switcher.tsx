"use client";

import { BookOpenText, CaretDown, X } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { SchoolConfig } from "@/lib/types";

export function SchoolSwitcher({ school }: { school: SchoolConfig }) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button className="school-spine" type="button" onClick={() => setOpen(true)} aria-haspopup="dialog" aria-expanded={open}>
        <span className="school-spine__mark"><BookOpenText size={17} weight="fill" /></span>
        <span>{school.name}</span>
        <CaretDown size={14} weight="bold" />
      </button>
      {open && (
        <div className="switcher-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}>
          <section className="school-drawer" role="dialog" aria-modal="true" aria-labelledby="school-switch-title">
            <header className="school-drawer__header">
              <div>
                <p className="folio-label">选择一本校园年鉴</p>
                <h2 id="school-switch-title">切换学校</h2>
              </div>
              <button ref={closeRef} className="icon-button" type="button" onClick={() => setOpen(false)} aria-label="关闭学校切换器"><X size={20} weight="bold" /></button>
            </header>
            <Link className="school-volume school-volume--active" href="/" onClick={() => setOpen(false)}>
              <Image src={school.mark} width={354} height={90} alt="河南工程学院校徽与校名" />
              <span>{school.edition}</span>
              <strong>正在阅读</strong>
            </Link>
            <div className="school-volume school-volume--future" aria-disabled="true">
              <span className="future-plus">＋</span>
              <div><strong>更多学校即将加入</strong><span>每所学校拥有独立封面、校区与内容</span></div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
