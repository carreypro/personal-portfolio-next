// personal info
export const name = 'carrey'
export const headline = '产品经理、AI 独立开发者'
export const introduction = '前互联网大厂产品经理，创业者，用 AI 塑造自己的第二人生。\nStay hungry, stay foolish.'

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
export type FriendItemType = {
  name: string
  description: string
  link: { href: string, label: string }
  avatar?: string
  logo?: string
}

export const friends: Array<FriendItemType> = [
  // 暂时为空，等待添加朋友
]

// friends page
export const friendsHeadLine = "友情链接"
export const friendsIntro = "认识一些有趣的朋友。"

// social links
export type SocialLinkType = {
  name: string,
  ariaLabel?: string,
  icon: string,
  href?: string,
  qrcode?: string
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
    name: 'Bsky',
    icon: 'bsky',
    href: 'https://bsky.app/profile/carrey01.bsky.social'
  },
  {
    name: 'Wechat',
    icon: 'wechat',
    qrcode: '/images/wechat-qr.png'
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
    school: '川影',
    major: '产品设计',
    logo: '/images/sfa-logo.svg',
    start: '2018',
    end: '2022'
  }
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
    company: '网易',
    title: '产品经理',
    logo: '/images/netease-logo.svg',
    start: '2023',
    end: '2024'
  }
]

// projects 
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

export const projects: Array<ProjectItemType> = [
  {
    name: '别逼胡桃出手',
    description: '永劫无间独立小游戏，仅体验版本。',
    link: { href: 'https://www.narakathegame.com/h5/20240401/slap/5f6ffc62/#/', label: '查看项目' },
    image: 'https://yjwujian.res.netease.com/pc/zt/20240313165720/assets/share_eaea6aa5.jpg',
    category: ['游戏'],
    tags: ['小游戏']
  },
  {
    name: '劫着奏乐劫着舞',
    description: '永劫无间独立小游戏，仅体验版本。',
    link: { href: 'https://m.yjwujian.cn/h5/20240708/xkyy/fa21ee58/#/', label: '访问游戏' },
    image: 'https://myjwujian.res.netease.com/pc/zt/20240625104806/keep_origin/assets/share_ed5a184e.jpg',
    category: ['游戏'],
    tags: ['小游戏']
  }
]

// github projects
export const githubProjects: Array<ProjectItemType> = [
  // 暂时为空，等待添加 GitHub 项目
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
    date: '2024-12-20',
    content: [
      {
        title: '💡 Idea come up',
        description: '开始接触 AI Coding，也许是时候该学习新的领域了，就从个人网站开始吧。'
      }
    ]
  },
  {
    date: '2024-12-21',
    content: [
      {
        title: '💻 学习 AI Coding',
        description: '开始使用 windsurf 进行尝试～'
      }
    ]
  },
  {
    date: '2024-12-23',
    content: [
      {
        title: '🛫慢慢更新',
        description: '逐渐增加我的项目'
      }
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
