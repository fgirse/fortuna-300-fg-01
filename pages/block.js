/* eslint-disable prettier/prettier */
import React from "react"
import Modale03 from "@/components/Modale/Modal03"
import Hero2Animated from '../components/Animationen/HeroTimeline'
import Link from '@/components/Link'
import Image from "next/image"
import Slider from "../components/swiper"
import LogoNeu from '../components/icons/svg/Logo_neu.svg'
import Flensburger from "../components/icons/svg/SVGFlensburger";
import Ganter from "../components/icons/svg/SVGGanter";
import Astra from "../components/icons/svg/SVGAstra";
import sketchy from "theme-ui-sketchy-preset";
import { ThemeProvider, Card, Text } from "theme-ui"; 

const theme = {
  ...sketchy
};


export default function block() {

 
  
  
  return (
    <>
     <section className="mx-auto w-full flex flex-col">
       <div className="mx-auto bg-slate-900/70 bg-[url('/collage02.png')] w-full h-[100vh] bg-top-right bg-[length:100%_77%] bg-no-repeat lg:bg-[url('/Hero.png')] lg:bg-[length:100%_75%] lg:bg-slate-900 lg:bg-no-repeat lg:w-full lg:h-screen">    
       </div>
             
    
            

       
           </section>
                                             
                                        
      {/*======================================================================= SECTION ÖFFNUNGSZEITEN BEGRÜSSUG ===========================================================*/}

<section className=" mx-auto -mt-[26vh] w-full lg:mt-[12vh] 2xl:mt-5 bg-slate-900">
      
      {/*======================================================================= FLEXBOX ===========================================================*/}      
            <div className=" mx-auto  w-11/12 h-min-full flex flex-col items-center justify-center lg:flex-row lg:gap-20 lg:justify-start lg:items-start lg:-mt-[12vh] xl:-mt-60">
                                <div className=' rounded-3xl bg-blue-900/10 lg:w-full'>
      
                                      <div className='flex flex-col items-center justify-start'>
                                              <p className="py-6 px-12 mb-2 text-center text-4xl font-bold uppercase tracking-tight text-yellow-500 dark:text-white md:text-4xl xl:text-5xl">öffnungzeiten</p>
                                              <p className="text-xl sm:text-xl text-center text-gray-300 md:text-base lg:text-xl">Montag-Donnerstag: 18 bis 24 Uhr</p>
                                              <p className="text-xl sm:text-1xl xl:text-center  text-gray-300 md:text-base lg:text-xl">Freitag und Samstag: 15 bis 03 Uhr</p>
                                              <p className="text-xl sm:text-1xl xl:text- text-center   text-gray-300 md:text-base lg:text-xl">Sonntag: Ruhetag</p>
                                              
                                      </div>
      
                                </div>
      
                                <div className=' w -2/3 lg:bg--900/10'>
                                  
                                <div className='flex flex-col items-center lg:flex-row justify-center'>
                                              
                                              <div className="flex flex-col lg:flex">
                                              <h5 className="py-6 mb-3 text-5xl text-center font-sans font-bold tracking-tight text-yellow-500 dark:text-white xl:text-6xl">
                                                       "Moin Moin Moin"
                                              </h5>
                                              <p className="w-full p-12  z-5 text-xs text-justify mb-1 font-normal text-gray-300 dark:text-gray-400 lg:text-[1.3rem] xl:leading-10 xl:text-[2.33rem]">
                                              <img className="shape-lighthouse w-60 h-52 lg:w-6/12 lg:h-3/5" src='/lighthouse3.png' alt='leuchtturm illustration' layout='responsive'/>
      
                                                In Hommage an eine typische Kiez-Kneipe auf St.Pauli, haben wir im Herzen von
                                                Freiburg ein Lokal eröffnet, welches es so südlich der Elbe wohl kein zweites
                                                Mal gibt. Ausgebaut im Stile eines Schiffrumpfes, ist der im Herzen der Altstadt
                                                gelegene Rettungsanker-Freiburg idealer Treffpunkt um nach Feiereabend etwas zu entspannen und nette Leute kennenzulernen. Wir sind stolz auf
                                                unser buntes, internationales Publikum. Unser Rettungsanker ist auch ideale
                                                Location zur Durchführung Ihres privaten oder geschäftlichen Events <Link className="w-20 h-8 bg-slate-700 hover:bg-sky-900 cursor-pointer rounded-xl px-2 "><span className='text-xl text-center'><a href="./events">INFO</a></span> </Link>  Sprechen
                                                Sie uns an oder kontaktieren Sie uns vor Ort oder schreiben Sie uns eine email.
                                                Wir freuen uns Sie im Rettungsanker begrüsssen zu dürfen <br />
                                                <br />
                                                Michael Schreck und das Team des Rettungsankers
                                              </p> 
                                              </div>
                                              <button
                                            type="button"
                                            className="mt- relative w-3/12 text-2xl flex flex-col items-center justify-center rounded-lg border border-transparent bg-orange-700 hover:bg-yellow-700 px-4 py-2 font-sans lg:text-3xl font-medium text-gray-200 hover:bg-orange-700- focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 md:text-3xl xl:mt-2 lg:mb-20"
                                          >
                                            <svg className="w-16 lg:w-20 " fill="#ffffff" viewBox="0 0 20 20"  xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                            <a className="ui btn" href="mailto:rettungsanker-freiburg@gmx.de?">
                                            SOS e-mail</a>
                                          </button>
                                             
                                                              </div>
                                </div>
      
                           
            </div>
            
      {/*======================================================================= ENDE FLEXBOX ===========================================================*/}
      </section>
      <section className=" bg-slate-900">
            <div className="hidden lg:grid overflow-hidden md:grid md:grid-cols-3 grid-rows-2 gap-3">
              <div className="relative z-40 mx-auto w-10/12 md:w-11/12">
                <Image
                  className='relative z-40'
                  width="619"
                  height="696"
                  src="/bulleye.png"
                  layout="responsive"
                  alt="Bullauge"
                />
              </div>
              <div className="mx-auto w-10/12 md:w-11/12">
                <Image
                  width="619"
                  height="696"
                  src="/bulleye.png"
                  layout="responsive"
                  alt="Bullauge"
                />
              </div>
              <div className="mx-auto w-10/12 md:w-11/12">
                <Image
                  width="619"
                  height="696"
                  src="/bulleye.png"
                  layout="responsive"
                  alt="Bullauge"
                />
              </div>
            </div>
          </section> 
         


        
{/*======================================= SECTION BULLAUGE =======================================================================*/}

         
         
              
        
         
          {/*========================================================== section C ===============================================================*/}

             {/*========================================================== section C ===============================================================*/}

<section className='py-12 w-full mx-auto bg-slate-900'>

<h1 className='text-8xl headingF text-center text-yellow-600 lg:-mt-96 lg:text-[12rem]'>Die Kneipe</h1>
<div  className=" lg:w-9/12 mx-auto grid grid-cols-1  lg:gap-y-10 lg:grid-cols-2 lg:justify-center ">

                                <div className='itemA p-4 bg-white/5  rounded-3xl lg:w-9/12  '>
                                            <p className='mx-auto w-full px-6 py-4  leading-8 text-justify rounded-2xl text-slate-300 lg:w-full lg:text-[1.33rem] '>

                                                      <img className="shape" src='/astraurtyp2.png' width='300' height='250' alt='astra-illu' layout='responsive'/>

                                                Gemütlich nordisches Ambiente im Herzen der Altstadt Freiburgs gelegen. Orginales Kiez und Waterkant-Feeling mit Astra , Flensburger & Co.
                                                Frisches würziges Ganter Pils vom Fass. Qualitativ hochwertige Weine aus der Region (Weingut Heinemann - Scherzingen). Grosse Auswahl an Longdrinks und Cocktails. Besonders beliebt Captains Blaubär und Störtebeckers Love. Eine genaue Auflistung unseres Angebotes ist unter der Rubrik Drinks hinterlegt 
                                                  <br/> <br/>
                                          </p>

                                </div> 

                                <div className='itemB p-4 bg-white/5 rounded-3xl w-9/12  '>
                                            <p className='mx-auto w-full px-6 py-4  leading-8 text-justify rounded-2xl text-slate-300 lg:w-full lg:text-[1.5rem] '>

                                            <img className="shape-fussball" src='/fussball.png' width='120' height='120' alt='fussball-illu' layout='responsive'/>

                                                      Jeden Samstag-Spieltag der laufenden Bundesliga-Saison Live TV Event in unserer Sportarena natürlich mit Schwerpunkt unseres SC Freiburgs. Wann immer möglich auch Spiele der Champions League und natürlich der grossen Turniere von EM und WM.
                                                                Bei Top Spielen des SC Freiburg mit grosser Publikumsnachfrage sind Reservierungen über unser Booking-Tool zu empfehlen - Unten folgender Button und Du bist direkt dabei !! 
                                                  
                                          </p>
                                           <Modale03/>
                                          
                  
                                        
                                 </div> 
                               


                                <div className=' itemC p-4 bg-white/5 rounded-3xl w-9/12 mb-8'>
                                            <p className='mx-auto  w-8/12  px-6 py-4  leading-8 text-sm text-justify rounded-2xl text-slate-300 lg:w-full lg:text-[1.5rem] '>

                                                      <img className="shape-albers" src='/Albers-white.png' width='300' height='250' alt='albers-illu' layout='responsive'/>

                                            Hans Phillip August Albers (* 22.September 1891 in Hamburg , 24. Juli 1960 in Berg, Bayern) war ein deutscher Schauspieler und Sönger, der als "blonder Hans" zum Volksidol wurde. Zu den bekanntesten Spielfilmen in denen er mitwirkte gehören "der Mann, der Sherlock Holmes war" (1937), "Münchhausen" (1943), "die grosse Freiheit Nr.7" (1943) sowie "Auf fer Reeperbahn Nachts um halb eins" "
                                                  <br/> <br/>
                                          </p>

                                </div> 

                                <div className='itemD  p-4 bg-white/5 rounded-3xl w-9/12 mb-8'>
                                            <p className='mx-auto  w-8/12  px-6 py-4  leading-7 text-sm text-justify rounded-2xl text-slate-300 lg:w-full lg:text-[1.5rem] '>

                                            <img className="shape-astraballon" src='/Astraballons.png' width='120' height='120' alt='astra-illu' layout='responsive'/>

                                            Jeden Samstag-Spieltag der laufenden Bundesliga-Saison Live TV Event in unserer Sportarena natürlich mit Schwerpunkt unseres SC Freiburgs. Wann immer möglich auch Spiele der Champions League und natürlich der grossen Turniere von EM und WM.
                                                                Bei Top Spielen des SC Freiburg mit grosser Publikumsnachfrage sind Reservierungen über unser Booking-Tool zu empfehlen - Unten folgender Button und Du bist direkt dabei !! 
                                                  <br/> <br/>
                                          </p>

                                </div> 



 </div>
  
  
  
  
  
</section>            {/*========================================================== section F ==============================================================*/}
<section className="bg-slate-900">          
<ThemeProvider theme={theme}>
              <div className="-mt-1 mx-auto p-16 lg:mt-20 lg:w-11/12 lg:max-w-8xl xl:mt-[58vh] grid grid-cols-1 justify-center items-center md:p-6  md:grid-cols-3 md:justify-around lg:item11s-center lg:gap-x-5">
                <Card
                  className="justify-self-center"
                  mb={3}
                  mt={20}
                  sx={{
                    maxWidth: 700,
                    padding: "12px",
                    color: "#ffffff",
                    backgroundColor: "orange",
                    border: "3px white solid",
                    boxShadow: "10px 5px 10px rgba(244, 216, 154, 0.9)",
                  }}
                  onGotPointerCapture={2}
                >
                  <div className="mx-auto border- border-gray-100">
                    <Astra
                      object-fit="cover"
                      height="25vh"
                      width="100%"
                    ></Astra>
                  </div>
                  <Text>
                    <p className="mt-10 text-2xl text-center text uppercase font-bold">
                      Astra Bier
                    </p>
                    <p className="text-xl text-center">
                      natürlich direkt vom Kiez in den Anker
                    </p>
                  </Text>
                </Card>

                <Card
                  className="justify-self-center"
                  mb={3}
                  mt={20}
                  sx={{
                    maxWidth: 700,
                    padding: "12px",
                    color: "#ffffff",
                    backgroundColor: "orange",
                    border: "3px white solid",
                    boxShadow: "10px 5px 10px rgba(244, 216, 154, 0.9)",
                  }}
                  onGotPointerCapture={2}
                >
                  <div className="mx-auto border- border-gray-100">
                    <Ganter
                      aobject-fit="cover"
                      height="25vh"
                      width="100%"
                    ></Ganter>
                  </div>
                  <Text>
                    <p className="mt-10 text-2xl text-center text uppercase font-bold">
                      Ganter Bier
                    </p>                                                                                                                                                                                                                                                                                                                                         
                    <p className="text-xl text-center">
                     köstliches Ganter-Bräu vom Fass
                    </p>
                  </Text>
                </Card>
                <Card
                  className="justify-self-center"
                  mb={3}
                  mt={20}
                  sx={{
                    maxWidth: 700,
                    padding: "12px",
                    color: "#ffffff",
                    backgroundColor: "orange",
                    border: "3px white solid",
                    boxShadow: "10px 5px 10px rgba(244, 216, 154, 0.9)",
                  }}
                  onGotPointerCapture={2}
                >
                  <div className="mx-auto border- border-gray-100">
                    <Flensburger
                      object-fit="cover"
                      height="25vh"
                      width="100%"
                    ></Flensburger>
                  </div>
                  <Text>
                    <p className="mt-10 text-2xl text-center text uppercase font-bold">
                      Flensburger
                    </p>
                    <p className="text-xl text-center">
                      das blonde Herbe aus dem hohen Norden
                    </p>

                  </Text>
                </Card>
              </div>
            </ThemeProvider>
          </section>
          {/*========================================================== section E =ende ==============================================================*/}            

                  








          <section className=" bg-slate-900 mt-[1vh] w-full mx-auto min-h-[100vh] h-[100vh] md:w-full md:-mt-[36] md:mx-auto lg:mt-[20vh]">
          <div className="h-36 w-5/12 lg:w-3/12 lg:p-8 lg:-mt-48 ">
           <Image                                                                                                                                                                
             src="/Albers-white.png"
             alt="Impressionen"
             height="208 "
             width="195"
             layout="responsive"
           />
         </div>
          <h1 className="mb-6 headingB text-5xl text-center text-gray-50 lg:headingA lg:text-yellow-500 lg:text-[4.66rem] lg:mt-48">
           Impressionen Rettungsanker
         </h1>
      
                      
                      
                      
                      
                     <div className="mx-auto w-9/12 lg:w-5/12 border-4  border-slate-100 lg:mt-[16vh]">
                         
                           <Slider/>
                             
                                                                                                                                                                                                                                      


                        
              
                       </div>
                       <p className="mt-1 text-xs text-white text-center lg:text-lg">Impressionen aus dem Rettungsanker</p>

                     </section>
                
                   
                    
                       
                       
                       
                       
         
         {/*========================================================== section F ende==============================================================*/}
         

           <hr className="w-full mt-12 mx-auto md:w-11/12 lg:mt-96 "/>
{/*========================================================== section G =================================================*/}
         <section className="-mt-[54vh] flex flex-col justify-end items-between xl:mt-[50vh] 2xl:-mt-48 bg-slate-900">
         <div className="mt-6 md:mt-20 mx-auto md:w-2/12 lg:mx-auto lg:mt-6">
               <LogoNeu className="w-48 h-48 lg:w-60 lg:h-60"></LogoNeu>
                 
             </div>
           <div>                                                            
           
             

             <h1 className="headingB text-white mt-2 text-[3rem] text-center lg:headingA lg:text-[6rem] lg:text-gray-600">                                                                           
               Impressum
             </h1>
             <div>
               <div className="mt-8 flex flex-col items-center justify-between">
                 <h1 className="mx-auto w-9/12 md:text-4xl text-gray-100 text-center">
                 gemäß § 6 Teledienstegesetz (TDG) </h1>
                 <h1 className='mx-auto w-9/12 md:text-3xl text-gray-100 text-center'>Inhaltlich Verantwortlicher gemäß § 6 MDStV: Michael Schreck</h1>
                 <h1 className="mx-auto w-9/12 md:text-3xl text-gray-100 text-center">
                   Adelhauserstrasse 7c
                 </h1>
                 <h1 className="mx-auto w-9/12 md:text-3xl text-gray-100 text-center">
                   D 79098 Freiburg / Breisgau
                 </h1>
               </div>

               <div className="mt-12">
                 <h1 className="mt-5 mx-auto w-9/12 font-mono md:text-2xl text-yellow-400 text-center">
                   Geschäftsführung:
                 </h1>
                 <h1 className="mx-auto w-9/12 md:text-3xl text-gray-100 text-center">
                   Michael Schreck
                 </h1>
               </div>

               <div className="mt-12">
                 <h1 className="mt-5 mx-auto w-9/12 font-mono md:text-2xl text-yellow-400 text-center">
                   Steuernummer:
                 </h1>
                 <h1 className="mx-auto w-9/12 md:text-3xl text-gray-100 text-center">
                   1234567890
                 </h1>
               </div>
               <div className="mt-12">
                 <h1 className="mt-5 mx-auto w-9/12 font-mono md:text-2xl text-yellow-400 text-center">
                   Gerichtsstand:
                 </h1>
                 <h1 className="mb-10 mx-auto w-9/12 md:text-3xl text-gray-100 text-center  lg:mb-9">
                   Freiburg/ Breisgau
                 </h1>
               </div>
             </div>
           </div>
         </section>

         {/*======================================= Ende Section B =======================================================================*/}          


      
    </>
  )
}
