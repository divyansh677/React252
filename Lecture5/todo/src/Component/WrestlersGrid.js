import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from "../Assets/image.jpg"

class WrestlersGrid extends Component {
 
  showAlert = () => {
    alert("Alert button clicked!");
  };

  render() {
    const { wrestlers } = this.props;

    return (
      
      <div className="container mt-5">
        <h1> Ques 2 . </h1>
        <div className="row">
          
          <div className="col-md-6">
            <h3>List of Wrestlers</h3>
            <ul className="list-group">
              {wrestlers.map((wrestler, index) => (
                <li key={index} className="list-group-item">
                  {wrestler}
                </li>
              ))}
            </ul>
            <button className="btn btn-primary mt-3" onClick={this.showAlert}>
              Alert
            </button>
          </div>

        
          <div className="col-md-6 text-center">
            <h2>Wrestler Image</h2>
            <img
              src={image}
              alt="Wrestler"
              className="img-fluid rounded"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    );
  }
}


WrestlersGrid.propTypes = {
  wrestlers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default WrestlersGrid;
