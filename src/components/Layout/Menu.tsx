import clsx from 'clsx';
import { useAppContext } from '../../context/AppProvider';
import { IoCloseSharp } from 'react-icons/io5';
import Container from '../UI/Container';
import menuData from '../../../data/layout/menu.json';
import { NavLink } from 'react-router-dom';
import { cn } from '../../lib/utils';

const Menu = () => {
  const { showMenu, setShowMenu, isScrolling } = useAppContext();

  return (
    <div
      className={clsx('bg-[#0e0d0d] w-full fixed inset-0 duration-300 z-20', {
        'opacity-100': showMenu,
        'opacity-0 pointer-events-none': !showMenu,
      })}
    >
      <div
        className={cn('', {
          'mt-[5.2rem]': !isScrolling,
          'mt-[1.2rem]': isScrolling,
        })}
      >
        <Container className='h-full'>
          <div className='w-full flex justify-end'>
            <span
              className=' bg-primary-color rounded-full p-3 cursor-pointer grid place-items-center '
              onClick={() => setShowMenu(false)}
            >
              <IoCloseSharp
                size={32}
                className={clsx('duration-300 text-white', {
                  '-rotate-180': !showMenu,
                })}
              />
            </span>
          </div>

          <div className='flex flex-col items-center justify-center gap-4 md:gap-5 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
            {menuData?.map((item, idx) => {
              if (item?.isFooter) return;
              return (
                <NavLink
                  key={idx}
                  to={item?.path}
                  className={({ isActive }) =>
                    clsx(
                      `text-[1.8rem] md:text-[2rem] xl:text-[2.5rem] duration-500 ${
                        isActive
                          ? 'text-primary-color'
                          : 'text-[#f8f9f7] hover:text-primary-color'
                      }`,
                      {
                        'opacity-0': !showMenu,
                        'opacity-100': showMenu,
                      }
                    )
                  }
                  onClick={() => setShowMenu(false)}
                >
                  {item?.title}
                </NavLink>
              );
            })}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Menu;
