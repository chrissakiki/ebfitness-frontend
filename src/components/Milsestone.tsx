import { useRef } from 'react';
import Container from './UI/Container';
import { SwiperSlide } from 'swiper/react';
import AutoSwiper from './AutoSwiper';

const Milsestone = ({ data }: { data: Milestone[] }) => {
  const containerRef = useRef(null);
  // useLayoutEffect(() => {
  //   let context = gsap.context(() => {
  //     gsap.set('milestone-card', {
  //       visibility: 'visible'
  //     })
  //     gsap.to('.milestone-card', {
  //       // y: '+=10',
  //       autoAlpha: 1,
  //       visibility: 'visisble',
  //       delay: 2,
  //       ease: 'power3.easeIn',
  //     });
  //   }, containerRef);

  //   return () => context.revert();
  // }, [data]);

  // useGSAP(() => {
  //   gsap.from('.milestone-card', {
  //     // y: '+=10',
  //     autoAlpha: 0,
  //     delay: 2,
  //     ease: 'power3.easeIn',
  //   });
  // }, {dependencies: [data], scope: containerRef})

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
          className='w-full h-full text-white flex items-center md:pb-4 '
        >
          {data?.length > 0 && (
            <AutoSwiper breakpoints={breakpoints}>
              {data?.map((item, idx) => {
                return (
                  <SwiperSlide key={idx}>
                    <div className=''>
                      <div className='flex flex-col items-center gap-2 milestone-card'>
                        <div className='flex gap-2'>
                          <span className='text-[1.3rem] md:text-[2.2rem] font-bold text-primary-color'>
                            {item?.quantity}
                          </span>
                          <span className='text-primary-color '></span>
                        </div>
                        <div className='flex items-center gap-2'>
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
          )}
        </div>
      </Container>
    </div>
  );
};

export default Milsestone;
