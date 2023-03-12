import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { SiTwitter, SiDiscord, SiGithub , SiGitbook, SiLinkedin} from "react-icons/si";

export const Footer = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-wrap -m-6">
          <div className="w-full md:w-1/2 lg:w-5/12 p-6">
            <div className="flex flex-col justify-between h-full">
              <div>
                <img className="mb-4 w-1/2" src="../assets/piltri-text.svg" alt="PILTRI" />
              </div>
              <div>
                <p className="mb-4 font-heading font-medium text-2xl">
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
              <h3 className="mb-9 font-heading font-semibold text-ls text-gray-200 uppercase tracking-px">
                Menu
              </h3>
              <ul>
                <li className="mb-4 font-heading font-medium text-lg text-gray-700 hover:text-gray-200">
                  <Link to="/"> Home </Link>
                </li>
                <li className="mb-4 font-heading font-medium text-lg text-gray-700 hover:text-gray-200">
                  <Link to="/projects"> Projects </Link>
                </li>
                <li className="mb-4 font-heading font-medium text-lg text-gray-700 hover:text-gray-200">
                  <Link to="/my-profile"> My Profile </Link>
                </li>
                <li className="mb-4 font-heading font-medium text-lg text-gray-700 hover:text-gray-200">
                  <Link to="/about-us"> About us </Link>
                </li>
                <li className="mb-4 font-heading font-medium text-lg text-gray-700 hover:text-gray-200">
                  <Link to="/faq"> FAQ </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/12 p-6">
            <div className="h-full">
              <h3 className="mb-9 font-heading font-semibold text-ls text-gray-200 uppercase tracking-px">
                Reach out to us!
              </h3>
              <ul className="flex">
                <li className="mb-4 m-4">
                  <a
                    className="font-heading font-medium text-2xl text-gray-700 hover:text-gray-200"
                    href="https://www.twitter.com/wearepiltri/"
                    target="_blank"
                  >
                   <SiTwitter/>
                  </a>
                </li>
                <li className="mb-4 m-4">
                  <a
                    className="font-heading font-medium text-2xl text-gray-700 hover:text-gray-200"
                    href="https://www.twitter.com/wearepiltri/"
                    target="_blank"
                  >
                    <SiDiscord/>
                  </a>
                </li>
                <li className="mb-4 m-4">
                  <a
                    className="font-heading font-large text-2xl text-gray-700 hover:text-gray-200"
                    href="https://www.twitter.com/wearepiltri/"
                    target="_blank"
                  >
                    <SiLinkedin/>
                  </a>
                </li>
                <li className="mb-4 m-4">
                  <a
                    className="font-heading font-medium text-2xl text-gray-700 hover:text-gray-200"
                    href="https://www.twitter.com/wearepiltri/"
                    target="_blank"
                  >
                    <SiGithub/>
                  </a>
                </li>
                <li className="mb-4 m-4">
                  <a
                    className="font-heading font-medium text-2xl text-gray-700 hover:text-gray-200"
                    href="https://www.twitter.com/wearepiltri/"
                    target="_blank"
                  >
                    <SiGitbook/>
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
