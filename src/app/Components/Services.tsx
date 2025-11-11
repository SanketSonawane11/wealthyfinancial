import React from "react";
import { Heading } from "./BlurHeading";
import { Card } from "./Card";

function Services() {
  const services = [
    {
      title: "Portfolio Building ",
      content:
        "Tailored portfolio management services to maximize returns on your equity investments. Our strategies are designed with personalized goals and risk profiles in mind.",
      img: "/images/service1.jpg",
    },
    {
      title: "Stock Market Trading",
      content:
        "Secure and efficient fund management services to streamline the complexities of managing diverse portfolios.",
      img: "/images/Extra2.jpg",
    },
    {
      title: "Mutual Fund & SIP",
      content:
        "Simplifying mutual fund investments, helping you choose the right funds to grow your wealth with minimal risk.",
      img: "/images/Extra.jpg",
    },
  ];

  return (
    <div
      id="Services"
      className="mt-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center flex-col"
    >
      <Heading heading="Our Services." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
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
