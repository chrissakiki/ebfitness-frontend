import { useLayoutEffect, useRef } from 'react';
import Button from './UI/Button';
import Container from './UI/Container';
import gsap from 'gsap';
import RLink from './UI/Link';
import { scrollToSection } from '../lib/utils';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let context = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.set('.hero-container', {
        visibility: 'visible',
      })
    //   .to('#intro-slider', {
    //     yPercent: +100,
    //     duration: 0.5,
    //     delay: 3,
    //     alpha: 0
    //   })
      .from(['#hero-title-1','#hero-title-2', '#hero-buttons-container'], {
        autoAlpha: 0,
        duration: 1,
        stagger: 0.6,
        ease: 'power2.easeIn',
      })
    }, containerRef);

    return () => context.revert();
  }, []);




  return (
    <div
      ref={containerRef}
      className='relative w-full h-[calc(84svh-4rem)] bg-cover bg-no-repeat bg-center shadow-2xl text-white '
      style={{
        backgroundImage: `linear-gradient(
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.8)
    ), url('/assets/images/testimonial.webp')`,
      }}
    >
      {/* <div
        id='intro-slider'
        className='fixed inset-0 bg-secondary-color z-10 grid place-items-center'
      >
        <h1 className='text-[3rem] font-bold text-center max-w-7xl mx-auto pointer-events-none'>
          Loading ...
        </h1>
      </div> */}
      <div
        className='absolute h-60 inset-x-0
        bottom-0 bg-gradient-to-b from-transparent to-[#0a0a0a] pointer-events-none'
      ></div>
      <Container className='h-full hero-container invisible'>
        <div className='h-full flex flex-col md:items-center justify-center'>
          <h1
            id='hero-title-1'
            className='text-[2.3rem] md:text-[3rem] lg:text-[5rem] font-bold '
          >
            Functional <span className='text-primary-color'>Again</span>
          </h1>
          <p id='hero-title-2' className='text-[1.1rem] md:text-[1.6rem] lg:text-[2rem] '>
            Excellence in fitness since{' '}
            <span className='text-primary-color'>2012</span>.
          </p>
          <div id='hero-buttons-container' className='mt-7 flex gap-2 md:gap-6 '>
            <Button onClick={() => scrollToSection('contact-us')}>Consultation</Button>
            <RLink href='/services?category=resistance_training' variant={'outlined'}>Our Services</RLink>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
