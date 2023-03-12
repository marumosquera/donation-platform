import React from 'react';
import { projects } from "../../data/projects";
import { DonationCard } from "../DonationCard/DonationCard";
import { useParams } from "react-router-dom";

export const DonateCardContainer = () => {
    const { projectAddress } = useParams();
  return (
    <>
    <div className="lex m-5">
    {projects.map((project) => {
        if(project.address == projectAddress) {
            return (
                <div className="">
                  <DonationCard key={project.id} project={project} />
                </div>
              );  
        }
        else{
            <> project not found </>
        }
      })}
    </div>
    
    </>
  )
}
