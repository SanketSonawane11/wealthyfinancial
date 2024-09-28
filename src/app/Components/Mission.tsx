import React from "react";

const BusinessSection = () => {
  const features = [
    {
      title: "Integrity",
      description:
        "We uphold the highest standards of integrity in all of our actions.",
      icon: (
        <svg
          className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 11V7h2v4h-2zm1 5a1 1 0 110-2 1 1 0 010 2z" />
        </svg>
      ),
    },
    {
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and collaboration to achieve our goals.",
      icon: (
        <svg
          className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 2a7 7 0 100 14 7 7 0 000-14zM5 8h10v4H5V8zm2 5h6v1H7v-1z" />
        </svg>
      ),
    },
    {
      title: "Innovation",
      description:
        "We embrace change and strive for continuous improvement and innovation.",
      icon: (
        <svg
          className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 3a7 7 0 107 7 7 7 0 00-7-7zm0 12.5A5.5 5.5 0 1115.5 10 5.506 5.506 0 0110 15.5z" />
        </svg>
      ),
    },
    {
      title: "Excellence",
      description:
        "We pursue excellence in everything we do, striving for the highest quality.",
      icon: (
        <svg
          className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 2L8.293 8.293 2 10l6.293 1.707L10 18l2.293-6.293L18 10l-6.293-1.707z" />
        </svg>
      ),
    },
    {
      title: "Respect",
      description:
        "We treat everyone with respect and value diversity in our workforce.",
      icon: (
        <svg
          className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 11V7h2v4H9zm1 5a1 1 0 110-2 1 1 0 010 2z" />
        </svg>
      ),
    },
    {
      title: "Accountability",
      description: "We take responsibility for our actions and their outcomes.",
      icon: (
        <svg
          className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 2a8 8 0 107 7 7 7 0 00-7-7zm-1 9H8V9h1v2zm0 2H8v1h1v-1z" />
        </svg>
      ),
    },
    {
      title: "Customer Focus",
      description: "We put our customers at the heart of everything we do.",
      icon: (
        <svg
          className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm2 11H8v-1h4v1zm0-3H8V9h4v1z" />
        </svg>
      ),
    },
  ];

  // In your UI component, you can render coreValues similarly to features

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            OUR CORE VALUES{" "}
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Here at Landwind, we prioritize sectors where technology,
            innovation, and investment can create sustainable value and foster
            economic development.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-2 xl:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center p-4 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700"
            >
              <div className="p-3 rounded-full bg-primary-50 text-primary-600 sm:p-4 dark:bg-primary-900 dark:text-primary-300">
                {feature.icon}
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
