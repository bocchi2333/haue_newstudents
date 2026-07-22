import Image from "next/image";
import Link from "next/link";
import type { SchoolConfig } from "@/lib/types";

export function SiteFooter({ school }: { school: SchoolConfig }) {
  return <footer className="site-footer">
    <div className="footer-mark"><Image src={school.mark} width={354} height={90} alt="河南工程学院校徽与校名" /><p>内容整理：河工利享<br />非学校官方网站</p></div>
    <div className="footer-links"><Link href="/about/">来源与说明</Link><Link href="/search/">搜索</Link><span>更新于 {school.updatedAt}</span></div>
  </footer>;
}
