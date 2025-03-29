function addNums(a, b) {
    console.log(b);
    var c = a + b;
    console.log(c);
}

addNums(2, 3);
addNums(567);

// console.log(c);

const getAvg = function (a, b, c) {
    const avg = (a + b + c) / 3;
    // console.log(avg);
    return avg;
    console.log('after return');
}

const result = getAvg(21, 38, 43);

console.log(result);

// es6 arrow function
const factorial = (n) => {
    let f = 1;
    for (let i = 1; i <= n; i++) {
        f = f * i;
    }
    return f;
}

const fact = factorial(5);
console.log(fact);