import slides from "@/data/slides.json";
import Slider from "@/components/Slider";
import buildingsData from "@/data/buildings.json";
import ReleaseBuildingsCards from "@/components/ReleaseBuildings";
import BuildingsCards from "@/components/BuildindsCard";

export default function Home() {
  return (
    <div>
      <Slider slides={slides} />

      <div id="releases" className="container mx-auto">
        <div className="flex items-center justify-center flex-col pt-8">
          <span className="text-4xl font-bold text-canopus-blue">
            Lançamentos
          </span>
          <div className="mt-2 w-[8%] h-0.25 bg-canopus-blue rounded-full" />
        </div>
        <div className="grid grid-cols-1 items-center sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {buildingsData.slice(0, 3).map((item, index) => (
            <ReleaseBuildingsCards key={index} data={item} />
          ))}
        </div>
      </div>

      <div id="buildings" className="container mx-auto mb-4">
        <div className="flex items-center justify-start gap-3 pt-8">
          <span className="text-4xl font-bold text-canopus-blue">
            Empreendimentos
          </span>
          <div className="mt-2 w-1000 h-[2] bg-canopus-blue rounded-full" />
        </div>
        <div className="grid grid-cols-1 items-center sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {buildingsData.map((item, index) => (
            <BuildingsCards key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

    //   </main>

    // </div>
  );
}
