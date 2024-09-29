
import React from 'react'
import {  type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';
import { buttonLinkVariants } from '../../lib/class-variance';

interface ILinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  className?: string;
  children?: React.ReactNode;
  href: string
}

const linkVariants = buttonLinkVariants

const RLink = ({  variant,
  size,
  rounded,
  className,
  children,
  href,
  ...props} : ILinkProps) => {
  return (
    <Link to={href} className={cn(linkVariants({ variant, size, rounded, className }))} {...props}>{children}</Link>
  )
}

export default RLink