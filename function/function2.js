function science(fname,per){
    console.log(fname + " ur admision confirm in science stream with per " + per);
    
}

function commerce(fname,per){
    console.log(fname + " ur admision confirm in commerce stream with per " + per);
}

function arts(fname,per){
    console.log(fname + " ur admision confirm in arts stream with per " + per);
}


const percentage = parseInt(prompt("Enter your per"));

if(percentage > 90){
    science("rahul",percentage)
}
else if(percentage > 70){
    commerce("rahul",percentage)
}
else if(percentage > 50){
    arts("rahul",percentage)
}
else{
    console.log("ur per is less than 50")
}