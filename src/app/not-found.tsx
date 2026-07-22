import Link from "next/link";
export default function NotFound() { return <div className="not-found"><span>404</span><h1>这页没有装订进年鉴</h1><p>可能是链接过期，或者内容还没有整理完成。</p><Link className="primary-button" href="/">返回封面</Link></div>; }
