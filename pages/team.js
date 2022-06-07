/* eslint-disable prettier/prettier */
import React from "react";
import Image from "next/image";
import HeroTeam from '../components/Animationen/HeroTeamAnimated'

const team = () => {
  return (
    <>
<section className="bg-sky-700 border-t-8 border-b-8 border-amber-500 bg-[url('/Maritim.png')] bg-cover bg-no-repeat py-0">
  <div className="container px-4 mx-auto">
    <div className="max-w-3xl mx-auto mb-12 lg:mb- text-center">
      <span><HeroTeam/></span>
     
      <Image className="mx-auto " src="/LogoAlt.png" layout="responsive"  width="1000" height="150" alt="Portrait"/>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="w-full md:w-1/2 lg:w-1/3 p-4">
        <div className="flex items-center justify-center  py-12 rounded-lg">
          <div className="text-center w-60">
        <Image className="mx-auto rounded-full" src="/matrose.png" layout="responsive"  width="200" height="250" alt="Portrait"/>
            <h3 className="mb-1 text-4xl font-bold font-heading">Simon</h3>
            
            <p className="mb-3 text-3xl text-amber-400">Obermaat</p>
            <p className="text-lg text-center text-gray-100">Simon ist Teammitglied der ersten Stunde. Im richtigen Leben
              studiert Simon an der Uni Erziehungswissenschaften und hat
              gerade seinee Master absolviert. Simon ist ausgewiesener SC
              Freiburg Fan und wann immer möglich begleited er das Team zu
              den Auswärtsspielen</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 p-4">
        <div className="flex items-center justify-center  py-12 rounded-lg">
          <div className="text-center w-52">
        <Image className="mx-auto rounded-full" src="/portrait-mick1.png" layout="responsive"  width="300" height="390" alt="Portrait"/>
            <h3 className="mt-2 mb-1 text-4xl font-bold font-heading">Mick</h3>
            <p className="mb-2 text-3xl text-amber-400">Captain</p>
            <p className="text-lg text-gray-100 text-center">  Volker Schneider und Michael Schreck haben 2017 die Idee und
              das Konzept des Rettungsankers initiert und liessen den Kahn
              in September 2017 vom Stapel laufen. Seit Januar 2020 zeigt
              sich Michael nun in alleiniger Verantwortung für den
              Rettungsanker und steurt das Schiff in diesen unruhigen Zeiten
              verantwortungsvoll durch die hohen Wogen{' '}</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 p-4">
        <div className="flex items-center justify-center  py-12 rounded-lg">
          <div className="text-center w-60">
        <Image className="mx-auto rounded-full" src="/Offizier-weiblich.png" layout="responsive"  width="200" height="250" alt="Portrait"/>
            <h3 className="mb-1 text-4xl font-bold font-heading">Anne</h3>
            <p className="mb-2 text-3xl text-amber-400">I Offizierin</p>
            <p className="text-lg text-gray-100 text-center"> Auch Anne ist Teammitglied derersten Stunde nach Stapelablauf
              des Rettungsanker-Mit Ihrer langjährigen Gastroerfahrung ist
              sie ein wichtiger Pfeiler im Team des Rettungsankers</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 p-4">
        <div className="flex items-center justify-center  py-12 rounded-lg">
          <div className="text-center">
        <Image className="mx-auto rounded-full" src="/matrose.png" layout="responsive"  width="200" height="250" alt="Portrait"/>
            <h3 className="mb-1 text-4xl font-bold font-heading">Simon</h3>
            <p className="text-3xl text-gray-400">Obermaat</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 p-4">
        <div className="flex items-center justify-center  py-12 rounded-lg">
          <div className="text-center">
        <Image className="mx-auto rounded-full" src="/matrose.png" layout="responsive"  width="200" height="250" alt="Portrait"/>
            <h3 className="mb-1 text-4xl font-bold font-heading">Simon</h3>
            <p className="text-3xl text-gray-400">Obermaat</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 p-4">
        <div className="flex items-center justify-center  py-12 rounded-lg">
          <div className="text-center">
        <Image className="mx-auto rounded-full" src="/matrose.png" layout="responsive"  width="200" height="250" alt="Portrait"/>
            <h3 className="mb-1 text-4xl font-bold font-heading">Simon</h3>
            <p className="text-3xl text-gray-400">Obermaat</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
          
    </>
  )
}


export default team
