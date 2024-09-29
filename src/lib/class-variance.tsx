import { cva } from 'class-variance-authority';

export const buttonLinkVariants = cva(
  'w-full grid place-items-center font-semibold capitalize duration-300 cursor-pointer',
  {
    variants: {
      variant: {
        default:
          'bg-primary-color hover:bg-primary-color/80',
        outlined:
          'bg-transparent text-white hover:border-white/40 border-2 border-primary-color',
        normal:
        'bg-primary-color text-white disabled:bg-gray-400 disabled:cursor-default'
      },
      size: {
        default: 'py-3 px-6 text-[1rem] md:text-[1.15rem] lg:text-[1.3rem]',
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

