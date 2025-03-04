// WAP to check if given number is positive , negative or zero

let num = prompt("Enter a number: ");
num = parseInt(num);

if(num > 0){
    console.log(`${num} is a positive number.`);
} else if(num < 0) {
    console.log(`${num} is a negative number.`);
} else{
    console.log(`Given number is ${num} number.`);
}