import React from "react";
import { Banner } from "../components/Banner/Banner";
import { BannerTitle } from "../components/BannerTitle/BannerTitle";
import { ProjectContainer } from "../components/ProjectContainer/ProjectContainer";
import { ProjectOverview } from "../components/ProjectOverview/ProjectOverview";

export const Projects = () => {
  return (
    <div className="page-size">
      <Banner
        title={" Projects "}
        slogan={"play your part"}
        cta={"Donate now"}
      />
      <BannerTitle />
      <ProjectContainer />
    </div>
  );
};
