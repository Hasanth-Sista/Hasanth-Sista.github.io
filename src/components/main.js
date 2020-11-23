import React, { Component } from 'react';
import './main.css';
import About from './about';
import Projects from './projects';

export default class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <About/>
        <Projects/>
        <div className="margin-top"></div>
      </React.Fragment>
    )
  }
} 
