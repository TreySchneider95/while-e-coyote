const prompt = require('prompt-sync')({sigint: true});

let num = Number(prompt("Enter number: "))
console.log(num)

while(num < 100){
    num += num
    console.log(num)
}