'use client'

import { careerList } from '@/config/infoConfig'
import Image from 'next/image'
import dynamic from 'next/dynamic'

export default function Career() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
        工作经历
      </h2>
      <div className="space-y-4">
        {careerList.map((career, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 rounded-lg border border-zinc-100 p-4 dark:border-zinc-700/40"
          >
            {career.logo && (
              <div className="h-12 w-12 flex items-center justify-center overflow-hidden">
                <Image
                  src={career.logo}
                  alt={career.company}
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                  priority
                  loading="eager"
                />
              </div>
            )}
            <div className="flex-1">
              <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                {career.company}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {career.title}
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {career.start} - {career.end}
              </p>
              {career.description && (
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {career.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
