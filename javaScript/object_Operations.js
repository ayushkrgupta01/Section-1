const smartphone = {
  brand: "Samsung",
  model: "Galaxy M13",
  price: 14999,
  colors: ["blue", "white", "black"],
};

console.log('full obj:');
console.log(smartphone);

//access price of the phone
console.log('obj price:');
console.log(smartphone.price);

//change model of the phone to 'Galaxy M32'
smartphone.model = "Galaxy M32";
console.log('full obj with updated model:');
console.log(smartphone);

//add new ket ram and assign 6GB value
smartphone.ram = "6GB";
console.log('full obj with new key added "ram":');
console.log(smartphone);


console.log('----Advance object operations:----');
const smartphoneList = [
  {
    brand: "Samsung",
    model: "Galaxy M13",
    price: 14999,
    colors: ["blue", "white", "black"]
  },
  {
    brand: "Oppo",
    model: "F17",
    price: 34999,
    colors: ["skyblue", "green"]
  },
  {
    brand: "Apple",
    model: "iPhone 12",
    price: 74999,
    colors: ["black", "blue", "white"]
  },
  {
    brand: "OnePlus",
    model: "8T",
    price: 44999,
    colors: ["black", "blue", "white"]
  },
  {
    brand: "Xiaomi",
    model: "Redmi Note 9 pro",
    price: 13999,
    colors: ["blue", "black"]
  }
];
console.log('QUES 1---- length of array of objects:');
console.log(smartphoneList.length);

console.log('QUES 2---- PRICE and BRAND of all array of objs:');
console.log(smartphoneList.price);  //Undefined
console.log(smartphoneList[0].price);
console.log(smartphoneList[0].brand);

console.log(smartphoneList[2].price);
console.log(smartphoneList[2].brand);

console.log(smartphoneList[3].price);
console.log(smartphoneList[3].brand);

console.log(smartphoneList[0]);


console.log('Ques 3---- color of last obj using at fxn() ');
console.log(smartphoneList.at(-1).colors[1]);  // this will give the color name at index 0.
console.log(smartphoneList.at(-1).colors[1][3]);  // this will give the letter of the color name at index 3.

console.log(smartphoneList.at(-1).colors.unshift('red'));
console.log(smartphoneList);

console.log(smartphoneList[0]);

console.log('-------const 1-------');
const brands = smartphoneList.map(
    (phone) => {
    return phone.brand;
});

console.log(brands);

const budgetPhones = smartphoneList.filter(
    (phone) => {
    return phone.price <= 40000;
    });

console.log(budgetPhones);

const getPrices = smartphoneList.map(
    (phone) => {
    return phone.price;
});
console.log(getPrices);


const getBlackPhones = smartphoneList.filter(
    (phone) => {
    return phone.colors.includes('black');
});
console.log(getBlackPhones);

const getSamsung = smartphoneList.filter(
    (phone) => {
    return phone.brand.includes('Samsung');
});
console.log(getSamsung);

//another way
const search='Samsung';
const getSamsungAnother = smartphoneList.filter(
    (phone) => {
    return phone.brand==='Samsung';
});
console.log(getSamsungAnother);


const search2='sam';
const getSamsungAnother2 = smartphoneList.filter(
    (phone) => {
    return phone.brand.toLowerCase().includes(search2.toLowerCase());
});
console.log(getSamsungAnother);

const st = {
  name:'ayush',
  age:24,
  field:'IT'
};
console.log(st);
console.log(Object.keys(st));
console.log(Object.values(st));