import BuildingsCards from "@/components/BuildindsCard";

type Props = {
  buildings: {
    image: string;
    name: string;
    size: string;
    rooms: number;
    city: string;
    suites: number;
    semiSuites: number;
    garage: number;
  }[];
};

const SimilarBuildings = (props: Props) => {
  const { buildings } = props;

  return (
    <div className="py-20">
      <div className="container mx-auto overflow-hidden">
        <h2 className="relative text-3xl text-[var(--canopusBlue)] font-bold w-fit after:content[''] after:block after:absolute after:left-[102%] after:bottom-[8px] after:w-[100vw] after:h-[1px] after:bg-[var(--canopusBlue)] after:rounded-full after:mt-2">
          Conheça outros empreendimentos
        </h2>

        <div className="grid grid-cols-1 items-center sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {buildings.map((item, index) => (
            <BuildingsCards key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimilarBuildings;
