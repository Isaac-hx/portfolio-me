import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation';
const TypeJob:React.FC = () =>{
    return(
        <TypeAnimation
        sequence={
            [
                "Assistant Trainer",
                1000,
                "Fullstack Developer",
                1000
            ]
        }
        wrapper='span'
        cursor={true}
        repeat={Infinity}
        />
    )
}   
const About: React.FC = () => {
  // State untuk mengontrol animasi
  const [isVisible, setIsVisible] = useState(false);

  // Menggunakan useInView untuk mendeteksi saat elemen masuk/keluar viewport
  const { ref, inView } = useInView({
    threshold: 0.1, // Aktifkan animasi saat 10% elemen terlihat
    triggerOnce: false, // Animasi dapat dipicu ulang saat elemen masuk/keluar viewport
  });

  // Mengaktifkan/menonaktifkan animasi saat elemen terlihat/tidak terlihat
  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  return (
    <div id="about" ref={ref} className="bg-white py-10">
      {/* Konten Utama */}
      <h1 className={`ml-8 text-4xl font-bold mb-4 text-gray-800 transition-all duration-1000 ease-in-out ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}>
        About
      </h1>

      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-start gap-8">
        {/* Bagian Profil dan Skills - Terpusat Secara Vertikal di Mobile, Berbaris di Desktop */}
        <div className="w-full lg:m-10 lg:w-1/2 p-2 flex flex-col gap-8">
          <div className={`text-center lg:text-left transition-all duration-1000 ease-in-out ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}>
            <h2 className="text-2xl font-semibold mb-2 text-gray-700">Dimas Ananda Riyadi</h2>
            <h3 className="text-xl font-medium mb-4 text-pink-800"><TypeJob/></h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              I am currently studying at Universitas Panca Sakti Bekasi, majoring in Information Technology. I have skills and interests in technology, particularly in IT and open-source, with over 2 years of experience in development.
            </p>
          </div>
          {/* Bagian Skills - Di Bawah Short Intro */}
          <div className={`mt-2 lg:mx-0 mx-auto w-80 transition-all duration-1000 ease-in-out ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700 lg:text-left text-center">Skills</h2>
            <ul className="flex flex-wrap md:justify-start justify-center gap-4 space-y-2 text-gray-600">
              <li><img className="w-12 h-12 object-contain" src="/tech/Html5.svg" alt="HTML" /></li>
              <li><img className="w-12 h-12 object-contain" src="/tech/Tailwindcss.svg" alt="Tailwind" /></li>
              <li><img className="w-12 h-12 object-contain" src="/tech/React.svg" alt="React" /></li>
              <li><img className="w-12 h-12 object-contain" src="/tech/Typescript.svg" alt="TypeScript" /></li>
              <li><img className="w-12 h-12 object-contain" src="/tech/Golang.svg" alt="Golang" /></li>
              <li><img className="w-12 h-12 object-contain" src="/tech/Python.svg" alt="Python" /></li>
              <li><img className="w-12 h-12 object-contain" src="/tech/Postgresql.svg" alt="PostgreSQL" /></li>
              <li><img className="w-12 h-12 object-contain" src="/tech/MysqlWordmark.svg" alt="MySQL" /></li>
            </ul>
          </div>
        </div>

        {/* Bagian Foto - Di Kanan di Desktop */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
          <img 
            src="/me.jpeg" 
            alt="Dimas Ananda Riyadi" 
            className={`w-64 h-auto mx-auto object-cover rounded-full shadow-md transition-all duration-1000 ease-in-out ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default About;