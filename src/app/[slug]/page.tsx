"use client";

import { useEffect } from "react";
import building from "@/data/building.json";
import Banner from "./components/Banner";
import About from "./components/About";

export default function Building() {
  const primaryColor = building.color.primary;
  const secondaryColor = building.color.secondary;

  useEffect(() => {
    primaryColor
      ? document.documentElement.style.setProperty(
          "--primary-color",
          primaryColor
        )
      : "#000000";
    secondaryColor
      ? document.documentElement.style.setProperty(
          "--secondary-color",
          secondaryColor
        )
      : "#000000";
  }, []);

  return (
    <>
      <Banner
        name={building.name}
        status={building.status}
        color={building.color}
        banner={building.banner}
      />

      <About name={building.name} logo={building.logo} />
    </>
  );
}
