import  { useEffect } from 'react';
import { FiMenu } from 'react-icons/fi';
import Container from '../UI/Container';
import { useAppContext } from '../../context/AppProvider';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const { showMenu, setShowMenu, isScrolling, setIsScrolling } =
    useAppContext();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // const scrollPosition = window.scrollY;
    // const viewportHeight = window.innerHeight;
    // if (scrollPosition > viewportHeight) {
    //   return setIsScrolling(true);
    // }
    if (window.scrollY > 32) {
      return setIsScrolling(true);
    }

    setIsScrolling(false);
  };
  return (
    <header
      className={clsx('fixed right-0 left-0 duration-500 z-10', {
        'bg-[#0e0d0d]/70 top-0': isScrolling,
        'top-[4rem]': !isScrolling,
      })}
    >
      <Container>
        <div className='w-full flex justify-between items-center'>
          {/* Left  */}
          <NavLink to={'/'} className={'cursor-pointer'}>
            <img
              src='/assets/images/logo.webp'
              className='w-[6rem] aspect-[1.015]'
            />
          </NavLink>
          {/* Right  */}

          <span
            className='p-3 cursor-pointer grid place-items-center bg-primary-color rounded-full'
            onClick={() => setShowMenu(true)}
          >
            <FiMenu
              size={32}
              className={clsx('duration-300  text-white', {
                'opacity-0 pointer-events-none rotate-90': showMenu,
                'opacity-100': !showMenu,
              })}
            />
          </span>
        </div>
      </Container>
    </header>
  );
};

export default Header;
