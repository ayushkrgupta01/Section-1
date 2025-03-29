// WAP to print all numbers from 50 to 320 which are divisible 7 and 11

for (let i = 50; i <= 320; i++) {
    if (i % 7 === 0 && i % 11 === 0) {
        console.log(i);
    }
}

// WAP to reverse a number
let num = 12345;
// 54321
let reverse = 0;

while (num > 0) {
    let d = num % 10;
    reverse = reverse * 10 + d;
    num = parseInt(num/10);
    console.log(reverse, num);
}

console.log(reverse);