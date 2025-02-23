import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({
  title,
  description,
  nextSession,
  date,
  instaLink,
  sponsors,
  collaborators,
  location,
}) => (
  <div className="group bg-gradient-to-br from-white to-sky-100 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden relative">
    <div className="absolute inset-0 bg-gradient-to-r from-sky-200 to-blue-200 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
    <h3 className="text-xl font-semibold mb-4 text-gray-800 group-hover:text-indigo-700 transition-colors duration-300">
      {title}
    </h3>
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
            <span
              key={index}
              className="text-xs bg-sky-100 text-blue-800 px-2 py-1 rounded-full"
            >
              {sponsor}
            </span>
          ))}
        </div>
      </div>
    )}

    {collaborators && collaborators.length > 0 && (
      <div className="mb-4">
        <h4 className="font-semibold text-sm text-blue-800 mb-1">
          Collaborated with:
        </h4>
        <div className="flex flex-wrap gap-2">
          {collaborators.map((collaborator, index) => (
            <span
              key={index}
              className="text-xs bg-sky-100 text-blue-800 px-2 py-1 rounded-full"
            >
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
  const MANUAL_OVERRIDE_DATE = "2024-10-08 17:30";

  const getNextMonday = () => {
    const today = new Date();
    const nextMonday = new Date(today);
    nextMonday.setDate(today.getDate() + ((7 - today.getDay() + 1) % 7 || 7));
    nextMonday.setHours(17, 30, 0, 0);
    return nextMonday;
  };

  const formatDate = (date) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return date.toLocaleDateString("en-US", options);
  };

  const getNextSessionDate = () => {
    if (MANUAL_OVERRIDE_DATE) {
      return formatDate(new Date(MANUAL_OVERRIDE_DATE));
    }
    return formatDate(getNextMonday());
  };

  // Set this to an empty array to show the "No upcoming events" message
  // add events details here
  const past_events = [
    {
      title: "Industry Night",
      description:
        "👀 Looking to gain direct access to potential recruiters in the tech industry? 🚀 This is your chance to network with industry professionals and gain insights into careers in the tech field! Recruiters and representatives from top companies across the technology sector — spanning Software Engineering, Cybersecurity, AI & Research, Trading, and Banking — will be attending to connect with aspiring professionals like you!",
      date: "March 11, 2025, 6:00PM - 9:00PM",
      location: " National Wine Centre of Australia",
      collaborators: ["CSC", "CPC"],
      instaLink: "https://www.instagram.com/p/DF5CYGwyeiM/",
    },
    {
      title: "Jane Street Estimathon",
      description:
        "The Estimathon is a team-based contest that combines trivia, game theory, and mathematical thinking. Teams have 30 minutes to work on a set of 13 estimation problems, the winning team being the one with the best set of estimates.",
      date: "March 12, 2025, time coming soon!",
      location: "coming soon!",
    },
  ];

  const handleClick = () => {
    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-sky-50 p-8">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <Link to="/events" className="inline-block" onClick={handleClick}>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 cursor-pointer hover:text-blue-500 transition-colors duration-200 animate-bounce"
              title="Click for more events!"
            >
              Upcoming Events
            </h1>
          </Link>
        </div>
        {past_events.length === 0 ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="group relative transform hover:-translate-y-2 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-200 to-blue-200 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300">
                <p className="text-2xl text-gray-600 font-medium">
                  No upcoming events at this time
                </p>
                <p className="text-gray-500 mt-2">
                  Check back soon for new events!
                </p>
              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-sky-200 rounded-full opacity-30 group-hover:scale-150 transition-transform duration-500"></div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {past_events.map((past_event, index) => (
              <div key={index} className="flex justify-center">
                <EventCard {...past_event} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
