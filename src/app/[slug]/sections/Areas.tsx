import Area from "../components/Area";

type Props = {
  areas: {
    name: string;
    image: string;
  }[];
};

const Areas = (props: Props) => {
  const { areas } = props;

  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl text-[var(--buildingText)] font-bold mb-8">
          Nossas áreas em comum
        </h2>

        <div className="flex flex-wrap gap-x-8 gap-y-6 text-[var(--buildingText)]">
          {areas.map((area, index) => (
            <div key={index} className="w-[calc(25%-(--spacing(8)))]">
              <Area name={area.name} image={area.image} />
            </div>
          ))}
        </div>
        <p className="text-xs text-[var(--buildingText)] mt-8">
          * Todos os itens serão entregues conforme o memorial descritivo.
        </p>

        <div className="text-center">
          <a
            href="#"
            className="mt-15 inline-block bg-[var(--primary-color)] text-[#003349] text-sm px-8 py-3 rounded-full border-1 border-[var(--primary-color)] hover:bg-white hover:text-[var(--primary-color)] transition"
          >
            Agende sua visita agora →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Areas;
