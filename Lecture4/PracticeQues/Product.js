function info(){
class Product{
    constructor(name , price , category)
    {
        this.name = name 
        this.price = price 
        this.category= category
    }

    applyDiscount(discount)
    {

        return this.price - this.price*discount;

    }

    getDetails()
    {
        return ` ${this.name } , ${this.price}  , ${this.category} `;
    }

}



}

var obj1 = new Product("Rice" , 40, 2);
var obj2 = new Product("wheat" , 40, 2);
var obj3 = new Product("Pulses" , 40, 2);



var arr = [obj1];



export default arr;