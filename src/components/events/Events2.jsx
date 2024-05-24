import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Events = () => {
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
            <div className="flex flex-col space-y-4 max-w-7xl mx-auto px-4 mt-16">
                <div className="flex flex-row bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6">
                    <div className="w-1/5 mr-6">
                        <img src="https://via.placeholder.com/150" alt="Event" className="rounded-lg w-full"/>
                    </div>
                    <div className="w-2/3 flex flex-col">
                        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Event Title</h2>
                        <p className="mb-2"><FontAwesomeIcon icon={faCalendar} /> January 1, 2023</p>
                        <p className="mb-2"><FontAwesomeIcon icon={faClock} /> 12:00 PM - 5:00 PM</p>
                        <p className="mb-2"><FontAwesomeIcon icon={faMapMarkerAlt} /> 123 Main St, Anytown, USA</p>
                    </div>
                </div>
                <div className="flex flex-row bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6">
                    <div className="w-1/5 mr-6">
                        <img src="https://via.placeholder.com/150" alt="Event" className="rounded-lg w-full"/>
                    </div>
                    <div className="w-2/3 flex flex-col">
                        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Event Title</h2>
                        <p className="mb-2"><FontAwesomeIcon icon={faCalendar} /> January 1, 2023</p>
                        <p className="mb-2"><FontAwesomeIcon icon={faClock} /> 12:00 PM - 5:00 PM</p>
                        <p className="mb-2"><FontAwesomeIcon icon={faMapMarkerAlt} /> 123 Main St, Anytown, USA</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Events;