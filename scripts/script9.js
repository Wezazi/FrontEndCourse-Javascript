const body = document.body;
body.style.backgroundColor="yellow";
body.style.display="flex";
body.style.height="100vh";
body.style.width="100vw";
body.style.justifyContent="center";
body.style.alignItems="center";

const h1 = document.getElementById("h1");
h1.style.color="red";

document.addEventListener("click", (event) =>{
    window.location.href="typing-game-starter-master/index.html";
})