import type { Metadata, Viewport } from "next";
import "@fontsource-variable/noto-sans-sc";
import "./globals.css";
import { schools, defaultSchoolId } from "@/data/schools";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileDock } from "@/components/mobile-dock";

const school = schools.find((item) => item.id === defaultSchoolId)!;

export const metadata: Metadata = {
  metadataBase: new URL("https://liheng.vip"),
  title: { default: "2026 河工新生开学指南", template: "%s | 河工利享" },
  description: "面向河南工程学院新生的非官方开学指南，包含报到、宿舍、军训、交通、校园生活和行李清单。",
  applicationName: "河工利享新生年鉴",
  keywords: ["河南工程学院", "河工", "新生指南", "开学", "宿舍", "报到"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "/",
    siteName: "河工利享新生年鉴",
    title: "2026 河工新生开学指南",
    description: "从收到通知书，到住进宿舍。给河南工程学院新生的非官方开学指南。",
  },
};

export const viewport: Viewport = { themeColor: "#1E5AA8", colorScheme: "light dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const themeScript = `(function(){try{var t=localStorage.getItem('hegong-theme');var d=t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.dataset.theme=d?'dark':'light'}catch(e){}})()`;
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>
        <a className="skip-link" href="#main-content">跳到正文</a>
        <SiteHeader school={school} />
        <main id="main-content">{children}</main>
        <SiteFooter school={school} />
        <MobileDock />
      </body>
    </html>
  );
}
