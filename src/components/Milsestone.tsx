import { useLayoutEffect, useRef } from 'react';
import Container from './UI/Container';
import MilestoneData from '../../data/milestone.json';
import gsap from 'gsap';
import { SwiperSlide } from 'swiper/react';
import AutoSwiper from './AutoSwiper';

const Milsestone = () => {
  const containerRef = useRef(null);
  useLayoutEffect(() => {
    let context = gsap.context(() => {
      gsap.from('.milestone-card', {
        // y: '+=10',
        autoAlpha: 0,
        delay: 2,
        ease: 'power3.easeIn',
      });
    }, containerRef);

    return () => context.revert();
  }, []);

  const breakpoints = {
    300: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  };

  return (
    <div className='h-[16svh] overflow-hidden'>
      <Container className='h-full'>
        <div
          ref={containerRef}
          className='w-full h-full text-white flex items-center md:pb-4'
        >
          <AutoSwiper breakpoints={breakpoints}>
            {MilestoneData?.map((item, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <div className='milestone-card'>
                    <div className='flex flex-col items-center gap-2'>
                      <div className='flex gap-2'>
                        <span className='text-[1.3rem] md:text-[2.2rem] font-bold text-primary-color'>
                          {item?.qty}
                        </span>
                        <span className='text-primary-color '></span>
                      </div>
                      <div className='flex items-center gap-2'>
                        {/* {RecIcon(item?.key)} */}
                        <span className='text-[1rem] md:text-[1.2rem] font-medium text-center capitalize'>
                          {item?.title}
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </AutoSwiper>
        </div>
      </Container>
    </div>
  );
};

export default Milsestone;
