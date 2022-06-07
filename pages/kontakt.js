/* eslint-disable prettier/prettier */
import React from 'react'
import HerokontaktAnimated from '@/components/Animationen/HerokontaktAnimated'
import Image from 'next/image'
import LogoAlt from '../components/icons/svg/SVGLogoAlt'
import Modale01 from '../components/Modale/Modal01'
import Modale02 from '../components/Modale/Modal02'

const kontakt = () => {
  return(
    <>
    <section className="bg-[#060716] bg-[url('/nightcity.png')] h-[200vh] bg-center bg-cover bg-no-repeat border-t-2 border-amber-400 overflow-hidden">
    <main className="w-full flex flex-col justify-center place-items-center" >
    <div className="flex-1  ">
    <div className=' mx-auto grid grid-cols-1 gap-y-10 justify-center items-stretch w-full'>
          <HerokontaktAnimated/>
          <div className='w-full flex flex-col items-center justify-center -mt-20 lg:w-11/12'>

                  <LogoAlt/>

          </div>

          <div className='mx-auto flex flex-col lg:w-11/12 lg:flex-row lg:justify-end lg:items-center'>
        
        <div className='flex flex-col items-center justify-center '>
          <h1 className=" text-center text-5xl font-extrabold tracking-tight text-gray-300 sm:text-5xl md:text-center md:text-3xl lg:text-7xl">
          <span className="block">LAGEPLAN{' '}   </span></h1>
          <h1 className='text-center block text-3xl text-yellow-400 lg:text-4xl lg:mt-0 '>Rettungsanker Freiburg</h1>

          <p className="mx-auto w-full text-lg text-center  text-white sm:text-lg md:max-w-md  lg:text-2xl xl:text-3xl">
                                      Adelhauserstrasse 7c
                                      <br />
                                      79098 Freiburg
                                      <br />
                                      phone: 0761 3838 6747
                                      <br className="text-xxs" />
                                      email: rettungsanker@.gmx.de
           </p> 
           </div>

           <div className="container mt-12 mx-auto  mb-12 w-48 max-w-sm items-center border border-gray-50 bg-slate-900 px-5 py-4 text-center shadow-2xl shadow-gray-400 lg:max-w-xl">
            <Image src="/MapFreiburg.png" alt="Illustration Altstadt" height="900" width="955" layout="responsive" />
            <h1 className="mt-2 mb-2 text-center text-xs text-gray-100">
              Illustration Altstadt Freiburg{' '}
            </h1>
          </div>

            </div>

            <div className="mx-auto w-full flex flex-col items-center justify-around bg-slate-900 border  border-white p-4 shadow-xl shadow-gray-500/70 lg:flex lg:flex-row">
                      <div className="mb-2 h-20 w-60 rounded-2xl bg-gray-300/10 py-4 px-2 lg:w-80 xl:w-80">
                        <Image
                          src="/VAG_Freiburg.png"
                          layout="responsive"
                          alt="Logo VAG-Freiburg"
                          height="94"
                          width="400"
                        />
                      </div>
                      <h1 className="text-3xl text-orange-400 md:text-2xl lg:text-3xl ">Haltestelle:</h1>
                      <h1 className="text-5xl text-orange-300 lg:text-3xl">Holzmarkt</h1>
                      <h1 className="text-3xl text-orange-300 lg:text-3xl">Linie 1 3 + 5</h1>
            </div>




            <p className="mx-auto w-9/12 text-justify text-sm text-gray-200 sm:text-lg md:max-w-md md:text-center lg:text-2xl">
                    Sie finden uns entweder in der Kartenillustration der Freiburger Altstadt oder ganz professionell in der Karte von OpenStreet-Map !
            </p>

            <div className="mx-auto mb-12 flex flex-col justify-center lg:flex-row lg:justify-around md:space-x-4">
                  <div className="mx-auto mt-3 w-60">
                      <Modale01></Modale01>
                  </div>
                  <div className="mx-auto mb-5 mt-3 w-60">
                        <Modale02></Modale02>
                  </div>
            </div>



      </div>
    </div>
</main>


    </section>
    

    
    
    </>


  )
}

export default kontakt
