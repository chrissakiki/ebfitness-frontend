import {
  BsFacebook,
  BsInstagram,
  BsWhatsapp,
  BsLinkedin,
} from 'react-icons/bs';
import { IoCallSharp } from "react-icons/io5";
import Container from '../UI/Container';

const SocialMediaHeader = () => {
  return (
    <div className='w-full bg-black py-2 h-[4rem] flex items-center justify-center text-white'>
    <Container>
      <div className='flex justify-between items-center'>
        <div className='flex gap-4 items-center text-[0.95rem]'>
          <span className='flex gap-2'><span className='text-primary-color'><IoCallSharp size={20}/></span>+961 3 296 196</span>
          {/* <span className='flex gap-2'> <span className='text-primary-color'><IoTime size={20}/> </span>  Monday - Sunday 10:00 - 22:00</span> */}
        </div>
        <div className='flex items-center gap-5 text-white'>
          <a
            href='https://www.instagram.com/eb_fitnessteam'
            target='_blank'
            className='insta'
          >
            <BsInstagram size={22} />
          </a>
          <a href='https://www.facebook.com/eliebadawi.official' target='_blank'>
            <BsFacebook size={22} />
          </a>
          <a href='https://www.linkedin.com/in/eliebadawi-fitnessentrepreneur' target='_blank'>
            <BsLinkedin size={22} />
          </a>
          <a
            href='https://api.whatsapp.com/send/?phone=9613296196'
            target='_blank'
          >
            <BsWhatsapp size={22} />
          </a>
        </div>
      </div>
    </Container>
  </div>
  )
}

export default SocialMediaHeader