console.log("Hi")
let number=[11,12,13,14]
let q111=number[0]
console.log(q111)

let num1=[11,12,13,14]
let num2=[11,22,33,44]
let numc=[...num1,...num2]
//let q33=[a,b,...c]=numb
//console.log(numc)
console.log(numc)
let num23=[1,2,3,4,56]
let a33 = [a,...b]=num23
console.log(a33)

let numbersE  = [11,22,33,55,66,77,88,99]
let q33  = [a,...b] = numbersE
console.log(q33)

let info={
    firname:"gaurao",
    lastname:"Sayakmm",
    age:23,
    city:"Amravati"
}
 console.log(info)
 let {firname,lastname,...z}=info
 console.log(z)
 console.log(firname)

 let student={
    fn:"gaurao",
    ln:"Sayakamal",
    age:38,
    city:"Amravati"
 }

 function DisplayInfo({age,city})
 {
    console.log(age)
    console.log(city)
 }
 DisplayInfo(student)

 let names=["samay","Viraj","Rahul"]
 function getnames(a,...b){
    console.log(a)
 }
  getnames(...names)