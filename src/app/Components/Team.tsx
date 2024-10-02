// "use client";
// import { Heading } from "./BlurHeading";

// interface SocialLinks {
//   Email?: string;
// }

// interface TeamMember {
//   name: string;
//   role: string;
//   image: string;
//   socialLinks: SocialLinks;
// }

// const teamMembers: TeamMember[] = [
//   {
//     name: "Nitin Sarode",
//     role: "Operation Head & Trader",
//     image: "path/to/image2.jpg",
//     socialLinks: {
//       Email: "",
//     },
//   },
//   {
//     name: "Akshat Jain",
//     role: "Portfolio Manager & Business Acquisition",
//     image: "path/to/image2.jpg",
//     socialLinks: {
//       Email: "",
//     },
//   },
//   {
//     name: "Bhargav Patil",
//     role: "Portfolio Manager & Business Acquisition",
//     image: "path/to/image2.jpg",
//     socialLinks: {
//       Email: "",
//     },
//   },
// ];

// interface TeamMemberCardProps {
//   member: TeamMember;
// }

// const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => (
//   <div className="bg-white border rounded-xl border-gray-200 shadow-md p-4 transition-transform duration-200 hover:shadow-lg hover:scale-105">
//     <h5 className="text-xl font-bold text-gray-900">{member.name}</h5>
//     <p className="text-gray-500">{member.role}</p>
//     <div className="flex space-x-3 mt-4">
//       {Object.entries(member.socialLinks).map(([platform, link]) => (
//         <p key={platform} className="flex items-center font-semibold gap-3">
//           {link}
//         </p>
//       ))}
//     </div>
//   </div>
// );

// const OurTeam: React.FC = () => {
//   return (
//     <section id="Team" className=" w-full my-[2rem] dark:bg-gray-900">
//       <Heading className="text-center" heading="Our Team" />
//       <p className="font-light text-center mb-[3rem] text-gray-500 sm:text-xl dark:text-gray-400">
//         Meet our team
//       </p>
//       <div className=" rounded-xl py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
//         <div className="flex items-center flex-col justify-evenly gap-5">
//           <div className="max-w-[90%] bg-white mx-auto rounded-xl overflow-hidden flex flex-col justify-evenly sm:flex-row transform hover:scale-105 transition-transform duration-300 ease-out">
//             {/* Left Side: Image */}
//             <div className="sm:w-1/3">
//               <img
//                 className="w-[35rem] rounded-xl h-full object-cover"
//                 src="/images/founder.jpg"
//                 alt="Ankit Sharad Raut"
//               />
//             </div>

//             {/* Right Side: Info */}
//             <div className="p-6 sm:w-2/3 flex flex-col justify-center">
//               <h2 className="text-2xl font-bold text-gray-800 mb-2">
//                 Ankit Sharad Raut
//               </h2>
//               <p className="text-gray-600 text-sm mb-1">Founder</p>
//               <a
//                 href={`mailto:ankit@wealthyfinancial.in`}
//                 className="text-primary-600 text-sm hover:underline"
//               >
//                 ankit@wealthyfinancial.in
//               </a>
//             </div>
//           </div>
//           <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {teamMembers.map((member) => (
//               <TeamMemberCard key={member.name} member={member} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurTeam;

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
  <div className="bg-white border rounded-xl border-gray-200 shadow-md p-4 transition-transform duration-200 hover:shadow-lg hover:scale-105">
    <h5 className="text-xl font-bold text-gray-900">{member.name}</h5>
    <p className="text-gray-500">{member.role}</p>
    <div className="flex space-x-3 mt-4">
      {Object.entries(member.socialLinks).map(([platform, link]) => (
        <p key={platform} className="flex items-center font-semibold gap-3">
          {link}
        </p>
      ))}
    </div>
  </div>
);

const OurTeam: React.FC = () => {
  return (
    <section id="Team" className=" w-full my-[2rem] dark:bg-gray-900">
      <Heading className="text-center" heading="Our Team" />
      <p className="font-light text-center mb-[3rem] text-gray-500 sm:text-xl dark:text-gray-400">
        Meet our team
      </p>
      <div className="bg-blue-100 rounded-xl py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="flex items-center flex-col justify-evenly gap-5">
          <div className="max-w-[90%] border-2 mx-auto rounded-xl bg-white shadow-lg overflow-hidden flex flex-col justify-evenly sm:flex-row transform hover:scale-105 transition-transform duration-300 ease-out">
            {/* Left Side: Image */}
            <div className="sm:w-[70%] md:w-[35rem]">
              <img
                className="w-full h-full object-cover"
                src="/images/Founder.jpg"
                alt="Ankit Sharad Raut"
              />
            </div>

            {/* Right Side: Info */}
            <div className="p-6 sm:w-2/3 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Ankit Sharad Raut
              </h2>
              <p className="text-gray-600 text-sm mb-1">Founder</p>
              <a
                href={`mailto:ankit@wealthyfinancial.in`}
                className="text-primary-600 text-sm hover:underline"
              >
                ankit@wealthyfinancial.in
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
