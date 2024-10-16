import React ,{useState}from 'react'

export default function colorChange() {
    const [color , setcolor] = useState("white");
    const colors = ["Red" , "Blue" , "Green"];
    const rcolor = colors[Math.floor(Math.random()*color.length)];
    const changecolor =()=>{
        changecolor(rcolor);
    }
  return (
    <div>
            
      
    </div>
  )
}
