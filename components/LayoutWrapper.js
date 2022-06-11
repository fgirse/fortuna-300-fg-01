/* eslint-disable prettier/prettier */
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '../data/SvgLogoNeu'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import Infosection from './Infosection'
import Image from 'next/image'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className=" flex h-screen flex-col justify-between">
        <Infosection />
        <header className="flex items-center justify-between bg-slate-800 py-3">
          <div>
            {/*} <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <Logo />
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>*/}
          </div>
          
          <div className="bg-slate-900 flex flex-wrap items-end text-base leading-5">
              <div className="hidden lg:flex flex-row justify-center items-center">
                {headerNavLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="py-5 text-gray-50 font-bold uppercase text-center hover:text-slate-200 dark:text-gray-100 dark:hover:text-sky-700 sm:p-4 lg:text-[.8rem] xl:text-[1.33rem] 2xl:text-[1.333rem]"
                  >
                    <div className='w-24 '>
                      <Image className="hover:transform  hover:-translate hover:scale-110" src="/bulleye.png" height="619" width="699" layout="responsive" alt="Illustration" />

                  </div>
                    {link.title}
                  </Link>
                 
                ))}
                 
              </div>
              
              <ThemeSwitch />
              <MobileNav />
            </div>
   
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
