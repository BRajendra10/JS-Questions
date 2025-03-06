// wap to check if given number is prime or not.

let num = prompt("Enter a number: ");
num = parseInt(num);
let count = 0;

if(num < 1) {
    count = 0;
} else if(num > 1) {
    for(let i = 1; i <= num; i++) {
        if(num %i ==0){
            count++;
            // console.log(count);
        }
    }

    if(count == 2) {
        console.log(`${num} is a prime number.`);
    } else {
        console.log(`${num} is not a prime number.`);
    }
}

// console.log(isPrime);
