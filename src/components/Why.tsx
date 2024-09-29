import Title from './UI/Title';
import Paragraph from './UI/Paragraph';
import ImageReveal from './UI/ImageReveal';
import Container from './UI/Container';
import WhyData from '../../data/why.json';
import RLink from './UI/Link';

const Why = () => {
  const { title, training_methods , image_url } = WhyData;

  return (
    <div className='bg-secondary-color h-full w-full text-white pb-10 md:pb-20'>
      <Container>
        <div className='w-full grid lg:grid-cols-2 place-items-center gap-6 md:gap-16'>
          <div className='flex flex-col text-center md:text-left items-center md:items-start justify-start gap-5 md:gap-7 order-2 lg:order-1'>
            <Title>{title}</Title>
            <Paragraph>{training_methods?.description}</Paragraph>
            <RLink href='/why' className='w-[14rem]' variant={'outlined'}>
              Learn More
            </RLink>
          </div>
          <ImageReveal src={image_url} transformOrigin='left' className='order-1 md:order-2' />
        </div>
      </Container>
    </div>
  );
};

export default Why;
