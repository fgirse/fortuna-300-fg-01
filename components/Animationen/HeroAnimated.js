/* eslint-disable prettier/prettier */
import React, { useRef, useEffect } from "react";
import  { gsap } from "gsap";
import Image from "next/image";



const heroGeschichteAnimated = () =>{
    
    const HeroGeschichteRef = useRef();    

    useEffect(() => { console.log(HeroGeschichteRef)
        gsap.from(HeroGeschichteRef.current,{
            
          x:"200",
          y: "500",
          rotation: "+360",
          scale: "2",
          duration: "1"
        })
    },[])


  return (

    <div ref={HeroGeschichteRef} className="absolute w-48 top-20 left-60 ">

        <h1 className="text-white headingF"></h1>
    </div>
  )
}

export default heroGeschichteAnimated