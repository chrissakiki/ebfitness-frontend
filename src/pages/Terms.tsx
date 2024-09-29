import ReBanner from '../components/ReBanner';
import Container from '../components/UI/Container';
import TermsData from '../../data/terms.json';
import BackHome from '../components/BackHome';

const Terms = () => {
  return (
    <div className='bg-secondary-color text-[#f8f9f7]'>
      <ReBanner title='Terms and Conditions' />
      <Container>
        <div className='grid gap-12 py-10 md:py-16'>
          {TermsData?.map((item, idx) => {
            return (
              <div key={idx}>
                <h1 className='text-[1.5rem] md:text-[2rem] font-bold text-primary-color mb-2'>
                  {item?.title}
                </h1>

                <ul className='space-y-1 text-[0.95rem] md:text-[1rem]'>
                  {item?.description?.map((desc, idx) => {
                    return <li key={idx} className='flex gap-1.5 md:gap-2.5'><span className='text-primary-color'>-</span>{desc}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <BackHome/>

      </Container>
    </div>
  );
};

export default Terms;
