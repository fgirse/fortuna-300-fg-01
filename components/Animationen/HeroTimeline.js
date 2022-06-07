/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, { useRef, useEffect } from "react";
import  { gsap } from "gsap";
import Image from "next/image";

const HeroTimeline = () => {

    const el = useRef();
    const q = gsap.utils.selector(el);
    const tl = useRef();

    useEffect(() => {            
      
        tl.current = gsap.timeline()

        
        .from (q("#LogoAlt"), {

            autoAlpha: 0, duration: 2
          })
          .from(q("#die"), {
        autoAlpha: 0, duration: 2
          })
          .from(q("#kiez"), {
        autoAlpha: 0, duration: 2
          })
          .to (q("#LogoAlt"), {
           autoAlpha: 0, duration: 1
          })
          .to(q("#die"), {
            autoAlpha: 0, duration: 1
              })
          .to(q("#kiez"), {
            autoAlpha: 0, duration: 1
              });
          
      
      }, []);
      
  return (
    <div ref={el} className="hidden lg:mt-24 lg:w-full lg:flex lg:flex-col lg:items-center jlg:ustify-center">
            
            <div className="mx-auto w-80 lg: lg:mt-8 lg:w-5/12 p-4">
                 <Image id="LogoAlt" src="/Logoalt.png"  width="160"  height="24" layout="responsive" alt="Logoalt"/>
            </div>
    
           <h1 id="die" className="p-4 -mt-12 text-center uppercase font-['Bowlby One SC'] text-[7rem] text-white headingE">die</h1>
           <h1 id="kiez" className="p-4 -mt-20 text-center uppercase font-['Bowlby One SC'] text-[7rem] text-red-800 headingF">kiezkneipe</h1>
          
               
              

    
        
    </div>
  )
}

export default HeroTimeline
    