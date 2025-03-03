import Navbar from '../components/common/Navbar';
import Hero from '../components/common/Hero';
import About from '../components/common/About';
import Timeline from '../components/common/Timeline';
import Project from '../components/common/Project';
import Contact from '../components/common/Contact';
import Footer from '../components/common/Footer';
const Home: React.FC = () => {
  // State untuk mengontrol animasi




  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      <Navbar />
      <Hero/>
      <About/>
      <Timeline/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Home;