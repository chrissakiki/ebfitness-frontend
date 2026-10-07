import { useEffect, useState } from 'react';
import ReBanner from '../components/ReBanner';
import Container from '../components/UI/Container';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GET } from '../services/api';
import Image from '../components/UI/Image';
import LoadingWrapper from '../components/LoadingWrapper';
import { IoIosArrowForward } from 'react-icons/io';

const Services = () => {
  let [searchParams] = useSearchParams();
  let category = searchParams.get('category');
  let navigate = useNavigate();

  const [data, setData] = useState<Service[]>();
  const [banner, setBanner] = useState<Section | null>(null)

  const fetchData = async (signal: AbortSignal) => {
    const response = await GET<PaginatedResponse<Service>>({
      endpoint: '/services',
      signal,
    });

    if (response?.data) {
      setData(response.data?.data);
    }

    const service = await GET<Section>({
      endpoint: '/sections/type/services',
      signal,
    });


    if (service?.data) {
      setBanner(service.data);
    }
  };

  const handleRouteClick = (newCategory: string) => {
    navigate(`/services?category=${newCategory}`);
  };
  const [information, setInformation] = useState<Service>({
    id: null,
    name: '',
    short_description: '',
    detailed_description: '',
    image_url: '',
    thumbnail_url: '',
    sub_name: '',
    number_of_sessions: '',
    duration: '',
    category: '',
    pricing: '',
    items: null,
  });

  useEffect(() => {
    const item = data?.find((item) => item?.category === category);
    if (item) {
      setInformation(item);
    }
  }, [category, data]);

  return (
    <LoadingWrapper fetchData={fetchData}>
      <div className='bg-secondary-color'>
        <ReBanner title={'Services'} image_url={banner?.image_url} />
        <div className='flex flex-col items-center gap-10 xl:gap-16 py-10 md:py-16'>
          {/* Category  */}
          <Container noPRM>
            <div className='w-full h-full text-[0.9rem] xl:text-[0.95rem]'>
              <Swiper slidesPerView={'auto'} spaceBetween={20}>
                {data?.map((item, idx) => {
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
                <Image
                  src={information?.image_url}
                  className='aspect-[1.1] xl:aspect-[1.2] object-cover rounded-lg'
                />
              </div>
              <div className='flex-1 lg:flex-[1.3]'>
                <div className='h-full flex flex-col gap-4 justify-center xl:max-w-2xl'>
                  <h1 className='font-oswald relative text-3xl md:text-4xl lg:text-[2.6rem] font-bold uppercase text-primary-color'>
                    {information?.name}
                  </h1>

                  {/* <p className='text-white font-semibold text-[1.2rem] md:text-[1.4rem] leading-relaxed'>
                    {information?.pricing}
                  </p> */}

                  <p className='text-white font-normal text-[1rem] md:text-[1.1rem] leading-relaxed'>
                    {information?.short_description}
                  </p>

                  <ul className='mt-4 flex flex-col gap-4 text-[0.95rem] md:text-[1.1rem] text-white group-hover:text-gray-200 duration-300 select-none'>

                  {information.pricing && (
                      <li className='border-b border-[#81818115] pb-2 flex items-center gap-3 capitalize'>
                        <IoIosArrowForward />
                        {`Price: ${information.pricing}`}
                      </li>
                    )}

                    {information.number_of_sessions && (
                      <li className='border-b border-[#81818115] pb-2 flex items-center gap-3 capitalize'>
                        <IoIosArrowForward />
                        {`${information.number_of_sessions} working sessions`}
                      </li>
                    )}

                    {information.duration && (
                      <li className='border-b border-[#81818115] pb-2 flex items-center gap-3 capitalize'>
                        <IoIosArrowForward />
                        {information?.duration}
                      </li>
                    )}
                    {information?.items?.map((item, idx) => {
                      return (
                        <li
                          key={idx}
                          className='border-b border-[#81818115] pb-2 flex items-center gap-3'
                        >
                          <IoIosArrowForward />
                          {item?.feature_description}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </LoadingWrapper>
  );
};

export default Services;
