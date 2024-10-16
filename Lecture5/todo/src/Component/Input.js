// import React, { useState } from 'react';

// export default function Input() {
//     const [input1, setInput1] = useState(''); 

//     const handleChange = (e) => {
//         setInput1(e.target.value);
//     };

//     return (
//         <div>
//             <input type="text" value={input1} onChange={handleChange} />
//         </div>
//     );
// }

// import React, { useState } from 'react';

// export default function Input() {
//     const [input1, setInput1] = useState("");
//     const [input2, setInput2] = useState("");
//     const [output, setOutput] = useState("");

//     const handleChange1 = (e) => {
//         setInput1(Number(e.target.value)); 
//     };

//     const handleChange2 = (e) => {
//         setInput2(Number(e.target.value)); 
//     };

//     const add = () => {
//         setOutput(input1 + input2); 
//     };
//     const sub = () => {
//         setOutput(input1 - input2); 
//     };
//     const mul = () => {
//         setOutput(input1 * input2); 
//     };
//     const div = () => {
//         setOutput(input1 / input2); 
//     };
    

//     return (
//         <div>
//              <div> {output}</div>
//             <input type="number" value={input1} onChange={handleChange1} />
//             <input type="number" value={input2} onChange={handleChange2} />
//             <button onClick={add}>Add</button>
//             <button onClick={sub}>Sub</button>
//             <button onClick={mul}>Mul</button>
//             <button onClick={div}>Div</button>
           
//         </div>
//     );
// }


import React, { useState } from 'react';

const inparr = ["raj@gmail.com", "Simran@gmail.com", "Dev@gmail.com", "Rajan@gmail.com"];

export default function Input() {
    const [arr, setArr] = useState([]);
    const [updatedUserDetail, setUpdatedUserDetail] = useState("");

    const addUser = () => {
        const num = Math.floor(Math.random() * inparr.length);
        setArr([...arr, inparr[num]]); 
    };

    const handleremove = (index) => {
        setArr(arr.filter((_, i) => i !== index)); 
    };
    const handleuserDetail1 = (index) => {
        const newArr = [...arr];
        newArr[index] = updatedUserDetail; 
        setArr(newArr);
    };

    return (
        <div>
            <h3>User List</h3>
            <ul>
                {arr.map((details, index) => (
                    <li key={index}>
                        {details}
                        <input 
                            type="text" 
                            placeholder="Update user detail" 
                            onChange={(e) => setUpdatedUserDetail(e.target.value)}
                        />
                        <button onClick={() => handleuserDetail1(index)}>Update</button>
                        <button onClick={() => handleremove(index)}>Remove</button>
                    </li>
                ))}
            </ul>
            <button onClick={addUser}>Add user</button>
        </div>
    );
}
