import { PropsWithChildren } from 'react';
import { cn } from '../lib/utils';

interface IProps extends PropsWithChildren {
  className?: string;
}

const Label = ({ className, children }: IProps) => {
  return (
    <label className={cn('text-white text-sm md:text-base font-semibold', className)}>
      {children}
    </label>
  );
};

export default Label;
