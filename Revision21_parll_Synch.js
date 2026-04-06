 function task1(){
    return new Promise(function (resolve,reject){
      setTimeout(function() {
        resolve("Task 1 is completed")
        
      }, 3000);
    })
 }

function task2(){
    return new Promise(
        function(resolve,reject){
            setTimeout(
                function(){
                    resolve("Task 2 is completed")
                },2000
            )
        }
    )
}

function task3(){
    return new Promise(
        function(resolve,reject){
            setTimeout(function(){
                resolve("Task 3 is completed")
            },1000)
        }
    )
}

function task4(){
    return new Promise(
        function(resolve,reject){
            setTimeout(
                function(){
                    reject("Task 4 is failed")
                },2000
            )
        }
    )
}

/* Promise.all([task1(),task2(),task3(),task4()])
.then(function(results){
    console.log(results);
})
.catch(function(error){
    console.log(error);
}) */

/* async function promiseAll(){
    try{
         let pro=await Promise.all([
            task1(),
            task2(),
            task3(),
            //task4() 
         ])
         console.log(pro)

    }
    catch(error){
        console.log(error)

    }
}
   promiseAll()  */

   Promise.allSettled([
    task1(),
    task2(),
    task3(),
    task4()
   ])
   .then(function(results){
    console.log(results)
   })