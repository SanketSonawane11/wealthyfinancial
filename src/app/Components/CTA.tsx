import Link from "next/link";
import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-blue-50 w-full rounded-xl py-[2rem] my-[3rem] md:py-[3rem] md:my-[5rem]">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-slate-900">
          Ready to Take Control of Your Financial Future?
        </h2>
        <p className="text-lg text-slate-700 mt-4 max-w-2xl mx-auto">
          Our expert team is here to help you make informed decisions about your
          investments. Reach out today to get started.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/Contact">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all ease-out duration-150 hover:rounded-2xl">
              Contact Us Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
