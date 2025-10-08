function getData(){

    console.log("Starting........");
    

    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // resolve("Data fetched successfully...");
            reject("Error occured...");
        },4000)
    })

    console.log(promise);
    promise.then((data)=>{
        console.log(data);
        console.log("Ending....");

    })
    promise.catch((err)=>{
        console.log(err);
        console.log("Ending...");
        
    })


    

}


getData()