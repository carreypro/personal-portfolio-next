import { Metadata } from 'next'
import { aboutMeHeadline } from '@/config/infoConfig'
import { Container } from '@/components/layout/Container'
import AboutMe from '@/components/about/AboutMe'
import SocialLinks from '@/components/about/SocialLinks'
import Education from '@/components/about/Education'
import Career from '@/components/about/Career'

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
            <SocialLinks />
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
        </div>
      </div>
    </Container>
  )
}
