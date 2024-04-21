import React from 'react';

const SponsorsPageSponsors = () => {
    return (
        <div id="Sponsors" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl text-gray-900 sm:text-4xl">
                        Gold Sponsor:
                    </h2>
                </div>
            </div>
            <div className="flex flex-col space-y-10 items-center justify-center">
                <div className="flex flex-col md:flex-row w-full md:space-x-4 items-center justify-center">
                    <a href="https://www.imc.com/ap/" target="_blank" rel="noopener noreferrer" className="w-full md:w-1/2">
                        <div className="w-full h-[200px] sm:h-[30vh] shadow-[0_4px_12px_rgba(255,215,0,0.5)] rounded-lg overflow-hidden mt-5 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-[0_8px_16px_rgba(255,215,0,0.7)] hover:bg-gold">
                            <img src={require('./imc.webp')} alt="Sponsor 1" className="w-full sm:h-1/2 h-1/3 object-scale-down" />
                            <div className="w-full sm:h-1/2 h-2/3 bg-white p-4 text-center overflow-auto">
                                <p>
                                    IMC is a trailblazing firm driven by an audacious vision – to establish itself as a preeminent
                                    global trading powerhouse. With a keen eye on the ever-evolving landscape, IMC embraces a
                                    relentless pursuit of improvement and innovation, daring to reimagine the boundaries of
                                    what's possible. Leveraging their dynamic approach, they not only seize opportunities
                                    in the present but also continuously strive to elevate their capabilities for a more
                                    prosperous future.
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl text-gray-900 sm:text-4xl">
                            Silver Sponsors:
                        </h2>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row-reverse w-full md:space-x-reverse md:space-x-4 items-center justify-center">
                    <a href="https://www.vivcourt.com/" target="_blank" rel="noopener noreferrer" className="w-full md:w-1/2">
                        <div className="w-full h-[200px] sm:h-[30vh] shadow-[0_4px_12px_rgba(192,192,192,0.5)] rounded-lg overflow-hidden mt-5 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-[0_8px_16px_rgba(192,192,192,0.7)] hover:bg-[#f0f0f0]">
                            <img src={require('./vivcourt.webp')} alt="Sponsor 2" className="w-full sm:h-1/2 h-1/3 object-scale-down" />
                            <div className="w-full sm:h-1/2 h-2/3 bg-white p-4 text-center overflow-auto">
                                <p>
                                    VivCourt transcends the traditional notion of a trading firm, redefining its very essence. 
                                    This ambitious collective of conscious capitalists fearlessly competes with the world's 
                                    leading trading giants. Harnessing the power of technology and data, they execute diverse
                                    trading strategies across a multitude of asset classes, seamlessly navigating the intricate
                                    landscape of global financial markets.
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="flex flex-col md:flex-row w-full md:space-x-4 items-center justify-center">
                    <a href="https://optiver.com/" target="_blank" rel="noopener noreferrer" className="w-full md:w-1/2">
                        <div className="w-full h-[200px] sm:h-[30vh] shadow-[0_4px_12px_rgba(192,192,192,0.5)] rounded-lg overflow-hidden mt-5 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-[0_8px_16px_rgba(192,192,192,0.7)] hover:bg-[#f0f0f0]">
                            <img src={require('./optiver.png')} alt="Sponsor 3" className="w-full sm:h-1/2 h-1/3 object-scale-down" />
                            <div className="w-full sm:h-1/2 h-2/3 bg-white p-4 text-center overflow-auto">
                                <p>
                                    Optiver, a leading proprietary trading firm, operates with the objective of enhancing 
                                    market functionality. With a workforce of nearly 2,000 employees spread across multiple 
                                    global offices, the company is focused on improving market efficiency, transparency, and 
                                    stability. Optiver's mission is to provide liquidity, competitive pricing, and reliable 
                                    risk management services, contributing to the overall improvement of market dynamics.
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl text-gray-900 sm:text-4xl">
                            Bronze Sponsor:
                        </h2>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row w-full md:space-x-4 items-center justify-center">
                    <a href="https://www.imc.com/ap/" target="_blank" rel="noopener noreferrer" className="w-full md:w-1/2">
                        <div className="w-full h-[200px] sm:h-[30vh] shadow-[0_4px_12px_rgba(205,127,50,0.5)] rounded-lg overflow-hidden mt-5 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-[0_8px_16px_rgba(205,127,50,0.5)] hover:bg-gold">
                            <img src={require('./citadel.jpeg')} alt="Sponsor 1" className="w-full sm:h-1/2 h-1/3 object-scale-down" />
                            <div className="w-full sm:h-1/2 h-2/3 bg-white p-4 text-center overflow-auto">
                                <p>
                                    Citadel, a leading proprietary trading firm, is dedicated to providing liquidity to ensure
                                    institutions and retail investors have the freedom to trade across global markets under
                                    any conditions. The company is committed to ongoing improvements in market functionality
                                    and actively pursues ambitious initiatives aimed at driving positive change. Citadel
                                    meets clients' liquidity needs across a diverse range of asset classes and has
                                    established itself as a trusted partner to some of the world's most significant
                                    financial institutions, including public pension programs, central banks, and
                                    broker-dealers, over a span of more than two decades.
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SponsorsPageSponsors;