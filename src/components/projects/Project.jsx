import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Project = () => {
  return (
    <div>
      <div className="pt-24 bg-[rgba(224,252,255)] flex flex-col items-center p-4">
        <h1 className="text-2xl mb-4 font-bold">Projects!</h1>
        <p className="mb-8 text-center">
          Check out the various projects our members have been working on. From web development (this
          website!) to trading competitions, we have it all!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 w-full max-w-7xl mt-8 mb-8 mx-auto px-4">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
          <div className="p-6">
            <div className="flex items-center">
              <h2 className="text-lg font-semibold mb-2">IMC Prosperity Github Repo</h2>
              <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className="ml-2">
                <FaGithub size={24} />
              </a>
            </div>
            <p className="text-gray-600 mb-4">1 month ago</p>
            <p className="mb-4 border-t border-b pt-2 pb-2">
                Take a look at the code for our IMC Prosperity project! SQUAD members participated in the competition and
                they decided to share their code for the algorithmic part of the competition!<br />

                <br />
                <strong>They were ranked 18th in Australia! <br /></strong>
            </p>
            <div className="flex gap-2 flex-wrap mb-4">
              <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
                Programming
              </span>
              <span className="bg-orange-100 text-orange-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
                Data Science
              </span>
              <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
                Python
              </span>
            </div>
            <div className="border-t pt-2 flex flex-wrap">
            <a href="https://aisanch.me/" className="text-blue-500 underline mr-2" target="_blank" rel="noopener noreferrer">Sachman</a>  
            <a href="https://xineohperif.netlify.app/" className="text-blue-500 underline mr-2" target="_blank" rel="noopener noreferrer">Barry</a> 
            <a href="https://www.linkedin.com/in/rahul-tejeshwa/" className="text-blue-500 underline mr-2" target="_blank" rel="noopener noreferrer">Rahul</a>
            <a className="mr-2">Weasley</a>
            <a href="https://www.linkedin.com/in/ognjen-stankovic-14a613243/" className="text-blue-500 underline mr-2" target="_blank" rel="noopener noreferrer">Oggie</a>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
          {/* Card content goes here */}
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
          {/* Card content goes here */}
        </div>
      </div>
    </div>
  );
};

export default Project;