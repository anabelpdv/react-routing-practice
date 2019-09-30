import React from 'react';
const Project = () => {


    const projectList = [
      'project1',
      'project2',
      'project3'
    ];

  return(
    <div>
        {projectList.map((eachProject,index)=>{
        return(
          <div key={index}>
          {eachProject}
          </div>
        )
      })}
    </div>
  )


  }


export default Project;