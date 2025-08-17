const pngHandler = (option)=>{
    return option.fname + " handled with png handler";
}

const jpgHandler = (option)=>{
    return option.fname + " handled with jpg handler";
}

const pdfHandler = (option)=>{
    return option.fname + " handled with pdf handler";
}

const Handler = (file)=>{

    // file = {
    //     fname: test.jpg 
    //     cb: jpgHandler
    // }

    let x = file.cb({
        fname:file.fname,
        size:"1000kb"
    })

    console.log(x);
    
}

let fileName = "test.png";

if(fileName.endsWith(".png")){
    Handler({fname:fileName,cb:pngHandler})
}
else if(fileName.endsWith(".jpg")){
    Handler({fname:fileName,cb:jpgHandler})
}
else if(fileName.endsWith(".pdf")){
    Handler({fname:fileName,cb:pdfHandler})
}