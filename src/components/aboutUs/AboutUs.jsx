import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
          <Helmet>
            <title>About Us</title>
          </Helmet>
      <div className="pt-24 bg-[rgba(224,252,255)] flex flex-col items-start p-4 pl-12">
                <h1 className="text-2xl mb-4 font-bold">About Us!</h1>
                <p className="mb-4">
                Get to know the values, mission, and history of SQUAD. Find out what we stand for and how we aim to help students grow and develop their skills!
                </p>
        </div>

        <div className="container mx-auto px-4 py-16">
        <section className="mb-20">

          <h2 className="text-3xl text-gray-900 sm:text-4xl mb-8 text-center">Our Goals</h2>
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
            {[
              "In South Australia, SQUAD strives to be the top student-led organization that helps students achieve their goals in data science and quantitative finance careers.",
              "We actively support students in their journey. By hosting information sessions, networking events, and other career-focused activities, we equip them with the knowledge and connections to navigate their studies and future careers in data science and quantitative finance.",
              "At the University of Adelaide, we cultivate a diverse data science and quant community. Through fun social events and activities, we connect students who share a passion for the field.",
              "SQUAD empowers students to excel. We host competitions that test your skills and networking events that connect you with fellow students and industry professionals."
            ].map((goal, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-4 text-gray-700">{goal}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl text-gray-900 sm:text-4xl mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Embrace lifelong learning", description: "Push boundaries! Innovative experiences. Solve problems. Be an active learner." },
              { title: "Learn lots and have fun!", description: "SQUAD: Where knowledge meets friendship! We offer enriching experiences that leave you feeling positive and ready to take the next step in your journey." },
              { title: "Pursue your passion", description: "The SQUAD's strength lies in its diversity and the shared passion of its members. We bring a range of expertise to the table, but it's our unwavering enthusiasm and collaborative spirit that truly sets us apart." }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-400 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-black-600 mb-4">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl text-gray-900 sm:text-4xl mb-8 text-center">Our History</h2>
          <div className="space-y-8">
            {[
              { date: 'July, 2023', event: 'SQUAD was founded by a group of students who wanted to create a community for data science and quantitative finance enthusiasts.' },
              { date: 'August, 2023', event: 'SQUAD hosts its first quantitative trading Q/A Panel.' },
              { date: 'September, 2023', event: "SQUAD's first collaboration with another club and a fun Sudoku Party!" },
              { date: 'March, 2024', event: 'SQUAD hosts the maths olympiad in collaboration with IMC.' },
              { date: 'March, 2024', event: "SQUAD hosts Adelaide's first-ever datahon." },
            ].map((item, index) => (
              <div key={index} className="flex items-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
                <div className="w-32 flex-shrink-0">
                  <span className="text-blue-600 font-semibold">{item.date}</span>
                </div>
                <div className="flex-grow pl-4 border-l-2 border-blue-200">
                  <p className="text-gray-700">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;