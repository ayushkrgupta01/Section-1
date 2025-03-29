for (let i = 0; i < 10; i++) {
    console.log(i);
}

// WAP to print all even numbers from 1 to 50;
for(let i=1; i<=50; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

// while loop
console.log('while loop');

let a = 10;

while(a < 20){
    console.log(a);
    a++;
}
console.log('do while loop');

let b = 10;
do{
    console.log(b);
    b++;
}while(b < 10);

// node --watch loops.js