/* console.log("Hi");
let arr=[11,22,33,44]
let b=arr;
let obj1=[...arr]
//console.log(obj1)
b.push(89)
obj1.push(56)
console.log(arr)
console.log(b)
console.log(obj1)
 */

/* let a=[11,22,33,44]
let b=[45,55,67,78]

let mergeab=[...a,...b]
console.log(mergeab)

let aastr=[..."Sayasikamal"]
console.log(aastr) */

let obj={
    name:"Shrivek",
    City:"Beed",
    age:45
}

let obj2=obj

obj2['name']="Gaurao"
console.log(obj2)
console.log(obj)
let user1={...obj2}
console.log(user1)
user1.college="HVPM"
console.log(user1)
user1.name="Shrivek"
console.log(user1)
 let user4={...user1,college:'PRMIT'}
 console.log(user4)



