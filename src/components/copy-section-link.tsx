"use client";

import { Check, LinkSimple } from "@phosphor-icons/react";
import { useState } from "react";

export function CopySectionLink({ id }: { id: string }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }
  return <button className="copy-link" type="button" onClick={copy} aria-label="复制此章节链接">{copied ? <Check size={17} weight="bold" /> : <LinkSimple size={17} weight="bold" />}</button>;
}
