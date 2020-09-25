Boolean registeredEarly = false;
var runnerAge = 0;
if(runnerAge>18 && registeredEarly===true){
	var raceNumber= runnerAge + 1000;
}
if(runnerAge>18 && registeredEarly===true){
	console.log(`${raceNumber} will run at 9:30 am`);
}else if(runnerAge>18 && registeredEarly===false){
	console.log(`${raceNumber} will run at 11:00 am`);
}else if(runnerAge<18){
	raceNumber = 1000 - runnerAge;
	console.log(`${raceNumber} will run at 12:30 am`)
}else{
	console.log("Go to the registration deck and reconfirm your age");
}
