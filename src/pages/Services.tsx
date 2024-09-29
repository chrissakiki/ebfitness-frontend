import { useEffect, useState } from 'react';
import ReBanner from '../components/ReBanner';
import Container from '../components/UI/Container';
import { useSearchParams, useNavigate } from 'react-router-dom';
import ServicesData from '../../data/services.json';
import { cn } from '../lib/utils';
import { Swiper, SwiperSlide } from 'swiper/react';

const Services = () => {
  let [searchParams] = useSearchParams();
  let category = searchParams.get('category');
  let navigate = useNavigate();

  const handleRouteClick = (newCategory: string) => {
    navigate(`/services?category=${newCategory}`);
  };
  const [information, setInformation] = useState({
    
    title: '',
    description: '',
    more_description: '',
    image_url: '',
  });

  useEffect(() => {
    const data = ServicesData?.find((item) => item?.category === category);
    if (data) {
      setInformation({
        title: data?.name,
        description: data?.description,
        more_description: data?.more_description,
        image_url: data?.image_url,
      });
    }
  }, [category]);

  return (
    <div className='bg-secondary-color'>
      <ReBanner title={'Services'} image_url={'./assets/images/movement-therapy.webp'} />
      <div className='flex flex-col items-center gap-10 xl:gap-16 py-10 md:py-16'>
        {/* Category  */}
        <Container noPRM>
          <div className='w-full h-full text-[0.9rem] xl:text-[0.95rem]'>
            <Swiper slidesPerView={'auto'} spaceBetween={20}>
              {ServicesData?.map((item, idx) => {
                return (
                  <SwiperSlide key={idx} className='!w-fit'>
                    <button
                      onClick={() => handleRouteClick(item?.category)}
                      className={cn(
                        'p-3 rounded-lg uppercase font-bold text-center cursor-pointer select-none ',
                        {
                          'bg-primary-color text-white':
                            item?.category !== category,
                          'bg-[#f8f9f7] text-primary-color pointer-events-none':
                            item?.category === category,
                        }
                      )}
                    >
                      {item?.name}
                    </button>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </Container>

        <Container>
          <div className='flex flex-col xl:flex-row justify-center gap-10'>
            <div className='flex-[1.1]'>
              <img
                src={information?.image_url}
                className='aspect-[1.1] xl:aspect-[1.2] object-cover rounded-lg'
              />
            </div>
            <div className='flex-1 lg:flex-[1.3]'>
              <div className='h-full flex flex-col gap-4 justify-center xl:max-w-2xl'>
                <h1 className='font-oswald relative text-3xl md:text-4xl lg:text-[2.6rem] font-bold uppercase text-primary-color'>
                  {information?.title}
                </h1>

                <p className='text-white font-normal text-[1rem] md:text-[1.1rem] leading-relaxed'>{information?.more_description}</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Services;
