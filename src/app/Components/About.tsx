import React from "react";
import { Heading } from "./BlurHeading";

function About() {
  return (
    <section
      id="About"
      className="w-full bg-gradient-to-r from-white to-gray-50 py-16 relative overflow-hidden"
    >
      {/* Subtle Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-100 opacity-50 pointer-events-none"></div>

      <div className="max-w-6xl text-center mx-auto px-6 lg:px-8 relative z-10">
        {/* Animated Gradient Heading */}
        <Heading heading="About Us" />

        {/* Content Container with Border */}
        <div className="mt-10 bg-white shadow-lg rounded-xl px-8 py-12 border border-blue-200 hover:border-gradient-to-r from-[#FFD700] to-[#ADD8E6] transition-transform transform  duration-300 ease-in-out animate-fadeInUp">
          <p className="text-[1.2rem] md:text-[1.3rem] font-light text-gray-600 leading-relaxed">
            At{" "}
            <span className="font-semibold text-gray-900">
              Wealthy Financial Services
            </span>
            , we help our clients navigate the complexities of financial markets
            with clarity and confidence. As a trusted partner in Account
            Management and Fund Management, we provide customized investment
            strategies that meet your financial aspirations—whether seeking
            fixed income, flexible returns, or wealth preservation.
          </p>
          <p className="mt-8 text-[1.2rem] md:text-[1.3rem] font-light text-gray-600 leading-relaxed">
            Leveraging our deep understanding of markets and focusing on
            long-term capital growth, we combine innovative financial solutions
            with disciplined, research-driven trading strategies. Our
            experienced professionals are dedicated to providing world-class
            service, ensuring each client feels informed, empowered, and in
            control of their financial journey.
          </p>
          <p className="mt-8 text-[1.2rem] md:text-[1.3rem] font-light text-gray-600 leading-relaxed">
            We pride ourselves on building lasting relationships based on
            transparency, trust, and performance-driven results. At{" "}
            <span className="font-semibold text-gray-900">
              Wealthy Financial Services
            </span>
            , your financial success is our top priority, and we work
            relentlessly to manage your wealth with integrity and diligence.
          </p>
        </div>

        {/* Luxurious Divider */}
        <div className="w-40 h-1 bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#ADD8E6] mx-auto my-12 rounded animate-fadeIn"></div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-10 right-10 w-16 h-16 rounded-full bg-gradient-to-r from-[#FFD700] to-[#ADD8E6] opacity-20 animate-bounce"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-gradient-to-r from-[#FFD700] to-[#ADD8E6] opacity-20 animate-pulse"></div>
    </section>
  );
}

export default About;

// import React from "react";
// import { Heading } from "./BlurHeading";

// function About() {
//   return (
//     <section
//       id="About"
//       className="w-full bg-gradient-to-r from-white to-gray-50 py-16 relative overflow-hidden"
//     >
//       {/* Subtle Background Effect */}
//       <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-100 opacity-50 pointer-events-none"></div>

//       <div className="max-w-6xl text-center mx-auto px-6 lg:px-8 relative z-10">
//         <Heading heading="About Us" />

//         {/* Content Container */}
//         <div className="mt-10 bg-white shadow-lg rounded-xl px-8 py-12 transition-transform transform hover:scale-[1.02] duration-300 ease-in-out">
//           <p className="text-[1.1rem] md:text-[1.25rem] font-light text-gray-600 leading-relaxed">
//             At{" "}
//             <span className="font-semibold text-gray-900">
//               Wealthy Financial Services
//             </span>
//             , we help our clients navigate the complexities of financial markets
//             with clarity and confidence. As a trusted partner in Account
//             Management and Fund Management, we provide customized investment
//             strategies that meet your financial aspirations—whether seeking
//             fixed income, flexible returns, or wealth preservation.
//           </p>
//           <p className="mt-8 text-[1.1rem] md:text-[1.25rem] font-light text-gray-600 leading-relaxed">
//             Leveraging our deep understanding of markets and focusing on
//             long-term capital growth, we combine innovative financial solutions
//             with disciplined, research-driven trading strategies. Our
//             experienced professionals are dedicated to providing world-class
//             service, ensuring each client feels informed, empowered, and in
//             control of their financial journey.
//           </p>
//           <p className="mt-8 text-[1.1rem] md:text-[1.25rem] font-light text-gray-600 leading-relaxed">
//             We pride ourselves on building lasting relationships based on
//             transparency, trust, and performance-driven results. At{" "}
//             <span className="font-semibold text-gray-900">
//               Wealthy Financial Services
//             </span>
//             , your financial success is our top priority, and we work
//             relentlessly to manage your wealth with integrity and diligence.
//           </p>
//         </div>

//         {/* Luxurious Divider */}
//         <div className="w-40 h-1 bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#ADD8E6] mx-auto my-12 rounded"></div>
//       </div>

//       {/* Floating Decorative Elements */}
//       <div className="absolute top-10 right-10 w-16 h-16 rounded-full bg-gradient-to-r from-[#FFD700] to-[#ADD8E6] opacity-20 animate-bounce"></div>
//       <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-gradient-to-r from-[#FFD700] to-[#ADD8E6] opacity-20 animate-pulse"></div>
//     </section>
//   );
// }

// export default About;
