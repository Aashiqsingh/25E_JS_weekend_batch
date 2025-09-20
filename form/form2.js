const submitHandler = (event)=>{
    event.preventDefault() // default submission

    let name = document.getElementById("name")
    let age = document.getElementById("age")

    // console.log(name.value)
    // console.log(age.value)

    let output = document.getElementById("output")
    

    let gender = document.getElementsByName("gender")
    let gen = ''

    if(gender[0].checked === true){
        gen = "male"
    }
    else if(gender[1].checked){
        gen = "female"
    }
    else{
        gen = "other"
    }

    if(gen == "male"){
        if(age.value > 18){
            output.innerHTML = "You are eligible for the scholarship"
        }
        else{
            output.innerHTML = "You are not eligible for the scholarship"
        }
    }
    else if(gen == "female"){
        if(age.value > 21){
            output.innerHTML = "You are eligible for the scholarship"
        }
        else{
            output.innerHTML = "You are not eligible for the scholarship"
        }
    }
    else{
        if(age.value > 25){
            output.innerHTML = "You are eligible for the scholarship"
        }
        else{
            output.innerHTML = "You are not eligible for the scholarship"
        }
    }




    // console.log(gen);
    
}