"use client";
import { Heading } from "./BlurHeading";

interface SocialLinks {
  Email?: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  socialLinks: SocialLinks;
}

const teamMembers: TeamMember[] = [
  {
    name: "Nitin Sarode",
    role: "Operation Head & Trader",
    image: "",
    socialLinks: {
      Email: "",
    },
  },
  {
    name: "Ankit Sharad Raut",
    role: "Founder",
    image: "",
    socialLinks: {
      Email: "ankit@wealthyfinancial.in",
    },
  },
  {
    name: "Bhargav Patil",
    role: "Portfolio Manager & Business Acquisition",
    image: "",
    socialLinks: {
      Email: "",
    },
  },
];

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  const isFounder = member.role.toLowerCase().includes("founder");

  return (
    <div
      className={`relative flex flex-col items-center text-center p-6 rounded-2xl shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-2 
      ${
        isFounder
          ? "bg-gradient-to-br from-blue-100 via-white to-blue-50 border-2 border-blue-400 scale-105 shadow-lg"
          : "bg-white border border-gray-200"
      }`}
    >
      <h5
        className={`text-xl font-bold ${
          isFounder ? "text-yellow-500" : "text-gray-900"
        }`}
      >
        {member.name}
      </h5>
      <p className="text-gray-500 text-sm mt-1">{member.role}</p>

      <div className="mt-4 space-y-2 text-sm font-medium text-gray-600">
        {Object.entries(member.socialLinks).map(([platform, link]) =>
          link ? (
            <p key={platform}>
              <span className="text-gray-400">{platform}:</span>{" "}
              <a
                href={`mailto:${link}`}
                className="text-blue-600 hover:underline"
              >
                {link}
              </a>
            </p>
          ) : null
        )}
      </div>

      {isFounder && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-yellow-200/20 via-transparent to-yellow-100/10 blur-xl -z-10"></div>
      )}
    </div>
  );
};

const OurTeam: React.FC = () => {
  return (
    <section id="Team" className="w-full my-16 px-4 dark:bg-gray-900">
      <Heading className="text-center" heading="Our Team" />
      <p className="font-light text-center mb-10 text-gray-500 sm:text-lg dark:text-gray-400">
        Meet the people driving our vision forward
      </p>

      <div className="bg-blue-50 dark:bg-gray-800 rounded-2xl py-10 px-6 mx-auto max-w-7xl shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
