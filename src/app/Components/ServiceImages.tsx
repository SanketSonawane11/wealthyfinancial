import { DirectionAwareHover } from "./ui/Direction-aware";

export function ServiceImage({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  const imageUrl = image;
  return (
    <div id="Services" className="h-[20rem] relative flex items-center justify-center">
      <DirectionAwareHover imageUrl={imageUrl}>
        <p className="font-bold text-xl">{title}</p>
      </DirectionAwareHover>
    </div>
  );
}
