import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { schools, defaultSchoolId, sources } from "@/data/schools";

const school = schools.find((item) => item.id === defaultSchoolId)!;
export const metadata: Metadata = { title: "关于与来源" };
export default function AboutPage() { return <div className="about-page"><header><p className="folio-label">这不是学校官方网站</p><h1>一本由学生经验整理而来的开学年鉴</h1><p>我们尽量把复杂信息说清楚，也诚实标注哪些内容会变化。</p></header><section><h2>内容原则</h2><div className="principle-grid"><p><strong>先解决问题</strong><span>帮助新生找到校区、准备行李、理解住宿与开学流程。</span></p><p><strong>区分事实与经验</strong><span>问卷和学长反馈不会被写成学校承诺。</span></p><p><strong>保留更新时间</strong><span>涉及规则的信息都应重新核对当年通知。</span></p></div></section><section><h2>来源</h2><div className="source-list">{sources.map((source) => <article key={source.id}><div><h3>{source.title}</h3><p>{source.attribution}</p></div><span>{source.asOf}</span>{source.url && <a href={source.url} target="_blank" rel="noreferrer" aria-label={`打开${source.title}`}><ArrowUpRight size={20} /></a>}</article>)}</div></section><section className="about-note"><h2>关于河工利享</h2><p>本指南由河工利享整理。联系二维码尚未提供，因此首版不展示不可验证的联系方式。</p><Link className="secondary-button" href="/">返回封面</Link></section><footer>内容更新于 {school.updatedAt}</footer></div>; }
