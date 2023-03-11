import React from "react";
import "./Banner.css";
import Marquee from "react-fast-marquee";

export const Banner = ({ title, slogan, cta }) => {
  return <div className="banner">
    <Marquee className="banner-marquee">
  {title} - {slogan} - {cta} - {title} - {slogan} - {cta} - {title} - {slogan} - {cta} - 
</Marquee>
  </div>;
};
