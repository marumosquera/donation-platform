import React from "react";
import { ConnectWallet } from "../ConnectWallet/ConnectWallet";
import "./NavBar.scss";
import logo from "../../assets/logopiltri.svg";


export const NavBar = () => {
  return (
    <nav >
      <div className="navbar flex">
      <img src={logo} alt="piltri" />
    <ConnectWallet/>
      </div>

  </nav>
  );
};
