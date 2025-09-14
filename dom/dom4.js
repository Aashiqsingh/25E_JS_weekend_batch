const changeTxt = ()=>{
    let txt = document.getElementById("txt") 

    let nameErr = document.getElementById("nameErr")

    // console.log(txt.value);
    if(txt.value.length < 3){
        // alert("Name is too short")
        nameErr.innerHTML = "Name is too short"
        nameErr.style.color = "red"
        txt.style.outline = "2px solid red"
    }
    else{
        nameErr.innerHTML = ""
        txt.style.outline = "2px solid green"
    }
    
}