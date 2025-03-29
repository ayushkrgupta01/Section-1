const nums = [324, 28, 1, 82, 47, 9, 74];

console.log('--------for loop--------');
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}

console.log('--------for of loop--------');

for (let n of nums) {
    console.log(n);
}

console.log('-------for each function--------');

nums.forEach((n, a) => { console.log(n, a); });    //a=element  and b=index

// WAP to print only even values
console.log('-------even values--------');
nums.forEach((n) => {
    if (n % 2 === 0)
        console.log(n);
});

// WAP to multiply each element by 2
console.log('-------multiply by 2--------');

const nums2 = [];

nums.forEach((n) => {
    // console.log(n * 2);
    nums2.push(n * 2);
});

console.log(nums2);

// store all odd numbers in a new array
console.log("--------store all odd numbers in a new array-------")
const odd = [];

nums.forEach((a) => {
    if (a % 2 !== 0) {
        odd.push(a);
    }
})

console.log(odd);