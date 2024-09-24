import { cn } from "@/lib/utils";
import Marquee from "./ui/Scrolling-Cards";
import { Heading } from "./BlurHeading";

const reviews = [
  {
    name: "Person name idhar aayega",
    username: "@jack",
    body: "Okayy",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Person name idhar aayega",
    username: "@jill",
    body: "Red",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Person name idhar aayega",
    username: "@john",
    body: "Review.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Person name idhar aayega",
    username: "@jane",
    body: "Rev",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Person name idhar aayega",
    username: "@jenny",
    body: "Revv.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Person name idhar aayega",
    username: "@james",
    body: "Refrd",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Reviews() {
  return (
    <div className="w-full my-[5rem] flex items-center justify-center flex-col">
      <Heading heading="What our Customers say..." />
      <div className="relative flex h-fit p-[3rem] md:p-[4rem] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
        <Marquee pauseOnHover className="[--duration:50s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:50s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </div>
  );
}
