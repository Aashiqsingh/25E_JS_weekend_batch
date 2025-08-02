// function declaration : function
// 
// there are four types of function 
// 1. without return without argument 
// 2. without return with argument
// 3. with return without argument
// 4. with return with argument


// 1. without return without argument 
function demo(){
    console.log("demo function called....");   
}


// console.log(demo);
// demo()



// 2. without return with argument

function add(a,b){
    console.log("Addition = ",a+b);
    
}

// add(10,12)
// add("shree","ram")

// 3. with return without argument

function greet(){
    return "hello good evening...";
}

// let x = greet()
// console.log(x);
// console.log(greet());


// 4. with return with argument
// 
function mul(a,b,c){
    return a*b*c;
}

// let ans = mul(2,3,4)
// console.log("multiply = ",ans);

let x = parseInt(prompt("enter first number"));
let y = parseInt(prompt("enter second number"));
let z = parseInt(prompt("enter third number"));

let ans = mul(x,y,z)
console.log("multiply = ",ans);