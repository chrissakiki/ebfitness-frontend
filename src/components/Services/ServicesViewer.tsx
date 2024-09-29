import  { useEffect, useState } from 'react';
import ServicesData from '../../../data/services.json';
import Button from '../UI/Button';
import { Link } from 'react-router-dom';

interface IProps {
  cat: string;
  close: () => void;
}

const ServicesViewer = ({ cat, close }: IProps) => {
  const [information, setInformation] = useState({
    title: '',
    description: '',
  });

  const { title, description } = information;

  useEffect(() => {
    const data = ServicesData?.find((item) => item?.category === cat);
    if (data) {
      setInformation({
        title: data?.name,
        description: data?.description,
      });
    }
  }, [cat]);

  return (
    <div className='bg-[#121212] rounded-xl overflow-hidden text-white w-[96%] md:max-w-2xl text-center'>
      {/* Top  */}
      <div className='p-3 bg-primary-color text-[1.6rem] md:text-3xl font-bold font-oswald uppercase'>
        {title}
      </div>
      <div className='p-4 md:p-6 flex flex-col gap-6 text-[#f8f9f7]'>
        <div className='leading-relaxed text-[0.95rem] md:text-[1.1rem]'>{description}</div>
        <div className='w-full flex gap-3 mx-auto px-5'>
          <Link
          to={`/services?category=${cat}`}
            className='w-full rounded-lg grid place-items-center font-semibold capitalize duration-300 cursor-pointer bg-transparent text-white hover:border-primary-color/50 border-2 border-primary-color py-3 px-2 text-[1rem] md:text-[1.15rem]'
          >
            Learn More
          </Link>
          <Button
            size={'sm'}
            className=''
            onClick={close}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServicesViewer;
