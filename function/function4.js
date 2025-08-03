function newyork(option){
    console.log(option.fname + " ur tour confirm in newyork with packegae "+ option.amount);
    
}

function london(option){
    console.log(option.fname + " ur tour confirm in london with packegae "+ option.amount);
}

function paris(option){
    console.log(option.fname + " ur tour confirm in paris with packegae "+ option.amount);
}

function goa(option){
    console.log(option.fname + " ur tour confirm in goa with packegae "+ option.amount);
}

let budget = 3000;

if(budget > 3500){
    newyork({fname:"rahul",amount:budget})
}
else if(budget > 2500){
    london({
        fname:"priya",
        amount:budget
    })
}
else if(budget > 1500){
    paris({
        fname:"rahul",
        amount:budget
    })
}
else if(budget > 500){
    goa({fname:"rahul",amount:budget})
}
else{
    console.log("budget is less than 500")
}