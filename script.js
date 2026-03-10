const welcomeScreen = document.getElementById('welcomeScreen');

const startBtn = document.getElementById('startBtn');

const mainContent = document.getElementById('mainContent');


startBtn.addEventListener('click', () => {

welcomeScreen.style.opacity = "0";


setTimeout(() => {

welcomeScreen.style.display = "none";


const intro = document.createElement("div");


intro.style.position = "fixed";

intro.style.top = "0";

intro.style.left = "0";

intro.style.width = "100%";

intro.style.height = "100%";

intro.style.background = "rgba(215,155,109,0.85)";

intro.style.display = "flex";

intro.style.justifyContent = "center";

intro.style.alignItems = "center";

intro.style.fontSize = "60px";

intro.style.color = "darkgreen";

intro.style.fontWeight = "bold";

intro.style.opacity = "0";

intro.style.transition = "opacity 2s";


intro.innerHTML = "بلجرشي";


document.body.appendChild(intro);


setTimeout(() => {

intro.style.opacity = "1";

},100);


setTimeout(() => {

intro.style.opacity = "0";


setTimeout(() => {

intro.remove();

mainContent.style.display = "block";

mainContent.style.opacity = "0";

mainContent.style.transition = "opacity 2s";


setTimeout(()=>{

mainContent.style.opacity = "1";

},100);


},1500);


},2000);


},800);


});


function toggleMenu(){

const menu = document.getElementById('menu');


if(menu.style.display === "block"){

menu.style.display = "none";

}

else{

menu.style.display = "block";

}

}
