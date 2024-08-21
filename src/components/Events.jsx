import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ title, description, nextSession, date, instaLink, sponsors, collaborators,location }) => (
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

const Events = () => {
    const past_events = [
        {
            title: "Weekly Quant Sessions",
            description: "Want to land a top quant internship? Join SQUAD's weekly program! Master interview skills, tackle tough problems, and network with industry pros from leading Quant Finance Firms! 🚀📈",
            nextSession: 'August 26, 2024, 5:30PM - 7:00PM',
            location: 'TBD',
            instaLink: 'https://www.instagram.com/p/C-l9x-Uy_Ri/',
            sponsors: ['Optiver', 'IMC', 'Citadel', 'Vivcourt'],
        },
        {
            title: 'Data Science Panel',
            description: "🧐Curious about a career in Data Science research? Come along to SQUAD’s Data Science Academia Panel! 🧠📖✏️ You’ll get to hear from a few guest speakers working in academia, followed by Q&A, then some networking with drinks and nibbles",
            date: 'August 29, 2024',
            location: 'TBD',
            instaLink: 'https://www.instagram.com/p/C-7C_dUSZNW/',
        },
    ];
    const handleClick = () => {
        document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    return (
        <div className="bg-sky-50 p-8">
            <div className="container mx-auto">
                <div className="flex justify-center">
                    <Link to="/events" className="inline-block" onClick={handleClick}>
                        <h1 className="text-3xl mb-4 cursor-pointer hover:text-blue-500 transition-colors duration-200 animate-bounce" title="Click for more events!">Upcoming Events</h1>
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {past_events.map((past_event, index) => (
                        <div key={index} className="flex justify-center">
                            <EventCard {...past_event} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Events;
