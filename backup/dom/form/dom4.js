function changeTxt(){
    let txt = document.getElementById("txt")
    console.log(txt.value);

    let nameErr = document.getElementById("nameErr");


    if(txt.value.length < 4){
        // alert("Name is too short");
        nameErr.innerHTML = "Name is too short";
        nameErr.style.color = "red";
        txt.style.outline = "2px solid red";
    }
    else{
        nameErr.innerHTML = "";
        nameErr.style.color = "black";
        txt.style.outline = "2px solid green";
    }
    
}