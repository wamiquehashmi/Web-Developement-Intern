// my current age
var myAge = 22;
// the value saved to this variable will change.
var earlyYears = 2;
earlyYears = earlyYears*10.5;
// we already accounted for the first two years
var laterYears = myAge-2;
// calculating the number of dog years accounted for by your later years
laterYears = laterYears*4;
console.log(`Early years: ${earlyYears}, Later years: ${laterYears}`);
// my age in dog years will be the sum of earlyYears and laterYears
var myAgeInDogYears = earlyYears+laterYears;
var myName = "Wamique Hashmi";
//Converting the string to lowercase letters
myName = myName.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
