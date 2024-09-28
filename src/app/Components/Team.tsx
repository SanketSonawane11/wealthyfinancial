"use client";
import React from "react";
import { SiGmail } from "react-icons/si";
import { Heading } from "./BlurHeading";

interface SocialLinks {
  Email?: string;
  facebook?: string;
  twitter?: string;
  linkedin?: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  socialLinks: SocialLinks;
}

const teamMembers: TeamMember[] = [
  {
    name: "Ankit Raut",
    role: "Founder",
    image: "path/to/image1.jpg",
    socialLinks: {
      Email: "ankit@wealthyfinancial.in",
    },
  },
  {
    name: "Nitin Sarode",
    role: "Operation Head & Trader",
    image: "path/to/image2.jpg",
    socialLinks: {
      Email: "",
    },
  },
  {
    name: "Akshat Jain",
    role: "Portfolio Manager & Business Acquisition",
    image: "path/to/image2.jpg",
    socialLinks: {
      Email: "",
    },
  },
  {
    name: "Bhargav Patil",
    role: "Portfolio Manager & Business Acquisition",
    image: "path/to/image2.jpg",
    socialLinks: {
      Email: "",
    },
  },
];

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => (
  <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 transition-transform duration-200 hover:shadow-lg hover:scale-105">
    {/* <img
      className="w-full h-32 rounded-lg object-cover mb-4"
      src={member.image}
      alt={`${member.name}`}
    /> */}
    <h5 className="text-xl font-bold text-gray-900">{member.name}</h5>
    <p className="text-gray-500">{member.role}</p>
    <div className="flex space-x-3 mt-4">
      {Object.entries(member.socialLinks).map(([platform, link]) => (
        <p key={platform} className="flex items-center font-semibold gap-3">
          <SiGmail /> {link}
        </p>
      ))}
    </div>
  </div>
);

const OurTeam: React.FC = () => {
  return (
    <section id="Team" className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <Heading className="text-center" heading="Our Team" />
        <p className="font-light text-center mb-[3rem] text-gray-500 sm:text-xl dark:text-gray-400">
          Meet our team
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
