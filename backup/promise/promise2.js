// const getData = ()=>{

//     let pro = new Promise((success,failure)=>{
//         setTimeout(()=>{
//             let flag = false;
//             if(flag){
//                 success({
//                     message:"Data fetched successfully...",
//                     status:200
//                 })
//             }
//             else{
//                 failure({
//                     message:"Error occured...",
//                     status:400
//                 })
//             }
//         },4000)
//     })

//     // console.log(pro);
//     pro.then((res)=>{
//         console.log(res);
//     }).catch((err)=>{
//         console.log(err);
//     })
    
// }

// getData()


// const getData = ()=>{

//     let pro = new Promise((success,failure)=>{
//         setTimeout(()=>{
//             let flag = true;
//             if(flag){
//                 success({
//                     message:"Data fetched successfully...",
//                     status:200
//                 })
//             }
//             else{
//                 failure({
//                     message:"Error occured...",
//                     status:400
//                 })
//             }
//         },4000)
//     })

//     // console.log(pro);
//     return pro
    
// }

// let ans = getData()
// // console.log(ans);
// ans.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })


const getData = ()=>{

    return new Promise((success,failure)=>{
        setTimeout(()=>{
            let flag = true;
            if(flag){
                success({
                    message:"Data fetched successfully...",
                    status:200
                })
            }
            else{
                failure({
                    message:"Error occured...",
                    status:400
                })
            }
        },4000)
    })

    // console.log(pro);
    // return pro
    
}


getData().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})







// let ans = getData()
// // console.log(ans);
// ans.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })
