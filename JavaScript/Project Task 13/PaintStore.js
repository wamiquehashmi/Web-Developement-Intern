document.querySelector("header").style.backgroundColor="#ff8000";
document.querySelector("#color-guide h2").style.color="#ff8000";
document.querySelector("footer .button").style.backgroundColor="#ff8000";
document.querySelector("h1").style.color="rgba(0,0,0,0.7)";
var gray = document.querySelectorAll(".color .swatches h4");
for (var i = 0; i < gray.length; i++) {
	gray[i].style.color="#9b9b9b";
}
document.querySelector(".reds .base-color").style.color="hsl(350, 100, 50)";
document.querySelector(".greens .base-color").style.color="hsl(130, 100, 50)";
document.querySelector(".blues .base-color").style.color="hsl(220, 100, 50)";

document.querySelector(".reds .lightness .color-1").style.backgroundColor="hsl(350, 100%, 80%)";
document.querySelector(".reds .saturation .color-1").style.backgroundColor="hsl(350, 100%, 50%)";
document.querySelector(".reds .hue .color-1").style.backgroundColor="hsl(320, 100%, 50%)";

document.querySelector(".greens .lightness .color-1").style.backgroundColor="hsl(103, 100%, 90%)";
document.querySelector(".greens .saturation .color-1").style.backgroundColor="hsl(130, 100%, 50%)";
document.querySelector(".greens .hue .color-1").style.backgroundColor="hsl(86, 100%, 50%)";

document.querySelector(".blues .lightness .color-1").style.backgroundColor="hsl(220, 100%, 90%)";
document.querySelector(".blues .saturation .color-1").style.backgroundColor="hsl(220, 100%, 50%)";
document.querySelector(".blues .hue .color-1").style.backgroundColor="hsl(260, 100%, 50%)";
