import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineArrowDown } from 'react-icons/ai';
import { ReactTyped } from 'react-typed';
import ScrollToTopButton from './ScrollToTopButton';

function Navbar() {

  const scrollToNextSection = () => {
    document.getElementById('AboutUs').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen">
        <div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-[-1]"
        style={{
          backgroundImage: `url(${require('./giphy.gif')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="your-class-name"> 
        <div className="max-w-[800px] lg:max-w-[1200px] mx-auto lg:mx-auto h-screen flex flex-col justify-center px-4 text-center lg:text-center">
          <div>
            <p className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Welcome to the</p>
            <div className="flex items-center justify-center lg:justify-center">
              <ReactTyped
                className="text-white font-bold text-5xl md:text-6xl lg:text-6xl xl:text-7xl"
                strings={['SQUAD', 'Society of Quantitative Analysis and Data']}
                typeSpeed={70}
                backSpeed={80}
                loop
              />
            </div>
            <a href="https://clubs.getqpay.com/?tab=memberships&s=8346" target="_blank" rel="noopener noreferrer">
              <button className="bg-[#47B6FE] hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full mt-4 transition-all duration-300 ease-in-out transform hover:scale-110 mx-auto lg:mx-auto">
                Join Us!
              </button>
            </a>
          </div>
        </div>
        <button
          onClick={scrollToNextSection}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full shadow-md animate-bounce"
        >
          <AiOutlineArrowDown size={24} className="text-[#47B6FE]" />
        </button>
      </div>
      <ScrollToTopButton />
    </div>
  );
}

export default Navbar;