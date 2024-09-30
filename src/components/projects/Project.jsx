import React from 'react';
import { FaGithub, FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

const Tag = ({ color, text }) => (
    <span className={`bg-${color}-100 text-${color}-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full`}>
        {text}
    </span>
);

const ProjectCard = ({ title, link, icon, date, description, tags, contributors }) => (
    <div className="bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
        <div className="p-6">
            <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-semibold">{title}</h2>
                {link && (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                        {icon === 'github' ? <FaGithub size={24} /> : <FaCode size={24} />}
                    </a>
                )}
            </div>
            <p className="text-gray-600 mb-4">{date}</p>
            <p className="mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag, index) => (
                    <Tag key={index} {...tag} />
                ))}
            </div>
            {contributors && (
                <div className="border-t pt-2 flex flex-wrap">
                    {typeof contributors === 'string' ? contributors : contributors}
                </div>
            )}
        </div>
    </div>
);

const Projects = () => {
    const projects = [
        {
            title: "IMC Prosperity Github Repo",
            link: "https://github.com/sanchman21/imc-properity",
            icon: "github",
            date: "1 month ago",
            description: "Take a look at the code for our IMC Prosperity project! SQUAD members participated in the competition and they decided to share their code for the algorithmic part of the competition!\n\nThey were ranked 18th in Australia!",
            tags: [
                { color: "purple", text: "Programming" },
                { color: "orange", text: "Data Science" },
                { color: "red", text: "Python" },
                { color: "stone", text: "Quant Trading" }
            ],
            contributors: (
                <>
                    <a href="https://aisanch.me/" className="text-blue-500 underline mr-2" target="_blank" rel="noopener noreferrer">Sachman</a>
                    <a href="https://theskrtnerd.github.io/" className="text-blue-500 underline mr-2" target="_blank" rel="noopener noreferrer">Barry</a>
                    <a href="https://www.linkedin.com/in/rahul-tejeshwa/" className="text-blue-500 underline mr-2" target="_blank" rel="noopener noreferrer">Rahul</a>
                    <a href="https://www.linkedin.com/in/wesleyt427/" className="text-blue-500 underline mr-2" target="_blank" rel="noopener noreferrer">Wesley</a>
                    <a href="https://www.linkedin.com/in/ognjen-stankovic-14a613243/" className="text-blue-500 underline mr-2" target="_blank" rel="noopener noreferrer">Oggy</a>
                </>
            )
        },
        {
            title: "SQUAD Website Repo",
            link: "https://github.com/KnightRadiant44/SQUAD-Website",
            icon: "github",
            date: "Regularly updated",
            description: "Github repo containing the source code of this awesome website!\n\nPlease do make contributions/pull requests if you see anything that can be improved or simply want to add something new!",
            tags: [
                { color: "blue", text: "Reactjs" },
                { color: "yellow", text: "Javascript" },
                { color: "green", text: "HTML/CSS" }
            ],
            contributors: (
                <>
                    <a href="https://www.linkedin.com/in/mahir-islam/" className="text-blue-500 underline mr-2" target="_blank" rel="noopener noreferrer">Mahir</a>(Me!)
                </>
            )
        },
        {
            title: "Arbitrage Bot",
            date: "In progress!",
            description: "Coming Soon!",
            tags: [
                { color: "purple", text: "Programming" },
                { color: "red", text: "Python" }
            ],
            contributors: "Seriously smart people working on this project!"
        },
        {
            title: "Learn Python for Free!",
            link: "https://www.edx.org/learn/python/harvard-university-cs50-s-introduction-to-programming-with-python",
            icon: "code",
            date: "Get out of tutorial hell!",
            description: "Harvard's free Introduction to Python course on edX is highly acclaimed and an excellent starting point for learning Python. It requires no prior knowledge, making it accessible for beginners. Remember, there's no need to rush through it all—focusing on building projects is more beneficial than getting stuck in endless tutorials!",
            tags: [
                { color: "pink", text: "Learning" },
                { color: "red", text: "Python" }
            ]
        }
    ];

    return (
        <>
            <Helmet>
                <title>Projects</title>
            </Helmet>
            <div className="bg-[rgba(224,252,255)] w-full">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-24 pb-12">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">Projects!</h1>
                    <div className="lg:pr-12 xl:pr-24">
                        <p className="text-lg lg:text-xl mb-4 text-gray-700">
                            Check out the various projects our members have been working on. From web development (this website!) to trading competitions, we have it all!
                        </p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Projects;

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