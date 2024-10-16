import React, { useState } from 'react'

export default function ObjectInHooks() {
    var [details,method] = useState({
        name:"Divyansh",
        age : 30,
    })

    var method1 = ()=>{
        method(prevalue=> {
            return {...prevalue,age: details.age+1,height : 34};
        })
    }
  return (
    <div>
        <button onClick={()=>{method1()}}> age is {details.age}</button>
        <p> {details.name} </p>
        <p> {details.age} </p>
        <p> {details.height} </p>
      
    </div>
  )
}
