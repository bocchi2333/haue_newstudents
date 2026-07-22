# 河工利享 · 2026 新生开学指南

一本可搜索、可勾选、可展开批注的河南工程学院数字校园年鉴。内容根据《2026 届新生开学手册—河工利享版》、学生经验汇总与学校当年通知提示整理；这是非官方站点，报到、住宿、教学及资助安排以学校最新通知为准。

## 本地运行

需要 Node.js 20+ 与 pnpm 10。

```bash
pnpm install
pnpm dev
```

打开 `http://localhost:3000`。生产检查：

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

`pnpm build` 会将完整静态网站输出到 `out/`，不依赖数据库、后台 API 或第三方字体服务。

## 内容结构

- `src/data/schools.ts`：学校、校区、四段开学旅程、14 个主题、批注、问答、清单和来源。
- `src/lib/types.ts`：多学校数据模型；所有可搜索内容均带 `schoolId`。
- `src/lib/routes.ts`：根路径默认学校及未来 `/schools/[schoolSlug]` 路由规则。
- `public/media/`：从用户提供手册提取并优化的真实校园素材。
- `public/fonts/`：自托管得意黑；正文思源黑体由本地 npm 包构建进静态资源。

未来添加学校时，先注册 `SchoolConfig`，再为校区、主题、批注、问答、清单、来源和搜索记录使用同一个新 `schoolId`。新学校入口使用 `/schools/[schoolSlug]`；联系二维码只在配置提供资产且启用时显示。

## 发布

仓库包含 GitHub Pages 工作流。推送到 `main` 后，Actions 会执行 lint、类型检查、测试和静态构建，再发布 `out/`。

正式域名为 `https://liheng.vip`，`public/CNAME` 会随静态构建一同发布。需要在域名 DNS 中将根域名指向 GitHub Pages，并在仓库 Pages 设置中确认自定义域名。当前配置面向该自定义域名；如果改为 `username.github.io/repository` 子路径，需要同步设置 Next.js 的 `basePath` 与 `assetPrefix`。

备案完成后，可将 `out/` 原样上传至大陆静态服务器；`deploy/nginx.conf.example` 提供了 Nginx 参考配置。

## 授权与来源

站点代码与站点内容需分别确认发布授权。得意黑采用 SIL OFL 1.1，思源黑体采用 SIL OFL 1.1。学生经验仅作归纳并标注时间，不应替代学校正式通知。
