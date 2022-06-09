/* eslint-disable prettier/prettier */
import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'

const HerokontaktAnimated = () => {
  const HerokontaktRef = useRef()

  useEffect(() => {
    console.log(HerokontaktRef)
    gsap.from(HerokontaktRef.current, {
      x: '400',
      y: '200',
      rotation: '+=360',
      scale: '1',
      duration: '2',
    })
  }, [])

  return (
    <h1
      ref={HerokontaktRef}
      className="headingF py-12 text-center text-6xl uppercase text-amber-600 lg:text-[5.5rem]"
    >
      wohin?
    </h1>
  )
}

export default HerokontaktAnimated
