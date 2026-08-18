# 七亿科技官网 / 7e.ink

> 武汉七亿科技有限公司官方网站

## 预览

- **正式站**: https://www.7e.ink
- **GitHub**: https://github.com/zpdr1/7eink
- **Gitee**: https://gitee.com/zpdr/7e-ink

## 项目结构

```
7e.ink/
├── index.html            # 官网首页（单页）
├── logo.png              # Logo
├── favicon.ico           # 网站图标
├── assets/
│   ├── css/index.css     # 样式文件
│   ├── js/index.js       # 交互脚本
│   └── img/              # 产品截图 / 展示图片
├── team/
│   ├── index.html        # 团队介绍页
│   ├── dzx/              # 创始人 - ZP(点赞虾)
│   ├── liu_ling_zhi/     # 联合创始人 - 刘凌志
│   ├── z_y/              # 产品设计师 - 周颖
│   ├── huang_ye/         # AI工程师 - 黄烨
│   ├── ygdb/             # 媒体运营 - 远古大暴
│   └── ...               # 其他成员
└── tu/                   # 素材图片（待清理）
```

## 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | 纯静态 HTML |
| 样式 | Tailwind CSS（CDN 版） |
| 图标 | Font Awesome 6 |
| 字体 | Space Grotesk + Noto Sans SC |
| 交互 | 原生 JavaScript |
| 动画 | CSS + IntersectionObserver |
| 统计 | 百度统计 |
| 部署 | EdgeOne Pages / Cloudflare Pages |

## 功能模块

### 首页（index.html）— 单页滚动
- **Hero 区** — 品牌展示 + 机器人形象 + CTA 按钮
- **跑马灯** — 产品关键词轮播
- **数据实力** — 核心数据展示（产品数、自研率、品牌域名）
- **产品服务** — 三大板块展示：
  - AI 玩法（AI开放平台、赛博星盘、测试中心）
  - 开发者工具（认证服务、域名注册、工具站、7E Dev）
  - WiKi & 社区生态（7e维基、七亿二维码、七亿社区）
- **关于公司** — 公司介绍 + 品牌形象
- **页脚** — 链接、联系方式、备案信息

### 团队页（team/index.html）
- 核心成员展示卡片
- 每个成员有独立详情页

## 品牌色

| 用途 | 色值 |
|------|------|
| 主色（brand） | `#ff6b00`（橙色） |
| 辅色（brandlight） | `#ff9a3c`（浅橙） |
| 辅助蓝（brandblue） | `#0057b8` |

## 本地开发

无需构建工具，直接打开 `index.html` 即可预览：

```bash
# 用浏览器打开
open index.html

# 或通过本地服务器
python3 -m http.server 8080
```

## 维护指南

### 修改导航栏
导航栏在 `index.html` 和 `team/index.html` 中各有一份，需要同步修改。

### 添加产品
在 `index.html` 的 `#products` 区域复制一个产品卡片 `<a>` 标签，替换图片和链接。

### 添加团队成员
1. 在 `team/` 下创建成员文件夹，放入 `index.html`
2. 在 `team/index.html` 中添加成员卡片

### 部署
当前部署在 EdgeOne Pages（www.7e.ink），推送 GitHub 主分支后自动部署。

## 待办 / 改进方向

- [ ] 添加 `.gitignore`（排除 `.DS_Store`）
- [ ] 清理 `tu/` 冗余图片目录
- [ ] 图片转 WebP 格式压缩
- [ ] Tailwind 本地构建（替换 CDN 版）
- [ ] 站点地图（sitemap.xml）
- [ ] 导航栏组件化（避免两处同步维护）

---

© 2026 武汉七亿科技有限公司 版权所有