function getData(){

    console.log("starting code....");
    

    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // resolve("Data fetched successfully...");
            // reject("Error occured");
            let flag = true;
            if(flag){
                resolve({
                    message:"Data fetched successfully...",
                    status:200
                })
            }
            else{
                reject({
                    message:"Error occured",
                    status:400
                })
            }
        },4000)
    })

    console.log(promise);
    promise.then((data)=>{
        console.log(data);
        console.log("ending code....");

    })
    promise.catch((err)=>{
        console.log(err);
    })



    
}

getData()