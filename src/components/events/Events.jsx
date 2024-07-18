import React from 'react';

const EventCard = ({ title, description, instaLink, sponsors, collaborators }) => (
    <div className="group bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        <h3 className="text-xl font-semibold mb-4 text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300 mb-4">
            {description}
        </p>

        {sponsors && sponsors.length > 0 && (
            <div className="mb-3">
                <h4 className="font-semibold text-sm text-gray-700 mb-1">Sponsors:</h4>
                <div className="flex flex-wrap gap-2">
                    {sponsors.map((sponsor, index) => (
                        <span key={index} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                            {sponsor}
                        </span>
                    ))}
                </div>
            </div>
        )}

        {collaborators && collaborators.length > 0 && (
            <div className="mb-4">
                <h4 className="font-semibold text-sm text-gray-700 mb-1">Collaborated with:</h4>
                <div className="flex flex-wrap gap-2">
                    {collaborators.map((collaborator, index) => (
                        <span key={index} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                            {collaborator}
                        </span>
                    ))}
                </div>
            </div>
        )}

        <div className="mt-4 flex justify-end">
            <a
                href={instaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-indigo-600 text-white rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                Learn More
            </a>
        </div>
        <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-yellow-300 rounded-full opacity-30 group-hover:scale-150 transition-transform duration-500"></div>
    </div>
);

const Events = () => {
    const past_events = [
        {
            title: 'Sudoku Party',
            description: 'We hosted a thrilling Sudoku party where participants raced against the clock to solve puzzles and compete for the title of Ultimate Sudoku Champion. 🏆🧩',
            instaLink: 'https://www.instagram.com/p/CwjWExKyqmO/',
            collaborators: ['AUMS']
        },
        {
            title: 'SQUAD Maths Olympiad',
            description: 'The annual Maths Olympiad was held. Participants solved math problems and competed for the title of Ultimate Maths Champion. 🏆🔢',
            instaLink: 'https://www.instagram.com/p/C4JvfZ8yW88/',
            sponsors: ['IMC']
        },
        {
            title: "Adelaide's First Datathon",
            description: "🚀 Adelaide's first-ever Datathon was held! 🚀 Teams unleashed their analytical prowess and tackled challenges head-on. 🧠📊",
            instaLink: 'https://www.instagram.com/p/C4vAdLVyFO3/',
            sponsors: ['IMC', 'PWC', 'AEDA'],
        },
    ];
    return (
        <>
            <div className="pt-24 bg-[rgba(224,252,255)] flex flex-col items-start p-4 pl-12">
                <h1 className="text-2xl mb-4 font-bold">Events!</h1>
                <p className="mb-4">
                    Keep yourself informed about the various activities we offer, including social gatherings, skill-building
                    workshops, and chances to expand your professional network.
                </p>
            </div>
            <div className="max-w-7xl mx-auto mt-16">
                <div className="text-center">
                    <h2 className="text-3xl text-gray-900 sm:text-4xl">
                        Upcoming Events
                    </h2>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-20 md:px-8">
                <div className="text-center text-2xl text-gray-500 float-effect mt-10">
                    No upcoming events, keep an eye out for more!
                </div>
            </div>

            <style jsx>{`
                .float-effect {
                    animation: float 3s ease-in-out infinite;
                }

                @keyframes float {
                    0% {
                        transform: translatey(0px);
                    }
                    50% {
                        transform: translatey(-20px);
                    }
                    100% {
                        transform: translatey(0px);
                    }
                }
            `}</style>

            <div className="max-w-7xl mx-auto mt-16">
                <div className="text-center">
                    <h2 className="text-3xl text-gray-900 sm:text-4xl">
                        Past Events
                    </h2>
                </div>
            </div>
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-wrap justify-center">
                    {past_events.map((past_event, index) => (
                        <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 p-2 flex justify-center">
                            <EventCard key={index} {...past_event} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Events;
