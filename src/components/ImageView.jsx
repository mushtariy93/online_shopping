import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper/modules';
const ImageView = ({data}) => {

  return (
    <Swiper 
        loop={true} 
        // autoplay={{
        //     delay: 2500,
        //     disableOnInteraction: false,
        // }} 
        navigation={true} 
        modules={[ Autoplay, Navigation]} 
        className="mySwiper select-none w-[800px]  bg-white ">
            {
                data?.images?.map((url, inx)=> (
                <SwiperSlide key={inx}>
                <div className='border relative w-full h-[600px]'>
                    <img className='w-full h-full object-contain' src={url} alt="" />
                </div>
                </SwiperSlide>
                ))
            }
    
    </Swiper>
  )
}

export default ImageView