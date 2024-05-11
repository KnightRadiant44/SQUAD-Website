import React from 'react';

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
            <div className="flex flex-col md:flex-row justify-center items-center gap-20 md:px-8">
                <a href="https://www.youtube.com/watch?v=oYyWoovxq-8&list=PLCuvxfuKqgjXiQZ7rzaU3tJAgfdKIImJT&index=47" target="_blank" rel="noopener noreferrer">
                    <div className="w-[80vw] md:w-[25vw] max-w-[500px] h-[40vh] max-h-[230px] shadow-md rounded-lg overflow-hidden mt-5 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg">
                        <img src={require('./test1.jpg')} alt="MEOW!" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-center mt-2">
                        <span className="font-bold">When:</span> Some date
                    </div>
                </a>
                <a href="https://www.youtube.com/watch?v=46IvBZSJKJg&list=PLCuvxfuKqgjXiQZ7rzaU3tJAgfdKIImJT&index=50" target="_blank" rel="noopener noreferrer">
                    <div className="w-[80vw] md:w-[25vw] max-w-[500px] h-[40vh] max-h-[230px] shadow-md rounded-lg overflow-hidden mt-5 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg">
                        <img src={require('./test2.jpeg')} alt="MEOW!" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-center mt-2">
                        <span className="font-bold">When:</span> Some date
                    </div>
                </a>
            </div>
            <div className="max-w-7xl mx-auto mt-16">
                <div className="text-center">
                    <h2 className="text-3xl text-gray-900 sm:text-4xl">
                        Past Events
                    </h2>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-20 md:px-8 mb-20">
                <a target="_blank" rel="noopener noreferrer">
                    <div className="w-[80vw] md:w-[25vw] max-w-[500px] h-[40vh] max-h-[230px] shadow-md rounded-lg overflow-hidden mt-5 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg">
                        <img src={require('./sudoku.webp')} alt="MEOW!" className="w-full h-full object-fill" />
                    </div>
                </a>
                <a target="_blank" rel="noopener noreferrer">
                    <div className="w-[80vw] md:w-[25vw] max-w-[500px] h-[40vh] max-h-[230px] shadow-md rounded-lg overflow-hidden mt-5 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg">
                        <img src={require('./olympiad.jpg')} alt="MEOW!" className="w-full h-full object-fill" />
                    </div>
                </a>
                <a target="_blank" rel="noopener noreferrer">
                    <div className="w-[80vw] md:w-[25vw] max-w-[500px] h-[40vh] max-h-[230px] shadow-md rounded-lg overflow-hidden mt-5 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg">
                        <img src={require('./datathon.jpg')} alt="MEOW!" className="w-full h-full object-fill" />
                    </div>
                </a>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-20 md:px-8">
                <a target="_blank" rel="noopener noreferrer">
                    <div className="w-[80vw] md:w-[25vw] max-w-[500px] h-[40vh] max-h-[230px] shadow-md rounded-lg overflow-hidden mt-5 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg">
                        <img src={require('./amplifyme.jpg')} alt="MEOW!" className="w-full h-full object-fill" />
                    </div>
                </a>
                <a target="_blank" rel="noopener noreferrer">
                    <div className="w-[80vw] md:w-[25vw] max-w-[500px] h-[40vh] max-h-[230px] shadow-md rounded-lg overflow-hidden mt-5 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg">
                        <img src={require('./test_banner.webp')} alt="MEOW!" className="w-full h-full object-fill" />
                    </div>
                </a>
            </div>
        </>
    );
};

export default Events;