document.querySelector("header").style.position="fixed"
document.querySelector("header").style.width="1349px"
var li = document.querySelectorAll("nav li");
for(let i=0; i<li.length; i++){
	li[i].style.display="inline";
	li[i].style.padding="10px";
	li[i].style.width="80px";
}

document.querySelector("main").style.position="relative";
document.querySelector("header").style.zIndex="1";
document.querySelector("main").offsetTop="80px"
document.querySelector("main").style.top="80px";

var dimension = document.querySelectorAll(".supporting .col")
for(let i=0; i<dimension.length; i++){
	dimension[i].style.width="200px";
	dimension[i].style.height="200px";
}
var display = document.querySelectorAll(".supporting .col")
for(let i=0; i<display.length; i++){
	display[i].style.display="inline-block";
}
