import { cn } from '../lib/utils';
import Container from './UI/Container';

type Title<T> = T;

interface IProps {
  title: Title<string> | Title<JSX.Element>;
  image_url?: string;
  className?: string
}

const ReBanner = ({ title, image_url, className }: IProps) => {
  return (
    <div
      className={cn('w-full h-[25rem] md:h-[35rem] bg-cover bg-no-repeat bg-center grid place-items-center relative', className)}
      style={{
        backgroundImage: `linear-gradient(
      rgba(0,0,0, 0.6),
      rgba(10, 10, 10, 0.9) 80%,
      rgba(10, 10, 10, 1) 100%
    ), url('${image_url ? import.meta.env.VITE_API_IMAGE_URL + image_url : '/assets/images/functional-training.webp'}')`,
      }}
    >
      <Container className='relative h-full flex items-center md:justify-center'>
        <h1 className='text-[2.6rem] md:text-[3.5rem] lg:text-[4.5rem] xl:text-[5.4rem] font-bold text-left md:text-center text-white uppercase font-oswald leading-tight'>
          {title}
        </h1>
      </Container>
    </div>
  );
};

export default ReBanner;
