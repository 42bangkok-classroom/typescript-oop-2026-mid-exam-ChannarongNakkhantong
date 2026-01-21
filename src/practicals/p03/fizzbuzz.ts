import { exit } from "process";

const n: number = parseInt(process.argv[2]);
if(isNaN(n)|| n < 0 ||!Number(n)){
}
else{
    for(let i = 1;i<=n;i++){
        if(i % 3 ===0 && i % 5 ===0){
            console.log("FizzBuzz");
        }else if(i % 3 === 0){
            console.log('Fizz');
        }else if(i % 5 === 0){
            console.log('Buzz');
        }
        else{
            console.log([i]);
        }
        }
    }
