import React from 'react';
import ReBanner from '../components/ReBanner';
import Container from '../components/UI/Container';
import BackHome from '../components/BackHome';
import PhilosophyData from '../../data/philosophy.json';
import SubTitle from '../components/Info/SubTitle';

const DescriptionParagraph = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <span className='text-primary-color'>-</span> {children}
    </div>
  );
};

const Philosophy = () => {
  const {
    title,
    main,
    wellness_path,
    performance_support,
    higher_standard_of_service,
    fitness_service,
    program_benefits,
    future_of_health,
    start_with_you_and_your_trainer,
    expert_trainer_commitment,
  } = PhilosophyData;
  const sub_title = main?.title_1?.split(' ');
  return (
    <div className='bg-secondary-color'>
      <ReBanner title={title} />
      <Container>
        <div className='flex flex-col items-center gap-10 xl:gap-14 py-10 md:py-16'>
          <SubTitle className='text-white'>
            {sub_title[0]}{' '}
            <span className='text-primary-color'>{sub_title[1]}</span>
          </SubTitle>

          <div className=' flex flex-col text-white gap-4 font-light text-[1.05rem] leading-relaxed text-center md:text-left'>
            <DescriptionParagraph>
              {wellness_path.description}
            </DescriptionParagraph>
            <DescriptionParagraph>
              {performance_support.description}
            </DescriptionParagraph>
            <DescriptionParagraph>
              {higher_standard_of_service.description}
            </DescriptionParagraph>
            <DescriptionParagraph>
              {fitness_service.description}
            </DescriptionParagraph>
            <DescriptionParagraph>
              {program_benefits.description}
            </DescriptionParagraph>
            <DescriptionParagraph>
              {future_of_health.description}
            </DescriptionParagraph>
            <DescriptionParagraph>
              {start_with_you_and_your_trainer.description}
            </DescriptionParagraph>
            <DescriptionParagraph>
              {expert_trainer_commitment.description}
            </DescriptionParagraph>
          </div>
        </div>
        <div className='w-full flex items-center py-5'>
          <BackHome />
        </div>
      </Container>
    </div>
  );
};

export default Philosophy;
