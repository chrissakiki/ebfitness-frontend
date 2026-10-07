import React, { useEffect, useState, ReactNode } from 'react';
import { gsap } from 'gsap';

interface LoadingWrapperProps {
  fetchData: (signal: AbortSignal) => Promise<void>;
  children: ReactNode;
}

const LoadingWrapper: React.FC<LoadingWrapperProps> = ({
  fetchData,
  children,
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  // const [animationCompleted, setAnimationCompleted] = useState<boolean>(false);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const loaderRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    let timeoutId: number;

    const loadContent = async () => {
      try {
        // await new Promise((resolve) => setTimeout(resolve, 2000)); // 2-second delay

        await fetchData(signal);
        timeoutId = setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (error) {
        // if (error.name === 'AbortError') {
        //   console.log('Fetch aborted');
        // } else {
        //   console.error(error);
        // }
      }
    };

    loadContent();

    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, []);

  useEffect(() => {
    // if (loading) {
    //   document.body.style.overflow = 'hidden';
    // } else {
    //   document.body.style.overflow = 'auto';
    // }
    if (!loading && contentRef.current) {
      // Animate the content to fade in and slide u
      gsap.fromTo(
        contentRef.current,
        { opacity: 0 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
      );
    }

    if (!loading && loaderRef.current) {
      // Animate loader sliding from bottom to top
      gsap.to(loaderRef.current, {
        // y: '-100%',
        autoAlpha: 0,
        duration: 1,
        ease: 'power3.out',
        onComplete: () => {
          // setAnimationCompleted(true);
        },
      });
    }
  }, [loading]);

  return (
    <>
      <div
        ref={loaderRef}
        className='fixed inset-0 bg-black flex flex-col justify-center items-center text-white  z-[2001] opacity-100'
        style={{
          transformOrigin: 'bottom', // Start the transformation from the bottom
          transform: 'translateY(0%)', // Initially place it at the bottom of the screen
        }}
      >
        <img
          src='/assets/images/logo.webp'
          className='w-[7rem] md:w-[8rem] aspect-[1.015]'
        />
        <div className="text-sm -mt-4">Loading...</div>
      </div>

      {/* Content will be hidden initially and fade in once loading is complete */}
      <div ref={contentRef}>{children}</div>
    </>
  );
};

export default LoadingWrapper;
