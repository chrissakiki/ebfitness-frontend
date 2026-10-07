import {  useRef } from 'react';
import Button from './UI/Button';
import Container from './UI/Container';
import RLink from './UI/Link';
import { scrollToSection } from '../lib/utils';

const Hero = ({ data }: { data: Banner | null }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [fTitle, lTitle] = (data?.title || '')
    .split(',')
    .map((part) => part.trim());
  const [fSubTitle, lSubTitle] = (data?.sub_title || '')
    .split(',')
    .map((part) => part.trim());

  // useLayoutEffect(() => {
  //   let context = gsap.context(() => {
  //     const t1 = gsap.timeline();
  //     t1.set('.hero-container', {
  //       visibility: 'visible',
  //     })
  //       .from(['#hero-title-1', '#hero-title-2', '#hero-buttons-container'], {
  //         autoAlpha: 0,
  //         duration: 1,
  //         stagger: 0.6,
  //         ease: 'power2.easeIn',
  //       });
  //   }, containerRef);

  //   return () => context.revert();
  // }, []);

  return (
    <div
      ref={containerRef}
      className='relative w-full h-[calc(84svh-4rem)] bg-cover bg-no-repeat bg-center shadow-2xl text-white '
      style={{
        backgroundImage: `linear-gradient(
      rgba(0, 0, 0, 0.6),
      rgba(10, 10, 10, 0.9) 80%,
      rgba(0, 0, 0, 1) 100%
    ), url('${import.meta.env.VITE_API_IMAGE_URL}${data?.image_url}')`,
      }}
    >
      <div
        className='absolute h-60 inset-x-0
        bottom-0 bg-gradient-to-b from-transparent to-[#0a0a0a] pointer-events-none'
      ></div>
      <Container className='h-full hero-container'>
        <div className='h-full flex flex-col md:items-center justify-center'>
          <h1
            id='hero-title-1'
            className='text-[2.3rem] md:text-[3rem] lg:text-[5.4rem] font-bold '
          >
            {fTitle} <span className='text-primary-color'>{lTitle}</span>
          </h1>
          <p
            id='hero-title-2'
            className='text-[1.1rem] md:text-[1.6rem] lg:text-[2.1rem] '
          >
            {fSubTitle}
            <span className='text-primary-color'> {lSubTitle}</span>
          </p>
          <div
            id='hero-buttons-container'
            className='mt-7 flex gap-2 md:gap-6 '
          >
            <Button onClick={() => scrollToSection('contact-us')}>
              Consultation
            </Button>
            <RLink
              href='/services?category=resistance_training'
              variant={'outlined'}
            >
              Our Services
            </RLink>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
