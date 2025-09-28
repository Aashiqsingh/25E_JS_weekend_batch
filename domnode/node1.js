const getElement = ()=>{

    let mydiv = document.getElementById("mydiv")
    let h1 = document.createElement("h1")
    h1.innerHTML = "Hello World";



    let link = document.createElement("a")
    link.innerHTML = "amazon"
    // link.href = "https://www.amazon.in/"
    link.setAttribute("href","https://www.amazon.in/")


    let img = document.createElement("img")
    img.src = "https://cdn.britannica.com/10/250610-050-BC5CCDAF/Zebra-finch-Taeniopygia-guttata-bird.jpg";
    img.style.width = "200px"
    img.style.height = "200px"

    mydiv.appendChild(h1)
    mydiv.appendChild(link)
    mydiv.appendChild(img)

}