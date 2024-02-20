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
import '../app/globals.css';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function Swipable(props: any) {
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
          delay: 5500,
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
        {props.images.map((img: any, i: number) => (
          <SwiperSlide key={i}>
            <Image
              className="h-96 w-96 object-contain"
              src={img.src}
              alt={img.alt}
              width={2280}
              height={100}
              priority
            />
          </SwiperSlide>
        ))}
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
