"use client";
import React from "react";
import { StickyScroll } from "./ui/Sticky-scroll";
import { ServiceImage } from "./ServiceImages";

const content = [
  {
    title: "Personalized Portfolio Management in Equity",
    description: (
      <div>
        <p>
          Our Portfolio Management Service (PMS) in Equity is designed for
          clients seeking to maximize returns on their equity investments. We
          build personalized portfolios based on your financial goals, risk
          tolerance, and market trends. Our team of experienced portfolio
          managers actively monitor and adjust your holdings to ensure that your
          investments are performing at their best.
        </p>
        <button
          className="inline-flex h-12 animate-shimmer items-center justify-center rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-4"
          onClick={() => (window.location.href = "/contact")}
        >
          Contact Us
        </button>
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
      <div>
        <p>
          Our PMS in Forex provides clients with the opportunity to diversify
          their investments in global currency markets. We manage your foreign
          exchange portfolios with a data-driven approach, ensuring that your
          investments are protected against market volatility and positioned for
          growth.
        </p>
        <button
          className="inline-flex h-12 animate-shimmer items-center justify-center rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-4"
          onClick={() => (window.location.href = "/contact")}
        >
          Contact Us
        </button>
      </div>
    ),
    content: (
      <div className="h-full w-full flex flex-col items-center justify-center space-y-4">
        <ServiceImage
          image="/path/to/forex-image.jpg"
          title="Expert Management of Forex Portfolios"
        />
      </div>
    ),
  },
  {
    title: "Comprehensive Fund Handling Services",
    description: (
      <div>
        <p>
          Our Fund Handling service ensures that your investments are
          professionally managed with full transparency and efficiency. We
          handle everything from fund allocation to reporting, so you can rest
          assured that your investments are in safe hands.
        </p>
        <button
          className="inline-flex h-12 animate-shimmer items-center justify-center rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-4"
          onClick={() => (window.location.href = "/contact")}
        >
          Contact Us
        </button>
      </div>
    ),
    content: (
      <div className="h-full w-full flex flex-col items-center justify-center space-y-4">
        <ServiceImage
          image="/path/to/fund-handling-image.jpg"
          title="Comprehensive Fund Handling"
        />
      </div>
    ),
  },
  {
    title: "Maximize Your Returns with Mutual Funds",
    description: (
      <div>
        <p>
          Our Mutual Fund service is perfect for investors looking for a simpler
          way to grow their wealth. We help you choose the right mutual funds
          based on your financial objectives, risk tolerance, and market
          conditions, ensuring that your portfolio is diversified and geared for
          long-term success.
        </p>
        <button
          className="inline-flex h-12 animate-shimmer items-center justify-center rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-4"
          onClick={() => (window.location.href = "/contact")}
        >
          Contact Us
        </button>
      </div>
    ),
    content: (
      <div className="h-full w-full flex flex-col items-center justify-center space-y-4">
        <ServiceImage
          image="/path/to/mutual-funds-image.jpg"
          title="Mutual Fund Services"
        />
      </div>
    ),
  },
];

export function ServiceCat() {
  return (
    <div className="py-10 w-full hideScrollbar">
      <StickyScroll content={content} />
    </div>
  );
}
