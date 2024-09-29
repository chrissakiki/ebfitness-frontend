import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef, ReactNode } from 'react';

gsap.registerPlugin(ScrollTrigger);

interface IProps {
  children: ReactNode;
  start?: string;
  end?: string;
  markers?: boolean;
  scrub? : boolean | number
}

const FadeIn = ({ children, start = 'top 90%', end = 'top 70%', markers = false, scrub = 1.2}: IProps) => {
  const elementRef = useRef(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      elementRef.current,
      {
        opacity: 0,
        duration: 1,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: elementRef.current,
          start,
          end,
          markers,
          scrub
        },
      }
    );
  }, [start, end, markers,scrub]);

  return <div ref={elementRef}>{children}</div>;
};

export default FadeIn;
