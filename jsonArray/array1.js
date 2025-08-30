var users = [
    {
        id : 1,
        name:"pranshul",
        age:15,
        email:"pranshul@gmail.info",
        mobile:'7826397878'
    },
    {
        id:2,
        name:"rahul",
        age:29,
        email:"rahul@gmail.com",
        mobile:'87263978'
    },
    {
        id:3,
        name:"rohan",
        age:27,
        email:"rohan@gmail.in",
        mobile:'9826397878'
    },
    {
        id:4,
        name:"ronali",
        age:24,
        email:"sonali@gmail.com",
        mobile:'8726978'
    }
]

let ans = users.filter((user)=>{
    return user.email.endsWith(".com")
})
console.log(ans);




// let ans = users.filter((user)=>{
//     return user.age > 25
// }).map((user)=>{
//     return user.name
// })

// console.log(ans);

// let ans = users.filter((user)=> user.age > 25).map((user)=> user.name)
// console.log(ans);






// users.forEach((user)=>{
//     if(user.age > 25){
//         console.log(user.name);
        
//     }
// })


// for(let i=0;i<users.length;i++){
//     console.log(users[i].name);
    
// }

// users.forEach((user)=>{
//     console.log(user.name);
    
// })

// let ans = users.map((user)=>{
//     return user.name
// })

// console.log(ans);
