"use client";

import slides from "@/data/slides.json";
import Slider from "@/components/Slider";
import ReleaseBuildingsCards from "@/components/ReleaseBuildings";
import BuildingsCards from "@/components/BuildindsCard";
import Hero from "@/components/Hero";
import AboutSection from "@/components/About";
import PostCard from "@/components/PostCard";
import InstagramEmbed from "@/components/InstagramEmbed";
import buildingsData from "@/data/buildings.json";
import postData from "@/data/post.json";
import instagramData from "@/data/instagram.json";
import { useCity } from "@/context/cityContext";
import StoreSlider from "@/components/StoreSlider";

export default function Home() {
  const { activeCity } = useCity();
  return (
    <div>
      <Slider slides={slides} />
      {activeCity === "geral" && (
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
      )}

      <div id="buildings" className="container mx-auto mb-4">
        <div className="flex items-center gap-3 pt-8">
          <span className="text-4xl font-bold text-canopus-blue whitespace-nowrap">
            Empreendimentos{" "}
            {activeCity === "geral"
              ? ""
              : activeCity === "Rio de Janeiro"
              ? "no " + activeCity
              : "em " + activeCity}
          </span>
          <div className="flex-1 h-1 bg-canopus-blue rounded-full" />
        </div>

        <div className="grid grid-cols-1 items-center sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {buildingsData
            .filter(
              (item) => activeCity === "geral" || item.city === activeCity
            ) // Filtro
            .map((item, index) => (
              <BuildingsCards key={index} data={item} />
            ))}
        </div>
      </div>

      {activeCity === "geral" ? (
        <div className="container mx-auto mb-4" id="hero">
          <Hero />
        </div>
      ): (
        <StoreSlider cidadeAtiva={activeCity} />
      )}
      

      <div className="container mx-auto mb-4" id="about">
        <AboutSection />
      </div>
      <div id="highlights" className="container mx-auto mb-4">
        <div className="flex items-center justify-start gap-3 pt-8">
          <span className="text-4xl font-bold text-canopus-blue">
            Destaques
          </span>
          <div className="mt-2 w-1000 h-[2] bg-canopus-blue rounded-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 mt-4">
          {postData.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded shadow hover:shadow-md p-2 transition overflow-hidden"
            >
              <PostCard
                excerpt={post.excerpt}
                image={post.image}
                link={post.link}
                title={post.title}
              />
            </div>
          ))}
        </div>
      </div>
      <div id="instagram" className="container mx-auto mb-4">
        <div className="flex items-center justify-start gap-3 pt-8">
          <span className="text-4xl font-bold text-canopus-blue">
            últimos posts do Instagram
          </span>
          <div className="mt-2 border w-full bg-canopus-blue rounded-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 mt-4">
          {instagramData.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded shadow hover:shadow-md transition overflow-hidden"
            >
              <InstagramEmbed url={post.url} />
            </div>
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
