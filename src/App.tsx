import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';  
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Layout from './components/Layout/Layout';
import AppProvider from './context/AppProvider';
import About from './pages/About';
import Philosophy from './pages/Philosophy';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Services from './pages/Services';
import Team from './pages/Team';
import Mentorship from './pages/Mentorship';
import Certificates from './pages/Certificates';

function App() {

  return (
    <AppProvider>
    <Router>
      <Layout>
        <ScrollToTop/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/our-team' element={<Team />} />
          <Route path='/our-team/certificates' element={<Certificates />} />
          {/* <Route path='/why' element={<Why />} /> */}
          <Route path='/education' element={<Mentorship />} />
          <Route path='/services' element={<Services />} />
          {/* <Route path='/mission-and-vision' element={<MissionVision />} /> */}
          <Route path='/blog' element={<Philosophy />} />
          <Route path='/terms-and-conditions' element={<Terms />} />
          <Route path='/privacy-policy' element={<Privacy />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
    </AppProvider>
  )
}

export default App;
