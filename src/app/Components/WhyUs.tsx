// import { Button } from "@/components/ui/button";
import BoxReveal from "./ui/reveal";

export async function WhyUs() {
  return (
    <div className="h-full w-[19rem] md:w-[40rem] lg:w-[55rem] my-[2rem] items-center justify-center overflow-hidden pt-8">
      <BoxReveal boxColor={"#eab308"} duration={0.5}>
        <p className="text-[3.5rem] font-semibold">
          Why Wealthy Financial Services?
          <span className="text-[#eab308]">.</span>
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#eab308"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1.5rem] md:text-[2rem]">
          UI library for{" "}
          <span className="text-[#eab308]">Design Engineers</span>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#eab308"} duration={0.5}>
        <div className="mt-[1.3rem] text-[1.2rem] md:text-[1.5rem]">
          <p>
            &gt; Expert Advisors:
            <span className="font-semibold text-[#eab308]">
              {" "}
              Our team of financial experts brings decades of experience in
              managing complex portfolios.
            </span>{" "}
            <br />
            &gt; Personalized Service:
            <span className="font-semibold text-[#eab308]">
              {" "}
              We create investment strategies tailored to your specific needs,
              goals, and risk tolerance.
            </span>{" "}
            <br />
            &gt; Proven Results::
            <span className="font-semibold text-[#eab308]">
              {" "}
              Our clients consistently see better returns with our hands-on
              management and data-driven strategies.
            </span>{" "}
            <br />
            &gt; Transparency & Trust:
            <span className="font-semibold text-[#eab308]">
              {" "}
              Clear communication and complete transparency are at the heart of
              everything we do.
            </span>{" "}
            <br />
          </p>
        </div>
      </BoxReveal>

      {/* <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <Button className="mt-[1.6rem] bg-[#5046e6]">Explore</Button>
      </BoxReveal> */}
    </div>
  );
}
