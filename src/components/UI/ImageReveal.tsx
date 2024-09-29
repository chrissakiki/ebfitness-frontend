import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react'
import { cn } from '../../lib/utils';

const ImageReveal = ({transformOrigin = 'right', className, src} : {transformOrigin?: string, className?: string, src?: string}) => {

    const imageContainer = useRef(null);

    useLayoutEffect(() => {
      let ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.clip_img_container',
            start: 'top 100%',
            end: 'top 20%',
            scrub: 1,
            toggleActions: 'restart none none reset',
          },
        });
        tl.to('.clip_img_container', {
          scaleX: 0,
          transformOrigin,
          // width: '0%',
          duration: 2,
          // delay: 1,
          // clipPath: 'polygon(0 0, 100% 0, 100% 100%,0 100%)',
          ease: 'power2.out',

        })
        .to(".clip_img", {
          autoAlpha: 1, 
          duration: 2
        }, '<')
        .to(".clip_img", {
          scale: 1,
          duration: 2
        })
      }, imageContainer);
      return () => ctx.revert();
    }, [transformOrigin]);

  return (
    <div ref={imageContainer} className={cn('relative w-full aspect-[1.2] overflow-hidden', className)}>
    <div
      className='absolute bg-secondary-color inset-y-0 w-full overflow-hidden clip_img_container z-[1]'
    ></div>
    <img
      src={src}
      className='w-full h-full object-cover rounded-lg box-border p-1 clip_img'
    />
  </div>
  )
}

export default ImageReveal