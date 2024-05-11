import React from 'react';

const Aeda = () => {

    return (
        <div id="Sponsors" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl text-gray-900 sm:text-4xl">
                        Supported By:
                    </h2>
                </div>
            </div>
            <div className="flex justify-center">
                <a href="https://www.aedasa.com.au/" target="_blank" rel="noopener noreferrer">
                    <div className="w-[300px] h-[200px] sm:w-[60vw] sm:h-[30vh] md:w-[30vw] max-w-[400px] max-h-[200px] shadow-[0_4px_12px_rgba(0,0,0,1)] rounded-lg overflow-hidden mt-5 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-[0_8px_16px_rgba(0,0,0,1)] hover:bg-black">
                        <img src={require('./aeda.webp')} alt="Sponsor 1" className="w-full h-full object-cover" />
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Aeda;