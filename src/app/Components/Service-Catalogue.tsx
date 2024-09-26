"use client";
import React from "react";
import { StickyScroll } from "./ui/Sticky-scroll";
import { ServiceImage } from "./ServiceImages";
import { FiChevronsDown } from "react-icons/fi";
import { MdAutoAwesome } from "react-icons/md";

const content = [
  {
    title: "Personalized Portfolio Management in Equity",
    description: (
      <div className="flex justify-center flex-col">
        <p className="text-center lg:text-start">
          Our Portfolio Management Service (PMS) in Equity is designed for
          clients seeking to maximize returns on their equity investments. We
          build personalized portfolios based on your financial goals, risk
          tolerance, and market trends. Our team of experienced portfolio
          managers actively monitor and adjust your holdings to ensure that your
          investments are performing at their best.
        </p>
        <button
          className="inline-flex h-10 animate-shimmer items-center justify-center rounded-xl border border-blue-300 bg-[linear-gradient(110deg,#2F74FFFF,60%,#8BB2FFFF,75%,#2F74FFFF)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-4"
          onClick={() => (window.location.href = "/Contact")}
        >
          Contact Us
        </button>
        <p className="hidden md:py-[1rem] py-[2rem] md:flex items-center justify-center gap-2">
          Scroll inside the box for more <FiChevronsDown />
        </p>
        <p className="md:hidden md:py-[1rem] py-[2rem] flex items-center justify-center gap-2">
          Scroll for more <FiChevronsDown />
        </p>
      </div>
    ),
    content: (
      <div className="h-full w-full flex flex-col items-center justify-center space-y-4">
        <ServiceImage
          image="/images/portfolio-management-previous-projects-samples-works-catalog-skills-presentation-successful-graphic-/20943391.jpg"
          title="Personalized Portfolio Management"
        />
      </div>
    ),
  },
  {
    title: "Expert Management of Forex Portfolios",
    description: (
      <div className="flex justify-center flex-col">
        <p>
          Our PMS in Forex provides clients with the opportunity to diversify
          their investments in global currency markets. We manage your foreign
          exchange portfolios with a data-driven approach, ensuring that your
          investments are protected against market volatility and positioned for
          growth.
        </p>
        <button
          className="inline-flex h-10 animate-shimmer items-center justify-center rounded-xl border border-blue-300 bg-[linear-gradient(110deg,#2F74FFFF,60%,#8BB2FFFF,75%,#2F74FFFF)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-4"
          onClick={() => (window.location.href = "/Contact")}
        >
          Contact Us
        </button>
      </div>
    ),
    content: (
      <div className="h-full w-full flex flex-col items-center justify-center space-y-4">
        <ServiceImage
          image="/images/flat-design-frugality-illustration/8628022.jpg"
          title="Expert Management of Forex Portfolios"
        />
      </div>
    ),
  },
  {
    title: "Comprehensive Fund Handling Services",
    description: (
      <div className="flex justify-center flex-col">
        <p>
          Our Fund Handling service ensures that your investments are
          professionally managed with full transparency and efficiency. We
          handle everything from fund allocation to reporting, so you can rest
          assured that your investments are in safe hands.
        </p>
        <button
          className="inline-flex h-10 animate-shimmer items-center justify-center rounded-xl border border-blue-300 bg-[linear-gradient(110deg,#2F74FFFF,60%,#8BB2FFFF,75%,#2F74FFFF)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-4"
          onClick={() => (window.location.href = "/Contact")}
        >
          Contact Us
        </button>
      </div>
    ),
    content: (
      <div className="h-full w-full flex flex-col items-center justify-center space-y-4">
        <ServiceImage
          image="/images/saving-money-concept-background/2317669.jpg"
          title="Comprehensive Fund Handling"
        />
      </div>
    ),
  },
  {
    title: "Maximize Your Returns with Mutual Funds",
    description: (
      <div className="flex justify-center flex-col">
        <p>
          Our Mutual Fund service is perfect for investors looking for a simpler
          way to grow their wealth. We help you choose the right mutual funds
          based on your financial objectives, risk tolerance, and market
          conditions, ensuring that your portfolio is diversified and geared for
          long-term success.
        </p>
        <button
          className="inline-flex h-10 animate-shimmer items-center justify-center rounded-xl border border-blue-300 bg-[linear-gradient(110deg,#2F74FFFF,60%,#8BB2FFFF,75%,#2F74FFFF)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-4"
          onClick={() => (window.location.href = "/Contact")}
        >
          Contact Us
        </button>
      </div>
    ),
    content: (
      <div className="h-full w-full flex flex-col items-center justify-center space-y-4">
        <ServiceImage
          image="/images/indian-rupee-money-bag/509020-PI3106-79-removebg.png"
          title="Mutual Fund Services"
        />
      </div>
    ),
  },
  {
    title: "New Services Coming Soon",
    description: (
      <div>
        <div className="hidden lg:flex justify-center flex-col">
          <p>
            We&apos;re continuously working on new services to offer our clients.
            Stay tuned as we enhance our offerings to better serve your needs.
          </p>
        </div>
        <div className="lg:hidden h-full w-full flex items-center justify-center">
          <p className="text-[2rem] flex text-center items-center justify-center flex-col gap-2">
            We&apos;re adding more services soon! <MdAutoAwesome />
          </p>
        </div>
      </div>
    ),
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <p className="text-[2rem] flex text-center items-center justify-center flex-col gap-2">
          We&apos;re adding more services soon! <MdAutoAwesome />
        </p>
      </div>
    ),
  },
];

export function ServiceCat() {
  return (
    <div className="pb-[4rem] md:py-[2rem] w-full hideScrollbar">
      <StickyScroll content={content} />
    </div>
  );
}
