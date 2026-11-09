// Variables for the DOM elements
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");

// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];


let randomWord = words[Math.floor(Math.random() * words.length)];

//Initializing score
let score = 0;

//Initializing time
let time = 10;

function addWordToDOM(){
  word.textContent = randomWord;

}

addWordToDOM()

function updateScore(){
  score = score + 1;
  scoreEl.textContent = String(score);
}

text.addEventListener("keydown", (event)=>{
    if(event.key === "Enter"){
        console.log(event.target.value); //console.log(this.value) returns undefined?

        if (event.target.value == word.textContent){
            updateScore();
        }

        event.target.value = ""; //removes the text from the input element after user press enter
    }
})





//text.addEventListener("input", (event)=>{
    //Just to check what each property returns
    //console.log(event);
    //console.log(event.target);
    //console.log(event.target.value);
   
//})