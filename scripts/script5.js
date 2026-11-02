
const sweden = {
    capital: "Stockholm",
    population: 10000000,
    democracy: true,
    region: "Europe"
};

console.log(sweden.capital)

//print(sweden.capital)
//I accidentally used print() instead of console.log and noticed if your code uses print() and you navigate to the webpage, the page will automatically load a save page as pdf prompt, might be useful to know for the future. 


sweden.language = "Swedish";

//there is two ways to change/add a property in an object:
sweden.capital = "Malmo";
sweden["capital"] = "Gothenburg";


//properties are basically variables and methods are basically functions, from what i know, the only difference is the scope that properties & methods are acessible from compared to variables & functions
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 300,
    employed: true,

    //you can define a method in two ways: "<method-name>: function(){}" or "<method-name>(){}"

    sayHello: function(){
        return `Hello my name is ${this.firstName} ${this.lastName}`; //To use properties from the object within a method, you need to use the "this" keyword, we can't just type ${firstName} unless we have defined firstName = this.firstName within the method.
    },

    printBio(){

        const fullName = this.sayHello();

        let status;
        if (this.employed){
            status = "currently working";
        }
        else{
            status = "currently not working";
        }
        //I could also have written it like this: const employed = this.isEmployed ? "working" : "not working" but i prefer to explicitely use an if statement
    
        console.log(`${fullName} I am ${this.age} years old and i am ${status}`);

    }

};

person.printBio();

const car = {
    brand: "Ford",
    color: "Red", 
    model: "Mustang",

    carInfo(){
        const {color, brand, model} = this; //instead of typing const brand = this.brand; const color = this.color; const model = this.model. Keep in mind that your variable names need to match the property names in order to do it this way
        
        console.log(`The ${color} ${model} is made by ${brand}`);
    }
};

car.carInfo();

