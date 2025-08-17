const lasvegas = (data)=>{
    return data.fname + " tour confirm in lasvegas with package " + data.amount;
}

const newyork = (data)=>{
    return data.fname + " tour confirm in newyork with package " + data.amount;
}

const chicago = (data)=>{
    return data.fname + " tour confirm in chicago with package " + data.amount;
}

const travel = (option,cb)=>{
    let x = cb(
        {
            fname:option.fname,
            amount:option.budget
        }
    )

    return x;
}

let firstName = "rahul";
let budget = 2600;
let ans;

if(budget > 3500){
    ans = travel({fname:firstName,budget:budget},lasvegas)
}
else if(budget > 2500){
    ans = travel({fname:firstName,budget:budget},newyork)
}
else if(budget > 1500){
    ans = travel({fname:firstName,budget:budget},chicago)
}

console.log(ans);
