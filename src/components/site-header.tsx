import Link from "next/link";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import type { SchoolConfig } from "@/lib/types";
import { SchoolSwitcher } from "@/components/school-switcher";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader({ school }: { school: SchoolConfig }) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <SchoolSwitcher school={school} />
        <nav className="desktop-nav" aria-label="主导航">
          <Link href="/#journey">开学旅程</Link>
          <Link href="/checklist/">行李清单</Link>
          <Link href="/questions/">学长问答</Link>
          <Link href="/about/">关于</Link>
        </nav>
        <div className="header-actions">
          <Link className="search-button" href="/search/" aria-label="搜索指南"><MagnifyingGlass size={18} weight="bold" /><span>搜索</span><kbd>/</kbd></Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
