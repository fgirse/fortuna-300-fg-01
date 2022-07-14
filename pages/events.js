/* eslint-disable prettier/prettier */
import React from 'react'
import LogoAlt from '../components/icons/svg/SVGLogoAlt'
import Image from 'next/image'
import Modale04 from '../components/Modale/Modal04.js'
import { Button } from 'primereact/button'
const events = () => {
  return (
    <><section className="flex flex-col items-stretch justify-center border-t-4 border-amber-400">
      <main className="flex-1">
        <div className=" mx-auto px-4">
          <div className="-mx-4 flex flex-wrap items-center justify-center bg-slate-800    lg:pb-16">
            <div className="mb-12 w-full px-4 md:mb-0 md:w-1/2">
              <LogoAlt className="w-96 h-2/6"></LogoAlt>
              <h2 className="font-heading mb-8 max-w-sm text-3xl font-bold leading-tight text-yellow-500 md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight">
                Privater oder Business Event?
              </h2>
              <p className="mb-8 max-w-lg text-base leading-relaxed text-gray-100 lg:text-xl lg:leading-relaxed">
                Wir planen Ihren Event nach Ihren Vorstellungen und Wünschen. Auch Cataring möglich.
                Weitere Info unten.
              </p>
              <Modale04></Modale04>
            </div>
            <div className="mt-5 mb-5 bg-slate-700 border rounded-2xl w-4/12 px-4 lg:mt-20">
              <Image
                height="850"
                width="897"
                layout="responsive"
                src="/event01.svg"
                alt="Event Illustration" />
            </div>
          </div>
        </div>
      </main>
    </section>
   </>
  )
}

export default events
