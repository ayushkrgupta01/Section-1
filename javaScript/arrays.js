const arr=[34, 'hello', true, null];

console.log(arr);
console.log(Array.isArray(arr));

// ---------------------------------------------------------------------------------- //

const movies=['spiderman', 'salaar', 'kgf', 'marco', 'devra', 'thor', 'animal'];

console.log(movies.length);   // also works with strings

// indexing
console.log("----------Indexing----------");
console.log(movies[1]);  // also works with strings
console.log(movies.indexOf('kgf'));  // also works with strings
console.log(movies.at(-2));  // also works with strings

movies[1]='Interstellar';
console.log(movies);
console.log(movies.length);

//Slicing
console.log("----------Slicing----------");
console.log(movies.slice(2,5));
console.log(movies.slice(2,50));
console.log(movies.slice(2)); // works like infinity
console.log(movies.slice());

// adding and removing elements
console.log("----------Adding Elements----------");
movies.push('Ironman');  //add last element
movies.unshift('Ironman'); //add element in start
console.log(movies);

console.log("----------Removing Elements----------");
movies.pop();   //removes last element
movies.shift(); //removes first element
console.log(movies);

// movies.splice(2,2);  //first 2->index and second 2-> no. of elements           for removing elements
console.log("----------Splicing----------");
movies.splice(2,2,'superman', 'batman');
console.log(movies);
movies.splice(2,2,'superman', 'batman','baby');
console.log(movies);
movies.splice(2,2);   //works as slice method
console.log(movies);

movies.splice(-3,2); // we can also use negative indexing
console.log(movies);

movies.splice(2,0,'mammal', 'lion king');
console.log(movies);

movies.splice(-2,2); // we can also use negative indexing
console.log(movies);