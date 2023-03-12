import React from "react";
import { VscVerifiedFilled } from "react-icons/vsc";
import "./ProjectCard.css";
import {BiDonateHeart} from 'react-icons/bi';
import {IoPaw} from 'react-icons/io5';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {BiCategoryAlt} from 'react-icons/bi';
import {RiCoinsFill} from 'react-icons/ri';
import {GiEarthAmerica} from 'react-icons/gi';
import {IoHome} from 'react-icons/io5';
import {GiEarthSpit} from 'react-icons/gi';
import {Link} from 'react-router-dom';

export const ProjectCard = ({ project }) => {
  return (
    <Link to={`/donate/${project.address}`}>
    <div className=" gap-6 w-full project-card-container">
      <div className="relative mx-auto w-full">
        <a
          href="#"
          className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full"
        >
          <div className="shadow p-4 rounded-lg bg-black">
            <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
              <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                <div className="absolute inset-0 ">
                  <img src={project.image} alt="" />
                </div>
              </div>

              <div className="absolute flex justify-center bottom-0 mb-3">
                <div className="flex bg-black px-4 py-1 space-x-5 rounded-lg overflow-hidden shadow">
                  <p className="flex items-center font-medium text-gray-200">
                   
                    <BiDonateHeart  className="w-5 h-5 fill-current mr-2"/>
                    
                  </p>

                  <p className="flex items-center font-medium text-gray-200">
                    {project.tags == 'environment' &&   <GiEarthAmerica className="w-5 h-5 fill-current mr-2"/>}
                    {project.tags == 'animal welfare' &&   <IoPaw className="w-5 h-5 fill-current mr-2"/>}
                    {project.tags == 'poverty' &&   <IoHome className="w-5 h-5 fill-current mr-2"/>}
                    {project.tags == 'natural disaster' &&    <GiEarthSpit className="w-5 h-5 fill-current mr-2"/>}
    
                  </p>

                  <p className="flex items-center font-medium text-gray-200">
                    <AiFillTwitterCircle className="w-5 h-5 fill-current mr-2"/>
                    
                  </p>
                </div>
              </div>

              <span className="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 text-sm font-medium text-white select-none verified">
             <span className=" ml-1 mr-2"> <VscVerifiedFilled /> </span>  <span className="mr-1">verified </span> 
              </span>
            </div>

            <div className="mt-4">
              <h2
                className="font-medium text-base md:text-lg text-gray-200 line-clamp-1 card-project-name "
                title="New York"
              >
                {project.projectName}
              </h2>
              <p
                className="mt-2 text-sm text-gray-200 line-clamp-1"
                title="New York, NY 10004, United States"
              >
                {project.projectBriefDescription}
              </p>
            </div>

            <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-8">
              <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-200">
               
                <BiCategoryAlt   className="inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-200"/>
                <span className="mt-2 xl:mt-0">{project.tags}</span>
              </p>
              <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-200">
            
                <RiCoinsFill/>
                <span className="mt-2 xl:mt-0">{project.raisedAmount}</span>
              </p>
            <button className="card-button">donate</button>
            </div>

            <div className="grid grid-cols-2 mt-8">
              <div className="flex items-center">
                <div className="relative">
                  <div className="rounded-full w-6 h-6 md:w-8 md:h-8 bg-gray-200"></div>
                  <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-primary-red rounded-full"></span>
                </div>

                <p className="ml-2 text-gray-200 line-clamp-1">{project.projectOwner}</p>
              </div>

             
            </div>
          </div>
        </a>
      </div>
    </div>
    </Link>
  );
};
