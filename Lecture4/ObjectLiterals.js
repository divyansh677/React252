//  keyvalue pair inside object are called object Literals 




// let firstName  ="Raj";
// let secondName = "Choudhary";


// let obj = {
//     firstName,
//     secondName,
// }



// console.log(obj.firstName);
// console.log(obj.secondName);


function Name(firstName,secondName,age)
{
    return{
        firstName,
        secondName,
        isSenior(){
            return age>60;
        }
    }

}


console.log(Name("hello" ,"raj",50));


// npx create-react-app AppName

// 
// npm install  create-react-app -g
// create-react-app AppName