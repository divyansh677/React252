import React, { Component } from 'react';
import muserprofile from "../Assets/user.png";
import fuserprofile from "../Assets/user2.jpg";
import './Cards.css'; // Assuming you have an external CSS file for styles

export default class Cards extends Component {
  render() {
    const arr = [
      { name: "Dev", profession: "An Aspiring Software Developer", img: muserprofile },
      { name: "Raj", profession: "A Cyber Security Specialist", img: muserprofile }
     , { name: "Dev", profession: "An Aspiring Software Developer", img: muserprofile },
      { name: "Raj", profession: "A Cyber Security Specialist", img: muserprofile }
      ,{ name: "Dev", profession: "An Aspiring Software Developer", img: muserprofile },
     , { name: "Raj", profession: "A Cyber Security Specialist", img: muserprofile }
     , { name: "Dev", profession: "An Aspiring Software Developer", img: muserprofile },
      { name: "Raj", profession: "A Cyber Security Specialist", img: muserprofile }
    ];

    return (
      <div className='d-flex flex-wrap justify-content-around m-4 p-5 mb-4'>
        {arr.map((data, index) => (
          <div className="card custom-card" style={{ width: "18rem" }} key={index}>
            <img className="card-img-top" src={data.img} alt={`${data.name}'s profile`} />
            <div className="card-body">
              <h5 className="card-title">{data.name}</h5>
              <p className="card-text">{data.profession}</p>
              <a href="#" className="btn btn-primary custom-btn">Go somewhere</a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
