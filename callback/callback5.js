const pngHandler = (option)=>{
    return option.fname + " handled with png handler";
}

const jpgHandler = (option)=>{
    return option.fname + " handled with jpg handler";
}

const pdfHandler = (option)=>{
    return option.fname + " handled with pdf handler";
}

// const Handler = (file)=>{

//     // file = {
//     //     fname: test.jpg 
//     //     cb: jpgHandler
//     // }

//     let x = file.cb({
//         fname:file.fname,
//         size:"1000kb"
//     })

//     // console.log(x);
//     return x;
    
// }


// const Handler = (file)=>{

//     // file = {
//     //     fname: test.jpg 
//     //     cb: jpgHandler
//     // }

//     return file.cb({
//         fname:file.fname,
//         size:"1000kb"
//     })

//     // console.log(x);
    
// }



const Handler = (file)=> file.cb({fname:file.fname,size:"1000kb"})


let fileName = "test.jpg";
let ans;

if(fileName.endsWith(".png")){
    ans = Handler({fname:fileName,cb:pngHandler})
}
else if(fileName.endsWith(".jpg")){
    ans = Handler({fname:fileName,cb:jpgHandler})
}
else if(fileName.endsWith(".pdf")){
    ans = Handler({fname:fileName,cb:pdfHandler})
}
console.log(ans);
