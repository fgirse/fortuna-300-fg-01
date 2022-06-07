/* eslint-disable prettier/prettier */
import React from 'react'
import Image from 'next/image'
import Modale04 from'../components/Modale/Modal04.js'

const events = () => {
  return (
    <section className="border-t border-amber-500 flex flex-col items-stretch justify-center">
    <main className="flex-1" >

        
        <div className=" px-4 mx-auto">
   
    <div className="bg-slate-800 flex flex-wrap items-center -mx-4    lg:pb-16">
      <div className="w-full md:w-1/2 px-4 mb-12 md:mb-0">
        <h2 className="max-w-sm mb-8 text-yellow-500 text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight font-bold font-heading">Privater oder Business Event?</h2>
        <p className="max-w-lg mb-8 text-base leading-relaxed lg:text-xl lg:leading-relaxed text-gray-100">Wir planen Ihren Event nach Ihren Vorstellungen und Wünschen. Auch Cataring möglich. Weitere Info unten.</p>
      <Modale04></Modale04>       
      </div>
      <div className="w-full mt-20  md:w-1/2 px-4">
        <Image  height="499" width="766" layout="responsive" src="/ballons2.png" alt="Event Illustration"/>
      </div>
     
      </div>
  </div>
    </main>
    </section>

    

  )
}

export default events




