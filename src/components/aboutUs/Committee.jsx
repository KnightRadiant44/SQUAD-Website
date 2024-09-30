import React from 'react';
import { Helmet } from 'react-helmet-async';

const TeamMemberCard = ({ name, role, quote, imageSrc }) => (
    <div className="flex flex-col items-center bg-white shadow-lg p-4 rounded-lg w-full h-auto">
        <div className="w-36 h-36 rounded-full overflow-hidden mb-4">
            <img src={imageSrc} alt={`${name}'s profile`} className="w-full h-full object-cover object-center" />
        </div>
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <h3 className="text-lg text-gray-600 mb-2">{role}</h3>
        <p className="text-gray-800 text-center">{quote}</p>
    </div>
);

const Committee = () => {
    const teamMembers = [
        {
            name: "Khanh Nguyen",
            role: "President",
            quote: "su-su-su-supernova",
            imageSrc: require('./pres.jpeg')
        },
        {
            name: "Michelle Nguyen",
            role: "Vice President (Data Science)",
            quote: "No one is born great, only those achieve greatness",
            imageSrc: require('./vp.png')
        },
        {
            name: "Ognjen (Oggy) Stankovic",
            role: "Vice President (Quant)",
            quote: "Buy low Sell high",
            imageSrc: require('./vp_quant.jpeg')
        },
        {
            name: "Farmaan Syed",
            role: "External Relations Manager",
            quote: '"I\'m not superstitious, but I am a little stitious." – Michael Scott',
            imageSrc: require('./erm.jpg')
        },
        {
            name: "Sanchit Goel",
            role: "Projects Manager",
            quote: "It is happy hour somewhere",
            imageSrc: require('./pm.jpeg')
        },
        {
            name: "Elvis Tran",
            role: "Event Officer",
            quote: '"Debugging is like being the detective in a crime movie where you are also the murderer." - Filipe Fortes',
            imageSrc: require('./em.jpg')
        },
        {
            name: "Anne Yeung",
            role: "Social Media Officer",
            quote: "MATH = Mental Abuse To Humans",
            imageSrc: require('./socmed2.PNG')
        },
        {
            name: "Alex (Ngoc-Bich) Nguyen",
            role: "Social Media Officer",
            quote: "A low-key introvert data analyst who is addicted to social media 🤖",
            imageSrc: require('./socmed1.jpeg')
        },
        {
            name: "Mahir N. Islam",
            role: "First-year Representative",
            quote: "Life before death, strength before weakness, journey before destination",
            imageSrc: require('./meow.jpg')
        }
    ];

    return (
        <>
            <Helmet>
                <title>Committee</title>
            </Helmet>
            <div className="bg-[rgba(224,252,255)] w-full">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-24 pb-12">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">Meet the Team!</h1>
                    <div className="lg:pr-12 xl:pr-24">
                        <p className="text-lg lg:text-xl mb-4 text-gray-700">
                            Get to know the SQUAD team, whose mission is to foster new avenues for students to network, develop their skills, and receive the encouragement they need!
                        </p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard key={index} {...member} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Committee;