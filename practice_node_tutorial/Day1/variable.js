const prompt = require("prompt-sync")({ sight: true});
const length = parseFloat(prompt("Enter the length of rectangle: "));  //string to float
const width = parseFloat(prompt("Enter the length of rectangle: "));
const area = length * width;
console.log("The area of rectangle is: ", area);
