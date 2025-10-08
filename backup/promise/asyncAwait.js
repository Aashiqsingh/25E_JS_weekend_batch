function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // resolve({
            //     message:"Data fetched successfully...",
            //     status:200
            // })

            reject({
                message:"Error occured...",
                status:400
            })
        },4000)
    })
}


// async function answer(){

//     console.log("Starting........");
    

//     let res = await getData()
//     console.log(res);

//     console.log("Ending....");
// }

// answer()

const answer = async()=>{

    console.log("Starting........");
    

    let res = await getData()
    console.log(res);

    console.log("Ending....");
}

answer()