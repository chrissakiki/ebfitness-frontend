// ImageCarousel.js
import { useEffect, useState } from 'react';
import {  Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { cn } from '../../lib/utils';

const Image = ({ img }: { img: string }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // console.log('isLoading', isLoading);
  }, [isLoading]);
  return (
    <SwiperSlide className='relative'>
      <img src={img} alt={`Slide ${img}`} onLoad={() => setIsLoading(false)}  loading='lazy'/>
      <div
        className={cn('absolute inset-0 grid place-items-center duration-300', {
          'opacity-100': isLoading,
          'opacity-0': !isLoading,
        })}
      >
        <p className='text-2xl text-black'>Please wait..</p>
      </div>
    </SwiperSlide>
  );
};

const ImageCarousel = ({ images, close }: { images: Array<string> , close : () => void}) => {

  return (
      <div className='max-w-sm md:max-w-md lg:max-w-3xl px-2'>
        <Swiper
          modules={[Pagination]}
          spaceBetween={10}
          slidesPerView={1}
        //   navigation
          pagination={{ clickable: true }}
          className='relative'
        >
          {images.map((image, idx) => (
            <SwiperSlide key={idx}>
              <Image img={image} />
            </SwiperSlide>
          ))}
        <span onClick={close} className='absolute right-2 top-2 text-primary-color text-md font-bold z-[1] cursor-pointer w-7 h-7 bg-black rounded-full grid place-items-center'>X</span>
        </Swiper>
      </div>

  );
};

export default ImageCarousel;
