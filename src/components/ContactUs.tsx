import React, { useState } from 'react';
import Container from './UI/Container';
import Button from './UI/Button';
import UnderlineTitle from './UI/UnderlineTitle';

const Label = ({ children }: Children) => {
  return (
    <label className='text-[1.2rem] capitalize font-medium text-white'>
      {children}
    </label>
  );
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: string;
  placeholder?: string;
}

const Input = ({ label, type, placeholder, ...props }: InputProps) => {
  return (
    <div className='flex flex-col gap-1 text-[#333] w-full'>
      <Label>{label}</Label>
      <input
        type={type}
        placeholder={placeholder}
        className='p-2 outline-none border bg-transparent border-white/20 rounded-md w-full text-white placeholder:text-white/90'
        {...props}
      />
    </div>
  );
};

// const ServicesArr = [
//   'Movement Therapy',
//   '2 on 1 Personal Training',
//   'Resistance Training',
//   'Functional Training',
//   'Individualized Training',
// ];

const ContactUs = () => {
  const [values, setValues] = useState({
    full_name: '',
    objective: '',
    date: '',
    time: '',
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (
      !values?.full_name ||
      !values?.objective ||
      !values?.date ||
      !values?.time
    ) {
      // console.log('sss', values)
      return;
    }

    const message = encodeURIComponent(
      `Hi, I'm ${values?.full_name} and I would like to have a consultation.  \nObjective: ${values?.objective}.  \nDate: ${values?.date} | ${values?.time}`
    );

    window.location.replace(`https://wa.me/9613296196?text=${message}`);
  };

  return (
    <div
      id='contact-us'
      className='py-10 md:py-16 relative w-full bg-cover bg-no-repeat bg-center shadow-2xl text-white'
      style={{
        backgroundImage: `linear-gradient(
  rgba(2, 117, 216, 0.8),
  rgba(2, 117, 216, 0.8)
), url('/assets/images/mission-1.webp')`,
      }}
    >
      <Container>
        <div className='flex gap-10'>
          {/* Left  */}
          <div className='flex-1'>
            <div className='flex flex-col items-center md:items-start gap-5 lg:gap-7 max-w-xl'>
              <div className='mb-5'>
                <UnderlineTitle
                  color='light'
                  className='text-4xl lg:text-4xl xl:text-6xl text-center md:text-left'
                >
                  Consultation
                </UnderlineTitle>
              </div>
              <Input
                name='full_name'
                type='text'
                label='Full Name'
                placeholder='Elie Badawi'
                onChange={handleChange}
              />
              <Input
                name='objective'
                label={'objective'}
                type={'text'}
                placeholder='Movement Therapy'
                // disabled
                value={values?.objective}
                onChange={handleChange}
              />
              <Input
                name='date'
                label={'date'}
                type={'date'}
                value={values?.date}
                onChange={handleChange}
              />
              <Input
                name='time'
                label={'Time'}
                type={'time'}
                value={values?.time}
                onChange={handleChange}
              />

              <Button
                variant={'outlined'}
                className='border-white/70'
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </div>

          <div className='flex-1 relative hidden lg:grid place-items-center'>
            <div className='absolute inset-0 -top-20 grid place-items-center'>
              <img className='w-[16rem]' src='/assets/images/elie2.webp' />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
