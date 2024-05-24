import React from 'react';

const AboutUs = () => {
    const timelineData = [
        {
            time: 'July, 2023',
            event: 'SQUAD was founded by a group of students who wanted to create a community for data science and quantiative finance enthusiasts.'
        },
        {
            time: 'August, 2023',
            event: 'SQUAD hosts its first quantitative trading workshop.'
        },
        {
            time: 'September, 2023',
            event: "SQUAD's first collaboration with another club and a fun Sudoku Party!"
        },
        {
            time: 'March, 2024',
            event: "SQUAD hosts the maths olympiad in collaboration with IMC."
        },
        {
            time: 'March, 2024',
            event: <>SQUAD hosts Adelaide's <strong>first-ever</strong> datahon.</>        
        },
        // Add more timeline data here
    ];
    return (
        <>
            <div className="pt-24 bg-[rgba(224,252,255)] flex flex-col items-start p-4 pl-12">
                <h1 className="text-2xl mb-4 font-bold">About Us</h1>
                <p className="mb-4">
                    Get to know the values, mission, and history of SQUAD. Find out what we stand for and how we aim to help students grow and develop their skills!
                </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Our Goals</h2>
                <div className="mb-6">
                    <div className="flex items-center mb-2">
                        <span className="inline-block bg-yellow-200 rounded-full p-2 mr-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-yellow-600"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                        <p>
                            In South Australia, SQUAD strives to be the top student-led organization that helps students achieve their goals in data science and quantiative finance careers.
                        </p>
                    </div>
                    <div className="flex items-center mb-2">
                        <span className="inline-block bg-green-200 rounded-full p-2 mr-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-green-600"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                        <p>
                            We actively support students in their journey. By hosting information sessions, networking events, and other career-focused activities, we equip them with the knowledge and connections to navigate their studies and future careers in data science and quantiative finance.
                        </p>
                    </div>
                    <div className="flex items-center mb-2">
                        <span className="inline-block bg-purple-200 rounded-full p-2 mr-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-purple-600"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                            </svg>
                        </span>
                        <p>
                            At the University of Adelaide, we cultivate a diverse data science and quant community. Through fun social events and activities, we connect students who share a passion for the field.
                        </p>
                    </div>
                    <div className="flex items-center mb-2">
                        <span className="inline-block bg-blue-200 rounded-full p-2 mr-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-blue-600"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                        <p>
                            SQUAD empowers students to excel. We host competitions that test your skills and networking events that connect you with fellow students and industry professionals.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Our Values</h2>
                <div className="mb-4">
                    <div className="flex items-start mb-4">
                        <span className="inline-block bg-blue-200 rounded-full p-2 mr-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-blue-600"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Embrace lifelong learning and maximize your knowledge acquisition.</h3>
                            <p>
                                Push boundaries! Innovative experiences. Solve problems. Be an active learner.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start mb-4">
                        <span className="inline-block bg-orange-200 rounded-full p-2 mr-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-orange-600"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM15.657 5.828a1 1 0 00-1.414 0l-.707.707a1 1 0 001.414 1.414l.707-.707a1 1 0 000-1.414zM4.343 5.828a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM14 11a1 1 0 000-2H5a1 1 0 100 2h9zm-7-3a1 1 0 012 0v1a1 1 0 11-2 0V8z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Learn lots and have fun!</h3>
                            <p>
                                SQUAD: Where knowledge meets friendship! We offer enriching experiences that leave you feeling positive and ready to take the next step in your journey.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start mb-4">
                        <span className="inline-block bg-green-200 rounded-full p-2 mr-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-green-600"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Pursue your passion with dedication.</h3>
                            <p>
                                The SQUAD's strength lies in its diversity and the shared passion of its members. We bring a range of expertise to the table, but it's our unwavering enthusiasm and collaborative spirit that truly sets us apart. We tackle challenges head-on, confident in our abilities and always striving for excellence.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Our History</h2>
                <div className="flex flex-col items-center space-y-6">
                    {timelineData.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <div className="h-6 w-6 rounded-full bg-blue-500 mb-4"></div>
                            <h1 className="font-semibold mb-2">{item.time}</h1>
                            <p>{item.event}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AboutUs;
