import React from 'react'
import { useParams } from "react-router-dom";
import { projects } from "../../data/projects";

export const ProjectOverview = () => {
    const { projectAddress } = useParams();
  return (
    <div className='p-20'>
        <h2 className='text-2xl font-bold text-gray-200'>Project overview</h2>
        {projects.map((project) => {
        if(project.address == projectAddress) {
            return (
                <div className="">
                  <h3 className='mt-10 text-5xl mb-10 font-black'>{project.projectName.toUpperCase()}</h3>
                  <p className='text-2xl mb-5 font-bold'> About this project </p>
                  <p className='tracking-wide text-justify whitespace-pre-line'>{project.projectDescription}</p>
                  <p className='mt-10 font-bold text-end'> Thank you for your support! </p>
                </div>
              );  
        }
        else{
            <> project not found </>
        }
      })}
    </div>

  )
}
