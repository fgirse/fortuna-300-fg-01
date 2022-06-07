/* eslint-disable prettier/prettier */
import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import Wave from '/public/waves.svg'
import Image from 'next/image'
import Astra from'../components/icons/svg/SVGAstra'
import LogoLeckerLaden from'../components/icons/svg/SVGLogoLeckerLaden'
import Flensburger from'../components/icons/svg/SVGFlensburger'




export default function Footer() {
  return (
    <footer>
      <div className='flex flex-col justify-center bg-amber-800 items-center '>
          <h1 className='mt-3 text-yellow-400 text-center text-3xl'>Unsere Partner</h1>
                    <div className="w-full flex flex-row justify-evenly items-center lg:flex-row lg:justify-center lg:gap-10 lg:items-center">
                    <Astra className="w-16 h-16 lg:w-36 lg:h-36"/>
                    <LogoLeckerLaden className="w-24 h-16 lg:w-48 lg:h-44"/>
                    <Flensburger className="w-12 h-12 lg:w-24 lg:h-24"/>

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
        <div className="mb-2 flex space-x-2 text-sm text-gray-100 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div className=" text-sm text-gray-100 dark:text-gray-400">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
          
          </Link>
        </div>
        <div className='w-full flex flex-col justify-end items-start'>
            
                  
                <img className="ml-12 transform translate-y-6 lg:transform lg:translate-y-36 relative z-50" src="/lighthouse3.png" height="30%" width="20%" alt="Illustration"/>
                <Wave className=""></Wave> 
            
       
        </div>
      
      </div>
    </footer>
  )
}
