'use client'

import { aboutMeHeadline, aboutParagraphs } from '@/config/infoConfig'

export default function AboutMe() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
        {aboutMeHeadline}
      </h1>
      <div className="mt-6 space-y-5 text-base leading-8 text-zinc-600 dark:text-zinc-400">
        {aboutParagraphs.map((paragraph, index) => (
          <p key={index} className="text-lg">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  )
}
