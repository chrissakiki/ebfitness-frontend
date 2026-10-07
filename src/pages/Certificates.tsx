import {  useState } from 'react';
import { GET } from '../services/api';
import ReBanner from '../components/ReBanner';
import Container from '../components/UI/Container';
import Image from '../components/UI/Image';
import Modal from '../components/UI/Modal';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';
import LoadingWrapper from '../components/LoadingWrapper';

const Certificates = () => {
  const [data, setData] = useState<Section>();
  const [certificates, setCertificates] = useState<Achievement[]>();
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [fTitle, lTitle] = ('our,certificates')
    ?.split(',')
    .map((part) => part.trim());

  const fetchData = async (signal: AbortSignal) => {
    const response = await GET<Section>({
      endpoint: '/sections/type/team',
      signal,
    });

    const achievements = await GET<PaginatedResponse<Achievement>>({
      endpoint: '/achievements?type=certificates&limit=30',
      signal,
    });

    if (response?.data) {
      setData(response.data);
    }

    if (achievements?.data) {
      setCertificates(achievements.data?.data);
    }
  };

  const openImageViewer = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeImageViewer = () => {
    setCurrentImageIndex(null);
    setIsModalOpen(false);
  };

  const nextImage = () => {
    if (currentImageIndex !== null && certificates) {
      const nextIndex = (currentImageIndex + 1) % certificates.length;
      setCurrentImageIndex(nextIndex);
    }
  };

  const prevImage = () => {
    if (currentImageIndex !== null && certificates) {
      const prevIndex =
        (currentImageIndex - 1 + certificates.length) % certificates.length;
      setCurrentImageIndex(prevIndex);
    }
  };

  return (
    <>
      <LoadingWrapper fetchData={fetchData}>
        <div className='bg-secondary-color'>
          <ReBanner
            title={
              <>
                {fTitle} <span className='text-primary-color'>{lTitle}</span>
              </>
            }
            image_url={data?.image_url}
          />

          <Container className='py-10 md:py-16'>
            <div className='flex flex-col md:items-center gap-4 md:gap-10 xl:mt-20'>
              <p className='text-[1.7rem] md:text-[1.9rem] xl:text-[2.2rem] text-white font-bold'>
              Certification Gallery
              </p>
              <div className='w-full grid grid-cols-2 lg:grid-cols-4 gap-3'>
                {certificates?.map((el, idx) => (
                  <div key={idx} className='group relative'>
                    <Image
                      src={el?.image_url}
                      alt={el?.name}
                      className='object-cover rounded-md h-full w-full cursor-pointer'
                      onClick={() => openImageViewer(idx)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </LoadingWrapper>
      {/* Modal for image viewer */}
      {isModalOpen && currentImageIndex !== null && certificates && (
        <Modal isOpen={isModalOpen}>
          <div className='relative w-[90%] md:max-w-3xl mx-auto select-none'>
            <button
              type='button'
              className='absolute top-2 right-2 text-3xl text-white rounded-full bg-black shadow-lg p-1 z-[1]'
              onClick={closeImageViewer}
            >
              <IoCloseSharp size={28} />
            </button>
            <div className='relative'>
              <Image
                src={certificates[currentImageIndex].image_url}
                alt={certificates[currentImageIndex].name}
                className='w-full h-auto'
                // className='w-full aspect-square'
              />

              <button
                onClick={prevImage}
                className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2'
              >
                <FaArrowAltCircleLeft size={25} />
              </button>
              <button
                onClick={nextImage}
                className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2'
              >
                <FaArrowAltCircleLeft className='rotate-180' size={25} />
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Certificates;
