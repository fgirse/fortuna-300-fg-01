/* eslint-disable prettier/prettier */
import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import Wave from '/public/waves.svg'
import Image from 'next/image'
import Astra from '../components/icons/svg/SVGAstra'
import LogoLeckerLaden from '../components/icons/svg/SVGLogoLeckerladen'
import Flensburger from '../components/icons/svg/SVGFlensburger'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center justify-center bg-amber-800 ">
        <h1 className="mt-3 text-center text-3xl text-yellow-400">Unsere Partner</h1>
        <div className="flex w-full flex-row items-center justify-evenly lg: lg:items-center lg:justify-center lg:gap-x-20">
          <Astra className="h-16 w-16 lg:h-28 lg:w-28" />
          <LogoLeckerLaden className="h-16 w-24 lg:h-44 lg:w-48" />
          <Flensburger className="h-12 w-12 lg:h-24 lg:w-24" />
        </div>
      </div>
      <div className="flex flex-col items-center bg-amber-800">
        <div className="mt-5 mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          <SocialIcon kind="github" href={siteMetadata.github} size="6" />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
        </div>
        <div className=" flex flex-col justify-start items-center lg:flex-row space-x-2 text-sm text-gray-100 dark:text-gray-400">
          <div className='text-yellow-500 uppercase'>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div className='font-mono'>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link className="font-mono" href="/">{siteMetadata.title}</Link>
        </div>
        <div className=" text-sm text-gray-100 dark:text-gray-400">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog"></Link>
        </div>
        <div className="flex w-full flex-col items-start justify-start">
          <img
            className="relative z-50 ml-12 translate-y-6 transform lg:translate-x-60 lg:translate-y-36 lg:transform lg:transform"
            src="/lighthouse3.png"
            height="0%"
            width="20%"
            alt="Illustration"
          />
          <Wave className=""></Wave>
        </div>
      </div>
    </footer>
  )
}
