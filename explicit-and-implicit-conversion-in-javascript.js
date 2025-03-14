/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = String("5" - 2); 
console.log("The result is: " + result);
console.log(typeof result);
//adding String() makes the result more predictable by not leaving the final type up for implicit conversion.

let isValid = Boolean(""); 
if (isValid) {
    console.log("This is valid!");
}
console.log(isValid);
//"false" as a string value inside the boolean function was returning a true value because any non-empty string value is considered truthy by JavaScript.

let age = Number("25"); 
let totalAge = age + 5;
console.log("Total Age: " + totalAge);
//the totalAge variable was concatenating the 'age' variable with the number 5 which was producing 255. Adding the number() function meant the number is the correct data type for mathematical addition.

let amountSpent = 35;
let amountSaved = "15";
console.log ("amountSpent is a " + typeof(amountSpent));
console.log ("amountSaved is a " + typeof(amountSaved));
let amountBilled = amountSpent - amountSaved;
console.log("amountBilled is a " + typeof(amountBilled));
//Through implicit conversion, JavaScript took the amountSaved and converted its data type from a string to a number to do the mathematical subraction in the amountBilled variable.

let month = String(3); 
let day = String(14);
let year = String(2025);
let fullDate = month + "/" + day + "/" + year;
console.log(`Pi Day is ${fullDate} and also STL Day!`);
//I utilized the String() function to explicity convert the numbers for the month, day, and year to strings before inputing the data into the fullDate variable.