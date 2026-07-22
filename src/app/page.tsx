import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowRight, CheckCircle, Compass, Quotes } from "@phosphor-icons/react/dist/ssr";
import { campuses, defaultSchoolId, questions, schools, stages, topics } from "@/data/schools";
import { HeroCollage } from "@/components/hero-collage";
import { CampusFolds } from "@/components/campus-folds";

const school = schools.find((item) => item.id === defaultSchoolId)!;

export default function Home() {
  return <>
    <section className="yearbook-hero">
      <div className="hero-binding" aria-hidden="true" />
      <div className="hero-copy">
        <p className="edition-line"><span>{school.edition}</span><span>更新于 {school.updatedAt}</span></p>
        <h1><span>河工新生</span><strong>开学指南</strong></h1>
        <p className="hero-lead">从收到通知书，到住进宿舍。把第一次开学，过得更从容一点。</p>
        <div className="hero-actions"><Link className="primary-button" href="#journey">从出发前开始 <ArrowDown size={18} weight="bold" /></Link><Link className="secondary-button" href="/search/">直接搜索问题</Link></div>
        <p className="unofficial-note">河工利享整理 · 非学校官方网站 · 重要安排以学校通知为准</p>
      </div>
      <HeroCollage />
    </section>

    <section className="journey-section" id="journey" aria-labelledby="journey-title">
      <header className="journey-intro"><div><p className="folio-label">你的开学路线</p><h2 id="journey-title">现在要做什么？</h2></div><p>不用一次读完全部手册。按时间往前走，每一步只看眼前最需要的信息。</p></header>
      <div className="journey-spread">
        {stages.map((stage, index) => <article className={`journey-chapter journey-chapter--${index + 1}`} key={stage.id}>
          <div className="chapter-index">{String(index + 1).padStart(2, "0")}</div>
          <p>{stage.subtitle}</p><h3>{stage.title}</h3><p className="chapter-description">{stage.description}</p>
          <div className="chapter-links">{stage.topicSlugs.map((slug) => { const topic = topics.find((item) => item.slug === slug)!; return <Link href={`/guide/${slug}/`} key={slug}>{topic.shortTitle}<ArrowRight size={15} /></Link>; })}</div>
        </article>)}
      </div>
    </section>

    <section className="quick-sheet" aria-labelledby="quick-title">
      <div className="quick-sheet__lead"><CheckCircle size={34} weight="fill" /><h2 id="quick-title">先把最容易忘的装好</h2><p>证件、档案袋和充电设备随身带。床品尺寸、电脑配置和生活用品可以到校确认后再补。</p><Link className="primary-button" href="/checklist/">打开行李清单 <ArrowRight size={18} /></Link></div>
      <Image src="/media/campus-apps.webp" width={1479} height={348} alt="校园生活和学习常用应用图标" />
    </section>

    <CampusFolds campuses={campuses.filter((item) => item.schoolId === defaultSchoolId)} />

    <section className="voices-section" aria-labelledby="voices-title">
      <header><Quotes size={38} weight="fill" /><div><h2 id="voices-title">学长学姐怎么说</h2><p>学生经验会变化，也可能互相矛盾。我们保留差异，并明确校区和时间。</p></div></header>
      <div className="voice-grid">{questions.slice(0, 3).map((item) => <Link href={`/questions/#${item.id}`} key={item.id}><span>问</span><h3>{item.question}</h3><p>{item.answer}</p><strong>查看来源与相关主题 <ArrowRight size={16} /></strong></Link>)}</div>
      <Link className="text-link voices-more" href="/questions/">浏览全部问答 <ArrowRight size={18} /></Link>
    </section>

    <section className="map-feature"><Image src="/media/campus-map.webp" width={1392} height={919} alt="河南工程学院校区与学院分布示意图" /><div><Compass size={35} weight="fill" /><h2>别走错校区</h2><p>地图只作快速识别。最终报到校区、入口和学院安排，以录取通知书及学院迎新群为准。</p><Link className="secondary-button" href="/guide/campus/">查看校区指南</Link></div></section>
  </>;
}
