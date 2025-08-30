var products = [
    {
        id:101,
        name:"Iphone",
        category:"Mobile",
        price:100000,
        color:["red","black","blue","green","yellow"],
        isAvailable:true,
        details:{
            description:"Apple iPhone 13 Pro Max",
            weight:1500,
            screenSize:6.1,
            batteryLife:48,
        }
    },
    {
        id:102,
        name:"Samsung Galaxy S21 Ultra",
        category:"Mobile",
        price:75000,
        color:["white","black","blue","green"],
        isAvailable:false,
        details:{
            description:"Samsung Galaxy S21 Ultra 5G",
            weight:1600,
            screenSize:6.7,
            batteryLife:45,
        }

    },
    {
        id:103,
        name:"Dell laptop",
        category:"Laptop",
        price:85000,
        color:["white","black","blue","aqua"],
        isAvailable:false,
        details:{
            description:"widows with tablets",
            weight:1400,
            screenSize:6.4,
            batteryLife:42,
        }

    }
]


// let ans = products.reduce((sum,prod)=>{
//     return sum + prod.price
// },0)

// console.log(ans);

let ans = products.reduce((sum,prod)=> sum + prod.price,0)
console.log(ans);



// let ans = products.filter((prod)=>{
//     return prod.color.includes("green")
// })

// console.log(ans);

// let sum = 0;
// products.forEach((prod)=>{

//     sum += prod.price
// })

// console.log(sum);






// let ans = products.filter((prod)=>{
//     return prod.category === "Mobile"
// })

// console.log(ans);



// let ans = products.map((prod)=> prod.name)
// console.log(ans)



