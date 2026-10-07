import {  useState } from 'react';
import ReBanner from '../components/ReBanner';
import Container from '../components/UI/Container';
import { GET } from '../services/api';
import DOMPurify from 'dompurify';
import LoadingWrapper from '../components/LoadingWrapper';

// const DescriptionParagraph = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <div>
//       <span className='text-primary-color'>-</span> {children}
//     </div>
//   );
// };

const Philosophy = () => {
  const [data, setData] = useState<Section>();

  const fetchData = async (signal: AbortSignal) => {
    const response = await GET<Section>({
      endpoint: '/sections/type/philosophy',
      signal,
    });

    if (response?.data) {
      setData(response.data);
    }
  };

  return (
    <LoadingWrapper fetchData={fetchData}>
      <div className='bg-secondary-color'>
        <ReBanner
          title={data?.title ?? 'Philosophy'}
          image_url={data?.image_url}
        />

        <Container>
          <div className='py-10 md:py-16'>
            {data?.items?.map((el, idx) => {
              return (
                <div
                  key={idx}
                  className='text-white'
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(el?.description ?? ''),
                  }}
                ></div>
              );
            })}
          </div>
        </Container>
      </div>
    </LoadingWrapper>
  );
};

export default Philosophy;
