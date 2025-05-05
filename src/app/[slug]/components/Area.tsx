import Image from "next/image";

type Props = {
  name: string;
  image: string;
};

const Area = ({ name, image }: Props) => {
  return (
    <div className="h-full shadow-lg bg-white">
      <div className="relative w-full h-[200px]">
        <Image src={image} fill alt={name} />
      </div>
      <div className="p-4">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Area;
