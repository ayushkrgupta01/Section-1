const fruits=['apple', 'orange', 'banana', 'kiwi', 'mango'];

//access 2nd, 3rd and 4th  elements
console.log(fruits.slice(1,4));
// console.log(fruits);
console.log(fruits.splice(1,3));
// console.log(fruits);

//add 2 fruits after apple
fruits.splice(1,0,'cherry','grapes');
//add 2 names before apple
fruits.splice(0,0,'cherry','grapes');   // we caN ALSO USE unshift method
// console.log(fruits);

// remove 2nd last element
fruits.splice(-2,1);

//remove orange and banana and insert pineapple
fruits.splice(-3,2,'pineapple');
console.log(fruits);

//add 2 names before apple
fruits.unshift('honey','Lemon','Ladyfinger');
console.log(fruits);
