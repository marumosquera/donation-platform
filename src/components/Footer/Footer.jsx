import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FiInstagram } from "react-icons/fi";
import { GrFacebook } from "react-icons/gr";
export const Footer = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-wrap -m-6">
          <div className="w-full md:w-1/2 lg:w-5/12 p-6">
            <div className="flex flex-col justify-between h-full">
              <div>
                <img className="mb-4 w-1/2" src="./assets/piltri-text.svg" alt="" />
              </div>
              <div>
                <p className="mb-4 font-heading font-medium text-base">
                  play your part
                </p>
                <p className="text-gray-600 text-sm">
                  &copy; Copyright 2023. All Rights Reserved by piltri.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/12 p-6">
            <div className="h-full">
              <h3 className="mb-9 font-heading font-semibold text-xs text-gray-500 uppercase tracking-px">
                Menu
              </h3>
              <ul>
                <li className="mb-4 font-heading font-medium text-base text-gray-900 hover:text-gray-700">
                  <Link to="/"> Home </Link>
                </li>
                <li className="mb-4 font-heading font-medium text-base text-gray-900 hover:text-gray-700">
                  <Link to="/tienda"> Tienda </Link>
                </li>
                <li className="mb-4 font-heading font-medium text-base text-gray-900 hover:text-gray-700">
                  <Link to="/about-us"> About us </Link>
                </li>
                <li className="mb-4 font-heading font-medium text-base text-gray-900 hover:text-gray-700">
                  <Link to="/faq"> FAQ </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/12 p-6">
            <div className="h-full">
              <h3 className="mb-9 font-heading font-semibold text-xs text-gray-500 uppercase tracking-px">
                Redes Sociales
              </h3>
              <ul className="flex">
                <li className="mb-4 m-4">
                  <a
                    className="font-heading font-medium text-base text-gray-900 hover:text-gray-700"
                    href="https://www.instagram.com/ellie.shampoo/"
                    target="_blank"
                  >
                    <FiInstagram />
                  </a>
                </li>
                <li className="mb-4 m-4">
                  <a
                    className="font-heading font-medium text-base text-gray-900 hover:text-gray-700"
                    href="https://www.facebook.com/ellie.shampoo"
                    target="_blank"
                  >
                    <GrFacebook />
                  </a>
                </li>
                <li className="mb-4 m-4">
                  <a
                    className="font-heading font-medium text-base text-gray-900 hover:text-gray-700"
                    href="#"
                  >
                    info@piltri.io
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
