const prompt = require('prompt-sync')({sigint: true});

let str = prompt("enter word: ")
let tempstr = str
console.log(tempstr)
while(tempstr.length < 10){
    tempstr += str
    console.log(tempstr)
}