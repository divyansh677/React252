// (function(name){
// //    By Default varialble is declared by var if we have not mentioned any keyword 
//     if(name == "A")
//     {
//         greet = "Hello  A";
//     }
//     else{
//         greet = "Hi"
//     }
//     console.log(greet);

// })('A');


// console.log(greet);


// (function(name){
   
//         if(name == "A")
//         {
//              let greet = "Hello  A";
//         }
//         else{
//            let  greet = "Hi"
//         }
//         console.log(greet);
    
// })('A');  //ReferenceError:

// we can not assign the value before declaration in case of let keyword;
// Closure --> function inside Function or funciton inside loop  (inner function can access the variable of the outer function )//

// a = 10 ;
// let a;   //ReferenceError:


// CLOSURES 
// function adder(x)
// {
//     return function(y)
//     {
//         return x+y;
//     }
// }

// console.log(adder(3)(4));
// let ans = adder(3);
// console.log(ans(2))


//  in case of var we use same instance to same instance will we updated in queue
// for(var i = 0 ; i < 5 ; i++)
// {
//     setTimeout(()=>console.log(i),1000);
//     // In synchronus function we use let because it is block scoped and different instance in used 

// in first iteeration --> i = 0 placed in queue
// in Second iteeration --> i = 1 placed in queue // same i is being updated here //
// in first iteeration --> i = 2 placed in queue
// in first iteeration --> i = 3 placed in queue
// in first iteeration --> i = 4 placed in queue
// }



// for(let i = 0 ; i < 5 ; i++)
//     {
//         setTimeout(()=>console.log(i),1000);
// in first iteeration --> i = 0 placed in queue // EVERY TIME NEW VARIABLE I IS FORMED;
// in Second iteeration --> i = 1 placed in queue 
// in first iteeration --> i = 3 placed in queue
// in first iteeration --> i = 4 placed in queue
// }
      
//     }


