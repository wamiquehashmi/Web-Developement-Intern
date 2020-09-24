var userName="";
userName = prompt();
len = userName.length;
alert(len>0 ? `Hello, ${userName}!` : `Hello!`);
var userQuestion="";
userQuestion = prompt();
console.log(`${userName} asked,"${userQuestion}"`);
var randomNumber = Math.floor(Math.random() * 8);
eightBall = "";
if(randomNumber===0){
	console.log('It is certain');
}
else if(randomNumber===1){
	eightBall = 'It is decidedly so';
	console.log(eightBall);
}
else if(randomNumber===2){
	eightBall = 'Reply hazy try again';
	console.log(eightBall);
}
else if(randomNumber===3){
	eightBall = 'Cannot predict now';
	console.log(eightBall);
}
else if(randomNumber===4){
	eightBall = 'Do not count on it';
	console.log(eightBall);
}
else if(randomNumber===5){
	eightBall = 'My sources say no';
	console.log(eightBall);
}
else if(randomNumber===6){
	eightBall = 'Outlook not so good';
	console.log(eightBall);
}
else{
	eightBall = 'Signs point to yes';
	console.log(eightBall);
}
