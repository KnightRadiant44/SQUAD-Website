import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineArrowDown } from 'react-icons/ai';
import { ReactTyped } from 'react-typed';

function Navbar() {
  const [nav, setNav] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNav = () => {
    setNav(!nav);

    if (!nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
        className={`fixed top-0 left-0 w-full bg-white z-10 transition-shadow duration-300 ${
          isScrolled
            ? 'shadow-[0_4px_12px_rgba(0,0,0,0.25)]'
            : 'shadow-[0_2px_6px_rgba(0,0,0,0.1)]'
        }`}
      >     <div
        className="relative flex justify-between items-center h-16 max-w-1240 mx-auto px-4 text-white z-10"
               >
        <div className="flex items-center h-16">
          <img
            src={require('./logo.png')}
            alt="Squad Logo"
            className="h-8 mr-4 pl-4 sm:pl-8 md:pl-12 lg:pl-16 xl:pl-20 2xl:pl-24"
            style={{ filter: 'grayscale(0%)' }}
            onMouseOver={(e) => (e.target.style.filter = 'grayscale(18%)')}
            onMouseOut={(e) => (e.target.style.filter = 'grayscale(0%)')}
          />
        </div>
        <ul className="hidden md:flex space-x-4 text-[#000000] h-16 items-center">
          <li className="p-4 hover:text-gray-500">Home</li>
          <li className="p-4 hover:text-gray-500">About Us</li>
          <li className="p-4 hover:text-gray-500">Sponsors</li>
          <li className="p-4 hover:text-gray-500">Events</li>
          <li className="p-4 hover:text-gray-500">Contact Us</li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {!nav ? (
            <AiOutlineMenu size={24} className="cursor-pointer text-[#000000]" />
          ) : (
            <AiOutlineClose size={24} className="cursor-pointer text-[#000000]" />
          )}
        </div>
        <div className={`absolute top-16 left-0 w-full h-screen bg-[rgba(255,255,255,0.9)] py-4 px-4 z-10 transition-all duration-500 ease-in-out transform origin-top ${nav ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}>
          <ul className="flex flex-col h-full justify-around text-[#000000]">
            <li className="p-4 hover:text-gray-500 border-b border-gray-200">Home</li>
            <li className="p-4 hover:text-gray-500 border-b border-gray-200">About Us</li>
            <li className="p-4 hover:text-gray-500 border-b border-gray-200">Sponsors</li>
            <li className="p-4 hover:text-gray-500 border-b border-gray-200">Events</li>
            <li className="p-4 hover:text-gray-500">Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;