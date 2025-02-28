import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="p-4">
    <div className="container mx-auto flex justify-between items-center">
      {/* Logo di sisi kiri */}
      <div className="text-2xl font-bold">👤</div>
  
      {/* Menu tengah (Experience, About, Social) */}
      <ul className="flex space-x-6 mx-auto">
        <li><a href="#experience" className="hover:text-gray-600">Experience</a></li>
        <li><a href="#about" className="hover:text-gray-600">About</a></li>
        <li><a href="#social" className="hover:text-gray-600">Social</a></li>
      </ul>
  
      {/* Contact di sisi kanan */}
      <div>
        <a href="#contact" className="hover:text-gray-600">Contact</a>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;