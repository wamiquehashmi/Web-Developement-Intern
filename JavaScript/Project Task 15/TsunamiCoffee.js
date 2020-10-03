function hello(){
	document.querySelector(".main").style.backgroundImage="url('https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-5/tsunami-coffee/images/bg-photo.png')";

	var li = document.querySelectorAll("li");
	for (let i = 0; i < li.length; i++) {
		li[i].style.padding="0.75rem 1.25rem";
	}

	document.querySelector(".supporting img").style.height='10%';
	document.querySelector(".supporting img").style.width='10%';
	document.querySelector(".supporting img").style.marginRight='5%';
	document.querySelector("h1").style.fontSize='2.5rem';
	document.querySelector(".location img").style.width='100%';
}

hello()

var x = window.matchMedia("(max-width: 960px)");

function myFunction(x) {
	var y = window.matchMedia("(max-width: 700px)");
	var z = window.matchMedia("(max-width: 470px)");
	
	if (z.matches && x.matches && y.matches){
		document.querySelector("h1").style.fontSize='2rem';
		
		var img = document.querySelectorAll(".gallery img");
		for (var i = 0; i < img.length ; i++) {
			img[i].style.width='100%';
			img[i].style.margin='0%';
		}

		document.querySelectorAll("li")[3].style.display="none";
		document.querySelectorAll("li")[4].style.display="none";
		document.querySelectorAll("li")[5].style.display="none";

		document.querySelector(".supporting img").style.display='none';
    	document.querySelector(".main").style.paddingTop='0%';
    } else if (x.matches && y.matches) { // If media query matches
    	document.querySelector(".supporting img").style.display='none';
    	document.querySelector(".main").style.paddingTop='0%';
    } else if (x.matches){
    	document.querySelector(".main").style.paddingTop='0%';
    }
}
myFunction(x);
