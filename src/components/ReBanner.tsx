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
      className={cn('w-full h-[25rem] md:h-[60vh] bg-cover bg-no-repeat bg-center grid place-items-center shadow-2xl relative', className)}
      style={{
        backgroundImage: `linear-gradient(
      rgba(0,0,0, 0.8 ),
      rgba(0, 0, 0, 0.8)
    ), url(${ image_url ? image_url : '/assets/images/testimonial.webp'})`,
      }}
    >
      <Container className='relative h-full grid place-items-center'>
        <h1 className='text-[3rem] lg:text-[4.5rem] xl:text-[5rem] font-bold text-center text-white uppercase font-oswald leading-tight'>
          {title}
        </h1>
      </Container>
    </div>
  );
};

export default ReBanner;
