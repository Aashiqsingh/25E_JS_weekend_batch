function newyork(option){
    return option.fname + " ur tour confirm in newyork with packegae "+ option.amount
    
}

function london(option){
    return option.fname + " ur tour confirm in london with packegae "+ option.amount
}

function paris(option){
    return option.fname + " ur tour confirm in paris with packegae "+ option.amount
}

function goa(option){
    return option.fname + " ur tour confirm in goa with packegae "+ option.amount
}

let budget = 2000;
var flag;


if(budget > 3500){
    flag = newyork({fname:"rahul",amount:budget})
}
else if(budget > 2500){
    flag = london({
        fname:"priya",
        amount:budget
    })
}
else if(budget > 1500){
    flag = paris({
        fname:"rahul",
        amount:budget
    })
}
else if(budget > 500){
    flag = goa({fname:"rahul",amount:budget})
}
else{
    console.log("budget is less than 500")
}

console.log(flag);
