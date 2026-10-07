import React from 'react'
import {  type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import { buttonLinkVariants } from '../../lib/class-variance';
import Loader from '../Loader';

interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  className?: string;
  children?: React.ReactNode;
  isLoading?: boolean;
}

const buttonVariants = buttonLinkVariants

const Button = ({  variant,
  size,
  rounded,
  className,
  children,
  isLoading,
  ...props} : IButtonProps) => {
  return (
    <button className={cn(buttonVariants({ variant, size, rounded, className }))} {...props}>
      {isLoading ? (
        <Loader color="white" className="absolute inset-0 pointer-events-none" />
      ) : (
        children
      )}
    </button>
  )
}

export default Button