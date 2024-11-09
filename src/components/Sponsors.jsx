import React from 'react';

const SponsorCard = ({ sponsor }) => {
    const shadowColors = {
        imc: 'rgba(255,215,0,0.5)',
        vivcourt: 'rgba(192,192,192,0.5)',
        optiver: 'rgba(192,192,192,0.5)',
        citadel: 'rgba(205,127,50,0.5)',
        'jane-street': 'rgba(205,127,50,0.5)',
    };

    const hoverShadowColors = {
        imc: 'rgba(255,215,0,0.7)',
        vivcourt: 'rgba(192,192,192,0.7)',
        optiver: 'rgba(192,192,192,0.7)',
        citadel: 'rgba(205,127,50,0.7)',
        'jane-street': 'rgba(205,127,50,0.7)',
    };

    const hoverBgColors = {
        imc: 'gold',
        vivcourt: '#f0f0f0',
        optiver: '#f0f0f0',
        citadel: '#f4e7d8',
        'jane-street': '#f4e7d8',
    };

    return (
        <div className="flex justify-center">
            <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                <div 
                    className="w-[300px] h-[200px] sm:w-[60vw] sm:h-[30vh] md:w-[30vw] max-w-[400px] max-h-[200px] rounded-lg overflow-hidden mt-5 transition-transform duration-500 ease-in-out transform hover:scale-105"
                    style={{
                        boxShadow: `0 4px 12px ${shadowColors[sponsor.id]}`,
                        ':hover': {
                            boxShadow: `0 8px 16px ${hoverShadowColors[sponsor.id]}`,
                            backgroundColor: hoverBgColors[sponsor.id]
                        }
                    }}
                >
                    <img 
                        src={sponsor.imagePath}
                        alt={sponsor.name} 
                        className={`w-full h-full ${sponsor.objectFit || 'object-contain'}`}
                    />
                </div>
            </a>
        </div>
    );
};

const Sponsors = () => {
    const sponsors = [
        {
            id: 'imc',
            name: 'IMC',
            url: 'https://www.imc.com/ap/',
            imagePath: require('./imc.webp'),
            objectFit: 'object-contain'
        },
        {
            id: 'vivcourt',
            name: 'Vivcourt',
            url: 'https://www.vivcourt.com/',
            imagePath: require('./vivcourt.webp'),
            objectFit: 'object-cover'
        },
        {
            id: 'optiver',
            name: 'Optiver',
            url: 'https://optiver.com/',
            imagePath: require('./optiver.png'),
            objectFit: 'object-scale-down'
        },
        {
            id: 'citadel',
            name: 'Citadel',
            url: 'https://www.citadelsecurities.com/',
            imagePath: require('./citadel.png'),
            objectFit: 'object-cover'
        },
        {
            id: 'jane-street',
            name: 'Jane Street',
            url: 'https://www.janestreet.com/',
            imagePath: require('./js2.jpeg'),
            objectFit: 'object-cover'
        }
    ];

    return (
        <div id="Sponsors" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                        Proudly Sponsored By
                    </h2>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center justify-items-center">
                {sponsors.map((sponsor, index) => (
                    <div 
                        key={sponsor.id}
                        className={`${
                            index === sponsors.length - 1 && sponsors.length % 2 !== 0 
                                ? 'md:col-span-2'
                                : ''
                        }`}
                    >
                        <SponsorCard sponsor={sponsor} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sponsors;