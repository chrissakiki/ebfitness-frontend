import {  useState } from 'react';
import { GET } from '../services/api';
import ReBanner from '../components/ReBanner';
import Container from '../components/UI/Container';
import Image from '../components/UI/Image';
import DOMPurify from 'dompurify';
import LoadingWrapper from '../components/LoadingWrapper';
import SubTitle from '../components/Info/SubTitle';
import { Link } from 'react-router-dom';

const Team = () => {
  const [data, setData] = useState<Section>();


  const [fTitle, lTitle] = (data?.title || '')
    ?.split(',')
    .map((part) => part.trim());

  const fetchData = async (signal: AbortSignal) => {
    const response = await GET<Section>({
      endpoint: '/sections/type/team',
      signal,
    });


    if (response?.data) {
      setData(response.data);
    }

  };


  return (
    <>
      <LoadingWrapper fetchData={fetchData}>
        <div className='bg-secondary-color'>
          <ReBanner
            title={
              <>
                {fTitle} <span className='text-primary-color'>{lTitle}</span>
              </>
            }
            image_url={data?.image_url}
          />

          <Container className='py-10 md:py-16'>
            <div className='grid grid-cols-1 xl:grid-cols-2 place-items-center gap-6 md:gap-10 xl:gap-x-14 xl:gap-y-20'>
              <div className='flex flex-col text-white gap-3 md:gap-5 font-light text-[1.05rem] leading-relaxed'>
                <SubTitle>{data?.items[0]?.title}</SubTitle>
                <div
                  className='text-white text-[0.93rem] md:text-[1.05rem]'
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      data?.items[0]?.description ?? ''
                    ),
                  }}
                />
              </div>
                <Image
                  src={data?.items[0]?.image_url}
                  className='w-full aspect-[1.2] object-cover rounded-lg hidden xl:block'
                />
              <div className='h-full'>
                <div className='sticky top-[6rem]'>
                  <Image
                    src={data?.items[1]?.image_url}
                    className='w-full aspect-[1.2] object-cover rounded-lg hidden xl:block'
                  />
                </div>
              </div>
              <div className='section flex-[2] flex flex-col text-white gap-3 md:gap-5 font-light text-[1.05rem] leading-relaxed'>
                <SubTitle>{data?.items[1]?.title}</SubTitle>
                <div
                  className='text-white text-[0.93rem] md:text-[1.05rem]'
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      data?.items[1]?.description ?? ''
                    ),
                  }}
                />
              </div>
            </div>

            <div className='flex flex-col md:items-center gap-4 md:gap-6 mt-10 xl:mt-20'>
              <Link  to='/our-team/certificates' className='text-[1.7rem] md:text-[1.9rem] xl:text-[1.8rem] text-white font-bold underline'>
              Explore Our Certificates
              </Link>

            </div>
          </Container>
        </div>
      </LoadingWrapper>

    </>
  );
};

export default Team;
