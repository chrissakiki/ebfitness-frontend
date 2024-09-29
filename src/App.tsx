import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Layout from './components/Layout/Layout';
import AppProvider from './context/AppProvider';
import About from './pages/About';
import Why from './pages/Why';
import MissionVision from './pages/MissonVision';
import Philosophy from './pages/Philosophy';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Services from './pages/Services';

function App() {

  return (
    <AppProvider>
    <Router>
      <Layout>
        <ScrollToTop/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/why' element={<Why />} />
          <Route path='/services' element={<Services />} />
          <Route path='/mission-and-vision' element={<MissionVision />} />
          <Route path='/philosophy' element={<Philosophy />} />
          <Route path='/terms-and-conditions' element={<Terms />} />
          <Route path='/privacy-policy' element={<Privacy />} />
        </Routes>
      </Layout>
    </Router>
    </AppProvider>
  )
}

export default App;
