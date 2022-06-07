/* eslint-disable prettier/prettier */
import React, { useRef, useEffect } from "react";
import  { gsap } from "gsap";
import Image from "next/image";


const HeroDrinksAnimated = () =>{
    
    const HeroDrinksRef = useRef();    

    useEffect(() => { console.log(HeroDrinksRef)
        gsap.from(HeroDrinksRef.current,{
            x:"400",
            y: "200",
            rotation: "+=360",
            scale: "1",
            duration: "2"
        })
    },[])


  return (

                            <h1 ref={HeroDrinksRef} className="py-12 text-5xl l headingC uppercase l text-center text-amber-600 lg:text-[5.5rem]">Drinks & Snacks</h1>
    
    

  )
}

export default HeroDrinksAnimated