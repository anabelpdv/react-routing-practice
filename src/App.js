import React, {Component} from 'react';
import Home from './components/Home.js';
import About from './components/About.js'
import Navbar from './components/Navbar.js'
import ProjectDetail from './components/ProjectDetail.js'
import {projects as Project} from './components/Project.js'
import {Switch, Route} from 'react-router-dom'
import './App.css';

class App extends Component {

  render(){
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path ='/' component={Home} />
          <Route path='/about' component={About} />
          <Route exact path='/projects' component={Project} />
          <Route exact path='/projects/:id' component={ProjectDetail} />
        </Switch> 
      </div>
    );
  }
  
}

export default App;
