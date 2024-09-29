import Container from './UI/Container';
import UnderlineTitle from './UI/UnderlineTitle';
import PackagesData from '../../data/services.json';
import { IoIosArrowForward } from 'react-icons/io';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import FadeIn from './Animate/FadeIn';

const breakpoints = {
  300: {
    slidesPerView: 1.1,
    spaceBetween: 30,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  1280: {
    slidesPerView: 3,
    spaceBetween: 60,
  },
};

const Packages = () => {
  return (
    <div className='py-10 md:py-16 relative w-full bg-secondary-color text-white'>
      <div className='flex flex-col gap-8 md:gap-12'>
        <Container className='h-full flex flex-col gap-8'>
          <UnderlineTitle>Pricing</UnderlineTitle>

          <p className='text-center max-w-6xl mx-auto font-medium text-base lg:text-xl xl:text-2xl'>
            Ready to delve into the methodologies of the world’s leading expert
            personal trainer?
          </p>
        </Container>

        <FadeIn start='top 85%'>
          <div>
            <Container noPRM>
              <Swiper
                breakpoints={breakpoints}
                className='p-2 md:p-4 pb-12 md:pb-16'
                modules={[Pagination]}
                pagination={{ clickable: true }}
              >
                {PackagesData?.map((item, idx) => {
                  return (
                    <SwiperSlide key={idx}>
                      <div className='group bg-[#121212] h-[31.25rem] shadow-[6px_6px_12px_#0275d880] py-5 px-7 flex flex-col gap-3'>
                        <p className='text-[2.2rem] md:text-[2.7rem] text-primary-color font-bold'>
                          {item?.pricing}
                        </p>
                        <p className='font-semibold text-[1.2rem] capitalize'>
                          {item?.duration ? item.duration : '--'}
                        </p>
                        <p className='uppercase font-bold text-primary-color text-[1.05rem] md:text-[1.2rem]'>
                          {item?.name}
                        </p>
                        <ul className='flex flex-col gap-4 mt-2 text-[0.95rem] md:text-[1.05rem] text-[#b9b9b9] group-hover:text-white duration-300 select-none'>
                          {item.time && (
                            <li
                              key={idx}
                              className='border-b border-[#818181]/20 pb-2 flex items-center gap-3 capitalize'
                            >
                              <IoIosArrowForward />
                              {item?.time}
                            </li>
                          )}
                          {item?.list?.map((childItem, idx) => {
                            return (
                              <li
                                key={idx}
                                className=' border-b border-[#818181]/20 pb-2 flex items-center gap-3'
                              >
                                <IoIosArrowForward />
                                {childItem}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Container>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Packages;
