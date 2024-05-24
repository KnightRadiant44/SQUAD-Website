import React from 'react';

const Events = () => {
    return (
        <div id="Events" className="py-16 px-4 sm:px-6 lg:px-8 bg-[rgba(224,252,255)]">
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
            {/*
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl text-gray-900 sm:text-4xl">
                        Events
                    </h2>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-20">
                <a href="https://www.youtube.com/watch?v=oYyWoovxq-8&list=PLCuvxfuKqgjXiQZ7rzaU3tJAgfdKIImJT&index=47" target="_blank" rel="noopener noreferrer">
                    <div className="w-[80vw] md:w-[40vw] max-w-[500px] h-[40vh] max-h-[230px] shadow-md rounded-lg overflow-hidden mt-5 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg">
                        <img src={require('./test5.jpg')} alt="MEOW!" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-center mt-2">
                        <span className="font-bold">When:</span> Some date
                    </div>
                </a>
                <a href="https://www.youtube.com/watch?v=46IvBZSJKJg&list=PLCuvxfuKqgjXiQZ7rzaU3tJAgfdKIImJT&index=50" target="_blank" rel="noopener noreferrer">
                    <div className="w-[80vw] md:w-[40vw] max-w-[500px] h-[40vh] max-h-[230px] shadow-md rounded-lg overflow-hidden mt-5 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg">
                        <img src={require('./test6.jpg')} alt="MEOW!" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-center mt-2">
                        <span className="font-bold">When:</span> Some date
                    </div>
                </a>
            </div>
            */}
        </div>
    );
};

export default Events;