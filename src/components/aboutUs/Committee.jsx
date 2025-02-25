import React from "react";
import { Helmet } from "react-helmet-async";
import Avatar from "boring-avatars";

const TeamMemberCard = ({ name, role, quote, imageSrc, useAvatar = false }) => (
  <div className="flex flex-col items-center bg-white shadow-lg p-4 rounded-lg w-full h-auto">
    <div className="w-36 h-36 rounded-full overflow-hidden mb-4">
      {!useAvatar && imageSrc ? (
        <img
          src={imageSrc}
          alt={`${name}'s profile`}
          className="w-full h-full object-cover object-center"
        />
      ) : (
        <Avatar
          size={144}
          name={name}
          variant="beam"
          colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
        />
      )}
    </div>
    <h2 className="text-xl font-bold mb-2">{name}</h2>
    <h3 className="text-lg text-gray-600 mb-2">{role}</h3>
    <p className="text-gray-800 text-center">{quote}</p>
  </div>
);

const Committee = () => {
  const teamMembers = [
    {
      name: "Michelle Nguyen",
      role: "President",
      quote: "No one is born great, only those achieve greatness",
      imageSrc: require("./vp.png"),
    },
    {
      name: "Sanchit Goel",
      role: "Vice President (Data Science)",
      quote: "It is happy hour somewhere",
      imageSrc: require("./pm.jpeg"),
    },
    {
      name: "Rahul Tejeshwa",
      role: "Vice President (Quant)",
      useAvatar: true,
    },
    {
      name: "Elvis Tran",
      role: "Secretary",
      quote:
        '"Debugging is like being the detective in a crime movie where you are also the murderer." - Filipe Fortes',
      imageSrc: require("./em.jpg"),
    },
    {
      name: "Shreeshail Bhatta",
      role: "Treasurer",
      useAvatar: true,
    },
    {
      name: "Jassica Hu",
      role: "Social Media",
      useAvatar: true,
    },
    {
      name: "Alex (Ngoc-Bich) Nguyen",
      role: "Events Officer",
      quote:
        "A low-key introvert data analyst who is addicted to social media 🤖",
      imageSrc: require("./socmed1.jpeg"),
    },
    {
      name: "Raiyan Rahman",
      role: "Events Officer",
      useAvatar: true,
    },
    {
      name: "Mahir N. Islam",
      role: "Projects Team",
      quote: "If no one got my back, I know dp[i][j] got my back",
      imageSrc: require("./meow.jpg"),
    },
    {
      name: "Khanh Nguyen",
      role: "Projects Team",
      quote: "su-su-su-supernova",
      imageSrc: require("./pres.jpeg"),
    },
  ];

  return (
    <>
      <Helmet>
        <title>Committee</title>
      </Helmet>
      <div className="bg-[rgba(224,252,255)] w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-24 pb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Meet the Team!
          </h1>
          <div className="lg:pr-12 xl:pr-24">
            <p className="text-lg lg:text-xl mb-4 text-gray-700">
              Get to know the SQUAD team, whose mission is to foster new avenues
              for students to network, develop their skills, and receive the
              encouragement they need!
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Committee;
