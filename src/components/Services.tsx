import  { useEffect, useState } from 'react';
import ServicesData from '../../data/services.json';
import Container from './UI/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import UnderlineTitle from './UI/UnderlineTitle';
import { Pagination } from 'swiper/modules';
import Education from './Education';
import Modal from './UI/Modal';
import ServicesViewer from './Services/ServicesViewer';

const breakpoints = {
  300: {
    slidesPerView: 1.2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  1280: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
};

const Services = () => {

  const [currCategory, setCurrCategory] = useState('');
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (currCategory){
      setIsOpen(true)
    }
  },[currCategory])

  useEffect(() => {
    if (!isOpen){
      setCurrCategory('')
    }
  },[isOpen])
  return (
    <>
    <div className='py-10 md:py-16 relative w-full text-white bg-cover bg-no-repeat bg-center'
        style={{
      backgroundImage: `linear-gradient(
    rgba(0, 0, 0, 0.85),
    rgba(0, 0, 0, 0.95)
  ), url('/assets/images/why-elie-2.webp')`,
    }}
    >
      <div className='flex flex-col gap-8 md:gap-12'>
        <Container className='h-full flex flex-col gap-8'>
          <UnderlineTitle color='light'>Services</UnderlineTitle>

          {/* <p className='text-center max-w-6xl mx-auto font-medium text-base lg:text-xl xl:text-2xl'>
            Ready to delve into the methodologies of the world’s leading expert
            personal trainer?
          </p> */}
        </Container>
        <div className='w-full'>
          <Container noPRM>
            <Swiper
              breakpoints={breakpoints}
              modules={[Pagination]}
              pagination={{ clickable: true }}
              className='p-2 md:p-4 pb-12 md:pb-16'
            >
              {ServicesData?.map((item, idx) => {
                return (
                  <SwiperSlide key={idx}>
                    <div
                      key={idx}
                      className='h-[400px] lg:h-[500px] w-full relative cursor-pointer'
                      onClick={() => setCurrCategory(item?.category) }
                    >
                      <img
                        key={idx}
                        src={item?.image_url}
                        className='w-full h-full object-cover rounded-lg'
                      />
                      <div className='absolute inset-0 bg-primary-color/40 flex items-center justify-center p-3'>
                        <p className='text-white text-[1.7rem] lg:text-[2.5rem] leading-snug font-bold font-oswald uppercase text-center'>
                          {item?.shortcut_name ? item?.shortcut_name : item?.name}
                        </p>
                      </div>
                      
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Container>
        </div>
      </div>

      <Education/>
    </div>

    <Modal isOpen={isOpen} >
    <ServicesViewer cat={currCategory} close={() => setIsOpen(false)}/>
  </Modal>
    </>
  );
};

export default Services;
