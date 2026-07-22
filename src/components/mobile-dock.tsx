import Link from "next/link";
import { House, ListChecks, MagnifyingGlass, Question } from "@phosphor-icons/react/dist/ssr";

export function MobileDock() {
  return <nav className="mobile-dock" aria-label="移动端快捷导航">
    <Link href="/"><House size={20} weight="bold" /><span>首页</span></Link>
    <Link href="/checklist/"><ListChecks size={20} weight="bold" /><span>清单</span></Link>
    <Link href="/questions/"><Question size={20} weight="bold" /><span>问答</span></Link>
    <Link href="/search/"><MagnifyingGlass size={20} weight="bold" /><span>搜索</span></Link>
  </nav>;
}
