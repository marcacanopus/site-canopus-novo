import { Empreendimento } from "@/types/Empreendimento";
import { BedDouble, Ruler, BedSingle } from "lucide-react";
import clsx from "clsx";

type Props = {
  data: Empreendimento;
};

export default function BuildingsCards({ data }: Props) {
  return (
    <div className="w-full max-w-sm rounded-xl overflow-hidden border shadow-md bg-white group">
      <div
        className="relative h-80"
        style={{
          backgroundImage: `url(${data.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-white text-gray-700 text-xs px-3 py-1 rounded-full font-semibold shadow">
          BREVE LANÇAMENTO
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white z-10">
          <h2 className="text-2xl font-bold tracking-wide">
            {data.name.split(" - ")[0]}
          </h2>
          <p className="text-sm">{data.name.split(" - ")[1]}</p>
        </div>
      </div>

      <div className="p-4 flex flex-col items-center text-sm text-gray-700 gap-2">
        <div className="flex justify-center flex-wrap gap-x-4 gap-y-2 text-sm">
          <div className="flex items-center gap-1">
            <Ruler size={16} /> {data.size}
          </div>
          <div className="flex items-center gap-1">
            <BedDouble size={16} /> {data.rooms} quartos
          </div>
          <div className="flex items-center gap-1">
            <BedSingle size={16} /> {data.suites} suítes
          </div>
        </div>

        <p className="text-center mt-2 font-medium">
          {data.name.toUpperCase()}
        </p>

        <div
          className={clsx(
            "mt-4 w-full rounded-full border border-canopus-blue text-canopus-blue py-2 text-center font-semibold text-sm transition-all duration-300 relative overflow-hidden",
            "group-hover:text-white group-hover:border-white"
          )}
        >
          <span className="relative z-10">Visite o decorado →</span>
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              backgroundImage: `url(${data.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    </div>
  );
}
