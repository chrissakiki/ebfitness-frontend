import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';
import { cn } from '../../lib/utils';

const inputVariants = cva(
  'w-full flex p-2.5 font-normal bg-secondary-color outline-none focus:outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 duration-150',
  {
    variants: {
      variant: {
        default:
          'focus-visible:ring-2 focus-visible:ring-offset-2 border border-primary-color rounded-md text-white',
      },
      variantSize: {
        default: 'h-12 text-sm md:text-base',
        xs: 'h-8 text-xs',
      },
    },
    defaultVariants: {
      variant: 'default',
      variantSize: 'default',
    },
  }
);

interface IProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = ({
  className,
  variant,
  variantSize,
  type = 'text',
  ...props
}: IProps) => {
  return (
    <input
      type={type}
      className={cn(inputVariants({ variant, variantSize }), className)}
      {...props}
    />
  );
};

export default Input;
