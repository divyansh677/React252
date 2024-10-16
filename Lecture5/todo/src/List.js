export default  function List(){
    const list = ["red" , 'green' , "Yellow"];

    return (
        <ul>
        {
            list.map((x , id)=>{
                <li key={id}> {x}</li>
            })
           
            
          
        }
          </ul>
    )

}


