function science(fname,per){
    console.log(fname + " ur admision confirm in science stream with per " + per);
}

function commerce(fname,per){
    console.log(fname + " ur admision confirm in commerce stream with per " + per);
}

function arts(fname,per){
    console.log(fname + " ur admision confirm in arts stream with per " + per);
}


// cb -- callback 

function addmision(fname,per,cb){
    cb(fname,per)
}

let percenatge = 51;

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