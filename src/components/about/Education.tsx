'use client'

import { educationList } from '@/config/infoConfig'
import Image from 'next/image'

export default function Education() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
        教育经历
      </h2>
      <div className="space-y-4">
        {educationList.map((education, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 rounded-lg border border-zinc-100 p-4 dark:border-zinc-700/40"
          >
            {education.logo && (
              <Image
                src={education.logo}
                alt={education.school}
                width={48}
                height={48}
                className="rounded-lg"
              />
            )}
            <div className="flex-1">
              <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                {education.school}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {education.major}
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {education.start} - {education.end}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
