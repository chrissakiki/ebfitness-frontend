import React from 'react';
import { cn } from '../../lib/utils';

interface IProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean
}

const Modal = ({ children, className, isOpen }: IProps) => {
  return (
    <div
      className={cn(
        'fixed inset-0 bg-black/80 grid place-items-center z-[2000] duration-300', {
          'opacity-0 pointer-events-none' : !isOpen,
          'opacity-100' : isOpen,
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Modal;