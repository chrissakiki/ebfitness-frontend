import { useEffect, useState } from 'react';
import Container from './UI/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import UnderlineTitle from './UI/UnderlineTitle';
import { Pagination } from 'swiper/modules';
import Image from './UI/Image';
import { Link } from 'react-router-dom';

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

const Services = ({ data }: { data: Service[] }) => {
  const [currCategory, setCurrCategory] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (currCategory) {
      setIsOpen(true);
    }
  }, [currCategory]);

  useEffect(() => {
    if (!isOpen) {
      setCurrCategory('');
    }
  }, [isOpen]);
  return (
    <>
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
              {data?.length > 0 &&
                data?.map((item, idx) => {
                  return (
                    <SwiperSlide key={idx}>
                      <div className='h-[400px] lg:h-[500px] w-full relative cursor-pointer'>
                        <Link
                          key={idx}
                          to={`/services?category=${item?.category}`}
                          className='h-full w-full'
                          // onClick={() => setCurrCategory(item?.category)}
                        >
                          <Image
                            src={item?.thumbnail_url}
                            className='w-full h-full object-cover rounded-lg'
                          />
                        </Link>
                        <div className='absolute inset-0 bg-primary-color/10 flex items-center justify-center p-2 pointer-events-none'>
                          <p className='text-white w-full text-[2.6rem] lg:text-[3.8rem] break-words leading-snug font-semibold font-oswald uppercase text-center tracking-wider'>
                            {item?.name}
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

      {/* <Modal isOpen={isOpen}>
        <ServicesViewer cat={currCategory} close={() => setIsOpen(false)} />
      </Modal> */}
    </>
  );
};

export default Services;
