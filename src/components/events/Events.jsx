import React from 'react';
import { Helmet } from 'react-helmet-async';


const UpcomingEventCard = ({ title, description, nextSession, date, instaLink, sponsors, collaborators,location }) => (
    <div className="group bg-gradient-to-br from-white to-sky-100 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-200 to-blue-200 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        <h3 className="text-xl font-semibold mb-4 text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300 mb-4">
            {description}
        </p>

        {nextSession && (
            <p className="text-gray-600 text-bold group-hover:text-gray-800 transition-colors duration-300 mb-4">
                <strong>Next Session:</strong> {nextSession}
            </p>
        )}

        {date && (
            <p className="text-gray-600 text-bold group-hover:text-gray-800 transition-colors duration-300 mb-4">
                <strong>Date:</strong> {date}
            </p>
            )}
        
        {location && (
            <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300 mb-4">
                <strong>Location:</strong> {location}
            </p>
        )}

        {sponsors && sponsors.length > 0 && (
            <div className="mb-3">
                <h4 className="font-semibold text-sm text-blue-800 mb-1">Sponsors:</h4>
                <div className="flex flex-wrap gap-2">
                    {sponsors.map((sponsor, index) => (
                        <span key={index} className="text-xs bg-sky-100 text-blue-800 px-2 py-1 rounded-full">
                            {sponsor}
                        </span>
                    ))}
                </div>
            </div>
        )}

        {collaborators && collaborators.length > 0 && (
            <div className="mb-4">
                <h4 className="font-semibold text-sm text-blue-800 mb-1">Collaborated with:</h4>
                <div className="flex flex-wrap gap-2">
                    {collaborators.map((collaborator, index) => (
                        <span key={index} className="text-xs bg-sky-100 text-blue-800 px-2 py-1 rounded-full">
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
                className="px-4 py-2 bg-sky-500 text-white rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
            >
                Learn More
            </a>
        </div>
        <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-sky-200 rounded-full opacity-30 group-hover:scale-150 transition-transform duration-500"></div>
    </div>
);

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
    // Constant for manual date override. Set to null when using automatic calculation.
    // Format: "YYYY-MM-DD HH:MM" (24-hour format)
    // Example: "2024-10-07 17:30" for October 7, 2024 at 5:30 PM
    const MANUAL_OVERRIDE_DATE = "2024-10-08 17:30"; // Change this when you need to override

    // Function to get the next Monday's date
    const getNextMonday = () => {
        const today = new Date();
        const nextMonday = new Date(today);
        nextMonday.setDate(today.getDate() + ((7 - today.getDay() + 1) % 7 || 7));
        nextMonday.setHours(17, 30, 0, 0); // Set time to 5:30 PM
        return nextMonday;
    };

    // Function to format the date
    const formatDate = (date) => {
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
            hour: 'numeric', 
            minute: 'numeric', 
            hour12: true 
        };
        return date.toLocaleDateString('en-US', options);
    };

    // Function to get the next session date (either manual override or next Monday)
    const getNextSessionDate = () => {
        if (MANUAL_OVERRIDE_DATE) {
            return formatDate(new Date(MANUAL_OVERRIDE_DATE));
        }
        return formatDate(getNextMonday());
    };

    const upcoming_events = [
        {
            title: "Weekly Quant Sessions",
            description: "Want to land a top quant internship? Join SQUAD's weekly program! Master interview skills, tackle tough problems, and network with industry pros from leading Quant Finance Firms! 🚀📈",
            nextSession: getNextSessionDate(),
            location: 'Barr Smith South 2051',
            instaLink: 'https://www.instagram.com/p/C-81bIeSOm2/',
            sponsors: ['Optiver', 'IMC', 'Citadel', 'Vivcourt'],
        },
        {
            title: 'Quant Trading Q/A Panel',
            description: "Join us for our inaugural event! Attend our upcoming Q&A panel to learn all about quantitative trading from expert panelists representing Optiver, IMC, Jane Street, Citadel Securities, Vivcourt, and Akuna Capital. Don't miss this opportunity to gain insights from industry leaders!",
            date: 'TBD',
            location: 'TBD',
            sponsors: ['Optiver', 'IMC', 'Citadel', 'Vivcourt']
        },
    ];
    const past_events = [
        {
            title: 'Data Science Panel',
            description: "🧐Curious about a career in Data Science research? Come along to SQUAD’s Data Science Academia Panel! 🧠📖✏️ You’ll get to hear from a few guest speakers working in academia, followed by Q&A, then some networking with drinks and nibbles",
            date: 'August 29, 2024, 5:00PM - 6:30PM',
            location: 'Ligertwood 333 Lecture Theatre',
            instaLink: 'https://www.instagram.com/p/C-7C_dUSZNW/',
        },
        {
            title: "Adelaide's First Datathon",
            description: "🚀 Adelaide's first-ever Datathon was held! 🚀 Teams unleashed their analytical prowess and tackled challenges head-on. 🧠📊",
            instaLink: 'https://www.instagram.com/p/C4vAdLVyFO3/',
            sponsors: ['IMC', 'PWC', 'AEDA'],
        },
        {
            title: 'SQUAD Maths Olympiad',
            description: 'The annual Maths Olympiad was held. Participants solved math problems and competed for the title of Ultimate Maths Champion. 🏆🔢',
            instaLink: 'https://www.instagram.com/p/C4JvfZ8yW88/',
            sponsors: ['IMC']
        },
        {
            title: 'Sudoku Party',
            description: 'We hosted a thrilling Sudoku party where participants raced against the clock to solve puzzles and compete for the title of Ultimate Sudoku Champion. 🏆🧩',
            instaLink: 'https://www.instagram.com/p/CwjWExKyqmO/',
            collaborators: ['AUMS']
        },
        {
            title: "Quantitative Trading Q/A Pannel",
            description: "Our first event! Attendees joined the Q&A panel and learned all about quantitative trading from panelists coming from Optiver, IMC, Jane Street, Citadel Securities, Vivcourt, and Akuna Capital",
            instaLink: 'https://www.instagram.com/p/CvwUF8SpNtc/',
        },
    ];
    return (
        <>
            <Helmet>
                <title>Events</title>
            </Helmet>
            <div className="bg-[rgba(224,252,255)] w-full">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-24 pb-12">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">Events!</h1>
                    <div className="lg:pr-12 xl:pr-24">
                        <p className="text-lg lg:text-xl mb-4 text-gray-700">
                            Keep yourself informed about the various activities we offer, including social gatherings, skill-building
                            workshops, and chances to expand your professional network.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl text-gray-900 font-bold">
                        Upcoming Events
                    </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {upcoming_events.map((event, index) => (
                        <div key={index} className="flex justify-center">
                            <UpcomingEventCard {...event} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl text-gray-900 font-bold">
                        Past Events
                    </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {past_events.map((event, index) => (
                        <div key={index} className="flex justify-center">
                            <EventCard {...event} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Events;
