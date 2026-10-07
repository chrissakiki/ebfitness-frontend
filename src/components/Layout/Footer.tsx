import Container from '../UI/Container';
import menuData from '../../../data/layout/menu.json';
import { NavLink, useLocation } from 'react-router-dom';
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsWhatsapp,
} from 'react-icons/bs';
import { IoCallSharp, IoLocationSharp } from 'react-icons/io5';

const Footer = () => {
  const { pathname } = useLocation();

  const handleQuote =(pathname: string) => {
    switch (pathname) {
      case '/':
        return 'Results may vary. Results are based on individual circumstances. Time frames for results are not guaranteed. Willpower is always required!'
      case '/why':
        return 'Science Meets Practical Application.';
      case '/mission-and-vision':
        return 'This unique, original experience leaves each person stronger than ever';
      default:
        return 'GO BEYOND TRANSFORMATION Get in the best shape of your life, for life.';
    }
  };
  return (
    <>
      <div className='w-full pb-3 pt-10 md:py-12 bg-[#121212]'>
        <Container>
          <div className='grid place-items-center gap-5 mb-16'>
            <p className='text-[1.2rem]  font-bold text-primary-color md:text-center uppercase tracking-[0.06rem]'>
              {handleQuote(pathname)}
            </p>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-5'>
            {/* Left  */}
            <NavLink to={'/'}>
              <img
                src='/assets/images/logo.webp'
                className='w-[6rem] aspect-[1.015] -mb-8 md:mb-0 md:-mt-2'
              />
            </NavLink>

            {/* Center  */}
            <div className='flex flex-col gap-2 text-white '>
              <span className='font-semibold text-[1.2rem]'>Quick Links</span>
              <div className='flex flex-col gap-1'>
                {menuData?.map((item, idx) => {
                  return (
                    <NavLink
                      to={item?.path}
                      className='text-[#f8f9f7] hover:text-primary-color duration-300'
                      key={idx}
                    >
                      {item?.title}
                    </NavLink>
                  );
                })}
              </div>
            </div>

            {/* Right */}
            {/* Social Media  */}

            <div className='flex flex-col gap-2 text-white'>
              <span className='font-semibold text-[1.2rem]'>FOLLOW US</span>
              <div className='flex items-center gap-5'>
                <a
                  href='https://www.instagram.com/eb_fitnessteam'
                  target='_blank'
                  className='insta'
                >
                  <BsInstagram size={25} />
                </a>
                <a
                  href='https://www.facebook.com/eliebadawi.official'
                  target='_blank'
                >
                  <BsFacebook size={25} />
                </a>
                <a
                  href='https://api.whatsapp.com/send/?phone=9613296196'
                  target='_blank'
                >
                  <BsWhatsapp size={25} />
                </a>
                <a
                  href='https://www.linkedin.com/in/eliebadawi-fitnessentrepreneur'
                  target='_blank'
                >
                  <BsLinkedin size={25} />
                </a>
              </div>
            </div>

            <div className='flex flex-col gap-7 justify-between text-white'>
              <div className='text-white flex flex-col gap-2'>
                <span className='font-semibold text-[1.2rem]'>CONTACT US</span>
                <span className='flex gap-2'>
                  <span className='text-primary-color'>
                    <IoCallSharp size={20} />
                  </span>
                  +961 3 296 196
                </span>
                <span className='flex gap-2'>
                  <span className='text-primary-color'>
                    <IoLocationSharp size={23} />{' '}
                  </span>
                  Beirut
                </span>
              </div>
              <div className='text-[1.1rem] font-medium'>
                @2024 EB Fitness Team | All Rights Reserved
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
