
//You CAN'T define two variables with the same name in the global scope.
//You CAN define two variables with the same name if one is defined in the global scope and the other is defined in a function scope

let movie = "Finding Nemo";
//let movie = "Lion king"; you will get an error if you uncomment this because you have already defined a movie variable in the global scope

function first(){
    let movie = "Lion king";
    movie = "Shrek";
    console.log(movie)
}
first()
console.log(movie);

//A function will first look for a variable in its own scope, if it doesn't find the variable being defined in its own scope, it will move up a scope layer and look if the variable has been defined there
//In this example, i didn't define a color variable within the function, so when i redefine color within the function, it it moves up a layer and changes the global color variable
let color = "red";

function second(){
    color = "blue";
}

second();
console.log(color);


//The same rule applies to nested functions, it doesn't matter how many layers you nested the functions. The function scope always picks the closest defined variable. So first it looks within its own scope, then it goes up a layer, it keeps going up the nested layers until it reaches the global scope. If the referenced variable isn't found in any of the layers, it returns an error.
let fruit = "apple";
console.log(fruit)

function outer(){
    let fruit = "banana";
    console.log(fruit);
    function inner1(){
        fruit = "watermelon";
        console.log(fruit);
    }
    inner1();
    console.log(fruit);
}
outer();
console.log(fruit)


//Bonus: You can't redefine a variable in a outer scope and then declare a variable in the function scope. Let me show you what i mean:

let transport = "car";


//you can do this:

function change(){
    transport = "plane"; 
}
change();

/*
but you can't do this:
function change2(){
    transport = "bike";
    let transport = boat;
}
change2();

The second function won't work because it assumes that you are trying to change the variable within its own scope rather than the variable in the global scope. 
This leads to an error becasue the variable in its own scope hasn't been declared yet
*/





