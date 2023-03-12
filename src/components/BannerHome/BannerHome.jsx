import React from 'react'
import './BannerHome.css'
import { Link } from 'react-router-dom'

export const BannerHome = () => {
  return (
    <div className='banner-home'>
        <h1>We need you,</h1>
        <h1>play your part</h1>
        <p>Donations with us are simple and fun</p>
        <Link to="/projects"> <button> DONATE NOW </button></Link> 
    </div>
  )
}
