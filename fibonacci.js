const prompt = require('prompt-sync')({sigint: true});

let n = Number(prompt("Number: "))
let counter = 0
let past_num = 1
let num = 1
while (counter < n){
    if(counter === 0){
        console.log(0)
    }else if(counter === 1){
        console.log(1)
    }else{
        console.log(num)
        num = num + past_num
        past_num = num - past_num
    }
    counter += 1
}