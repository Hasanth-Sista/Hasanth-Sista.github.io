import React, { Component } from 'react';
import './main.css';

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="about-text">About Me<hr/></div>
        <div>
            I have over 4 years of experience as a software engineer, and have worked at both small startups and 
            large organizations. While I'm a proficient full-stack developer, my expertise is in building 
            scalable backend services and customer experiences.
        </div>
        <div className="margin-top"></div>
        <div>    
            I love building things. While hard engineering problems are often intrinsically fun to tackle, I'm most 
            attracted to solving real customer problems with a business justification. I'm looking for a senior 
            software engineer role where I can take on
            collaborative team leadership responsibilites, and gain experience with architecture and project management.
        </div>
      </div>
    )
  }
} 
