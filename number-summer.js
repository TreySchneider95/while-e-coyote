const prompt = require('prompt-sync')({sigint: true});

let num
while(num !== 0){
    num = Number(prompt(">"))
}