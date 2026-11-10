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

const scoreContainer = document.getElementsByClassName("score-container")[0];

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

//Initializing randomWord
let randomWord;

//Initializing score
let score = 0;

//Initializing time
let time = 10;

function addWordToDOM(){
    randomWord = words[Math.floor(Math.random() * words.length)];
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
            addWordToDOM();

            switch(difficultySelect.value){
                case "easy":
                    time = time + 5;
                    break; //Don't forget this otherwise it will go through all other cases afterwards
                case "medium":
                    time = time + 3;
                    break;
                case "hard":
                    time = time + 2;
                    break;
            }
            //time = time + 5;
            timeEl.textContent = String(time);
        }
        event.target.value = ""; //removes the text from the input element after user press enter
    }
})


function updateTime(){
    time = time -1;
    timeEl.textContent = String(time);
    if(time == 0){
        clearInterval(timer);
        gameOver();
    }
}

const timer = setInterval(updateTime, 1000);

function gameOver(){
    endgameEl.style.display = "block";
    const gameOver = document.createElement("h2");
    gameOver.textContent = "GAME OVER";
    endgameEl.appendChild(gameOver);
    endgameEl.appendChild(scoreContainer);
    scoreContainer.style.right = "220px";
    const restart = document.createElement("button");
    endgameEl.appendChild(restart);
    restart.textContent = "RESTART";
    restart.style.width = "200px";
    restart.style.height = "50px";
    restart.style.backgroundColor = "GreenYellow";
    restart.onclick = () => {
        location.reload();
    }
    
}


settingsBtn.addEventListener("click", (event) =>{
    settings.classList.toggle("hide"); //I didn't even know i could do this without assigning the hide class to the settings element
})



//console.log(difficultySelect.value);
//console.log(difficultySelect); 
//Notice that difficultySelect.value returns a lowercase "easy" while the text uses capital "Easy", keep this in mind when creating if statements/switch case