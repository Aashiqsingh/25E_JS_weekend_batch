let users = ["roshan","rahul","priya","bhuwan","rakhi","aashi","ram","raj"];


// for(let i=0;i<user.length;i++){
//     console.log(user[i]);
    
// }

// forEach : iterate over the array void return

// user[i] == user 


// users.forEach((user)=>{
//     console.log(user.toUpperCase());
// })

// users.forEach((u)=>{
//     if(u.length > 5){
//         console.log(u);
        
//     }
// })

let arr = [];

users.forEach((user)=>{
    if(user.startsWith("r")){
        arr.push(user);
    }
})

console.log(arr);
