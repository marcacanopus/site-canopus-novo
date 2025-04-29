import Image from "next/image";

const Differentials = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <div>
          <h2 className="text-5xl text-[var(--canopusBlue)] font-bold mb-4">
            Diferenciais
          </h2>
          <p className="text-[var(--buildingText)] text-lg font-semibold">
            Tudo sobre o apartamento
          </p>
        </div>
        <div className="flex gap-6 text-[var(--buildingText)]">
          <div className="flex align-center bg-white w-full">
            <div className="relative w-[25px] h-[25px] me-2">
              <Image
                src="/site-canopus-novo/images/icone-local2.svg"
                fill
                alt="Academia"
              />
            </div>
            <p className="text-sm text-center">Localização privilegiada</p>
          </div>
          <div className="flex align-center bg-white w-full">
            <div className="relative w-[25px] h-[25px] me-2">
              <Image
                src="/site-canopus-novo/images/icone-ralo.svg"
                fill
                alt="Academia"
              />
            </div>
            <p className="text-sm text-center">
              Ralo linear no terraço das unidades dos pavimentos tipo*</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Differentials;
