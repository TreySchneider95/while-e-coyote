const prompt = require('prompt-sync')({sigint: true});

let x = prompt("enter first number: ")
let y = prompt("enter second number: ")
if(y !== 0){
    while (x%y !== 0){
        console.log(x)
        x ++
    }
    console.log(`${x} is divisible by ${y}`)
}else{
    console.log("Can't divide by 0")
}