import { Suspense, useState } from 'react';
import Container from './UI/Container';
import LogosData from '../../data/logos.json';
import { SwiperSlide } from 'swiper/react';
import AutoSwiper from './AutoSwiper';
import FadeIn from './Animate/FadeIn';
import CertificatesData from '../../data/certificates.json';
import ImageCarousel from './Swiper/ImageCarousel';
import Modal from './UI/Modal';

const breakpoints = {
  300: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  500: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
  1280: {
    slidesPerView: 5,
    spaceBetween: 40,
  },
};

const renderSlides = () => {
  const groupedItems = [];
  for (let i = 0; i < LogosData.length; i += 2) {
    groupedItems.push(
      <SwiperSlide key={i} className='flex flex-col lg:items-center gap-10'>
        <img
          key={i}
          src={LogosData[i]?.image_url}
          alt={LogosData[i]?.title + ' education'}
          className='max-w-[12rem] max-h-[5rem] my-2'
        />

        {i + 1 <= LogosData?.length - 1 && (
          <img
            key={i + 1}
            src={LogosData[i + 1]?.image_url}
            alt={LogosData[i]?.title + ' education'}
            className='max-w-[12rem] max-h-[5rem]'
          />
        )}
      </SwiperSlide>
    );
  }

  return groupedItems;
};

const Education = () => {
  const [isImageViewer, setIsImageViewer] = useState(false);

  return (
    <div className='pt-10 md:pt-16 relative w-full text-white'>
      {/* <div
        className='absolute h-10 md:h-20 inset-x-0
        top-0 bg-gradient-to-b from-[#0a0a0a] to-transparent pointer-events-none'
      ></div> */}
      <Container>
        <FadeIn>
          <div className='flex flex-col gap-10 md:gap-16'>
            <p className=' text-center text-white text-[1.2rem] md:text-2xl font-bold'>
              World-class workout programs that get you results, designed by
              proven body transformation expert.
            </p>
            <div className='text-white'>
              <AutoSwiper breakpoints={breakpoints}>
                {renderSlides()}
              </AutoSwiper>
            </div>

            <p className='text-center text-[1.05rem]'>
              Click{' '}
              <span
                className='cursor-pointer text-primary-color'
                onClick={() => setIsImageViewer(true)}
              >
                here{' '}
              </span>{' '}
              to check my certificates
            </p>
          </div>
        </FadeIn>
      </Container>

      {
        <Modal isOpen={isImageViewer}>
          <Suspense fallback={null}>
            <ImageCarousel
              images={CertificatesData}
              close={() => setIsImageViewer(false)}
            />
          </Suspense>
        </Modal>
      }
    </div>
  );
};

export default Education;
