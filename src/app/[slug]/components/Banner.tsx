type Building = {
  name: string;
  status: string;
  color: {
    primary: string;
    secondary: string;
  };
  banner: string;
};

const Banner = (building: Building) => {
  return (
    <div
      className="relative w-full h-[600px] flex items-end border-b-8 border-b-[var(--secondary-color)]"
      style={{ backgroundImage: `url(${building.banner})` }}
    >
      <div className="container mx-auto mb-15">
        <div className="w-[25%]">
          <span
            // style={{ "--primary-color": primaryColor } as React.CSSProperties}
            className={`block text-sm text-[var(--primary-color)] font-bold mb-2`}
          >
            {building.status === "concluido"
              ? "EMPREENDIMENTO CONCLUÍDO"
              : building.status === "em_obras"
              ? "EMPREENDIMENTO EM OBRAS"
              : building.status === "Futuro lançamento"
              ? "FUTURO LANÇAMENTO"
              : building.status === "lancamento" &&
                "EMPREENDIMENTO EM LANÇAMENTO"}
          </span>
          <h1 className="text-4xl font-bold text-white">{building.name}</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
