import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { notFound } from "next/navigation";
import { getTopic, notes, sources, topics } from "@/data/schools";
import { MarginNoteButton } from "@/components/margin-note-button";
import { CopySectionLink } from "@/components/copy-section-link";

export const dynamicParams = false;
export function generateStaticParams() { return topics.map((topic) => ({ slug: topic.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const topic = getTopic((await params).slug);
  return topic ? { title: topic.title, description: topic.summary } : {};
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const topic = getTopic((await params).slug);
  if (!topic) notFound();
  const index = topics.findIndex((item) => item.slug === topic.slug);
  const prev = topics[(index - 1 + topics.length) % topics.length];
  const next = topics[(index + 1) % topics.length];
  return <div className="article-shell">
    <aside className="article-index"><Link href="/#journey"><ArrowLeft size={17} />返回开学旅程</Link><p>本页目录</p>{topic.sections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.heading}</a>)}</aside>
    <article className="guide-article">
      <header className="article-cover"><p className="folio-label">河工利享 · 2026 新生年鉴</p><h1>{topic.title}</h1><p>{topic.summary}</p><div className="keyword-line">{topic.keywords.slice(0, 5).map((keyword) => <span key={keyword}>{keyword}</span>)}</div></header>
      {topic.sections.map((section) => <section className="article-section" id={section.id} key={section.id}>
        <div className="article-section__heading"><h2>{section.heading}</h2><CopySectionLink id={section.id} /></div>
        {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
        {section.image && <figure><Image src={section.image} width={1400} height={850} alt={section.heading} /></figure>}
        {section.noteIds?.map((noteId) => { const note = notes.find((item) => item.id === noteId); return note ? <MarginNoteButton key={noteId} note={note} source={sources.find((item) => item.id === note.sourceId)} /> : null; })}
      </section>)}
      <div className="article-source"><strong>内容来源</strong>{topic.sourceIds.map((sourceId) => { const source = sources.find((item) => item.id === sourceId); return source ? <span key={sourceId}>{source.title} · {source.asOf}</span> : null; })}<small>经验信息可能因校区、楼栋和年份变化，请以学校与学院最新通知为准。</small></div>
      <nav className="article-next"><Link href={`/guide/${prev.slug}/`}><span>上一篇</span><strong><ArrowLeft size={18} />{prev.shortTitle}</strong></Link><Link href={`/guide/${next.slug}/`}><span>下一篇</span><strong>{next.shortTitle}<ArrowRight size={18} /></strong></Link></nav>
    </article>
    <aside className="article-margin"><p>页边提示</p><span>带有蓝色批注标记的内容，可展开查看年份、校区和来源。</span></aside>
  </div>;
}
