import React from 'react';
import Experience from './Experience.js'
import Education from './Education.js'

const About = () => {

  return(
    <div>
      <div style={{width:'30%', float:'left'}}>
        <Education />
      </div>
      <div style={{width:'30%', float:'right'}}>
        <Experience />
      </div>
    </div>
  )
}


export default About;