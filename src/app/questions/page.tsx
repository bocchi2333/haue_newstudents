import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Quotes } from "@phosphor-icons/react/dist/ssr";
import { campuses, questions } from "@/data/schools";

export const metadata: Metadata = { title: "学长学姐问答", description: "关于河工宿舍、门禁、校园网、外卖和学习空间的学生经验。" };
export default function QuestionsPage() { return <div className="utility-page"><header className="utility-cover"><Quotes size={42} weight="fill" /><p className="folio-label">学生经验 · 不是学校承诺</p><h1>他们当时是这样回答的</h1><p>我们归纳共同信息，也保留不确定性。校区、楼栋和年份不同，答案可能变化。</p></header><div className="qa-list">{questions.map((item, index) => <article id={item.id} key={item.id}><div className="qa-number">{String(index + 1).padStart(2, "0")}</div><div><h2>{item.question}</h2><p>{item.answer}</p>{item.campusIds && <div className="qa-campuses">{item.campusIds.map((id) => <span key={id}>{campuses.find((campus) => campus.id === id)?.shortName}</span>)}</div>}<div className="qa-related">{item.relatedTopicSlugs.map((slug) => <Link href={`/guide/${slug}/`} key={slug}>相关指南 <ArrowRight size={15} /></Link>)}</div></div><aside>整理时间<br /><strong>{item.asOf}</strong></aside></article>)}</div></div>; }
