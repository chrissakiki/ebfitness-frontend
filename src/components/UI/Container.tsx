
import { cn } from '../../lib/utils';

interface IProps extends Children {
  className?: string
  noPRM?: boolean;
}
const Container = ({ children ,className, noPRM}: IProps) => {
  return (
    <div className={cn('w-full container mx-auto md:px-10', className, {
      'pl-5': noPRM,
      'px-5': !noPRM
    })}>{children}</div>
  );
};

export default Container;
