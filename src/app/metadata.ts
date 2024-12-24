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
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};
