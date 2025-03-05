// WAP to check if given numer is even or odd.

let num = prompt("Enter a number: ");
num = parseInt(num);

if(num%2==0) {
    console.log(`${num} is a even number. `);
} else {
    console.log(`${num} is a odd number. `);
}