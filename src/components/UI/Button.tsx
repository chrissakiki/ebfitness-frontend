import React from 'react'
import {  type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import { buttonLinkVariants } from '../../lib/class-variance';

interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  className?: string;
  children?: React.ReactNode;
}

const buttonVariants = buttonLinkVariants

const Button = ({  variant,
  size,
  rounded,
  className,
  children,
  ...props} : IButtonProps) => {
  return (
    <button className={cn(buttonVariants({ variant, size, rounded, className }))} {...props}>{children}</button>
  )
}

export default Button