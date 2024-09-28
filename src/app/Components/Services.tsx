import React from "react";
import { Heading } from "./BlurHeading";
import { Card } from "./Card";

function Services() {
  const services = [
    {
      title: "Account Handling in Equity",
      content:
        "Tailored portfolio management services to maximize returns on your equity investments. Our strategies are designed with personalized goals and risk profiles in mind.",
      img: "/images/one.webp",
    },
    {
      title: "Fund Handling",
      content:
        "Secure and efficient fund management services to streamline the complexities of managing diverse portfolios.",
      img: "/images/two.webp",
    },
    {
      title: "Account Handling in Forex",
      content:
        "Expert guidance in managing foreign exchange portfolios, helping you navigate the global markets with confidence.",
      img: "/images/two.webp",
    },
    {
      title: "Mutual Fund",
      content:
        "Simplifying mutual fund investments, helping you choose the right funds to grow your wealth with minimal risk.",
      img: "/images/two.webp",
    },
  ];

  return (
    <div
      id="Services"
      className="mt-[5rem] w-[95%] md:w-[95%] flex items-center justify-center flex-col"
    >
      <Heading heading="Our Services." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((ele, i) => {
          return (
            <Card
              image={ele.img}
              title={ele.title}
              content={ele.content}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Services;
