import { Heading } from "./BlurHeading";
import { Card } from "./Card";
import BoxReveal from "./ui/reveal";

export async function WhyUs() {
  const whyPoints = [
    {
      title: "Proven Results",
      content:
        "Our Company has a track record of profitable Account management.",
      img: "/images/Results.jpg",
    },
    {
      title: "Secure & Transparent",
      content:
        "our money is safe in your Trading Account, and you stay informed.",
      img: "/images/Secure.jpg",
    },
    {
      title: " Consistent Returns",
      content: "Reliable profits to grow your investment over the time.",
      img: "/images/ConsistenRet.jpg",
    },
    {
      title: "Client-Centric Approach",
      content:
        "Your needs come first. We are here to listen, advise, and offer personalized solutions.",
      img: "/images/Customer2.jpg",
    },
    {
      title: "Excellence",
      content:
        "We strive for excellence in everything we do, from the solutions we offer to the services we deliver.",
      img: "/images/Excellence.jpg",
    },
  ];

  return (
    <div className="h-full flex flex-col w-[95%] md:w-[full] my-[2rem] items-center justify-center overflow-hidden pt-8">
      <BoxReveal boxColor={"#eab308"} duration={0.5}>
        <Heading heading="Why Wealthy Financial Services?" />
      </BoxReveal>

      <BoxReveal boxColor={"#eab308"} duration={0.5}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center justify-center">
          {whyPoints.map((ele, i) => {
            return (
              <div
                key={i}
                className={`${
                  whyPoints.length === 5 && i === 4
                    ? "lg:col-span-4 lg:justify-self-center"
                    : ""
                }`}
              >
                <Card image={ele.img} title={ele.title} content={ele.content} />
              </div>
            );
          })}
        </div>
      </BoxReveal>
    </div>
  );
}
