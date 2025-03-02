import Navbar from '../components/common/Navbar';
import Hero from '../components/common/Hero';
import About from '../components/common/About';
import Timeline from '../components/common/Timeline';
const Home: React.FC = () => {
  // State untuk mengontrol animasi




  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      <Navbar />
      <Hero/>
      <About/>
      <Timeline/>
    </div>
  );
};

export default Home;