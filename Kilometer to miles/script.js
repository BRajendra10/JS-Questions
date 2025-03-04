// wap to convert kilometers to miles.

let km = prompt("Enter a number: ");
km = parseInt(km);

// 1km = 0.621371miles
const miles = km * 0.621371;

console.log(`${km} kilometers is = ${miles} miles`);