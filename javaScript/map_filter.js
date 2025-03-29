const nums =[3,7,5,1,9,34,38];

//WAP to print get an array of squares of all numbers
const sqrNums = nums.map( (n) => {
    return n**2;
} );

console.log(sqrNums);


const prices=['23.432' , '245.21', '4565', '999'];

const intPrices = prices.map( (p) => {
    return parseInt(p) ;
} );
console.log(intPrices);

const evenNums = nums.filter((n) => {
    return n%2===0;
});
console.log(evenNums);

//1st way
const prices2 = [12999, 4500, 2000, 9700, 3400, 1500];
const ftlPrices=prices2.filter((n)=>{
    if(n>=2000 && n<=5000)
        return n;
});

console.log(ftlPrices);

//2nd way
const ftlPrices2=prices2.filter((n)=>{
    return n>=2000 && n<=5000;
});
console.log(ftlPrices);


const brands = ['Samsung', 'Apple', 'Motorola', 'Oppo', 'Nokia', 'Xiaomi'];
const searchBands = brands.filter((b)=>{
    return b==='Apple';
});
console.log(searchBands);


const smallA = brands.filter((b)=>{
    return b.toLowerCase().includes('a');
});
console.log(smallA);


const smallPP = brands.filter((b)=>{
    return b.toLowerCase().includes('pp');
});
console.log(smallPP);

const upperBrands = brands.map((b)=>{
    return b.toUpperCase();
});
console.log(upperBrands);