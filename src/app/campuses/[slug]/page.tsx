import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Buildings, MapPin, Package, Train } from "@phosphor-icons/react/dist/ssr";
import { notFound } from "next/navigation";
import { campuses, getCampus } from "@/data/schools";

export const dynamicParams = false;
export function generateStaticParams() { return campuses.map((campus) => ({ slug: campus.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const campus = getCampus((await params).slug); return campus ? { title: campus.name, description: campus.arrival } : {};
}

export default async function CampusPage({ params }: { params: Promise<{ slug: string }> }) {
  const campus = getCampus((await params).slug); if (!campus) notFound();
  return <article className="campus-page">
    <header className="campus-cover"><div><Link href="/#campus-fold-title"><ArrowLeft size={17} />返回校区选择</Link><p className="folio-label">校区折页 · {campus.address}</p><h1>{campus.name}</h1><p>{campus.arrival}</p></div>{campus.image && <Image src={campus.image} width={1100} height={780} alt={`${campus.name}相关校园图`} />}</header>
    <div className="campus-details">
      <section><Train size={29} weight="fill" /><h2>到校交通</h2>{campus.transit.map((item) => <p key={item}>{item}</p>)}</section>
      <section><Package size={29} weight="fill" /><h2>快递地址</h2><p>{campus.express}</p></section>
      <section><Buildings size={29} weight="fill" /><h2>宿舍提示</h2><p>{campus.dorm}</p></section>
      <section><MapPin size={29} weight="fill" /><h2>地址写法</h2><p>{campus.address}</p></section>
    </div>
    <div className="campus-disclaimer">地图距离、入口和住宿安排可能变化。出发前重新查看录取通知书、学院迎新群和地图导航。</div>
  </article>;
}
