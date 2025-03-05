// WAP to find the largest number among three.

let num1 = prompt("Enter a number: ");
let num2 = prompt("Enter a number: ");
let num3 = prompt("Enter a number: ");
num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);

if(num1 > num2) {
    if(num1 > num3) {
        console.log(`${num1} is the largest number.`);
    } else {
        console.log(`${num2} is the largest number.`);   
    }
} else {
    if(num2 > num3) {
        console.log(`${num2} is the largest number.`);
    } else{
        console.log(`${num3} is the largest number.`);
    }
}