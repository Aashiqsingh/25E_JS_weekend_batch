let prev = document.getElementById("prev")

let images = ["img1.png","img2.webp","img3.jpg","img4.jpg","img5.jpg"]
let currentIndex = 0;

let img = document.getElementById("img")

prev.addEventListener("click",()=>{
                        // (3 + 5 - 1) % 5
    currentIndex = (currentIndex + images.length - 1) % images.length;
    console.log(currentIndex);

    img.src = "../Image/"+images[currentIndex];
    
})

let next = document.getElementById("next")
next.addEventListener("click",()=>{
                    //  3 + 1 % 5
    currentIndex = (currentIndex + 1) % images.length;
    console.log(currentIndex);
    img.src = "../Image/"+images[currentIndex];
})