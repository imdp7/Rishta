/* eslint-disable unicorn/filename-case */
'use client';
import { useRef } from 'react';
// Import Swiper React components
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import dp from '../../public/1.jpeg';
import dp2 from '../../public/dp2.jpeg';
// import dp3 from '../../public/dp3.jpeg';
// import dp4 from '../../public/dp4.jpg';
import '../app/globals.css';

// import required modules
import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function Swipable() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  // const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
  //   // progressCircle.current?.style.setProperty('--progress', 1 - progress);
  //   // progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  // };
  return (
    <div className="max-h-lvh">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            className="h-96 w-96 object-contain"
            src={dp}
            alt="Rishta banner"
            width={2280}
            height={100}
            priority
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="h-1/3 object-contain"
            src={dp2}
            alt="Rishta banner"
            width={2280}
            height={50}
            priority
          />
        </SwiperSlide>
        {/* <SwiperSlide>
        <Image
          className='object-contain h-1/3'
          src={dp3}
          alt="Rishta banner"
          width={2280}
          height={50}
          priority
        />
        </SwiperSlide>
        <SwiperSlide>
        <Image
          className='object-contain h-1/3'
          src={dp4}
          alt="Rishta banner"
          width={2280}
          height={50}
          priority
        />
        </SwiperSlide> */}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}
