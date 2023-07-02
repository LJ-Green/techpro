import React, { useState } from "react";
import Name from './../assets/CompanyName.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-transparent">
      <div className="md:hidden ml-auto flex">
        <img className="w-[200px] opacity-90" src={Name} alt="Name" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white hover:text-gray-300 transition duration-300 cursor-pointer"
          viewBox="0 0 448 512"
          onClick={toggleMenu}
        >
          <path
            fill="currentColor"
            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
          />
         </svg>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="z-20 absolute top-[60px] right-4 bg-white bg-opacity-90 rounded-md shadow-lg p-4">
          <ul className="flex flex-col space-y-2">
            <li>
              <a href="/" className="text-gray-800 hover:text-gray-600">
                Home
              </a>
            </li>
            <li>
              <a href="#about-setion" className="text-gray-800 hover:text-gray-600">
                About
              </a>
            </li>
            <li>
              <a href="#services-section" className="text-gray-800 hover:text-gray-600">
                Services
              </a>
            </li>
            <li>
              <a href="#team-section" className="text-gray-800 hover:text-gray-600">
                Team
              </a>
            </li>
            <li>
              <a href="#book-section" className="text-gray-800 hover:text-gray-600">
                Book
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-4">
      <img className="w-[200px] opacity-90" src={Name} alt="Name" />
        <li>
          <a href="/" className="text-black opacity-50 hover:text-white hover:opacity-100 font-bold transition duration-300">
            Home
          </a>
        </li>
        <li>
          <a href="#about-section" className="text-black opacity-50 hover:text-white hover:opacity-100 font-bold transition duration-300">
            About
          </a>
        </li>
        <li>
          <a href="#services-section" className="text-black opacity-50 hover:text-white hover:opacity-100 font-bold transition duration-300">
            Services
          </a>
        </li>
        <li>
          <a href="#team-section" className="text-black opacity-50 hover:text-white hover:opacity-100 font-bold transition duration-300">
            Team
          </a>
        </li>
        <li>
          <a href="#book-section" className="text-black opacity-50 hover:text-white hover:opacity-100 font-bold transition duration-300">
            Book
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;