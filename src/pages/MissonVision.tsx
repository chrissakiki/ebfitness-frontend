import ReBanner from '../components/ReBanner';
import MissionData from '../../data/mission-and-vision.json';
import Container from '../components/UI/Container';
import BackHome from '../components/BackHome';
import SubTitle from '../components/Info/SubTitle';

const MissionVision = () => {
  const {
    banner_url,
    main,
    divine_ritual,
    philosophies_collection,
    exceptional_setting,
    strength_enhancement_system,
    guidance,
    image_url,
    image_url_2
  } = MissionData;
  return (
    <div className='bg-secondary-color'>
      <ReBanner
        title={
          <>
            Misson And <span className='text-primary-color'>Vision</span>
          </>
        }
        image_url={banner_url}
      />
      <Container>
        <div className='grid grid-cols-1 xl:grid-cols-2 place-items-center gap-10 xl:gap-14 py-10 md:py-16'>
          <div className='flex-[1.5] relative'>
          <div className='absolute inset-0 bg-primary-color/40 flex items-center justify-center p-3'/>
            <img src={image_url} className='w-full aspect-[1.1] object-cover rounded-lg' />
          </div>
          <div className='flex-[2] flex flex-col text-white gap-4 font-light text-[1.05rem] leading-relaxed'>
            <SubTitle>{main?.title_1}</SubTitle>
            <p>{divine_ritual?.description}</p>
            <p>{philosophies_collection?.description}</p>
          </div>
          <div className='flex-[1.5] xl:order-2 relative'>
          <div className='absolute inset-0 bg-primary-color/40 flex items-center justify-center p-3'/>
            <img src={image_url_2} className='w-full aspect-[1.2] object-cover rounded-lg' />
          </div>
          <div className='flex-[2] flex flex-col text-white gap-4 font-light text-[1.05rem] leading-relaxed xl:order-1'>
            <SubTitle>{main?.title_2}</SubTitle>
            <p>{exceptional_setting?.description}</p>
            <p>{strength_enhancement_system?.description}</p>
            <p>{guidance?.description}</p>
          </div>
        </div>
        <div className='w-full flex items-center py-5'>
          <BackHome />
        </div>
      </Container>
    </div>
  );
};

export default MissionVision;
