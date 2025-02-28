import React from 'react';
import Navbar from '../components/common/Navbar';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto py-16 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Welcome,</h1>
          <p className="text-gray-600 mb-6">
            I am Ramon, a product designer from Barcelona currently working with Red Bull and teaching design at SketchCasts. In the past, I've worked for clients such as Warner and Intersport.
          </p>
          <span className="text-red-500">Intersport.</span>
        </div>
        <div className="md:w-1/2 flex justify-center">
          {/* <img  alt="Ramon Illustration" className="w-64 h-auto" /> */}
        </div>
      </main>
    </div>
  );
};

export default Home;