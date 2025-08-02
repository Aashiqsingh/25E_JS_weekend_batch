function science(fname,per){
    return fname + " ur admision confirm in science stream with per " + per
    
}

function commerce(fname,per){
    return fname + " ur admision confirm in commerce stream with per " + per
}

function arts(fname,per){
    return fname + " ur admision confirm in arts stream with per " + per
}


const percentage = parseInt(prompt("Enter your per"));
let ans;

if(percentage > 90){
    ans = science("rahul",percentage)
}
else if(percentage > 70){
    ans = commerce("rahul",percentage)
}
else if(percentage > 50){
    ans = arts("rahul",percentage)
}
else{
    console.log("ur per is less than 50")
}

console.log(ans);
