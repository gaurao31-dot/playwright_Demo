/* function AdditionA()
{
    console.log("Function A is called")
}

function AdditionB()
{
    console.log("Function B is called")
}

AdditionB()
AdditionA() */
/* 
 function additionC(){
    setTimeout(function(){
         console.log("C is called")
     },2000)
    }
 

function AdditionD(){
    setTimeout(function(){
        console.log("Function D is called")
    },1000)
}
additionC()
AdditionD() */

// Usercreate => GetId => getInfo()


function getInfo(){
    setTimeout(() => {
        console.log("User Created")
        
    }, 4000);

    setTimeout(function(){
        console.log("Get Id for user")

    },2000)
    
    setTimeout(function(){
        console.log("Get user Information")
    },1000)
}

//getInfo()
/*  function getInfo(){
    setTimeout(function(){
        console.log("User is created")
         setTimeout(function(){
            console.log("Get User Id ")
                setTimeout(function(){
                    console.log("Get User Id information")
                    }, 1000)        
                 }, 2000)
            }, 3000);
 }

 getInfo() */

 let ProOne=new Promise(function(Resolve,Reject){
    let a=10
    let b=10
    if(a==b)
    {
       Resolve("Promise is success")
    }
    else{
        Reject("Promise Rejected")
    }

 })
 
 //consuming the promise
/* ProOne.then(function(a){
    console.log("Function a is called")

},function(b){
    console.log("Function b is called")
}
) */

/* ProOne.then(function(a){
    console.log(a)
})
.catch(function(b){
    console.log(b)
}) */

ProOne.then(function(a){
    console.log(a)
})
 .catch(function(b){
    console.log(b)
 })
 .finally(function(){
    console.log("This function will execute in both cases")
 })