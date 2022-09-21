const prompt = require('prompt-sync')({sigint: true});

let x = prompt("enter first number: ")
let y = prompt("enter second number: ")

while (x%y !== 0){
    console.log(x)
    x ++
}
console.log(`${x} is divisible by ${y}`)