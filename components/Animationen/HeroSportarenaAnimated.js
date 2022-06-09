/* eslint-disable prettier/prettier */
import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'

const HeroSportarenaAnimated = () => {
  const HeroSportarenaRef = useRef()

  useEffect(() => {
    console.log(HeroSportarenaRef)
    gsap.from(HeroSportarenaRef.current, {
      x: '400',
      y: '200',
      rotation: '+=360',
      scale: '1',
      duration: '2',
    })
  }, [])

  return (
    <h1
      ref={HeroSportarenaRef}
      className="l headingF l py-12 text-center text-5xl uppercase text-amber-600 lg:text-[5.5rem]"
    >
      Sportarena
    </h1>
  )
}

export default HeroSportarenaAnimated
