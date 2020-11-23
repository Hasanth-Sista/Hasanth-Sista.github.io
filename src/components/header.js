import React, { Component } from 'react';
import './main.css';

export default class Header extends Component {


  render() {

    return (
        <React.Fragment>
        <div class="navbar-header">
        
            <a className="navbar-brand">Hasanth Sista</a>
            
            <a className="navbar-linkedin" alt="Linked In" href="https://www.linkedin.com/in/hasanthsista"></a> 
            
            <a href="https://github.com/Hasanth-Sista" className="navbar-github" alt="Github"></a>

            <a href="mailto:hasanthsista1993@gmail.com"><button className="navbar-contact">Contact Me</button></a>
            
            <a href={require('./Resume.pdf')} target="_blank" type="application/pdf"><button className="navbar-contact">Resume</button></a>
            
        </div>
        <div className="header">
            <img src={require('./sista.jpg')} alt="Hasanth Sista"></img>
            <div class="intro-text">
                <span class="name">Hasanth Sista</span>
                <span class="skills">Software Engineer at The Home Depot, Atlanta</span>
            </div>
        </div>
        </React.Fragment>
    )
  }
}
