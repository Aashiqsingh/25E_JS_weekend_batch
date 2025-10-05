const addToCart = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let flag = true;
            if(flag){
                resolve({
                name:"Apple",
                price:200,
                message:"Added to cart",
                status:200
            })
            }
            else{
                reject({
                    message:"Not added to cart",
                    status:400
                })
            }
        },4000)
    })
}

const getOrder = (data)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let flag = false;
            if(flag){
                resolve({
                    product:data.name,
                    price:data.price,
                    message:"Order placed successfully",
                    status:200
                })
            }
            else{
                reject({
                    message:"Order not placed",
                    status:400
                })
            }
        },4000)
    })
}

const getPayment = (option)=>{
    return new Promise((success,failure)=>{
        setTimeout(()=>{
            let flag = true;
            if(!flag){
                failure({
                    message:"Payment failed",
                    status:400
                })
            }
            else{
                success({
                    product:option.product,
                    price:option.price,
                    message:"Payment successfully...",
                    status:200
                })
            }
        },5000)
    })
}


addToCart().then((data)=>{
    console.log("Add to cart ......",data)

    getOrder(data).then((res)=>{
        console.log("Order placed ......",res)

        getPayment(res).then((res)=>{
            console.log("Payment ......",res)
        }).catch((err)=>{
            console.log("Payment failed ......",err)
        })
    }).catch((err)=>{
        console.log("Order not placed ......",err)
    })
}).catch((err)=>{
    console.log("Error",err)
})