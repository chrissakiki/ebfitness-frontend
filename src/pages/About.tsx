import ReBanner from '../components/ReBanner';
import AboutMeData from '../../data/about.json';
import Container from '../components/UI/Container';
import BackHome from '../components/BackHome';
import SubTitle from '../components/Info/SubTitle';

const About = () => {
  const {
    banner_url,
    main,
    assurance,
    experience,
    global_experience,
    training_philosophy,
    image_url,
    image_url_2
  } = AboutMeData;
  return (
    <div className='bg-secondary-color'>
      <ReBanner
        title={
          <>
            About <span className='text-primary-color'>Elie</span>
          </>
        }
        image_url={banner_url}
      />
      <Container>
        <div className='grid grid-cols-1 xl:grid-cols-2 place-items-center gap-10 xl:gap-14 py-10 md:py-16'>
          <div className='flex-[1.5]'>
            <img src={image_url} className='w-full aspect-[1.2] object-cover rounded-lg' />
          </div>
          <div className='flex-[2] flex flex-col text-white gap-4 font-light text-[1.05rem] leading-relaxed'>
            <SubTitle>{main?.title_1}</SubTitle>
            <p>{experience?.description}</p>
            <p>{training_philosophy?.description}</p>
          </div>
          <div className='flex-[1.5] xl:order-2'>
            <img src={image_url_2} className='w-full aspect-[1.2] object-cover rounded-lg' />
          </div>
          <div className='flex-[2] flex flex-col text-white gap-4 font-light text-[1.05rem] leading-relaxed xl:order-1'>
            <SubTitle>{main?.title_2}</SubTitle>
            <p>{global_experience?.description}</p>
            <p>{assurance?.description}</p>
          </div>
        </div>
        <BackHome />
      </Container>
    </div>
  );
};

export default About;
