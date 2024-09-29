import ReBanner from '../components/ReBanner';
import WhyMeData from '../../data/why.json';
import Container from '../components/UI/Container';
import BackHome from '../components/BackHome';
import SubTitle from '../components/Info/SubTitle';

const Why = () => {
  const {
    banner_url,
    main,
    training_methods,
    individualized_approach,
    collaboration,
    holistic_approach,
    image_url,
    image_url_2
  } = WhyMeData;
  return (
    <div className='bg-secondary-color'>
      <ReBanner
        title={
          <>
            Why <span className='text-primary-color'>Elie</span>
          </>
        }
        image_url={banner_url}
      />
      <Container>
        <div className='grid grid-cols-1 xl:grid-cols-2 place-items-center gap-10 xl:gap-14 py-10 md:py-16'>
          <div className='flex-[1.5] xl:order-2'>
            <img src={image_url} className='w-full aspect-[1.1] object-cover rounded-lg' />
          </div>
          <div className='flex-[2] flex flex-col text-white gap-4 font-light text-[1.05rem] leading-relaxed xl:order-1'>
            <SubTitle>{main?.title_1}</SubTitle>
            <p>{training_methods?.description}</p>
            <p>{individualized_approach?.description}</p>
          </div>
          <div className='flex-[1.5] xl:order-3'>
            <img src={image_url_2} className='w-full aspect-[1.2] object-cover rounded-lg' />
          </div>
          <div className='flex-[2] flex flex-col text-white gap-4 font-light text-[1.05rem] leading-relaxed xl:order-4'>
            <SubTitle>{main?.title_2}</SubTitle>
            <p>{collaboration?.description}</p>
            <p>{holistic_approach?.description}</p>
          </div>
        </div>
        <div className='w-full flex items-center py-5'>
          <BackHome />
        </div>
      </Container>
    </div>
  );
};

export default Why;
