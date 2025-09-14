let a = 1;

var colors = ["red", "blue", "green", "yellow", "orange", "purple", "black", "pink"];
// console.log(colors[0]);


const changeColor = ()=>{
    // console.log("hellow");
    // console.log(a++);

    let randomIndex = Math.floor(Math.random() * colors.length)
    console.log(randomIndex);
    
    
    let box = document.getElementById("box")
    box.style.backgroundColor = colors[randomIndex]
}