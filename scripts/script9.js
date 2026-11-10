const h1 = document.createElement("h1");
h1.style.color="red";
h1.id = "h1";
h1.textContent = "Click anywhere on the screen";
document.body.appendChild(h1); //It won't appear without this

const body = document.body;
body.style.backgroundColor="yellow";
body.style.display="flex";
body.style.height="100vh";
body.style.width="100vw";
body.style.justifyContent="center";
body.style.alignItems="center";

document.addEventListener("click", (event) =>{
    window.location.href="typing-game-starter-master/index.html";
})