import Container from './UI/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialData from '../../data/testimonial.json';
import { AiFillStar } from 'react-icons/ai';
import { BsChatRightQuote } from 'react-icons/bs';
import UnderlineTitle from './UI/UnderlineTitle';
import { Pagination } from 'swiper/modules';
import FadeIn from './Animate/FadeIn';

const breakpoints = {
  300: {
    slidesPerView: 1,
    spaceBetween: 30,
  },
  1280: {
    slidesPerView: 2,
    spaceBetween: 50,
  },
};

const Testmonial = () => {
  return (
    <div
      className='py-10 md:py-16 relative w-full bg-cover bg-no-repeat bg-center shadow-2xl text-white'
      style={{
        backgroundImage: `linear-gradient(
    rgba(2, 117, 216, 0.8),
    rgba(2, 117, 216, 0.8)
  ), url('/assets/images/mission-2.webp')`,
      }}
    >
      <Container className='h-full'>
        <div className='flex flex-col gap-8 md:gap-12'>
          <div className='flex flex-col gap-8'>
            <UnderlineTitle color='light'>Testimonial</UnderlineTitle>

            <p className='text-center max-w-6xl mx-auto font-medium md:text-[1.1rem]'>
              Discover what our clients have to say about their experiences,
              success stories, and the positive impact our services have had on
              their lives. Join a community of satisfied customers sharing their
              journey with us.
            </p>
          </div>

          <FadeIn start='top 85%'>
            <div>
              <Swiper
                breakpoints={breakpoints}
                modules={[Pagination]}
                pagination={{ clickable: true }}
                className='p-2 md:p-4 pb-12 md:pb-14'
              >
                {TestimonialData?.map((item, idx) => {
                  return (
                    <SwiperSlide key={idx} className='2xl:h-[17.5rem]'>
                      <div className='h-full bg-secondary-color/60 flex flex-col justify-between gap-3 xl:gap-5 items-center p-5 rounded-lg'>
                        <span className='text-slate-200'>
                          <BsChatRightQuote size={40} />
                        </span>
                        <p className='text-center text-base font-light leading-[1.55] text-[1.1rem]'>
                          {item?.text}
                        </p>

                        <div className='flex flex-col items-center gap-2'>
                          <div className='flex items-center gap-1 text-primary-color'>
                            {Array.from({ length: 5 }).map((_, idx) => {
                              return <AiFillStar key={idx} size={20} />;
                            })}
                          </div>
                          <p className='font-bold'>{item?.name}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </FadeIn>
        </div>
      </Container>
    </div>
  );
};

export default Testmonial;
