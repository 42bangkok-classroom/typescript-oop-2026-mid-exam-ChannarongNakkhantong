let score = process.argv[2]
let input = Number(score);
if(input >= 80 && input <= 100 ){
    console.log("Grade is A")
}else if(input >= 70 && input <= 79 ){
    console.log("Grade is B")
}else if(input >= 60 && input <= 69 ){
    console.log("Grade is C")
}else if(input >= 50 && input <= 59 ){
    console.log("Grade is D")
}else if (input >= 0 && input <= 49 ){
    console.log("Grade is F")
}else{
    console.log("Invalid input")
}
