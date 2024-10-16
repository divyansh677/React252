var arr = [1,2,3,4,5,6];
// console.log(arr);

// arr = new Array(5); // One Argument reflects the size of the arr;

// arr.forEach(x=>console.log(x));

// arr = new Array(1,2,3,4);  //  

// arr.forEach(x=>console.log(x));

// var arrFun = (arr)=>{
//     arr.forEach(element => {
//         console.log(element);
//     });
// }

// arrFun(arr);


// multiDimensional Array 

// var multiarr = [[2,3,4],[5,6,7,8]];
// for( let i in multiarr)
// {
//     for(let j in multiarr[i])
//     {
//         console.log(multiarr[i][j]);
//     }
// }


// from --> to make array of String
// of --> array of the element pass as argument 
// find --> will return the first value based on the condition
// filter --> 
// copyWithin();
// findIndex();
// entries();


// var object =  arr.entries(); // to convert an array into the object 

// for(let i of object)
// {
//     console.log(i);
// }


// var keyobject = arr.keys();

// for(let i of keyobject)
// {
//     console.log(i);

// }


// var valuesobject = arr.values();  // object of values
// console.log(valuesobject)   //Object [Array Iterator] {}

// for(let i of keyobject)
// {
//     console.log(i);

// }

// var color = ["red","yellow" ,"Green"];
// console.log(color.fill("Black",1,2));  // second and third parameter to define the range till where you want to apply 


// var arr = [2.3,56.6];
// console.log(arr.map(Math.round));



// var arr = [1,2,3,4,5];

// const result = arr.reduce((acc,x)=>{
//     return acc+x;

// },0);
// // 0  is the inital value ;

// console.log(result);


//  multiDimension arrr

// mul = [[1,2,3],[4,5,6,7]];

// const result = mul.reduce((acc,x)=>{
//     return acc.concat(x);

// });

// console.log(result);

// duplicate = [12,34,123,34,12,123];

// const res = duplicate.reduce((acc , x)=>{
//     if(!acc.includes(x))
//     {
//      acc.push(x);
//     }
//     return acc;

// },[]);
// console.log(res)
// var res= [];
//  res = duplicate.filter((x)=>{
//     !res.includes(x)
  
// })

// console.log(res)



function processdata(students)
{
    //  step 1 :

    const filteredStudent = students.filter(student=>{
        const avgGrade = student.grades.reduce((acc,grade)=>{
            return acc+grade;

        },0);

        return (avgGrade)<=70;
    })


    // const mappedStudent = students.map((student)=>{
    //     const avgGrade = student.grades.reduce((acc,x)=> acc+x,0);
    //     return {name : student.name , averageGrade : avgGrade};
    // });
   


    
return filteredStudent;
}

arr = [
    {name:"raj",
    age: 21,
    grades : [45,10,9,90],
    attendance : [12,2,21],

    }
]

console.log(processdata(arr));