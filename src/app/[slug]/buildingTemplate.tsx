"use client";

import { useEffect } from "react";
import building from "@/data/building.json";
import Banner from "./components/Banner";
import About from "./components/About";
import Breadcrumb from "./components/Breadcrumb";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Plans from "./components/Plans";

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
    </>
  );
};

export default BuildingTemplate;
