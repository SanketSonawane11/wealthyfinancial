import React from "react";
import { Heading } from "./BlurHeading";
import { Card } from "./Card";

function Services() {
  const services = [
    {
      title: "PMS in Equity",
      content:
        "Tailored portfolio management services to maximize returns on your equity investments. Our strategies are designed with personalized goals and risk profiles in mind.",
    },
    {
      title: "PMS in Forex",
      content:
        "Expert guidance in managing foreign exchange portfolios, helping you navigate the global markets with confidence.",
    },
    {
      title: "Fund Handling",
      content:
        "Secure and efficient fund management services to streamline the complexities of managing diverse portfolios.",
    },
    {
      title: "Mutual Funds",
      content:
        "Simplifying mutual fund investments, helping you choose the right funds to grow your wealth with minimal risk.",
    },
  ];

  return (
    <div className="mt-[5rem] w-[95%] md:w-[95%] flex items-center justify-center flex-col">
      <Heading heading="Our Services." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((ele, i) => {
          return <Card title={ele.title} content={ele.content} key={i} />;
        })}
      </div>
    </div>
  );
}

export default Services;
