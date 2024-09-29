import FadeIn from '../Animate/FadeIn';
import { cn } from '../../lib/utils';

interface IProps extends Children {
  color?: string
}
const Title = ({ children, color = 'primary' }: IProps) => {


  return (
    <FadeIn>
      <p className={cn('font-oswald relative text-4xl lg:text-5xl xl:text-[4.15rem] header-title text-center font-bold uppercase', {
        'text-primary-color': color === 'primary',
        'text-white': color === 'light',
      })}>
       {children}
      </p>
    </FadeIn>
  );
};

export default Title;
