import Hero from '../components/Hero';
// import Marquee from 'react-fast-marquee';
import Milsestone from '../components/Milsestone';
import About from '../components/Info/About';
import Marquee from 'react-fast-marquee';
import Why from '../components/Why';
import Testmonial from '../components/Testmonial';
import ContactUs from '../components/ContactUs';
import Packages from '../components/Packages';
import Services from '../components/Services';
// gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  // const RecIcon = (key: string) => {
  //   return {
  //     'training_sessions' : '',
  //     'years_of_experience' : '',
  //     'clients_worldwide' : <ImUsers size={22} />,
  //     'international_certificates' : <AiFillSafetyCertificate size={25}/>,
  //   }[key]
  // }

  // const containerRef = useRef<HTMLDivElement>(null);

  // useLayoutEffect(() => {
  //   let context = gsap.context(() => {
  //     gsap.to('.box', {
  //       // x: "+=200",
  //       width: '100%',
  //       height: '100%',
  //       // duration: 10,
  //       scrollTrigger: {
  //         trigger: '.box',
  //         start: 'top 100%', // Trigger point relative to the viewport
  //         end: 'bottom 100%', // End point relative to the viewport
  //         scrub: 1.3, // Smoothly animate during scroll
  //         markers: true, // Add markers to visualize trigger and end points (for debugging)
  //       },
  //     });
  //   },containerRef)
  //   return () => context.revert()
  // }, []);

  return (
    <div className=''>
      <Hero />
      <Milsestone />
      {/* <div className='bg-primary-color opacity-25 w-full h-[1px]'/> */}
      <About />
      <Why />
      <div className='py-5 grid place-items-center'>
        <Marquee className='flex gap-10'>
          <p className='text-[2rem] md:text-[4rem] font-bold text-primary-color/70 stroke-text uppercase font-oswald'>
            Client Focused, Coach Led, Results Driven.
          </p>
          &nbsp; &nbsp; &nbsp;
          <p className='text-[2rem] md:text-[4rem] font-bold text-primary-color/70 stroke-text uppercase font-oswald'>
            Client Focused, Coach Led, Results Driven.
          </p>
        </Marquee>
      </div>
      <div className='bg-primary-color opacity-25 w-full h-[1px]' />
      <Services />
      {/* <Education/> */}
      <div className='bg-primary-color opacity-25 w-full h-[1px]' />
      <Testmonial />
      <Packages />
      <ContactUs />
      {/* <div className='h-[calc(15vh)] grid place-items-center'>
        <Marquee className='flex gap-10'>
        <p className='text-[2rem] md:text-[4rem] font-bold text-[#f8f9f7]/90 stroke-text'>
          Client Focused, <span className='text-primary-color'>Coach Led,</span> Results Driven.
        </p>
        &nbsp;
        &nbsp;
        &nbsp;
        <p className='text-[2rem] md:text-[4rem] font-bold text-[#f8f9f7]/90 stroke-text'>
          Client Focused, <span className='text-primary-color'>Coach Led,</span> Results Driven.
        </p>
        </Marquee>

      </div> */}
    </div>
  );
};

export default Home;
