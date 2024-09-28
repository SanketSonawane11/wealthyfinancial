"use client";

import NumberTicker from "./ui/NumberTick";

const stats = [
  { name: "Funds managed", value: "10" },
  { name: "Clients", value: "200+" },
];

export default function AboutHero() {
  return (
    <div className="w-full mt-[1rem] flex items-center justify-evenly flex-col rounded-xl bg-blue-100 py-[2rem] md:py-[3rem]">
      <div className="w-full flex items-center justify-evenly flex-col gap-[3rem] md:flex-row">
        {stats.map((stat) => (
          <div key={stat.name} className="flex flex-col gap-3 md:gap-[1.5rem]">
            <dt className="text-[2rem] md:text-[2.2rem] leading-7 text-center text-blue-800 font-semibold">
              {stat.name}
            </dt>
            <dd className="text-[1.5rem] text-center font-bold leading-9 tracking-tight text-blue-500">
              {stat.value == "10" ? (
                <span>
                  <NumberTicker value={stat.value} />
                  Cr+ and growing
                </span>
              ) : (
                <span>
                  <NumberTicker value={stat.value} />+
                </span>
              )}
            </dd>
          </div>
        ))}
      </div>
    </div>
  );
}
