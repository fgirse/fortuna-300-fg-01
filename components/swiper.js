/* eslint-disable prettier/prettier */
import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'


// import required modules
import { Autoplay, Pagination } from 'swiper'

export default function App() {
  return (
    <>
      <Swiper className="w- h-full"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        
      >
        <SwiperSlide><img className='max-w-full h-auto' src="/Impress01.jpg" alt="Impressionen"/></SwiperSlide> 
        <SwiperSlide><img className='max-w-full h-auto' src="/Impress02.jpg" alt="Impressionen"/></SwiperSlide>
        <SwiperSlide><img className='max-w-full h-auto' src="/Impress03.jpg" alt="Impressionen"/></SwiperSlide>
        <SwiperSlide><img className='max-w-full h-auto' src="/Impress04.jpg" alt="Impressionen"/></SwiperSlide>
        <SwiperSlide><img className='max-w-full h-auto' src="/Impress05.jpg" alt="Impressionen"/></SwiperSlide>
        <SwiperSlide><img className='max-w-full h-auto' src="/Impress06.jpg" alt="Impressionen"/></SwiperSlide>
        
      
            </Swiper>
    </>
  )
}
