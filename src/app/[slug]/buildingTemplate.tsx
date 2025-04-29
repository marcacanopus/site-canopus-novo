"use client";

import { useEffect } from "react";
import building from "@/data/building.json";
import Banner from "./components/Banner";
import About from "./components/About";
import Breadcrumb from "./components/Breadcrumb";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Plans from "./components/Plans";
import Section3d from "./components/3d";
import Map from "./components/Map";
import Differentials from "./components/Differentials";

const BuildingTemplate = () => {
  const primaryColor = building.color.primary;
  const secondaryColor = building.color.secondary;

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--primary-color",
      primaryColor ?? "#000000"
    );
    document.documentElement.style.setProperty(
      "--secondary-color",
      secondaryColor ?? "#000000"
    );
  }, [primaryColor, secondaryColor]);

  return (
    <>
      <Banner
        title={building.title_banner}
        status={building.status}
        color={building.color}
        banner={building.banner}
      />

      <About
        name={building.name}
        logo={building.logo}
        address={building.address}
      />

      <Breadcrumb name={building.name} />

      <Gallery gallery={building.gallery} />

      <Contact />
      
      <Plans plans={building.plans} />

      <Section3d />

      <Map />

      <Differentials />
    </>
  );
};

export default BuildingTemplate;
