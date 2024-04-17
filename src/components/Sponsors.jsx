import React from 'react';

const Sponsors = () => {
    return (
        <div id="Sponsors" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl text-gray-900 sm:text-4xl">
                        Proudly Sponsored:
                    </h2>
                </div>
            </div>
            <div className="flex flex-col items-center gap-10 md:gap-20">
                <a href="https://www.imc.com/ap/" target="_blank" rel="noopener noreferrer">
                    <div className="w-full sm:w-[80vw] md:w-[40vw] max-w-[500px] h-auto sm:h-[40vh] max-h-[230px] shadow-[0_4px_12px_rgba(255,215,0,0.5)] rounded-lg overflow-hidden mt-5 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-[0_8px_16px_rgba(255,215,0,0.7)] hover:bg-gold">
                        <img src={require('./imc.webp')} alt="Sponsor 1" className="w-full h-full object-contain" />
                    </div>
                </a>
                <div className="flex flex-col md:flex-row justify-center items-center w-full gap-10 md:gap-20">
                    <a href="https://www.vivcourt.com/" target="_blank" rel="noopener noreferrer">
                        <div className="w-[80vw] md:w-[40vw] max-w-[500px] h-[40vh] max-h-[230px] shadow-[0_4px_12px_rgba(192,192,192,0.5)] rounded-lg overflow-hidden mt-5 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-[0_8px_16px_rgba(192,192,192,0.7)] hover:bg-[#f0f0f0]">
                            <img src={require('./vivcourt.webp')} alt="Sponsor 1" className="w-full h-full object-cover" />
                        </div>
                    </a>
                    <a href="https://optiver.com/" target="_blank" rel="noopener noreferrer">
                        <div className="w-full sm:w-[80vw] md:w-[40vw] max-w-[500px] h-[200px] sm:h-[40vh] max-h-[230px] shadow-[0_4px_12px_rgba(192,192,192,0.5)] rounded-lg overflow-hidden mt-5 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-[0_8px_16px_rgba(192,192,192,0.7)] hover:bg-[#f0f0f0]">
                            <img src={require('./optiver.png')} alt="Sponsor 3" className="w-full h-full object-scale-down" />
                        </div>
                    </a>
                </div>
                <div className="w-full sm:w-[80vw] md:w-[40vw] max-w-[500px] h-[40vh] max-h-[230px] shadow-[0_4px_12px_rgba(205,127,50,0.5)] rounded-lg overflow-hidden mt-5 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-[0_8px_16px_rgba(205,127,50,0.7)] hover:bg-[#f4e7d8]">
                    <a href="https://www.citadelsecurities.com/" target="_blank" rel="noopener noreferrer">
                        <img src={require('./citadel.jpeg')} alt="Sponsor 1" className="w-full h-full object-cover" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Sponsors;