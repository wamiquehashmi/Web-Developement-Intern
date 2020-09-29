document.querySelector(".container").style.display='flex';

var square = document.querySelectorAll(".square");
for (var i = 0; i < square.length; i++) {
	square[i].style.display='flex';
	square[i].style.justifyContent='center';
	square[i].style.alignItems='center';
}

document.querySelector(".week").style.display='inline-flex';
document.querySelector(".reminders").style.display='flex';
document.querySelector(".week").style.flexGrow='3';
document.querySelector(".reminders").style.flexGrow='2';
document.querySelector(".week").style.flexDirection='column';

var row = document.querySelectorAll(".row");
for (var i = 0; i < row.length; i++) {
	row[i].style.flexWrap='wrap';
	row[i].style.justifyContent='space-around';
	row[i].style.alignItems='center';
}
