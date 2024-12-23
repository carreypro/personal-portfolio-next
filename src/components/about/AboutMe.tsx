'use client'

import { aboutMeHeadline, aboutParagraphs } from '@/config/infoConfig'

export default function AboutMe() {
  return (
    <div className="space-y-6">
      <h1 className="text-5xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
        {aboutMeHeadline}
      </h1>
      <div className="space-y-4">
        {aboutParagraphs?.map((paragraph, index) => (
          <p key={index} className="text-base text-zinc-600 dark:text-zinc-400">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  )
}
