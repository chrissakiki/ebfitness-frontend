import { cn } from '../../lib/utils'

interface IProps extends Children {
className?: string;
}

const SubTitle = ({children, className} : IProps) => {
  return (
   <p
   className={cn(
    'font-oswald relative text-2xl md:text-3xl lg:text-[2.8rem] header-title font-bold uppercase text-primary-color', className
  )}
   >
    {children}
   </p>
  )
}

export default SubTitle