/* eslint-disable prettier/prettier */
import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'

const HeroGeschichteAnimated = () => {
  const HeroGeschichteRef = useRef()

  useEffect(() => {
    console.log(HeroGeschichteRef)
    gsap.from(HeroGeschichteRef.current, {
      x: '400',
      y: '200',
      rotation: '+=360',
      scale: '1',
      duration: '2',
    })
  }, [])

  return (
    <h1
      ref={HeroGeschichteRef}
      className="headingF py-12 text-center text-6xl uppercase text-amber-600 lg:text-[5.5rem]"
    >
      die geschichte
    </h1>
  )
}

export default HeroGeschichteAnimated
