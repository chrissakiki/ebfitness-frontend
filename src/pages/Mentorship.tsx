import React, { useState } from 'react';
import LoadingWrapper from '../components/LoadingWrapper';
import ReBanner from '../components/ReBanner';
import SubTitle from '../components/Info/SubTitle';
import Container from '../components/UI/Container';
import Input from '../components/UI/Input';
import { cn, validateEmail, validatePhone } from '../lib/utils';
import Label from './Label';
import Textarea from '../components/UI/Textarea';
import Button from '../components/UI/Button';
import { GET, POST } from '../services/api';
import Modal from '../components/UI/Modal';
import { Link } from 'react-router-dom';

const initialState = {
  full_name: '',
  email_address: '',
  phone_number: '',
  location: '',
  job_title: '',
  company: '',
  experience: '',
  certifications: '',
  how_heard: '',
  reason: '',
  skills: '',
  coaching: '',
  agreement: false,
  cv: null,
}

export const FieldContainer = ({
  children,
  className,
  dir = 'column',
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  dir?: 'row' | 'column';
} & React.HTMLProps<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        'w-full flex items-start gap-1.5',
        dir === 'column' ? 'flex-col' : 'flex-row',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

interface FormData {
  full_name: string;
  email_address: string;
  phone_number: string;
  location: string;
  job_title: string;
  company: string;
  experience: string;
  certifications: string;
  how_heard: string;
  reason: string;
  skills: string;
  coaching: string;
  agreement: boolean;
  cv: File | null;
}

interface FormErrors {
  [key: string]: string;
}

const fields = [
  {
    label: 'Full Name',
    name: 'full_name',
    placeholder: 'John Peterson',
    type: 'text',
  },
  {
    label: 'Email Address',
    name: 'email_address',
    placeholder: 'john-peterson@gmail.com',
    type: 'email',
  },
  {
    label: 'Phone Number',
    name: 'phone_number',
    placeholder: '708821XX',
    type: 'text',
  },
  {
    label: 'Location',
    name: 'location',
    placeholder: 'Beirut - Ashrafieh',
    type: 'text',
  },
  {
    label: 'Current Job Title',
    name: 'job_title',
    placeholder: 'Personal Trainer',
    type: 'text',
  },
  {
    label: 'Company/Organization',
    name: 'company',
    placeholder: 'XX',
    type: 'text',
  },
  {
    label: 'Years of Experience in Fitness Industry',
    name: 'experience',
    placeholder: '5',
    type: 'text',
  },
  {
    label: 'List Any Relevant Certifications',
    name: 'certifications',
    placeholder: 'ex: personal training, specialized courses',
    type: 'text',
  },
  {
    label: 'How Did You Hear About This Program',
    name: 'how_heard',
    placeholder: 'XX',
    type: 'text',
  },
  {
    label: 'Why Do You Want to Join Us',
    name: 'reason',
    placeholder: 'Please provide a brief statement',
    type: 'textarea',
  },
  {
    label: 'Skills/Knowledge You Hope to Gain',
    name: 'skills',
    placeholder: 'Please provide a brief statement',
    type: 'textarea',
  },
  {
    label: 'Coaching/Training Experience & Notable Achievements',
    name: 'coaching',
    placeholder:
      'Describe your coaching and training experience, including any notable achievements',
    type: 'textarea',
  },
];


const Mentorship = () => {
  const [data, setData] = useState<Section | null>(null);
  const [formData, setFormData] = useState<FormData>(initialState);

  const [errors, setErrors] = useState<FormErrors>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let hasErrors = false;
    let newErrors: FormErrors = {};

    fields.forEach(({ name }) => {
      const value = formData[name as keyof FormData];

      if (typeof value === 'string' && !value.trim()) {
        newErrors[name] = 'This field is required';
        hasErrors = true;
      }
    });

    if (!validateEmail(formData.email_address)) {
      newErrors.email_address = 'Please enter a valid email address';
      hasErrors = true;
    }

    if (!validatePhone(formData.phone_number)) {
      newErrors.phone = 'Please enter a valid phone number';
      hasErrors = true;
    }

    if (!formData.cv) {
      newErrors.cv = 'Please upload a CV';
      hasErrors = true;
    }

    if (!formData?.agreement) {
      newErrors.agreement = 'You must agree to the terms and conditions';
      hasErrors = true;
    }

    setErrors(newErrors);

    if (!hasErrors) {
      let formDataTemp = new FormData();

      for (const [key, value] of Object.entries(formData)) {
        if (!value) return;
        if (key === 'cv' && value) {
          formDataTemp.append('cv', value as Blob);
        } else {
          formDataTemp.append(key, String(value));
        }
      }

      setIsLoading(true);

      const response = await POST({
        endpoint: '/mentorships',
        formData: formDataTemp,
      });

      if (response?.status === 201) {
        setServerError(null);
        setIsModalOpen(true);
        setFormData(initialState);
      } else {
        setServerError(
          response?.error ?? 'Something went wrong, please try again.'
        );
      }

      setIsLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files[0]) {
      const file = files[0];
      // File validation: size and type
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          cv: 'File size must be less than 5MB',
        }));
      } else if (
        ![
          'application/pdf',
          'application/msword',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        ].includes(file.type)
      ) {
        setErrors((prev) => ({
          ...prev,
          cv: 'Only PDF and Word documents are allowed',
        }));
      } else {
        setFileName(file.name);
        setFormData((prev) => ({
          ...prev,
          cv: file,
        }));
        setErrors((prev) => ({
          ...prev,
          cv: '',
        }));
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox'
          ? (e.target as HTMLInputElement).checked
          : name === 'experience'
          ? value.replace(/[^0-9]/g, '')
          : value,
    }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    let errorMessage = '';

    // Validation
    if (!value.trim()) {
      errorMessage = 'This field is required';
    } else if (name === 'email_address' && !validateEmail(value)) {
      errorMessage = 'Please enter a valid email address';
    } else if (name === 'phone_number' && !validatePhone(value)) {
      errorMessage = 'Please enter a valid phone number';
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };

  const fetchData = async (signal: AbortSignal) => {
    const response = await GET<Section>({
      endpoint: '/sections/type/mentorship',
      signal,
    });


    if (response?.data) {
      setData(response.data);
    }
  };


  const [fTitle, lTitle] = (data?.title || '')
    .split(',')
    .map((part) => part.trim());

  return (
    <>
      <LoadingWrapper fetchData={fetchData}>
        <ReBanner
          title={
            <>
                               {fTitle} <span className='text-primary-color'>{lTitle}</span>

            </>
          }
            image_url={data?.image_url}
        />

        <Container className='py-10 md:py-16 flex flex-col gap-2 md:gap-6 lg:gap-8 lg:items-center'>
          <SubTitle>EB Fitness Team - Mentorship Program</SubTitle>
          <div className='text-white text-[0.93rem] md:text-[1.05rem] lg:text-center max-w-5xl'>
            This program is designed for those looking to enhance their skills
            in the fitness industry. With personalized guidance in a small
            group, you’ll gain practical knowledge and insights to help you
            succeed in your career.
          </div>

          {/* Form  */}
          <form
            onSubmit={handleSubmit}
            className='w-full grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 mt-6 lg:mt-10'
          >
            {fields.map(({ label, name, placeholder, type }) => (
              <FieldContainer key={name}>
                <Label>{label}*</Label>
                {type === 'textarea' ? (
                  <Textarea
                    name={name}
                    placeholder={placeholder}
                    value={formData[name as keyof FormData] as string}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                ) : (
                  <Input
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={formData[name as keyof FormData] as string}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                )}
                {errors[name] && (
                  <span className='text-red-500 text-xs'>{errors[name]}</span>
                )}
              </FieldContainer>
            ))}

            <FieldContainer className='md:col-span-2 lg:col-span-3'>
              <Label>Upload CV*<span className='text-sm'> (.pdf, .doc)</span></Label>
              <div className='flex flex-wrap items-center gap-2'>
                <input
                  type='file'
                  name='cv'
                  accept='.pdf,.doc,.docx'
                  onChange={handleFileChange}
                  className='hidden'
                  id='cv-upload'
                />
                <label
                  htmlFor='cv-upload'
                  className='bg-primary-color text-white px-4 py-2 rounded-md cursor-pointer hover:bg-opacity-90 transition shrink-0'
                >
                  Choose a file
                </label>
                {fileName && (
                  <span className='text-sm text-gray-200 line-clamp-1'>
                    {fileName}
                  </span>
                )}
              </div>
              {errors.cv && (
                <span className='text-red-500 text-xs'>{errors.cv}</span>
              )}
            </FieldContainer>

            <FieldContainer className='md:col-span-2 lg:col-span-3'>
              <label className='text-white text-xs md:text-sm flex items-center gap-2 cursor-pointer'>
                <input
                  name='agreement'
                  type='checkbox'
                  className='w-4 aspect-square'
                  onChange={handleChange}
                />
                I understand that this program is designed for candidates who
                are not beginners and that it may require a significant
                commitment of time and resources.
              </label>
              {errors.agreement && (
                <span className='text-red-500 text-xs'>{errors.agreement}</span>
              )}
            </FieldContainer>
            {serverError && (
              <div className='text-red-500 text-sm md:col-span-2 lg:col-span-3'>
                <span>Error: </span>
                {serverError}
              </div>
            )}
            <div className='h-[2.55rem] md:h-[3.45rem]'>
              <Button
                className='text-white w-full md:w-[13rem] h-full'
                isLoading={isLoading}
                disabled={isLoading}
              >
                Apply Now
              </Button>
            </div>
          </form>
        </Container>
      </LoadingWrapper>

      <Modal isOpen={isModalOpen}>
        <div className='relative w-[90%] md:max-w-2xl mx-auto select-none flex flex-col gap-5 bg-[#0a0a0a] text-white p-4 md:p-6 rounded-md text-center'>
          <div className='relative h-[12rem] aspect-square'>
            <img
              src='/assets/images/functional-training.webp'
              alt='mentorship program image'
              className='h-full w-full object-cover'
            />
            <div className='absolute inset-0 bg-primary-color/30 flex justify-center items-center'>
              <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl'>Application Received</h2>
            </div>
          </div>
          <p className='text-[0.95rem] lg:text-base leading-relaxed'>
            Thank you for submitting your application to our mentorship program.
            We have received your information and will review it carefully.<br/>  You
            can expect to hear back from us shortly with next steps.
          </p>
          <Link to={'/'} type='button' className='text-base lg:text-lg text-primary-color underline'>Go back to homepage</Link>
        </div>
      </Modal>
    </>
  );
};

export default Mentorship;
