import React from 'react'
import { Banner } from '../components/Banner/Banner'
import { ProjectContainer } from '../components/ProjectContainer/ProjectContainer'

export const Projects = () => {
  return (
    <div>
      <Banner title={' Projects '} slogan={'play your part'} cta={'Donate now'}/>
        <ProjectContainer/>
    </div>
  )
}