# Personal Portfolio Website

这是我的个人作品集网站，基于 Next.js 14 构建，使用 Cloudflare Pages 部署。

## 开发环境设置

1. 克隆项目：
```bash
git clone https://github.com/carreypro/personal-portfolio-next.git
cd personal-portfolio-next
```

2. 安装依赖：
```bash
npm install
```

3. 启动开发服务器：
```bash
npm run dev
```

## 部署流程

1. 提交代码到 GitHub：
```bash
git add .
git commit -m "你的修改说明"
git push origin main
```

2. 部署到 Cloudflare Pages：
```bash
npm run pages:deploy
```

## 项目结构

- `/src/app/*` - 页面文件
- `/src/components/*` - React 组件
- `/src/config/*` - 配置文件（包括个人信息、项目信息等）
- `/public/*` - 静态资源

## 常见修改

1. 修改个人信息：编辑 `/src/config/infoConfig.ts`
2. 修改项目展示：编辑 `/src/config/infoConfig.ts` 中的 projects 数组
3. 修改关于页面：编辑 `/src/app/about/page.tsx`

## 注意事项

1. 确保在修改代码前先拉取最新的代码：`git pull origin main`
2. 部署前先在本地运行并测试
3. 记得备份重要的修改

## 有用的链接

- GitHub 仓库：https://github.com/carreypro/personal-portfolio-next
- 部署网站：https://personal-portfolio-next.pages.dev
