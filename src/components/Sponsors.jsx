import React from 'react';

const Sponsors = () => {
    return (
        <div id="Sponsors" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                        Proudly Sponsored By
                    </h2>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center justify-center">
                <div className="flex justify-center">
                    <a href="https://www.imc.com/ap/" target="_blank" rel="noopener noreferrer">
                        <div className="w-[300px] h-[200px] sm:w-[60vw] sm:h-[30vh] md:w-[30vw] max-w-[400px] max-h-[200px] shadow-[0_4px_12px_rgba(255,215,0,0.5)] rounded-lg overflow-hidden mt-5 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-[0_8px_16px_rgba(255,215,0,0.7)] hover:bg-gold">
                            <img src={require('./imc.webp')} alt="Sponsor 1" className="w-full h-full object-contain" />
                        </div>
                    </a>
                </div>
                <div className="flex justify-center">
                    <a href="https://www.vivcourt.com/" target="_blank" rel="noopener noreferrer">
                        <div className="w-[300px] h-[200px] sm:w-[60vw] sm:h-[30vh] md:w-[30vw] max-w-[400px] max-h-[200px] shadow-[0_4px_12px_rgba(192,192,192,0.5)] rounded-lg overflow-hidden mt-5 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-[0_8px_16px_rgba(192,192,192,0.7)] hover:bg-[#f0f0f0]">
                            <img src={require('./vivcourt.webp')} alt="Sponsor 2" className="w-full h-full object-cover" />
                        </div>
                    </a>
                </div>
                <div className="flex justify-center">
                    <a href="https://optiver.com/" target="_blank" rel="noopener noreferrer">
                        <div className="w-[300px] h-[200px] sm:w-[60vw] sm:h-[30vh] md:w-[30vw] max-w-[400px] max-h-[200px] shadow-[0_4px_12px_rgba(192,192,192,0.5)] rounded-lg overflow-hidden mt-5 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-[0_8px_16px_rgba(192,192,192,0.7)] hover:bg-[#f0f0f0]">
                            <img src={require('./optiver.png')} alt="Sponsor 3" className="w-full h-full object-scale-down" />
                        </div>
                    </a>
                </div>
                <div className="flex justify-center">
                    <a href="https://www.citadelsecurities.com/" target="_blank" rel="noopener noreferrer">
                        <div className="w-[300px] h-[200px] sm:w-[60vw] sm:h-[30vh] md:w-[30vw] max-w-[400px] max-h-[200px] shadow-[0_4px_12px_rgba(205,127,50,0.5)] rounded-lg overflow-hidden mt-5 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-[0_8px_16px_rgba(205,127,50,0.7)] hover:bg-[#f4e7d8]">
                            <img src={require('./citadel.png')} alt="Sponsor 4" className="w-full h-full object-cover" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Sponsors;