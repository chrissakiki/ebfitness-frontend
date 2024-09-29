import { Swiper } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

interface IProps extends Children {
  breakpoints?: { [key: string]: any };
}

const AutoSwiper = ({ children, breakpoints }: IProps) => {
  return (
    <Swiper
      breakpoints={breakpoints}
      modules={[Autoplay]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
    >
      {children}
    </Swiper>
  );
};

export default AutoSwiper;
