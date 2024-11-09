import React from 'react';
import { Helmet } from 'react-helmet-async';

const SponsorCard = ({ name, logo, description, link, tier }) => {
  const tierColors = {
    gold: 'from-yellow-300 via-yellow-400 to-yellow-600',
    silver: 'from-gray-300 via-gray-100 to-gray-400',
    bronze: 'from-amber-700 to-amber-900'
  };

  const buttonColors = {
    gold: 'bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700',
    silver: 'bg-gradient-to-r from-gray-400 to-gray-600 hover:from-gray-500 hover:to-gray-700',
    bronze: 'bg-amber-800 hover:bg-amber-900'
  };

  const borderColors = {
    gold: 'border-yellow-400',
    silver: 'border-gray-300',
    bronze: 'border-amber-800'
  };

  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 border-t-4 ${borderColors[tier]} flex flex-col h-full`}>
      <div className={`h-2 bg-gradient-to-r ${tierColors[tier]}`}></div>
      <div className="p-6 flex flex-col flex-grow">
        <img src={logo} alt={`${name} logo`} className="h-20 mx-auto mb-4 object-contain" />
        <h3 className="text-xl font-semibold text-center mb-2">{name}</h3>
        <div className="flex-grow">
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
        </div>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`block w-full text-center py-2 px-4 rounded mt-auto ${buttonColors[tier]} text-white font-semibold transition duration-300 shadow-md hover:shadow-lg`}
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

const SponsorsPage = () => {
  const sponsors = [
    {
      name: 'IMC',
      logo: require('./imc.webp'),
      description: 'IMC is a trailblazing firm driven by an audacious vision – to establish itself as a preeminent global trading powerhouse.',
      link: 'https://www.imc.com/ap/',
      tier: 'gold'
    },
    {
      name: 'Vivcourt',
      logo: require('./vivcourt.webp'),
      description: 'VivCourt transcends the traditional notion of a trading firm, redefining its very essence.',
      link: 'https://www.vivcourt.com/',
      tier: 'silver'
    },
    {
      name: 'Optiver',
      logo: require('./optiver.png'),
      description: 'Optiver, a leading proprietary trading firm, operates with the objective of enhancing market functionality.',
      link: 'https://optiver.com/',
      tier: 'silver'
    },
    {
      name: 'Citadel',
      logo: require('./citadel.jpeg'),
      description: 'Citadel, a leading trading firm, is dedicated to providing liquidity to ensure institutions and retail investors have the freedom to trade across global markets.',
      link: 'https://www.citadelsecurities.com/',
      tier: 'bronze'
    },
    {
      name: 'Jane Street',
      logo: require('./js2.jpeg'),
      description: 'Jane Street is a quantitative trading firm and liquidity provider with a unique focus on technology and collaborative problem solving.',
      link: 'https://www.janestreet.com/',
      tier: 'bronze'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Our Sponsors | SQUAD</title>
      </Helmet>
      <div className="bg-[rgba(224,252,255)] w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-24 pb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">Our Valued Sponsors</h1>
          <div className="lg:pr-12 xl:pr-24">
            <p className="text-lg lg:text-xl mb-4 text-gray-700">
              The Society of Quantitative Analysis and Data (SQUAD) owes its success to the invaluable partnerships forged 
              with industry pioneers. In an era driven by data-centric decisions and predictive models, our esteemed
              collaborators fuel SQUAD's mission to cultivate the next generation of quantitative experts and data
              scientists, empowering individuals to thrive in a data-driven world.
            </p>
            <div className="mt-8">
              <p className="text-lg lg:text-xl font-semibold mb-4 text-gray-800">
                Interested in sponsoring?
              </p>
              <a 
                href="mailto:squad@clubs.youx.org.au" 
                className="inline-block bg-[#47B6FE] hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {sponsors.map((sponsor, index) => (
            <div 
              key={index} 
              className={`lg:p-6 ${
                index === sponsors.length - 1 && sponsors.length % 2 !== 0 
                  ? 'md:col-span-2 md:w-1/2 md:mx-auto'
                  : ''
              }`}
            >
              <SponsorCard {...sponsor} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorsPage;