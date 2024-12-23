import { Metadata } from 'next'
import Image from 'next/image'
import { aboutMeHeadline } from '@/config/infoConfig'
import { Container } from '@/components/layout/Container'
import AboutMe from '@/components/about/AboutMe'
import SocialLinks from '@/components/about/SocialLinks'
import Education from '@/components/about/Education'
import Career from '@/components/about/Career'
import portraitImage from '@/images/portrait.png'

export const metadata: Metadata = {
  title: 'About | carrey',
  description: aboutMeHeadline,
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <AboutMe />
          <div className="mt-12">
            <Education />
          </div>
          <div className="mt-12">
            <Career />
          </div>
          <div className="mt-12">
            <SocialLinks />
          </div>
        </div>
      </div>
    </Container>
  )
}
