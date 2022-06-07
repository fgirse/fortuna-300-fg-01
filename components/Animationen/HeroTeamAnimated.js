/* eslint-disable prettier/prettier */
import React, { useRef, useEffect } from "react";
import  { gsap } from "gsap";
import Image from "next/image";



const HeroTeamAnimated = () =>{
    
    const HeroTeamRef = useRef();    

    useEffect(() => { console.log(HeroTeamRef)
        gsap.from(HeroTeamRef.current,{
            x:"400",
            y: "200",
            rotation: "+=360",
            scale: "1",
            duration: "2"
        })
    },[])


  return (


                            <h1 ref={HeroTeamRef} className="py-12 text-6xl headingF uppercase xl:text-9xl text-center text-amber-600 lg:text-[5.5rem]">das Team</h1>
    
    

  )
}

export default HeroTeamAnimated