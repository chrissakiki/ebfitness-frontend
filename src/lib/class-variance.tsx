import { cva } from 'class-variance-authority';

export const buttonLinkVariants = cva(
  'relative w-full grid place-items-center font-semibold capitalize duration-300 cursor-pointer disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default:
          'bg-primary-color hover:bg-primary-color/80',
        outlined:
          'bg-transparent text-white border-2 border-primary-color',
      },
      size: {
        default: 'py-[0.55rem] md:py-2.5 px-6 text-[1rem] md:text-[1.15rem] lg:text-[1.3rem]',
        sm: 'py-3 px-2 text-[1rem] md:text-[1.15rem]',
      },
      rounded: {
        default: 'rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      rounded: 'default',
    },
  }
);

