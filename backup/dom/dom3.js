let a = 0;

let colors = ["red", "blue", "green", "yellow", "purple", "pink", "orange", "brown", "grey", "black"];


const changeColor = ()=>{
    let mydiv = document.getElementById("mydiv")


    // console.log("hello");
    // console.log(a++);

    let randomIndex = Math.floor(Math.random() * colors.length)
    // console.log(randomIndex);
    // console.log(colors[randomIndex]);
    mydiv.style.backgroundColor = colors[randomIndex]
    
    
}