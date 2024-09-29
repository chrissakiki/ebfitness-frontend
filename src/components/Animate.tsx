import React, { useEffect, useRef, ReactNode, useState } from 'react';
import clsx from 'clsx';

interface IProps {
  children: ReactNode;
  onComplete?: () => void;
  threshold?: number;
  delay?: number;
  className?: string;
}

const Animate: React.FC<IProps> = ({
  children,
  onComplete,
  threshold = 0.5,
  delay = 500,
  className,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [isAnimate, setIsAnimate] = useState(false);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      threshold,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // console.log(entry.intersectionRatio);
          setTimeout(() => {
            setIsAnimate(true);
            if (onComplete) {
              onComplete();
            }
            observer?.disconnect();
          }, delay);

          // setIsAnimate(false);
          // console.log('else');
        }
      });
    }, options);

    observer.observe(targetRef.current!);

    return () => {
      observer.disconnect();
    };
  }, [onComplete, threshold]);

  return (
    <div
      ref={targetRef}
      className={clsx(
        'duration-500',
        {
          'opacity-100': isAnimate,
          'opacity-0': !isAnimate,
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Animate;
