"use client";
import React from "react";

interface SocialLinks {
  facebook: string;
  twitter: string;
  linkedin: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  socialLinks: SocialLinks;
}

const teamMembers: TeamMember[] = [
  {
    name: "John Doe",
    role: "CEO",
    image: "path/to/image1.jpg",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image: "path/to/image2.jpg",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image: "path/to/image2.jpg",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  // Add more team members here
];

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => (
  <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 transition-transform duration-200 hover:shadow-lg hover:scale-105">
    <img
      className="w-full h-32 rounded-lg object-cover mb-4"
      src={member.image}
      alt={`${member.name}`}
    />
    <h5 className="text-xl font-bold text-gray-900">{member.name}</h5>
    <p className="text-gray-500">{member.role}</p>
    <div className="flex space-x-3 mt-4">
      {Object.entries(member.socialLinks).map(([platform, link]) => (
        <a key={platform} href={link} target="_blank" rel="noopener noreferrer">
          <img
            className="w-6 h-6"
            src={`path/to/${platform}.png`}
            alt={`${platform} icon`}
          />
        </a>
      ))}
    </div>
  </div>
);

const OurTeam: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
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
