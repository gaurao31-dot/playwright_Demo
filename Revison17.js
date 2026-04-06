//short circuit operator
let L1=true && console.log("High")

let L2=true && "high"
console.log(L2)

/* if(undefined)
{
    console.log("Truthhy valu")
}
else{
    console.log("It is falsy value")
} */

/* if(NaN)
{
    console.log("Truthhy valu")
}
else{
    console.log("It is falsy value") // falsy valy
} */

/*     if(0)
{
    console.log("Truthhy valu")
}
else{
    console.log("It is falsy value")  // Falsy value
} */

/* if(null)
{
    console.log("Truthhy valu")
}
else{
    console.log("It is falsy value") // Falsy value
}   */  

if([])
{
    console.log("Truthhy valu")
}
else{
    console.log("It is falsy value")
}  
if({})
{
    console.log("Truthhy valu")
}
else{
    console.log("It is falsy value")
}  
/* 
if("")
{
    console.log("Truthhy valu")
}
else{
    console.log("It is falsy value")
}

let info={
    firstname:"Shrivek",
    Lastname:"Sayasikamal",
    age:23
}

let x1=info.age && info.age
console.log(x1)  // 23

let info1={
    firstname:"Shrivek",
    Lastname:"Sayasikamal",
    age:undefined
}

let x12=info1.age && info1.age
console.log(x12)  // 23

let num=12
let x3=num && "ram"
console.log(x3)  // ram

let numZ=0
let x31=numZ && "ram"
console.log(x31) */

//shortcircuit || 

/* h1=undefined || console.log("Hello")
//h2=12 || console.log("Hello")
h3=23 || console.log("Hello")
console.log(h3) // Hello

h4=2|| 5>1
console.log(h4) // 2

h5=undefined|| 5>1
console.log(h5) // 2 */

let a1=10 || 12
console.log(a1) // 10

let a2=0 || 12
console.log(a2) // 12
 // Null Coalscing operator ?? (null, undefined)
let a3=undefined ?? 25
console.log(a3) // 12

let a4=null ?? 27
console.log(a4) // 27

let a5=12 ?? 27
console.log(a5)