const getOrder = ()=>{
 
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let flag = true;
            if(!flag){
                reject("Cancelled... food order...");
            }
            else{
                resolve({
                    orderId:154,
                    message:"Order placed successfully...",
                    amount:399,
                    status:200
                })
            }
        },4000)
    })
}

const getPayment = (data)=>{
    return new Promise((success,failure)=>{
        setTimeout(()=>{
            let flag = true;
            if(flag){
                success({
                    paymentId:data.orderId,
                    message:"Payment successful...",
                    amount:data.amount,
                    status:data.status
                })
            }
            else{
                failure("Payment failed...")
            }
        },5000)
    })
}


getOrder().then((res)=>{
    console.log("food order data....",res);
    getPayment(res).then((res)=>{
        console.log("payment data....",res);
    }).catch((err)=>{
        console.log("payment error....",err);
    })
}).catch((err)=>{
    console.log("food order error....",err);
})