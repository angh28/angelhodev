import Image from "next/image";

interface Props {
  label: string;
  emoji: string;
  isImage: boolean;
}

export const AppIcon: React.FC<Props> = ({ label, emoji, isImage }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 md:gap-4">
      <div className="flex justify-center items-center rounded-4xl w-[120px] h-[120px] md:w-[150px] md:h-[150px] bg-mylightblue">
        {isImage && (
          <Image
            src={`/images/${emoji}.png`}
            width={115}
            height={115}
            alt={emoji}
            className="ml-5"
          />
        )}
        {!isImage && <div className="text-7xl md:text-8xl">{emoji}</div>}
      </div>
      <div className="font-bold text-l md:text-xl text-mydarkpurple">
        {label}
      </div>
    </div>
  );
};
