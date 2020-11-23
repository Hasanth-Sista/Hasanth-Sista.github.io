import React, { Component } from 'react';
import './main.css';

export default class Projects extends Component {
  render() {
    return (
      <div className="project">
        <div className="about-text">Recent Projects<hr/></div>
        <dl>
            <dt>Google Analytics Customer Revenue Prediction</dt>
            <dd>
                Pre-processed data using sorted map and normalized data using custom defined function. 
                Evaluated models like Neural-Net, Ada-boost, Support Vector Machine using non-linear kernel, 
                Random forest using sklearn. Summarized features in data set and displayed using pie charts 
                and bar graphs by adopting matplotlib. Root mean square error was 0.001 which was in top 500 
                with an accuracy of 96%.
            </dd>
            <dt>Poker Hand Prediction</dt>
            <dd>
                Technologies used: Spark streaming, Scikit learn. Pre-processed, normalized and streamed 
                data in intervals using shell script which converted to DStreamn of RDDs. Trained Ensemble 
                models like Random Forest and Gradient Boosting using different tuning parameters. Predicted 
                which poker hand combination would result in a winner and obtained an accuracy of 76%.
            </dd>
            <dt>Tech Store Project</dt>
            <dd>
                Technologies used: Angular 5, MongoDB, Node JS, Express JS, Bootstrap. Re-engineered a 
                Tech-Store website by following single page application design. Implemented operations 
                for users to purchase products and for admins to maintain inventory. Developed features 
                such as cart management system, login/signup, paging, checkout, product filtering.
            </dd>
            <dt>Library Management System</dt>
            <dd>
                Technologies used: JAVA, Hibernate, MySQL, JSF, jQuery, JavaScript. Created database using 
                MySQL to store library records. Implemented application to interact with the database. 
                Implemented feature to search catalog, check availability, loan books and track overdue fines.
            </dd>
        </dl>			
      </div>
    )
  }
} 
