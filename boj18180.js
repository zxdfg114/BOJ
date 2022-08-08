const fs = require("fs");
const input = fs.readFileSync("boj18180.txt").toString().split();

let arr = [];

arr.push(+input[0]);

console.log(arr[0]-543);

