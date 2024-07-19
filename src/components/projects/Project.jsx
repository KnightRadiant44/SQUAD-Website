import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';

// color templates below at the end

const Project = () => {
    return (
        <>
            <div className="pt-24 bg-[rgba(224,252,255)] flex flex-col items-start p-4 pl-12">
                <h1 className="text-2xl mb-4 font-bold">Projects!</h1>
                <p className="mb-4">
                    Check out the various projects our members have been working on. From web development (this website!) to trading competitions, we have it all!
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-4 px-4 md:px-8 mb-20 mt-8 mx-auto">
                <div className="bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                    <div className="p-6">
                        <div className="flex items-center">
                            <h2 className="text-lg font-semibold mb-2">IMC Prosperity Github Repo</h2>
                            <a href="https://github.com/sanchman21/imc-properity" target="_blank" rel="noopener noreferrer" className="ml-2">
                                <FaGithub size={24} />
                            </a>
                        </div>
                        <p className="text-gray-600 mb-4">1 month ago</p>
                        <p className="mb-4 border-t border-b pt-2 pb-2">
                            Take a look at the code for our IMC Prosperity project! SQUAD members participated in the competition and they decided to share their code for the algorithmic part of the competition!<br />
                            <br />
                            <strong>They were ranked 18th in Australia! <br /></strong>
                        </p>
                        <div className="flex gap-2 flex-wrap mb-4">
                            <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">Programming</span>
                            <span className="bg-orange-100 text-orange-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">Data Science</span>
                            <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">Python</span>
                            <span className="bg-stone-100 text-stone-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">Quant Trading</span>
                        </div>
                        <div className="border-t pt-2 flex flex-wrap">
                            <a href="https://aisanch.me/" className="text-blue-500 underline mr-2" target="_blank" rel="noopener noreferrer">Sachman</a>
                            <a href="https://theskrtnerd.github.io/" className="text-blue-500 underline mr-2" target="_blank" rel="noopener noreferrer">Barry</a>
                            <a href="https://www.linkedin.com/in/rahul-tejeshwa/" className="text-blue-500 underline mr-2" target="_blank" rel="noopener noreferrer">Rahul</a>
                            <a href="https://www.linkedin.com/in/wesleyt427/" className="text-blue-500 underline mr-2" target="_blank" rel="noopener noreferrer">Wesley</a>
                            <a href="https://www.linkedin.com/in/ognjen-stankovic-14a613243/" className="text-blue-500 underline mr-2" target="_blank" rel="noopener noreferrer">Oggy</a>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                    <div className="p-6">
                        <div className="flex items-center">
                            <h2 className="text-lg font-semibold mb-2">SQUAD Website Repo</h2>
                            <a href="https://github.com/KnightRadiant44/SQUAD-Website" target="_blank" rel="noopener noreferrer" className="ml-2">
                                <FaGithub size={24} />
                            </a>
                        </div>
                        <p className="text-gray-600 mb-4">Regularly updated</p>
                        <p className="mb-4 border-t border-b pt-2 pb-2">
                            Github repo containing the source code of this awesome website!<br />
                            <br />
                            Please do make contributions/pull requests if you see anything that can be improved or simply want to add something new!
                        </p>
                        <div className="flex gap-2 flex-wrap mb-4">
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">Reactjs</span>
                            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">Javascript</span>
                            <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">HTML/CSS</span>
                        </div>
                        <div className="border-t pt-2 flex flex-wrap">
                            <a href="https://www.linkedin.com/in/mahir-islam/" className="text-blue-500 underline mr-2" target="_blank" rel="noopener noreferrer">Mahir</a>(Me!)
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                    <div className="p-6">
                        <div className="flex items-center">
                            <h2 className="text-lg font-semibold mb-2">Arbitrage Bot</h2>
                        </div>
                        <p className="text-gray-600 mb-4">In progress!</p>
                        <p className="mb-4 border-t border-b pt-2 pb-2 text-center">
                            <strong> Coming Soon! </strong>
                        </p>
                        <div className="flex gap-2 flex-wrap mb-4">
                            <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">Programming</span>
                            <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">Python</span>
                        </div>
                        <div className="border-t pt-2 flex flex-wrap">
                            Seriously smart people working on this project!
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                    <div className="p-6">
                        <div className="flex items-center">
                            <h2 className="text-lg font-semibold mb-2">Learn Python for Free!</h2>
                            <a href="https://www.edx.org/learn/python/harvard-university-cs50-s-introduction-to-programming-with-python" target="_blank" rel="noopener noreferrer" className="ml-2">
                                <FaCode size={24} />
                            </a>
                        </div>
                        <p className="text-gray-600 mb-4">Get out of tutorial hell!</p>
                        <p className="mb-4 border-t border-b pt-2 pb-2">
                        Harvard's free Introduction to Python course on edX is highly acclaimed and an excellent starting 
                        point for learning Python. It requires no prior knowledge, making it accessible for beginners.
                         Remember, there's no need to rush through it all—focusing on building projects is more beneficial
                          than getting stuck in endless tutorials!
                        </p>
                        <div className="flex gap-2 flex-wrap mb-4">
                            <span className="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">Learning</span>
                            <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">Python</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Project;

// Color classes:
// bg-rose-100 text-rose-800 (Rose)
// bg-pink-100 text-pink-800 (Pink)
// bg-fuchsia-100 text-fuchsia-800 (Fuchsia)
// bg-purple-100 text-purple-800 (Purple)
// bg-violet-100 text-violet-800 (Violet)
// bg-indigo-100 text-indigo-800 (Indigo)
// bg-blue-100 text-blue-800 (Blue)
// bg-sky-100 text-sky-800 (Sky)
// bg-cyan-100 text-cyan-800 (Cyan)
// bg-teal-100 text-teal-800 (Teal)
// bg-emerald-100 text-emerald-800 (Emerald)
// bg-green-100 text-green-800 (Green)
// bg-lime-100 text-lime-800 (Lime)
// bg-yellow-100 text-yellow-800 (Yellow)
// bg-amber-100 text-amber-800 (Amber)
// bg-orange-100 text-orange-800 (Orange)
// bg-red-100 text-red-800 (Red)
// bg-stone-100 text-stone-800 (Stone) - USED
// bg-neutral-100 text-neutral-800 (Neutral)
// bg-zinc-100 text-zinc-800 (Zinc)
// bg-gray-100 text-gray-800 (Gray)
// bg-slate-100 text-slate-800 (Slate)
// other colors not mentioned above used as well, this is just here for future options