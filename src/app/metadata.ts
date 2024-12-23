export const siteConfig = {
  title: "Corey Chiu - Portfolio",
  description: "Full-stack developer and designer, passionate about creating beautiful and functional web applications.",
  keywords: [
    "Corey Chiu",
    "Portfolio",
    "Full-stack Developer",
    "Web Developer",
    "Designer",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Corey Chiu" }],
  creator: "Corey Chiu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://carreypro.com",
    title: "Corey Chiu - Portfolio",
    description: "Full-stack developer and designer, passionate about creating beautiful and functional web applications.",
    siteName: "Corey Chiu Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corey Chiu - Portfolio",
    description: "Full-stack developer and designer, passionate about creating beautiful and functional web applications.",
    creator: "@CoreyChiu",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};
