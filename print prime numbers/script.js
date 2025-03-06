// print all prime numbers in array.

let nums = [];

for(let i = 1; i <= 50; i++){
    nums.push(i);
}

nums.forEach((num) => {
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
        }
    }
});
