// const getData = ()=>{

//     let promise = new Promise((sucess,failure)=>{
//         setTimeout(()=>{
//             sucess("Data fetched successfully...");
//         },5000)
//     })

//     promise.then((res)=>{
//         console.log(res);
//     }).catch((err)=>{
//         console.log(err);
//     })
// }


// getData()


// const getData = ()=>{

//     let promise = new Promise((sucess,failure)=>{
//         setTimeout(()=>{
//             sucess({
//                 message:"Data fetched successfully...",
//                 status:200
//             });
//         },5000)
//     })

//     return promise;
// }


// let ans = getData()
// // console.log(ans);
// ans.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })


const getData = ()=>{

    return new Promise((sucess,failure)=>{
        setTimeout(()=>{
            // sucess({
            //     message:"Data fetched successfully...",
            //     status:200
            // });
            failure({
                message:"Error occured",
                status:400
            })
        },5000)
    })

   
}

getData().then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})






// let ans = getData()
// // console.log(ans);
// ans.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })