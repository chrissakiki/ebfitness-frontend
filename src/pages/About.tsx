import { useState, useRef } from 'react';
import { GET } from '../services/api';
import ReBanner from '../components/ReBanner';
import Container from '../components/UI/Container';
import SubTitle from '../components/Info/SubTitle';
import Image from '../components/UI/Image';
import DOMPurify from 'dompurify';
import LoadingWrapper from '../components/LoadingWrapper';

const About = () => {
  const [data, setData] = useState<Section | null>(null);
  const aboutRef = useRef(null);

  const fetchData = async (signal: AbortSignal) => {
    const response = await GET<Section>({
      endpoint: '/sections/type/about',
      signal,
    });

    console.log('respnse', response)

    if (response?.data) {
      setData(response.data);
    }
  };


  const [fTitle, lTitle] = (data?.title || '')
    .split(',')
    .map((part) => part.trim());

    // if (!data) return <></>

  return (
    <LoadingWrapper fetchData={fetchData}>
      <div ref={aboutRef} className='bg-secondary-color'>
        {
          <>
            <ReBanner
              title={
                <>
                  {fTitle} <span className='text-primary-color'>{lTitle}</span>
                </>
              }
              image_url={data?.image_url}
            />
            <Container>
              <div className='grid grid-cols-1 xl:grid-cols-2 place-items-center gap-10 xl:gap-14 py-10 md:py-16'>
                <div className='flex-[1.5]'>
                  <Image
                    src={data?.items[0]?.image_url}
                    className='w-full aspect-[1.2] object-cover rounded-lg'
                  />
                </div>
                <div className='flex-[2] flex flex-col text-white gap-3 md:gap-5 font-light text-[1.05rem] leading-relaxed'>
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
                <div className='flex-[1.5] xl:order-2'>
                  <Image
                    src={data?.items[1]?.image_url}
                    className='w-full aspect-[1.2] object-cover rounded-lg'
                  />
                </div>
                <div className='section flex-[2] flex flex-col text-white gap-3 md:gap-5 font-light text-[1.05rem] leading-relaxed xl:order-1'>
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
            </Container>
          </>
}
      </div>
    </LoadingWrapper>
  );
};

export default About;
