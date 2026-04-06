// calculated age difference between 2026 and birth year
let birthYear = [2006,2007,2008,2009]
let q5 = birthYear.map(function(el,index,arr){
   return 2026 - el 
})
console.log(q5)

// filter out the ages that are less than 18

let numbers = [10, 15, 20, 25, 30]
let q6=numbers.map(function(el,index,arr){
    if(el<18){
        return el
    }
})  
console.log(q6)

let num=[1,2,3,4,5]
let s1=num.map(ele=>ele *2)
console.log(s1)

let num1=[1,2,3,4,5]
let s11=num1.map(function(ele,ind,arr)
{
   return ele *3
})
console.log(s11)

let names = ["gaurav", "rahul", "amit"];
let case1=names.map(s=>s.toUpperCase())
console.log(case1)

let users = [
  { id: 1, name: "Gaurav" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Amit" }
];

let username=users.map(users=>users.name)
console.log(username)

let Employee=[
    {
        fullname:"Gaurao sayasikamal",
        company:"FIS"

    },
    {
        fullname:"Shrivek sayasikamal",
        company:"Capgemini"
    },
    {
        fullname:"Mohini sayasikamal",
        company:"FIS"
    },
    {
        fullname:"Naimish sayasikamal",
        company:"FIS"
    },
    {
        fullname:"Mihika sayasikamal",
        company:"TCS"
    }

]
 let emp_comany=Employee.filter(function(el)
 {
    return el.company=="FIS"
 }
)
console.log(emp_comany)
console.table(emp_comany)

let arr = [19,20,21,22,23]
let filter_num=arr.every(function(el)
{
    return el <=20
}
)
console.log(filter_num)