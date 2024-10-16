// used to Store the array Element or object Element in the Variable 


// var arr = [ "hello" , "how" , "Are" , " You"];

// var [a , b, c,d , e] = arr;
// var [a , b, c,d , e="female"] = arr;
// var [a , ...emp ] = arr; //hello [ 'how', 'Are', ' You' 
         //Rest operator 
// console.log(a , b , c, d , e);
// e //  undefined

// console.log(a , emp);
// console.log(...emp); // Spread operator


// Object deStructuring 


var obj = {

    city : "delhi",
    country :"India",

}

// var {city , country} = obj;
var {city:c , country : co} = obj; //using alias or remane 

console.log(c , co);


