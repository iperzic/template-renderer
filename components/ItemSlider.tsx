import { Children, cloneElement } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

type ImageSliderProps = {
  children: Array<JSX.Element>;
};

const ItemSlider = ({ children }: ImageSliderProps) => {
  return (
    <>
      <Swiper
        navigation
        slidesPerView={1.5}
        spaceBetween={10}
        modules={[Navigation]}
      >
        {Children.map(children, (child, index) => (
          <SwiperSlide key={index}>{cloneElement(child)}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ItemSlider;
