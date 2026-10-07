import Hero from '../components/Hero';
// import Marquee from 'react-fast-marquee';
import Milsestone from '../components/Milsestone';
import About from '../components/Info/About';
import Marquee from 'react-fast-marquee';
import Testmonial from '../components/Testmonial';
import ContactUs from '../components/ContactUs';
import Packages from '../components/Packages';
import Services from '../components/Services';
import { useState } from 'react';
import { GET } from '../services/api';
import Education from '../components/Education';
import LoadingWrapper from '../components/LoadingWrapper';
// gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [data, setData] = useState<{
    banner: Banner | null;
    milestones: PaginatedResponse<Milestone> | null;
    about: Section | null;
    testimonials: PaginatedResponse<Testimonial> | null;
    services: PaginatedResponse<Service> | null;
    logos: PaginatedResponse<Achievement> | null;
  } | null>(null);

  const fetchData = async (signal: AbortSignal) => {
    try {
      const bannerFetch = GET<Banner>({ endpoint: '/banners/1', signal });
      const milestonesFetch = GET<PaginatedResponse<Milestone>>({
        endpoint: '/milestones',
        signal,
      });

      const aboutFetch = GET<Section>({
        endpoint: '/sections/type/about',
        signal,
      });

      const testimonialsFetch = GET<PaginatedResponse<Testimonial>>({
        endpoint: '/testimonials',
        signal,
      });
      const servicesFetch = GET<PaginatedResponse<Service>>({
        endpoint: '/services',
        signal,
      });
      const logosFetch = GET<PaginatedResponse<Achievement>>({
        endpoint: '/achievements?type=logos&limit=20',
        signal,
      });

      const [banner, milestones, about, testimonials, services, logos] =
        await Promise.all([
          bannerFetch,
          milestonesFetch,
          aboutFetch,
          testimonialsFetch,
          servicesFetch,
          logosFetch,
        ]);

      setData({
        banner: banner?.data ?? null,
        milestones: milestones.data ?? null,
        about: about?.data ?? null,
        testimonials: testimonials.data ?? null,
        services: services.data ?? null,
        logos: logos.data ?? null,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <LoadingWrapper fetchData={fetchData}>
      <>
        <Hero data={data?.banner ?? null} />
        <Milsestone data={data?.milestones?.data ?? []} />
        {/* <div className='bg-primary-color opacity-25 w-full h-[1px]'/> */}
        <About data={data?.about ?? null} />
        {/* <Why /> */}
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
        <div
          className='py-10 md:py-16 relative w-full text-white bg-cover bg-no-repeat bg-center'
          style={{
            backgroundImage: `linear-gradient(
    rgba(0, 0, 0, 0.85),
    rgba(0, 0, 0, 0.95)
  ), url('/assets/images/why-elie-2.webp')`,
          }}
        >
          <Services data={data?.services?.data ?? []} />
          <Education data={data?.logos?.data ?? []} />
        </div>
        {/* <Education/> */}
        <div className='bg-primary-color opacity-25 w-full h-[1px]' />
        <Testmonial data={data?.testimonials?.data ?? []} />
        <Packages data={data?.services?.data ?? []} />
        <ContactUs />
      </>
    </LoadingWrapper>
  );
};

export default Home;
