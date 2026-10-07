import Container from '../UI/Container';
import Title from '../UI/Title';
import Paragraph from '../UI/Paragraph';
import ImageReveal from '../UI/ImageReveal';
import RLink from '../UI/Link';
import DOMPurify from 'dompurify';

const About = ({data} : {data: Section | null}) => {
  // const { title, experience ,image_url } = AboutData;

  return (
    <div
      className='bg-secondary-color h-full w-full text-white pb-10 pt-10 md:pt-20'
      id='about-me'
    >
      <Container>
        <div className='w-full grid lg:grid-cols-2 place-items-center gap-6 md:gap-16'>
          <ImageReveal src={data?.thumbnail_url} />
          <div className='flex flex-col text-center md:text-left items-center md:items-start justify-start gap-5 md:gap-7'>
            <Title>{data?.items[0]?.title}</Title>
            <Paragraph>
            <div
              className='text-white'
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(data?.items[0]?.description ?? '')
              }}
            />
            </Paragraph>
            <RLink href='/about' className='w-[14rem]' variant={'outlined'}>
              Learn More
            </RLink>
          </div>  
        </div>
      </Container>
    </div>
  );
};

export default About;
