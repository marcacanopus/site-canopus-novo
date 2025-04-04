import { Empreendimento } from "@/types/Empreendimento";
import { BedDouble, CarFront, Ruler, BedSingle } from "lucide-react";

type Props = {
  data: Empreendimento;
};

export default function ReleaseBuildingsCards({ data }: Props) {
  return (
    <div
      className="relative w-full max-w-sm h-[500px] rounded-xl overflow-hidden shadow-lg"
      style={{
        backgroundImage: `url(${data.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50 " />

      <div className="absolute inset-0 flex flex-col justify-end gap-8 p-6 text-white z-10">
        <div className="text-center mt-6">
          <h2 className="text-3xl font-bold">THE PLACE</h2>
          <p className="text-sm tracking-wide mt-1">SANTO AGOSTINHO</p>
        </div>

        <div className="text-center text-sm">
          <p className="mb-4 text-canopus-yellow">{data.name.toUpperCase()}</p>
          <div className="flex justify-center flex-wrap gap-x-4 gap-y-2 mb-2 text-xs text-canopus-yellow">
            <div className="flex items-center gap-1  text-lg">
              <Ruler size={16} color="white" /> {data.size}
            </div>
            <div className="flex items-center gap-1  text-lg">
              <BedDouble size={16} color="white" /> {data.rooms} quartos
            </div>
            <div className="flex items-center gap-1  text-lg">
              <BedSingle size={16} color="white" /> {data.suites} suítes
            </div>
          </div>
          <div className="flex justify-center flex-wrap gap-x-4 gap-y-2 text-xs text-canopus-yellow">
            <div className="flex items-center gap-1 text-lg">
              <BedSingle size={16} color="white" /> {data.semiSuites}{" "}
              semissuítes
            </div>
            <div className="flex items-center gap-1 text-lg">
              <CarFront size={16} color="white" /> {data.garage} vagas
            </div>
          </div>
        </div>

        <div className="text-center text-canopus-yellow text-sm border-t border-white/30 pt-4 hover:cursor-pointer ">
          <span className="uppercase tracking-wide  hover:text-yellow-600 p-3 ">Visite o stand →</span>
        </div>
      </div>
    </div>
  );
}
