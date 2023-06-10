import React from "react";
import { Link } from "react-router-dom";
import causes from "../../assets/hexagoncauses.svg";
import "./BannerHome.scss";

export const BannerHome = () => {
  return (
    <div className="banner-home w-full flex">
      <div className="home-info-container w-1/2">
        <h1>
          The world needs you.
          <b>play your part 🐝</b>
          Choose your <b>contribution </b>.
        </h1>
        <Link to="/emprear">
        {" "}
        <button> donar a Emprear </button>
      </Link>
      </div>
      <div className="w-1/2 home-img">
        <img src={causes} alt="piltri causes" />
      </div>
    </div>
  );
};
