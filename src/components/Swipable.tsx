/* eslint-disable unicorn/filename-case */
'use client';
import Image from 'next/image';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../app/globals.css';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function Swipable(props: any) {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

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
      >
        {props.images &&
          props.images.map((img: any, i: number) => (
            <SwiperSlide key={i}>
              <Image
                className="h-full w-full object-contain"
                src={img.src}
                alt={img.alt}
                width={2280}
                height={300}
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
