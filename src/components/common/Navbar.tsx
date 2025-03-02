import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center font-medium">
        {/* Logo di sisi kiri */}
        <div className="text-2xl font-bold">
          <a href="#hero">
            <img src="/logo.png" alt="Wolf logo" className="w-14 h-14 object-cover" />
          </a>
        </div>

        {/* Menu tengah (About, Experience, Project) untuk Desktop/Tablet (md ke atas) */}
        <ul className="hidden md:flex md:space-x-10 lg:space-x-12 xl:space-x-16 mx-auto">
          <li><a href="#about" className="hover:text-gray-600">About</a></li>
          <li><a href="#experience" className="hover:text-gray-600">Experience</a></li>
          <li><a href="#project" className="hover:text-gray-600">Project</a></li>
        </ul>

        {/* Contact di sisi kanan untuk Desktop/Tablet (md ke atas) */}
        <div className="hidden md:block">
          <a href="#contact" className="hover:text-gray-600">Contact</a>
        </div>

        {/* Tombol Hamburger untuk Mobile (sm dan md ke bawah) */}
        <div className="md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown Menu untuk Mobile dengan Latar Belakang Putih dan Animasi Smooth dari Kanan */}
      <div
        className={`fixed z-20 inset-y-0 right-0 w-64 bg-white shadow-md p-4 transform ${
          navbarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <button
          onClick={() => setNavbarOpen(false)}
          className="absolute top-4 left-4 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="flex flex-col items-start space-y-4 mt-12">
          <li><a href="#about" className="hover:text-gray-600" onClick={() => setNavbarOpen(false)}>About</a></li>
          <li><a href="#experience" className="hover:text-gray-600" onClick={() => setNavbarOpen(false)}>Experience</a></li>
          <li><a href="#project" className="hover:text-gray-600" onClick={() => setNavbarOpen(false)}>Project</a></li>
          <li><a href="#contact" className="hover:text-gray-600" onClick={() => setNavbarOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;