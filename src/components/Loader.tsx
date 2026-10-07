import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { cn } from '../lib/utils';

interface IProps {
  className?: string;
  color?: string;
  size?: number;
}
const Loader = ({ className, color, size }: IProps) => {
  return (
    <span className={cn('grid place-items-center', className)}>
      <AiOutlineLoading3Quarters
        className="animate-spin"
        size={size || 15}
        color={color || '#ffffff'}
      />
    </span>
  );
};

export default Loader;
