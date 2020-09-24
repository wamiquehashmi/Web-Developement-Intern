// Today's Weather in kelvin
var kelvin= 293;
// converting temperature from kelvin to celsius
var celsius = kelvin-273;
//converting temperature from celsius to fahrenheit
var fahrenheit = celsius * (9/5) + 32;
//rounding down the decimal value of fahrenheit to integer
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
//converting temperature from celsius to Newton scale
var newton = celsius * (33/100);
//rounding down the decimal value of newton to integer
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);
