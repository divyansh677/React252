// PropType is used for Validation that is used by the testers only for debugging
import React from 'react'
import PropTypes from 'prop-types';
import { Alert } from './Alert';

export default function PropValidation(props) {
  return (
    // <div>
    // through app.js
    //     <h1> My Name is {props.p.name}</h1>
    //     <h1>{props.p.age}</h1>
    //     <h1> Status :{props.p.isActive?"Active" :"NotActive"}</h1>

    // using defaultProps
    <div>
        <h1> My Name is {props.name}</h1>
        <h1>{props.age}</h1>
        <h1> Status :{props.isActive?"Active" :"NotActive"}</h1>
        <ul>
            {
                props.arr.map((i,key)=>(
                   <li key={key}> {i}</li>

                ))
            }

        </ul>

        <h1 onClick={handleClick}>{props.click}</h1>
      
    </div>
  )
}
function handleClick()
{
    return Alert("Clicked");

}
PropValidation.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isActive: PropTypes.bool,
}

PropValidation.defaultProps = {
    name:"Raj",
    age:25,
    isActive :false,
    arr :[23,45,46],
    click : "click",
}