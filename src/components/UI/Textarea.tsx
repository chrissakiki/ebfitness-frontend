import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';
import { cn } from '../../lib/utils';

const textareaVariants = cva(
  'w-full text-white flex p-2.5 font-normal bg-secondary-color resize-none focus:outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 duration-150',
  {
    variants: {
      variant: {
        default:
          'focus-visible:ring-2 focus-visible:ring-offset-2 border border-primary-color rounded-md',
      },
      variantSize: {
        default: 'h-20 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      variantSize: 'default',
    },
  }
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}

const Textarea = ({ className, variant, ...props }: TextareaProps) => {
  return (
    <textarea
      className={cn(textareaVariants({ variant }), className)}
      {...props}
    />
  );
};

export default Textarea;
