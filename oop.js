//1.	Create a Class and Object
class car {
    make;
    model;

    //2.	Add Methods to a Class
    start(){
        console.log("the car has started.")
    }

    //3.	Constructor Method
    constructor(Model,Make){
        this.make = Make;
        this.model = Model 
    }

}
let car1 = new car()
car1.make = 299
car1.model="ll"
console.log(car1);

car1.start();

let car2 = new car("mmm",676);
console.log(car2);

//4.	Simple Inheritance
class ElectricCar extends car {
    battery_size;

}


//Private Access Modifier
class Account {
    #balance;

    //Getter and Setter Methods
    set_balance(Bal){
        this.#balance = Bal;
    }
    deposite(money){
        this.#balance += money;
        console.log(this.#balance);
    }

    withdraw(Money){
        this.#balance -= Money;  
        console.log(this.#balance);
    }

    get_balance(){
        return this.#balance
    }
}

let acc = new Account;
acc.set_balance = 200;
acc.deposite(20)
console.log(acc)