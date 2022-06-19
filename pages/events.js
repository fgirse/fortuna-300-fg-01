/* eslint-disable prettier/prettier */
import React from 'react'
import Image from 'next/image'
import Modale04 from '../components/Modale/Modal04.js'
import { Button } from 'primereact/button'
const events = () => {
  return (
    <><section className="flex flex-col items-stretch justify-center border-t border-amber-500">
      <main className="flex-1">
        <div className=" mx-auto px-4">
          <div className="-mx-4 flex flex-wrap items-center bg-slate-800    lg:pb-16">
            <div className="mb-12 w-full px-4 md:mb-0 md:w-1/2">
              <h2 className="font-heading mb-8 max-w-sm text-3xl font-bold leading-tight text-yellow-500 md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight">
                Privater oder Business Event?
              </h2>
              <p className="mb-8 max-w-lg text-base leading-relaxed text-gray-100 lg:text-xl lg:leading-relaxed">
                Wir planen Ihren Event nach Ihren Vorstellungen und Wünschen. Auch Cataring möglich.
                Weitere Info unten.
              </p>
              <Modale04></Modale04>
            </div>
            <div className="mt-5 mb-5 w-96 px-4 lg:mt-20">
              <Image
                height="361"
                width="277"
                layout="responsive"
                src="/Vernissage.jpg"
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
