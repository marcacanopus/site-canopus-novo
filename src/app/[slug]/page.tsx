"use client";

import { useEffect } from "react";
import building from "@/data/building.json";
import Banner from "./components/Banner";
import About from "./components/About";
import Breadcrumb from "./components/Breadcrumb";
import Gallery from "./components/Gallery";

export function generateStaticParams() {
  return [{}];
}

export default function Building() {
  const primaryColor = building.color.primary;
  const secondaryColor = building.color.secondary;

  // const setBuildingColors = () => {

  // };

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

      <Gallery />
    </>
  );
}
