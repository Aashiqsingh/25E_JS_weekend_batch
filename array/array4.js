let users = ["roshan","rahul","priya","bhuwan","rakhi","aashi","ramaa","rajaa"];

// let flag = false;
// for(let i=0;i<users.length;i++){
//     if(users[i].length > 4)
//     {
//         flag = true;
//     }
// }

// console.log(flag);


// every : boolean && and and condition appli

// let ans = users.every((user)=>{
//     return user.length > 5
// })

// console.log(ans);


let ans = users.every((user)=> user.startsWith("r"))
console.log(ans);