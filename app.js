const fs = require("fs");

const input = fs.readFileSync("input.txt").toString().split(' ');
const arr = [];

for(let i=0; i<input.length;i++){
    arr.push(parseInt(input[i]));
}

const A = arr[0];
const B = arr[1];


console.log(A+B);
console.log(A-B);
console.log(A*B);
console.log(parseInt(A/B));
console.log(A%B);