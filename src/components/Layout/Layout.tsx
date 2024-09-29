import Header from './Header';
import Menu from './Menu';
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/pagination';
import SocialMediaHeader from './SocialMediaHeader';
import Footer from './Footer';
import Whatsapp from '../Whatsapp';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='min-h-screen'>
      <SocialMediaHeader/>
      <Header />
      {children}
      <Footer />
      <Menu />
      <Whatsapp/>
    </div>
  );
};

export default Layout;
