// private methods or member functions are created using #;

// function abc()
// {
//     class parent{
//         #name;
//         constructor(name)
//         {
//             this.#name = name ;
//             console.log(this.#name);
//         }
//     }
//     return parent;  //returing the class // 
// }

// // var f = abc(); // it will store the class parent return by abc//

// // var obj = new f("Hello ");

// function greets()
// {
//     class greets{
//         #name;
//         constructor(name)
//         {
//             this.#name = name ;
//         }
//         // display()
//         // {
//         //     console.log(this.name);
//         // }
//     }

//     return greets;
// }


// function greet()
// {
//     class greetts extends greets{
//         constructor(name,place)
//         {
//             super(name);
//             this.place = place;
//         }

//         display()
//         {

//             console.log("Place : " , this.place);
//         }
//     }
//     return greetts;
// }


// var f = greet();

// var obj1 = new f("Raj", "Agra");
// obj1.display();






// function vehicle(){
//     class parent{
//         #make;
//         #model;

//         constructor(make, model)
//         {
//             this.#make = make;
//             this.#model = model;

//         }

//         getDetails()
//         {
//          info = this.#make +" " + this.#model;
//          return info; 
//         }
//         static compareVehicle(obj2, obj1)
//         {
//             return obj2.#model===obj1.#model && obj2.#make == obj1.#make;

//         }


//     }

//     return parent;
// }


// function createVehicle(){
// class car extends parent{
//     constructor(make, model , year , mileage)
//     {
//         super(make, model);

//         this.year= year;
//         this.mileage = mileage;
//     }

//     display(){
//         // super().display();

        

//     }
// }
// return car;
// }

// const car = createVehicle();

// const vehicle1 = new createVehicle("car1","corolla" , 2020 , 15000);
// const vehicle2 = new createVehicle("car1","corolla" , 2020 , 15000);
