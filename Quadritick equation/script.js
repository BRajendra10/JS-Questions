let a = prompt("Enter a number: ");
let b = prompt("Enter a number: ");
let c = prompt("Enter a number: ");

a = parseInt(a);
b = parseInt(b);
c = parseInt(c);

let root1, root2;

// discriminant of a quadratic equation (b2-4ac)
let discriminant = b * b - 4 * a * c;

// finding the root
if(discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a); 
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    console.log(`Root1 = ${root1}, Root2 = ${root2}`);
} else if(discriminant == 0) {
    root1 = root2 = (-b / (2 * a));

    console.log(`Root1 = ${root1}, Root2 = ${root2}`);
} else {
    let firstPart = (-b / (2 * a)).toFixed(2);
    let secondPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    console.log(`Root1 = ${firstPart + secondPart}, Root2 = ${firstPart - secondPart}`);
}

