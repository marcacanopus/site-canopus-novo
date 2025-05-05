"use client";

import { useEffect } from "react";
import building from "@/data/building.json";
import Banner from "./sections/Banner";
import About from "./sections/About";
import Breadcrumb from "./sections/Breadcrumb";
import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";
import Plans from "./sections/Plans";
import Section3d from "./sections/3d";
import Map from "./sections/Map";
import Differentials from "./sections/Differentials";
import Areas from "./sections/Areas";
import Stages from "./sections/Stages";

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

      <Areas areas={building.areas} />

      <Stages />
    </>
  );
};

export default BuildingTemplate;
