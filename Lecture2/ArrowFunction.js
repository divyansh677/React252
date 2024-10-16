// shortHand function that are more readable takes less memory and less timeComplexity.

//ArrowFunction 
// var ab = a => a*a;
// console.log(ab(3));

// var sum = (a,b) => a+b;
// console.log(sum(4,5));


// factorial 

// var fac = (a) =>  {
//     if(a==0)
//     return 1; 
//     return a*fac(a-1);
// }

// console.log(fac(5));


// console.log(this);
// var obj = {
//     // this can access all the variable inside this block //
//     // if we are not using this with name the if will give error because name is not defined inside the function but if if we are using this it's scope will  increase to this block  of the object .  
//     Name: "A",
//     greets : function()
//     {
//         console.log(this.Name);
//     }
// }

// obj.greets();


// 
// var obj = {
//     Name: "A",
//     greets : function()
//     {
//         var self = this ; 
//         setTimeout(function(){
//             console.log(self.Name)
//         },1000);
//     }
// }

// obj.greets();


// using Arrow Function 
 
// var obj = {
//     Name: "A",
//     greets : function()
//     {
       
//         setTimeout(()=>
//             console.log(this.Name)
//         ,1000);
//     }
// }

// obj.greets();


// Using the Bind Function 
 
// var obj = {
//     Name: "A",
//     greets : function hi()
//     {
        
//         setTimeout(function(){
//             console.log(this.Name)
//         }.bind(this.hi),1000);
//     }
// }
  
// obj.greets();  // fix this code//

