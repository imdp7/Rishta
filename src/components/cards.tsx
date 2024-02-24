// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import '../app/globals.css';

// import required modules
import { EffectCards } from 'swiper/modules';

export default function Cards(props: any) {
  return (
    <>
      <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className="swiper-cards">
        {props.quest &&
          props.quest.map((q: any, i: number) => (
            <SwiperSlide key={i} className="h-36">
              <div className="m-3 block p-3">
                <div className="mb-3 flex text-red-500">{q.question}</div>
                <div className="text-red-500">{q.answer}</div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
