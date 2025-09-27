let box = document.getElementsByClassName("box")
console.log(box);
box[1].addEventListener("click",()=>{
    box[0].style.borderRadius = "50%"
    box[2].style.borderRadius = "50%"
    box[3].style.borderRadius = "50%"
})
box[2].addEventListener("mouseenter",()=>{
    box[0].style.backgroundColor = "yellow"
    box[3].style.backgroundColor = "yellow"

})

let colors = ["red","blue","green","purple","pink","orange","brown","grey"]
box[3].addEventListener("mousemove",()=>{
    let randomIndex = Math.floor(Math.random()*colors.length)
    box[0].style.backgroundColor = colors[randomIndex]
    box[1].style.backgroundColor = colors[randomIndex]
    box[2].style.backgroundColor = colors[randomIndex]
})