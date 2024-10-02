"use client";
import Link from "next/link";
import React from "react";

const ToolsAndIdeasSection = () => {
  return (
    <section className="dark:bg-gray-900">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img
          className="w-full rounded-xl"
          // src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
          src="/images/joshua-mayo-MCIm2A6hLXs-unsplash.jpg"
          alt="dashboard image"
        />
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Ready to Work with Us?
          </h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
            At <span className="font-semibold">Wealthy Financial Services</span>
            , we’re more than just financial advisors—we’re your partners in
            achieving lasting financial success. Whether you’re looking to
            optimize your portfolio, explore new investment opportunities, or
            simply get expert advice, our team is here to help you every step of
            the way. <br />
            <br />
            Get in touch today to discover how we can help you take control of
            your financial future.
          </p>
          <Link
            href="#Contact"
            className="inline-flex bg-yellow-600 transition-all ease-out duration-150 hover:rounded-xl items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
          >
            Get started
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ToolsAndIdeasSection;
