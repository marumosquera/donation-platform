import React from "react";
import { ConnectWallet } from "../ConnectWallet/ConnectWallet";
import "./NavBar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <nav className="border-gray-200 px-2 sm:px-4 py-2.5 rounded">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link to="/">
            {" "}
            <a className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap flex logo">
                <img src="../assets/piltri.svg" alt="" />
                <img src="../assets/piltri-text.svg" alt="PILTRI" />
              </span>
            </a>
          </Link>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex  flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 m">
              <li>
                <Link to="/">  <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent hover:text-cyan-500 hover:font-black text-lg font-bold   md:p-0 "
                  aria-current="page"
                >
                  Home
                </a> </Link>
              
              </li>
              <li>
              <Link to="/projects">   <a
                  href="#"
                  className="block py-2 pl-3 pr-4  text-white text-lg font-bold  rounded hover:text-cyan-500 md:border-0  md:p-0 "
                >
                  Projects
                </a></Link>
              
              </li>
              <li>
              <Link to="/my-profile">   <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white  text-lg font-bold rounded hover:text-cyan-500 md:border-0  md:p-0"
                >
                  MyProfile
                </a> </Link>
             
              </li>
              <li>
              <Link to="/about-us"> <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white text-lg font-bold  rounded hover:text-cyan-500 md:border-0  md:p-0"
                >
                  About us
                </a></Link>
                
              </li>
              <li>
              <Link to="/faq">    <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-lg font-bold  text-white rounded hover:text-cyan-500 md:border-0  md:p-0"
                >
                  FAQ
                </a></Link>
             
              </li>
            </ul>
          </div>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4   rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  ">
              <ConnectWallet />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
