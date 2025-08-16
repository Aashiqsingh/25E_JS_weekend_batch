function science(fname,per){
    return fname + " ur admision confirm in science stream with per " + per
}

function commerce(fname,per){
    return fname + " ur admision confirm in commerce stream with per " + per
}

function arts(fname,per){
    return fname + " ur admision confirm in arts stream with per " + per
}


// cb -- callback 

function addmision(fname,per,cb){
    let x = cb(fname,per)
    console.log(x);
    
}

let percenatge = 71;

if(percenatge > 90){
    addmision("rahul",percenatge,science)
}
else if(percenatge > 70){
    addmision("rahul",percenatge,commerce)
}
else if(percenatge > 50){
    addmision("rahul",percenatge,arts)
}
else{
    console.log("ur per is less than 50")
}