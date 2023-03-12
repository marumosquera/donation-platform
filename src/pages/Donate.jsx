import React from 'react'
import { useParams } from "react-router-dom";
import { DonateCardContainer } from '../components/DonateCardContainer/DonateCardContainer';

export const Donate = () => {
  const { projectAddress } = useParams();
  return (
    <div className='page-size donate-bg'>
    <DonateCardContainer/>
    </div>
  
    )
}
