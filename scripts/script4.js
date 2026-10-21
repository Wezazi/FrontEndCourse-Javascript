
function guessNumberGame(){
    //math.floor rounds down to integer. math.random generates a random float value between 0 - 0.999 so never 1. 
    let number = Math.floor(Math.random()*11); // this returns random int between 0-10, if you want to return int between 1-10 use: Math.floor(Math.random()*10) + 1

    while (true){
        let guess = prompt("guess the number betweem 0-10");
        console.log(guess);
        if (guess == number){
            console.log("your guess was correct");
            break;
        }
        else if (guess < number){
            console.log("too low, guess again");
        }
        else if (guess > number){
            console.log("too high, guess again");
        }
        else{
            console.log("invalid input, try again");
        }
        
    }
}

//guessNumberGame();



function generateRandomArray(length){
    n = 0;
    const list = []; // const don't prevent list vaues from being changed or added, it only prevents the list variable from being redefined
    while(n < length){
        let number = Math.floor(Math.random()*100) + 1;
        list.push(number);
        n +=1;
    }

    return list;
}

//let run = generateRandomArray(prompt("Enter the array length"));
//console.log(run)


function sumEvenNumbers(array){

    sum = 0;
    for (let value of array) { // OF array returns the values. IN array returns indexes, IN is meant for dictionaries containing key:value pairs so when using it on a list it returns the index.
        if (value % 2 == 0){
            sum += value;
        }
    }
    return sum;
}

input = prompt("enter comma seperated values");

//when using .map, i don't need to make a for loop to trim and change each string value to int: for (let i = 0; i < list.length; i += 1){list [i] = parseInt(list[i].trim());}

list = input.split(",").map(function convertValues(value){ // .map returns a new list. The first argument is a function that is gonna run for each array value. The rest of the arguments are automatically passed in to that function as arguments. The first argument passed in is the current list value, the second arugment is the current value index. array.map(function(currentValue, index)). So .map() returns a new list containing the modified values returned from the function in the first parameter
    return parseInt(value.trim());
});

run = sumEvenNumbers(list);
console.log(run);

