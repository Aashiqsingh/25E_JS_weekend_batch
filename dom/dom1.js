// let txt = document.getElementById("txt")
// txt.innerHTML = "Royal technosoft p ltd.";
// txt.style.backgroundColor = "red";

function changeTxt(){
    let txt = document.getElementById("txt")  
    txt.innerHTML = "Royal technosoft p ltd.";
    txt.style.backgroundColor = "red";
    txt.style.color = "white";
}

function changeRef(){
    let link = document.getElementById("link")
    link.href = "https://netflix.com";
    link.target = "_blank";
    link.innerHTML = "Netflix";
}

function changeSize(){
    let img = document.getElementById("image")
    img.style.height = "400px";
    img.style.width = "400px";
}