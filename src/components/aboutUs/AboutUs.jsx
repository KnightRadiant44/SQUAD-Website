import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaChartLine, FaUsers, FaLightbulb, FaGraduationCap, FaHandsHelping, FaBriefcase } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us | SQUAD</title>
      </Helmet>
      <div className="bg-[rgba(224,252,255)] w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-24 pb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">About SQUAD</h1>
          <div className="lg:pr-12 xl:pr-24">
            <p className="text-lg lg:text-xl mb-4 text-gray-700">
              SQUAD (Society for Quantitative Analysis and Data) is a student-led organization dedicated to fostering excellence in data science and quantitative finance. We aim to bridge the gap between academic learning and industry applications, providing students with the tools, knowledge, and network to thrive in these dynamic fields.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
        <section className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900 text-center">Our Mission</h2>
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaChartLine className="w-16 h-16 text-blue-500 mb-4" />,
                title: "Excel in Data & Quant",
                description: "Empower students with cutting-edge skills in data science and quantitative finance."
              },
              {
                icon: <FaUsers className="w-16 h-16 text-green-500 mb-4" />,
                title: "Build Community",
                description: "Foster a vibrant network of like-minded individuals passionate about data and analysis."
              },
              {
                icon: <FaLightbulb className="w-16 h-16 text-yellow-500 mb-4" />,
                title: "Bridge Academia & Industry",
                description: "Connect academic learning with real-world applications through hands-on experiences."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center items-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900 text-center">Our Values</h2>
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaGraduationCap className="w-12 h-12 text-blue-500" />,
                title: "Continuous Learning",
                description: "Embrace lifelong learning and stay at the forefront of technological advancements."
              },
              {
                icon: <FaHandsHelping className="w-12 h-12 text-green-500" />,
                title: "Collaborative Growth",
                description: "Learn from each other, share experiences, and grow together as a community."
              },
              {
                icon: <FaBriefcase className="w-12 h-12 text-purple-500" />,
                title: "Industry Relevance",
                description: "Prepare for real-world challenges by bridging academia and industry."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <div className="bg-gray-100 p-3 rounded-full mr-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                </div>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900 text-center">Our Journey</h2>
          <div className="space-y-8">
            {[
              { date: 'July 2023', event: 'SQUAD is founded by passionate students' },
              { date: 'August 2023', event: 'Inaugural Quantitative Trading Q&A Panel' },
              { date: 'September 2023', event: "First inter-club collaboration: Sudoku Party" },
              { date: 'March 2024', event: 'Mathematics Olympiad in collaboration with IMC' },
              { date: 'March 2024', event: "Adelaide's first-ever Datathon" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-x-1">
                <div className="w-full sm:w-32 flex-shrink-0 mb-2 sm:mb-0">
                  <span className="text-blue-600 font-semibold">{item.date}</span>
                </div>
                <div className="flex-grow pl-0 sm:pl-6 border-l-0 sm:border-l-2 border-blue-200">
                  <p className="text-gray-700 text-lg">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;