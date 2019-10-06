import React from 'react';
import { myProjects } from './Project';
import {Link} from 'react-router-dom';


const projectDetails = (props) => {
  // console.log(props)

  const getProject = (id) => {
    return myProjects.find(project =>{
      return project.id === '1a';
    })
  };
  
  const { params } = props.match;
  const foundProject = getProject(params.id);

  return (
    <div>
      <h2>{ foundProject.name } <span style={{fontSize:"14px"}}>{ foundProject.year }</span></h2>
      <h3>Used technologies: { foundProject.technologies }</h3>
      <p>{ foundProject.description }</p>
      <Link to='/projects'>Back</Link>
    </div>
  )
}

export default projectDetails;