// Pastikan kamu menginstal react-intersection-observer terlebih dahulu
// npm install react-intersection-observer
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Hero: React.FC = () => {
  // State untuk mengontrol animasi
  const [isVisible, setIsVisible] = useState(false);

  // Menggunakan useInView untuk mendeteksi saat elemen masuk viewport
  const { ref, inView } = useInView({
    threshold: 0.1, // Aktifkan animasi saat 10% elemen terlihat
    triggerOnce: false, // Animasi dapat dipicu ulang saat elemen masuk/keluar viewport
  });

  // Mengaktifkan/menonaktifkan animasi saat elemen terlihat/tidak terlihat
  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  return (
    <main id="hero" ref={ref} className="container mx-auto py-16 flex flex-col items-center gap-12 px-4 overflow-hidden">
      {/* Hero Section - Teks dan Gambar di Tengah dengan Animasi */}
      <div className={`flex flex-col lg:flex-row items-start gap-20 w-full max-w-6xl transition-all duration-1000 ease-in-out ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
      } will-change-transform`}>
        {/* Teks (Welcome, Paragraph, etc.) dengan Animasi dari Kiri */}
        <div className={`mt-8 text-center lg:text-left w-full lg:w-1/2 transition-all duration-1000 ease-in-out ${
          isVisible ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-full'
        } will-change-transform`}>
          <h1 className="text-4xl font-bold mb-4">Welcome,</h1>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            I am Dimas, a <b className="text-pink-800">Fullstack Developer</b> from Indonesia currently working with Yayasan Komunitas Open Source and teaching about open source technology. In the past, I've worked for clients such as Toko Helmi and Kemensetneg.
          </p>
          <span>
            <a  href="#contact"><button className='rounded-md hover:bg-pink-900 hover:cursor-pointer border-none bg-pink-800 text-white p-2 font-semibold'>Contact me <FontAwesomeIcon className={'ml-1'} icon={faArrowRight}/>
              </button></a>
          </span>
        </div>

        {/* Gambar (Hero Photo dan Blob) dengan Animasi dari Kanan */}
        <div className={`w-full lg:w-1/2 flex justify-center relative transition-all duration-1000 ease-in-out ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
        } will-change-transform`}>
          <img 
            alt="Dimas Illustration" 
            src="/HeroPhoto.png" 
            className="w-80 h-auto z-10 object-cover" 
          />
          <img 
            alt="Blob Illustration" 
            src="/blobImage.png" 
            className="w-96 h-auto absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-50 object-cover" 
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;