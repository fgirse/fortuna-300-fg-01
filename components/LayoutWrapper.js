/* eslint-disable prettier/prettier */
import siteMetadata from '../data/siteMetadata'
import headerNavLinks from '../data/headerNavLinks'
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
      <Infosection></Infosection>
      <div className="bg-slate-900 flex w-full h-screen flex-col justify-between">
        <header className="lg:mxx-auto lg:w-full lg:bg-[url('/Wood.svg')] lg:bg-no-repeat lg:bg-cover flex items-center justify-between py-1">
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
          <div className="flex items-center text-base leading-2">
            <div className="hidden sm:flex flex-row justify-start items-stretch">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-bold uppercase text-slate-50 hover:text-amber-400 lg:text-[1.33rem] 2xl:text-[1.85rem] dark:text-gray-100 sm:p-4"
                >
                  <div className='lg:w-20 xl:w-24'>
                  <Image className="hover:transform  hover:-translate hover:-translate-y-1 hover:scale-110" src="/bulleye.svg" height="840" width="840" layout="responsive" alt="Illustration" />
                  </div>
                  {link.icon}
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