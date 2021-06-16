var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.createElement("button");
//adding the button to css as a child & adding a text as a child for the button;
randomButton.appendChild(document.createTextNode("randomColorGenerator;"));
document.body.appendChild(randomButton);

function defaultColoring() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent= body.style.background;
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomColorGenerator(){
	//To match the required format for the colors in HEX add # in the begining
	color1.value="#"+Math.floor(Math.random()*16777215).toString(16);
	color2.value="#"+Math.floor(Math.random()*16777215).toString(16);
	setGradient();
}


defaultColoring();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click",randomColorGenerator);