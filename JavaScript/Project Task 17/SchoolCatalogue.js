class School {
	constructor(name, level, numberOfStudents){
		this._name = name;
		this._level = level;
		this._numberOfStudents = numberOfStudents;
	}
	
	get name(){
		return this._name;
	}
	get level(){
		return this._level;
	}
	get numberOfStudents(){
		return this._numberOfStudents;
	}
	set numberOfStudents(x){
		if(!isNaN(x){
			this._numberOfStudents = x;
		}else{
			console.log('Invalid input: numberOfStudents must be set to a Number.');
		}
	}

	quickFacts(){
		console.log(_name + "educates" + _numberOfStudents + "students at the" + _level + "school level.");
	}

	static pickSubstituteTeacher(substituteTeachers){
		let len = substituteTeachers.length;
		return Math.floor(Math.random() * len);
	}
}

class PrimarySchool extends School {
	constructor(name, numberOfStudents, pickupPolicy){
		super(name, 'primary', numberOfStudents)
		this._pickupPolicy = pickupPolicy
	}
	get pickupPolicy(){
		return this._pickupPolicy;
	}
}

class MiddleSchool extends School{
	constructor(name, numberOfStudents){
		supper(name, 'middle', numberOfStudents);
	}
}

class HighSchool extends School{
	constructor(name, numberOfStudents, sportsTeams){
		super(name, 'high', numberOfStudents);
		this._sportsTeams = sportsTeams;
	}
	get sportsTeams(){
		for (var i = 0; i < _sportsTeams.length; i++) {
			console.log(_sportsTeams[i]);
		}
		return this._sportsTeams
	}
}
let
primaryIns = new PrimarySchool('Lorraine Hansbury', 514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
const lorraineHansbury = primaryIns;
lorraineHansbury.quickFacts()
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

highIns = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
const alSmith = highIns;
alSmith.sportsTeams;
