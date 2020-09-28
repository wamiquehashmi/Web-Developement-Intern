document.querySelector(".header").style.fontWeight="bold";
document.querySelector(".banner h2").style.fontWeight="500";
document.querySelector(".banner h1").style.fontWeight="900";

var p = document.querySelectorAll(".journal p");
for (let i = 0; i < p.length; i++) {
	p[i].style.lineHeight="1.4";
}

document.querySelector(".journal .first-letter").style.lineHeight="0.87em";
document.querySelector(".quote").style.lineHeight="1.2em";
document.querySelector("footer .content").style.lineHeight="1.5em";

document.querySelector(".banner h2").style.fontFamily="'Work Sans', Arial, sans-serif";
document.querySelector(".banner h1").style.fontFamily="'Abril Fatface', cursive, sans-serif";
document.querySelector(".journal").style.fontFamily="'Work Sans', serif";
document.querySelector(".photo .caption").style.fontFamily="'Merriweather', serif";
document.querySelector("footer .content").style.fontFamily="'Croissant One', 'Merriweather', serif;
