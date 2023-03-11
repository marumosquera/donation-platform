import React from "react";
import { projects } from "../../data/projects";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import './ProjectContainer.css'

export const ProjectContainer = () => {
  return (
    <>
    <div className="lex m-5 project-container">
    {projects.map((project) => {
        return (
          <div className="">
            <ProjectCard key={project.id} project={project} />
          </div>
        );
      })}
    </div>
    
    </>
  );
};
