import React, { useState } from "react";
import { DonationCard } from "../components/DonationCard/DonationCard";
import { Projects } from "./Projects";

export const Home = () => {
 

  return (
    <div>
    <DonationCard/>
   <Projects/>
    </div>
  );
};
