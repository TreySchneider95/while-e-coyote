const prompt = require('prompt-sync')({sigint: true});

let num
let sum = 0
while(num !== 0){
    num = Number(prompt(">"))
    sum += num
}
console.log(sum)