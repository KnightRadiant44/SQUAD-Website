import React from 'react';
import Avatar from 'boring-avatars';
import { Helmet } from 'react-helmet-async';


const Committee = () => {
    return (
        <>
          <Helmet>
        <title>Committee</title>
    </Helmet>
            <div className="pt-24 bg-[rgba(224,252,255)] flex flex-col items-start p-4 pl-12">
                <h1 className="text-2xl mb-4 font-bold">Meet the team!</h1>
                <p className="mb-4">
                    Get to know the SQUAD team, whose mission is to foster new avenues for students to network, develop their skills, and receive the encouragement they need!
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-y-6 gap-x-4 px-4 md:px-8 mb-20 mt-8 mx-auto">
                <div className="flex flex-col items-center bg-white shadow-lg p-4 rounded-lg w-80 h-auto md:h-92 mx-auto mt-8">
                    <div className="w-36 h-36 rounded-full overflow-hidden">
                        <img src={require('./pres.jpeg')} alt="Profile" className="w-full h-full object-cover object-center" />
                    </div>
                    <h2 className="text-xl font-bold mb-2">Khanh Nguyen</h2>
                    <h3 className="text-lg text-gray-600 mb-2">President</h3>
                    <p className="text-gray-800 text-center">
                        su-su-su-supernova
                    </p>
                </div>
                <div className="flex flex-col items-center bg-white shadow-lg p-4 rounded-lg w-80 h-auto md:h-92 mx-auto mt-8">
                    <div className="w-36 h-36 rounded-full overflow-hidden">
                        <img src={require('./vp.png')} alt="Profile" className="w-full h-full object-cover object-center" />
                    </div>
                    <h2 className="text-xl font-bold mb-2">Michelle Nguyen</h2>
                    <h3 className="text-lg text-gray-600 mb-2">Vice President</h3>
                    <p className="text-gray-800 text-center">
                    No one is born great, only those achieve greatness                     </p>
                </div>
                <div className="flex flex-col items-center bg-white shadow-lg p-4 rounded-lg w-80 h-auto md:h-92 mx-auto mt-8">
                    <div className="w-36 h-36 rounded-full overflow-hidden">
                        <img src={require('./erm.jpg')} alt="Profile" className="w-full h-full object-cover object-center" />
                    </div>
                    <h2 className="text-xl font-bold mb-2">Farmaan Syed</h2>
                    <h3 className="text-lg text-gray-600 mb-2">External Relations Manager</h3>
                    <p className="text-gray-800 text-center">
                    “I’m not superstitious, but I am a little stitious.” – Michael Scott                     </p>
                </div>
                <div className="flex flex-col items-center bg-white shadow-lg p-4 rounded-lg w-80 h-auto md:h-92 mx-auto mt-8">
                    <div className="w-36 h-36 rounded-full overflow-hidden">
                        <img src={require('./pm.jpeg')} alt="Profile" className="w-full h-full object-cover object-center" />
                    </div>
                    <h2 className="text-xl font-bold mb-2">Sanchit Goel</h2>
                    <h3 className="text-lg text-gray-600 mb-2">Projects Manager</h3>
                    <p className="text-gray-800 text-center">
                    It is happy hour somewhere                     </p>
                </div>
                <div className="flex flex-col items-center bg-white shadow-lg p-4 rounded-lg w-80 h-auto md:h-92 mx-auto mt-8">
                    <div className="w-36 h-36 rounded-full overflow-hidden">
                        <img src={require('./meow.jpg')} alt="Profile" className="w-full h-full object-cover object-center" />
                    </div>
                    <h2 className="text-xl font-bold mb-2">Mahir N. Islam</h2>
                    <h3 className="text-lg text-gray-600 mb-2">First-year Representative</h3>
                    <p className="text-gray-800 text-center">
                    Life before death, strength before weakness, journey before destination                     </p>
                </div>
            </div>
        </>
    );
};

export default Committee;