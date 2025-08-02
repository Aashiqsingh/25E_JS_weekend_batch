let product = {
    productId:101,
    name:"I phone",
    category:"phone",
    price:1000,
    discount:10,
    isAvailable:true,
    color:["red","green","blue","white"],
    details:{
        brand:"apple",
        model:"iphone 11",
        memory:"64 GB",
        processor:"A14 Bionic",
        screen:"6.1 inch",
        battery:"5.0 V",
        camera:"12 MP",
        display:"6.7 inch",
    }
}

console.log(product);
console.log(product.name);
console.log(product.category);
console.log(product.price);
console.log(product.discount);
console.log(product.isAvailable ? "Available":"Not Available");

console.log(product.color);
console.log(product.color[0]);


for(let i=0;i<product.color.length;i++){
    console.log(product.color[i]);
}

console.log(product.details);
console.log(product.details.brand);





