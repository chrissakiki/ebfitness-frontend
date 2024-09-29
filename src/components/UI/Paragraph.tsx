
import FadeIn from '../Animate/FadeIn';



interface IProps extends Children {
  
}
const Paragraph = ({ children}: IProps) => {

  return (
    <FadeIn>
    <p
      className='text-[1.1rem] font-light leading-[1.55] line-clamp-5 md:line-clamp-none'
    >
      {children}
    </p>
    </FadeIn>

  );
};

export default Paragraph;
