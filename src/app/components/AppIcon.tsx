import Image from "next/image";

interface Props {
  name: string;
  image: string;
}

export const AppIcon: React.FC<Props> = ({ name, image }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 md:gap-4">
      <div className="flex justify-center items-center rounded-4xl w-[120px] h-[120px] md:w-[150px] md:h-[150px] bg-mylightblue">
        <Image
          src={`/images/${image}.png`}
          width={100}
          height={100}
          alt={image}
        />
      </div>
      <div className="font-bold text-l md:text-xl text-mydarkpurple">
        {name}
      </div>
    </div>
  );
};
