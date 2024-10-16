// Class is the collection data member and methods . 
// use this  if  you want to use that variable outside the constructor // 

// constructors --> they are called at the time of object Creation 
// normal prototype --> callled with the object // 
// static function --> they belongs to class(or points to the class) not to the object and called with the class name .Also they can not access the variable of the constructor or prototype function 
// we also have getter and setter function  they are not function they are variable we ca directly assign the valie to them . 

// class Student{
//     constructor(name)
//     {
//         this.name = name ; 


//     }

//      Display() {
//         console.log(this.name);
        
//     }
//     static abc()
//     {
//         console.log("Static function");
//     }

//     set disp(x)
//     {
//         this.name = x ;
//         console.log(this.name);

//     }

//     get print()
//     {
//         console.log(this.name);
//     }

// }


// var obj1 = new Student("dev");
// obj1.Display();
// var obj2 = new Student("Raj");
// obj2.Display();
// Student.abc();

// class Student{
//     constructor(name,age)
//     {
//         this.name = name ; 
//         this.age = age ;


//     }



//     set disp(x)
//     {
//         this.name = x ;
//         // console.log(this.name);

//     }

//     get print()
//     {
//         console.log(this.name);
//         console.log(this.age);
//     }

// }


// var obj1 = new Student("dev" , 23);
// var obj2 = new Student("dev",21);
// // obj1.disp="x";
// obj1.print;
// obj2.disp="y";
// obj2.print;

class Person{
    constructor(name)
    {
        this.name =  name ; 
        console.log(this.name +"Parent class constructor");
    }
     display()
     {
        
        console.log(this.name +"Parent class Prototype function");
     }
}


class  Student extends Person
{
    constructor(name , age)
    {
        super(name );
        // this.name = name ; 
        this.age = age ; 
        console.log(this.name , this.age + " in the Child class Constructor");
    }
     display()
     {
        super.display();

        console.log(this.name ,this.age , " in the Child class Protoype function ");
     }


}

var obj = new Student("Rahul" , 45);
obj.display();