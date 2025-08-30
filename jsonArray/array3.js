var departments = [
    {
        name:"IT",
        employees:[
            {
                name:"amit",
                age:23,
                gender:"male",
                isActive:true,
                isMarried:true,
                child:2
            },
            {
                name:"sumit",
                age:25,
                gender:"male",
                isActive:true,
                isMarried:true,
                child:1
            },
            {
                name:"seeta",
                age:26,
                gender:"female",
                isActive:true,
                isMarried:false,
                child:0
            }
        ]
    },
    {
        name:"HR",
        employees:[
            
            {
                name:"geeta",
                age:32,
                gender:"female",
                isActive:true,
                isMarried:true,
                child:0
            },
            {
                name:"harita",
                age:36,
                gender:"female",
                isActive:false,
                isMarried:false,
                child:0
            },
        ]
    },
    {
        name:"Finance",
        employees:[
            
            {
                name:"siya",
                age:35,
                gender:"female",
                isActive:true,
                isMarried:true,
                child:2
            },
            {
                name:"axit",
                age:37,
                gender:"male",
                isActive:true,
                isMarried:true,
                child:0
            },
            {
                name:"payal",
                age:39,
                gender:"female",
                isActive:true,
                isMarried:true,
                child:1
            },
            {
                name:"sunit",
                age:42,
                gender:"male",
                isActive:false,
                isMarried:false,
                child:0
            }
            
        ]
    },
]

// let ans = departments.map((depart)=> depart.employees.reduce((count,emp)=> count + emp.child,0)).reduce((total,emp)=> total + emp,0)
// console.log(ans);

// let sum = 0
// departments.forEach((depart)=>{
//     depart.employees.forEach((emp)=>{
//         if(emp.child > 0){
//             sum = sum + emp.child
//         }
//     })
// })


// console.log(sum);





// let ans = departments.find((depart)=>{
//     return depart.name == "Finance"
// }).employees.filter((emp)=>{
//     return emp.age > 40
// })
// console.log(ans);


// let ans = departments.find((depart)=> depart.name === "Finance").employees.filter((emp)=> emp.age > 40)

// console.log(ans);


// let ans = departments.map((depart)=>{
//     return depart.name
// })

// console.log(ans);

// let ans = departments.map((depart)=>{
//     return depart.employees.filter((emp)=>{
//         return emp.gender == "female"
//     })
// })

// console.log(ans);
