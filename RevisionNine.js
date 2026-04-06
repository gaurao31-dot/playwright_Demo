/* let numbers=[11,23,45,67,12,89]
    let q1=numbers.filter(function(el){
        return el>40
    })
    console.log(q1)

    let q2=numbers.find(function(el){
        return el>40
    })
    console.log(q2) */
     let info=[
        {
            firstname:"gaurao",
            Lastname:"sayasikamal"
        },
        {
            firstname:"Shrivek",
            Lastname:"sayasikamal"
        },
        {
           firstname:"Mohini",
            Lastname:"sayasikamal",
        },
        {
            firstname:"naimish",
            Lastname:"sayasikamal",
        }
        
     ]

     let q3=info.find(function(el){
        return el.firstname=="Mohini"
     })
     console.log(q3)
     //find Index
     let NumberB=[11,22,33,44,55]
     let q5Index=NumberB.findIndex(function(el){
         return el>30
     })
     console.log(q5Index)

     // every -- Boolean
     let names=["gaurao","Shrivek","Mohini","naimish"]

     let m1=names.every(function(el){
        return el.length>=5

     })
     console.log(m1)

        //some -- Boolean
         let namesB=["gaurao","Shrivek","Mohini","naimish","raj"]
         let m2=namesB.some(function(el){
            return el.length>5
         })
         console.log(m2)

         //slice()
         let cities=["Amravati","Nagpur","Pune","Mumbai","Delhi"]
         console.log(cities.slice(2))
          console.log(cities.slice(1,3))

          //splice()
          let Countries=["India","Pakistan","Japan","Shrilamka","Singapore"]
          Countries.splice(1,2,"Usa","gaura0")
          console.log(Countries)