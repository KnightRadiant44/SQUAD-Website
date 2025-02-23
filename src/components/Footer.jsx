import React from "react";

const Footer = () => {
  return (
    <div id="Footer" className="bg-[rgba(242,250,250)] text-black p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between lg:space-x-10">
        <div className="flex flex-col items-center md:items-start pr-4 text-center md:text-left">
          <p className="text-sm mb-2">© 2025 SQUAD. All rights reserved.</p>
        </div>
        <div className="flex flex-row justify-center md:justify-end space-x-4 mt-4 md:mt-0">
          <a
            href="https://www.facebook.com/squadadelaide"
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 max-w-[100px] max-h-[100px] shadow-md rounded-lg overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            <img
              src={require("./fb2.jpeg")}
              alt="Facebook"
              className="w-full h-full object-cover"
            />
          </a>
          <a
            href="https://www.instagram.com/squadadelaide/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 max-w-[100px] max-h-[100px] shadow-md rounded-lg overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            <img
              src={require("./insta.jpeg")}
              alt="Twitter"
              className="w-full h-full object-cover"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/squad-adelaide/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 max-w-[100px] max-h-[100px] shadow-md rounded-lg overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            <img
              src={require("./ln.jpeg")}
              alt="Instagram"
              className="w-full h-full object-cover"
            />
          </a>
          <a
            href="https://discord.com/invite/9ezxQrvAUf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 max-w-[100px] max-h-[100px] shadow-md rounded-lg overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            <img
              src={require("./dis.jpeg")}
              alt="Instagram"
              className="w-full h-full object-cover"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
