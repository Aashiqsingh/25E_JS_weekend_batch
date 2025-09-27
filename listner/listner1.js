let txt = document.getElementById("txt")
txt.addEventListener("click",()=>{
    txt.innerHTML = "Royal technosoft p ltd."
})
txt.addEventListener("dblclick",()=>{
    txt.style.backgroundColor = "red"
})
txt.addEventListener("mouseleave",()=>{

    txt.style.backgroundColor = "white"
})