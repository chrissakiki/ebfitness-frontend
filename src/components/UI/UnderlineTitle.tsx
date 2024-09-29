import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import { cn } from '../../lib/utils';

gsap.registerPlugin(ScrollTrigger);

interface IProps extends Children {
  color?: string;
  className?: string
}
const UnderlineTitle = ({ children, color = 'primary', className }: IProps) => {
  const containerRef = useRef(null)
  const titleRef = useRef(null);
  const underlineRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() =>{
      const tl = gsap.timeline();
      tl.fromTo(
        titleRef.current,
        {
          opacity: 0,
          duration: 1,
        },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 90%',
            end: 'top 70%',
            // markers: true,
            scrub: 1.2,
          },
        }
      ).to('.underline-effect', {
        scrollTrigger: {
          trigger: underlineRef.current,
          start: 'top 90%',
          end: 'top 10%',
          // markers: true,
          scrub: false,
          toggleClass: 'underline-effect-active',
        },
      });
  
      // ScrollTrigger.create({
      //   trigger: '.underline-effect',
      //   animation: tl,
      //   start: 'top 90%',
      //   end: 'top 70%',
      //   markers: true,
      //   scrub: 1.2,
      //   toggleClass: 'underline-effect-active'
      // });
  
      // return () => tl.revert()
    },containerRef)

    return () => ctx.revert()

  }, []);

  return (
    <div ref={containerRef} className='flex flex-col items-center justify-center'>
      <p
        ref={titleRef}
        className={cn(
          'font-oswald relative text-4xl lg:text-5xl xl:text-[4.15rem] header-title text-center font-bold uppercase',
          {
            'text-primary-color': color === 'primary',
            'text-white': color === 'light',
          }, className
        )}
      >
        {children}
        <span
          ref={underlineRef}
          className={cn(
            'absolute inset-x-0 -bottom-2 h-[4px] underline-effect bg-gradient-to-r  rounded-xl',
            {
              'from-[#0275d8] to-[#0275d8]': color === 'primary',
              'from-[#fff] to-[#fff]': color === 'light',
            }
          )}
        ></span>
      </p>
    </div>
  );
};

export default UnderlineTitle;
