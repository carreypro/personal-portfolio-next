import { getAssetPath } from '@/lib/assets'

// personal info
export const name = 'carrey'
export const headline = '产品经理、AI 独立开发者'
export const introduction = '前互联网大厂产品经理，创业者，用 AI 塑造自己的第二人生。\n\n\nContext, Not Control.'
export const avatar = getAssetPath('avatar')

// about page
export const aboutMeHeadline = "我是 carrey，现居杭州的产品经理"
export const aboutParagraphs = [
  "曾经是电竞选手、赛事策划，办过三届电竞比赛，后来转行当产品。",
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
    qrcode: getAssetPath('wechat-qr')
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
    logo: getAssetPath('sfa-logo'),
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
    logo: getAssetPath('netease-logo'),
    start: '2022',
    end: '2023',
    description: '负责游戏工具产品的设计和开发。'
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
    name: '猫修APP',
    description: '让游戏更简单',
    link: { href: 'https://www.lmaoyx.com/', label: '查看项目' },
    tags: ['APP']
  },
  {
    name: '一修大师',
    description: '最方便的免费游戏修改器工具',
    link: { href: 'https://www.lmaoyx.com/pc/yixiu', label: '查看项目' },
    tags: ['修改器']
  },
  {
    name: '老猫汉化',
    description: '一站式汉化游戏平台',
    link: { href: 'https://www.lmaoyx.com/pc/laomao', label: '查看项目' },
    tags: ['汉化']
  },
  {
    name: '永劫无间系列',
    description: '官网',
    link: { href: 'https://www.yjwujian.cn/', label: '查看项目' },
    tags: ['官网', '专题']
  },
  {
    name: '永劫无间系列',
    description: '小游戏',
    link: { href: 'https://www.yjwujian.cn/h5/20240401/slap/', label: '查看项目' },
    tags: ['小游戏']
  },
  {
    name: '游侠杯电子竞技全民赛',
    description: '为玩家们提供敢秀敢玩的尊洗平台',
    link: { href: 'https://www.ali213.net/youxiacup/#page1', label: '查看项目' },
    tags: ['电竞赛事', '专题']
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
