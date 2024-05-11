import React from 'react';

const EventsBody = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
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
                <a href="https://www.youtube.com/watch?v=46IvBZSJKJg&list=PLCuvxfuKqgjXiQZ7rzaU3tJAgfdKIImJT&index=50" target="_blank" rel="noopener noreferrer">
                    <div className="w-[80vw] md:w-[25vw] max-w-[500px] h-[40vh] max-h-[230px] shadow-md rounded-lg overflow-hidden mt-5 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg">
                        <img src={require('./test2.jpeg')} alt="MEOW!" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-center mt-2">
                        <span className="font-bold">When:</span> Some date
                    </div>
                </a>
            </div>
        </div>
    );
};

export default EventsBody;