// personal info
export const name = 'carrey'
export const headline = '产品经理、AI 独立开发者'
export const introduction = '前互联网大厂产品经理，创业者，用 AI 塑造自己的第二人生。\n\nStay hungry, stay foolish.'

// about page
export const aboutMeHeadline = "我是 carrey，现居杭州的产品经理"
export const aboutParagraphs = [
  "00 后，曾经拿过永劫无间季军，也办过三届电竞比赛，后来转行当产品。",
  "现在是 AI Coding 爱好者，致力于开发应用。",
  "也是电影研究员、胶片爱好者。"
]

// projects
export const projectHeadLine = "我的项目"
export const projectIntro = "这里展示了我参与设计和开发的一些项目，包括商业项目和个人作品。每个项目都凝聚着我对产品的思考。"

// blog
export const blogHeadLine = "我的博客"
export const blogIntro = "在这里，我会分享关于产品设计、AI 应用、个人成长的思考和经验。"

// changelog
export const changelogHeadLine = "更新日志"
export const changelogIntro = "记录这个网站的最新变化。"

// friends
export const friendsHeadLine = "友情链接"
export const friendsIntro = "认识一些有趣的朋友。"

// social links
export type SocialLinkType = {
  name: string,
  ariaLabel?: string,
  icon: string,
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'X',
    icon: 'x',
    href: 'https://x.com/zhizhikai'
  },
  {
    name: 'GitHub',
    icon: 'github',
    href: 'https://github.com/carreypro'
  },
  {
    name: 'Jike',
    icon: 'pill',
    href: 'https://okjk.co/C7PogK'
  },
  {
    name: 'Instagram',
    icon: 'instagram',
    href: 'https://www.instagram.com/carreyff/'
  },
  {
    name: 'Xiaohongshu',
    icon: 'xiaohongshu',
    href: 'https://www.xiaohongshu.com/user/profile/650fdbc00000000012007d83'
  },
  {
    name: 'Bsky',
    icon: 'bsky',
    href: 'https://bsky.app/profile/carrey01.bsky.social'
  },
  {
    name: 'Wechat',
    icon: 'wechat',
    href: 'https://mp.weixin.qq.com/s/DxnRgqNfgzXIhqj6w_x0dQ'
  }
]

// education 
export type EducationItemType = {
  school: string
  major: string
  image?: string
  logo: string
  start: string
  end: string
}

export const educationList: Array<EducationItemType> = [
  {
    school: '某某大学',
    major: '产品设计',
    logo: 'college',
    start: '2019',
    end: '2023'
  },
]

// career
export type CareerItemType = {
  company: string
  title: string
  image?: string
  logo: string
  start: string
  end: string
  description?: string
}

export const careerList: Array<CareerItemType> = [
  {
    company: '某科技公司',
    title: '产品经理',
    logo: 'company',
    start: '2023',
    end: '至今',
    description: '负责 AI 产品的设计和开发，推动产品从 0 到 1 的全过程。'
  },
]

export type ProjectItemType = {
  name: string
  description: string
  link: { href: string, label: string }
  date?: string
  logo?: string,
  category?: string[],
  tags?: string[],
  image?: string,
  techStack?: string[],
  gitStars?: number,
  gitForks?: number
}

// projects 
export const projects: Array<ProjectItemType> = [
  {
    name: '别逼胡桃出手',
    description: '永劫无间独立小游戏，仅体验版本。',
    link: { href: 'https://www.yjwujian.cn/h5/20240401/slap/#/', label: '体验游戏' },
    image: 'https://yjwujian.res.netease.com/pc/zt/20240313165720/assets/share_eaea6aa5.jpg',
    category: ['游戏'],
    tags: ['#minigame'],
  },
  {
    name: '个人博客',
    description: '使用 Next.js 开发的个人博客网站，支持暗黑模式和响应式设计。',
    link: { href: 'https://carreypro.com', label: '访问网站' },
    logo: 'blog',
    category: ['个人项目', '博客'],
    tags: ['Next.js', 'React', 'TailwindCSS'],
    techStack: ['Next.js', 'MDX', 'TailwindCSS']
  }
]

// github projects
export const githubProjects: Array<ProjectItemType> = [
  {
    name: 'Devtoolset',
    description: 'Open-source & database-free developer tools navigator / 开源无数据库配置的开发者工具导航站',
    link: { href: 'github.com/iAmCorey/devtoolset', label: 'Devtoolset' },
    gitStars: 146,
    gitForks: 47
  },
  {
    name: 'Chrome Extension Plasmo Template',
    description:
      'A chrome extension template using plasmo, tailwind css, shadcn/ui',
    link: { href: 'github.com/iAmCorey/chrome-extension-plasmo-template', label: 'Chrome Extension Plasmo Template' },
    gitStars: 52,
    gitForks: 10
  },
  {
    name: 'Awesome Indie Hacker Tools',
    description:
      '独立开发/出海开发相关技术栈及工具收录 / Find the best tools for indie hackers here',
    link: { href: 'github.com/iAmCorey/awesome-indie-hacker-tools', label: 'Awesome Indie Hacker Tools' },
    gitStars: 763,
    gitForks: 61
  },
  {
    name: 'Awesome AI Directory',
    description:
      'AI资源工具导航站收录 / Find all the best AI directories',
    link: { href: 'github.com/iAmCorey/awesome-ai-directory', label: 'Awesome AI Directory' },
    gitStars: 37,
    gitForks: 5
  },
  {
    name: 'Producthunt Daily Bot',
    description:
      'A bot getting product hunt daily top products',
    link: { href: 'github.com/iAmCorey/producthunt-daily-bot', label: 'Producthunt Daily Bot' },
  },
  {
    name: 'Cantonese Echoes',
    description:
      'Cantonese Echoes / 粵語殘片',
    link: { href: 'github.com/iAmCorey/Cantonese-Echoes', label: 'Cantonese Echoes' },
    gitStars: 1
  },
]

// changelog
export type ChangelogItemType = {
  date: string
  content: [{
    title: string
    description: string
  }]
}

export const changelogList: Array<ChangelogItemType> = [
  {
    date: '2024-11-18',
    content: [
      {
        title: '💡 Idea come up',
        description: 'I want to have a portfolio websit. The website doesn\'t need to be so fancy but should have a good design. It need to show all my projects and have a blog section to share my ideas and my development experience.'
      },
    ]
  },
  {
    date: '2024-11-22',
    content: [
      {
        title: '🛫 Project deployed',
        description: 'My portfolio website\'s first version finished building and deployed'
      },
    ]
  },
  {
    date: '2024-12-10',
    content: [
      {
        title: '👭 Add friends page',
        description: 'Add friends page to list my friends'
      },
    ]
  },
  {
    date: '2024-12-11',
    content: [
      {
        title: '🌿 Open source',
        description: 'Open source my portfolio website'
      },
    ]
  }
]

// https://simpleicons.org/
export const techIcons = [
  "typescript",
  "javascript",
  "supabase",
  "cloudflare",
  "java",
  "oracle",
  "mysql",
  "react",
  "nodedotjs",
  "nextdotjs",
  "prisma",
  "postgresql",
  "nginx",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "androidstudio",
  "ios",
  "apple",
  "wechat"
];

// friends
export type FriendItemType = {
  name: string
  description?: string
  link: { href: string, label?: string }
  logo?: string
}

export const friends: Array<FriendItemType> = [
  {
    name: 'Corey Chiu',
    link: { href: 'https://coreychiu.com' },
  },
  {
    name: 'Axis Wang',
    link: { href: 'https://wangxs.cfd' },
  },
  {
    name: 'Greener-Dalii Studio',
    link: { href: 'https://greenerdalii.top' },
  },
  {
    name: 'Luolink',
    link: { href: 'https://luolink.com' },
  },
  {
    name: 'Frend guo',
    link: { href: 'https://frendguo.com' },
  },
  {
    name: 'Amon Xu',
    link: { href: 'https://amonxu.com' },
  },
  {
    name: 'Bill Fu',
    link: { href: 'https://billfu.com' },
  },
  {
    name: 'SavoKiss',
    link: { href: 'https://savokiss.com' },
  },
]
