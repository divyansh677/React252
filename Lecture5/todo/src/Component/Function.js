 import React from "react";

 export default function Greet()
{
    // return(
    // <>
    //  <h1> {"Hello"} </h1>
    //  <p> Hello this is my First React App
    //  </p>
    
    
    // </>)
                        
   return React.createElement("h1" ,{style : {color : "red"}}, "USE ME");
//    return React.createElement("h1" , onclick=()=>{
//     console.log("Clicked")

//    }, "this is the children or content");
   
    // tagName , Props that you want to pass like want to call any event or anything if not pass null , the child
}


// export default Greet;
// export {Greet};