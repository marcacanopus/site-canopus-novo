import Image from "next/image";

type Props = {
  imgHeight?: string;
  cardScale?: string;
  isMainCard?: boolean;
  title: string;
  image: string;
  percentage: string;
};

const Stage = (props: Props) => {
  const { imgHeight, isMainCard, title, image, percentage } = props;

  const imgHeightToClass = imgHeight ? imgHeight : "h-45";

  return (
    <div
      {...(isMainCard ? { "data-main": "" } : {})}
      className={`group bg-white flex flex-col align-center px-3 py-3 data-main:px-5 data-main:py-7 data-main:h-full data-main:justify-between`}
    >
      <div
        className={`text-center text-[var(--secondary-color)] text-sm font-bold mb-5 after:block after:w-[30%] after:h-[1px] after:bg-[var(--secondary-color)] after:content-[''] after:mx-auto after:mt-1 group-data-main:text-xl group-data-main:mb-10`}
      >
        {title}
      </div>
      <div
        className={`relative w-full ${imgHeightToClass} mb-5 group-data-main:mb-10`}
      >
        <Image src={image} fill alt="Total da Obra Concluída" />
      </div>
      <div
        className={`text-center text-[var(--primary-color)] text-xl font-bold mb-3 group-data-main:text-5xl`}
      >
        {percentage}%
      </div>
      <div className="w-full h-4 bg-gray-200 group-data-main:h-7">
        <div
          className="h-4 bg-[var(--CanopusBlueLight)] group-data-main:h-7"
          style={{ width: percentage + "%" }}
        />
      </div>
    </div>
  );
};

export default Stage;
