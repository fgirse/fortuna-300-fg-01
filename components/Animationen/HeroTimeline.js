/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'

const HeroTimeline = () => {
  const el = useRef()
  const q = gsap.utils.selector(el)
  const tl = useRef()

  useEffect(() => {
    tl.current = gsap
      .timeline()

      .from(q('#LogoAlt'), {
        autoAlpha: 0,
        duration: 2,
      })
      .from(q('#die'), {
        autoAlpha: 0,
        duration: 2,
      })
      .from(q('#kiez'), {
        autoAlpha: 0,
        duration: 2,
      })
      .to(q('#LogoAlt'), {
        autoAlpha: 0,
        duration: 1,
      })
      .to(q('#die'), {
        autoAlpha: 0,
        duration: 1,
      })
      .to(q('#kiez'), {
        autoAlpha: 0,
        duration: 1,
      })
  }, [])

  return (
    <div
      ref={el}
      className="jlg:ustify-center hidden lg:mt-24 lg:flex lg:w-full lg:flex-col lg:items-center"
    >
      <div className="lg: mx-auto w-80 p-4 lg:mt-8 lg:w-5/12">
        <Image
          id="LogoAlt"
          src="/Logoalt.png"
          width="160"
          height="24"
          layout="responsive"
          alt="Logoalt"
        />
      </div>

      <h1
        id="die"
        className="font-['Bowlby One SC'] headingE -mt-12 p-4 text-center text-[7rem] uppercase text-white"
      >
        die
      </h1>
      <h1
        id="kiez"
        className="font-['Bowlby One SC'] headingF -mt-20 p-4 text-center text-[7rem] uppercase text-red-800"
      >
        kiezkneipe
      </h1>
    </div>
  )
}

export default HeroTimeline
