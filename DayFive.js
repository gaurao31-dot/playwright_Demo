let numbers = [11,22,9,8,33,44]
let num=numbers.some(function(value){
return value>30
})
console.log(num)

let numbers1 = [11,22,9,8,33,44]
let num1=numbers1.every(function(el){
    return el>10
})
console.log(num1)

let numbersC = [55,66,77,88,99,100]
let q4 = numbersC.filter(function(el){
    return el > 60
})
console.log(q4)

let q5 = numbersC.find(function(el){
    return el > 60
})
console.log(q5)