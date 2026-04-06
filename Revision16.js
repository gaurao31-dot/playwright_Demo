let aa=[11,22,33]
let [x11,x22,x33]=aa
console.log(x11)
console.log(x11+x22)

let bb=[5]
let [x1=0,x2=4,x3=8]=bb
console.log(x1)
console.log(x1+x2+x3) // NaN

let arrstr=["sri","sai","kumar"]
let [n1,...n2]=arrstr
console.log(n2) 
console.log(n1) 
console.log(arrstr) 

function addE(...n1)
{
  console.log(n1)
}
 
addE(1,2,3,4,5,6,78,)


let numUnitarr=[11,22,33,44,55]
function Displaytwo(x,y)
{
  console.log(x,y)
}
Displaytwo(...numUnitarr)

let infoe={
    firstname:"Srivek",
    lastname:"Sayasikamal",
    age:1
}

//let {firstname,lastname,age}=infoe
/* console.log(firstname)
console.log(lastname)
console.log(age) */
let {firstname,...user1}=infoe
console.log(firstname)
console.log(user1)

infoA={
    firstname1:"Gaurao",
    city:"Amravati"
}

infoB={
    LastNmae:"Sayasikamal",
    pin:444601
}

let InfoABC={...infoA,...infoB}
console.log(InfoABC)

let {firstname1,...details}=InfoABC
console.log(firstname1)
console.log(details)