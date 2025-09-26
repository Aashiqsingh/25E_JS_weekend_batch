const submitHandler = (e)=>{
    e.preventDefault();

    // let name = document.getElementById("name")
    // let age = document.getElementById("age")
    // let gender = document.getElementsByName("gender")
    // console.log(gender);

    // let gen = ''
    // if(gender[0].checked == true){
    //     gen = 'male'
    // }else if(gender[1].checked){
    //     gen = 'female'
    // }else{
    //     gen = 'other'
    // }

    // let output = document.getElementById("output")


    // if(gen == "male"){
    //     if(age.value > 18){
    //         output.innerHTML = "You are eligile for the scholarship"
    //     }
    //     else{
    //         output.innerHTML = "You are not eligile for the scholarship"
    //     }
    // }
    // else if(gen == "female"){
    //     if(age.value > 21){
    //         output.innerHTML = "You are eligible for the scholarship"
    //     }
    //     else{
    //         output.innerHTML = "You are not eligible for the scholarship"
    //     }
    // }
    // else{
    //     if(age.value > 25){
    //         output.innerHTML = "You are eligible for the scholarship"
    //     } 
    //     else{
    //         output.innerHTML = "You are not eligible for the scholarship"
    //     }
    // }







    // console.log("Name --> ",name.value);
    // console.log("Age --> ",age.value);
    // console.log("Gender --> ",gen);

    let nameErr = document.getElementById("nameErr")
    let mobileErr = document.getElementById("mobileErr")
    let emailErr = document.getElementById("emailErr")
    

    let name = document.getElementById("name")
    let age = document.getElementById("age")
    let gender = document.getElementsByName("gender")
    let mobile = document.getElementById("mobile")
    let email = document.getElementById("email")

    let namePattern = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
    
    if(!name.value.match(namePattern)){
        nameErr.innerHTML = "Invalid name.."
        nameErr.style.color = "red"
    }else{
        nameErr.innerHTML = name.value;
        nameErr.style.color = "green"
    }


    let mobilePattern = /^[6-9]{1}[0-9]{9}$/ 

    if(!mobile.value.match(mobilePattern)){
        mobileErr.innerHTML = "Invalid mobile number..";
        mobileErr.style.color = "red"
    }
    else{
        mobileErr.innerHTML = mobile.value;
        mobileErr.style.color = "green"
    }


    // aashiqsingh56789@gmail.com

    let emailPattern = /^[a-z0-9]+\@[a-z]+\.[a-z]{2,3}$/
    if(!email.value.match(emailPattern)){
        emailErr.innerHTML = "Invalid email id.."
        emailErr.style.color = "red"
    }
    else{
        emailErr.innerHTML = email.value;
        emailErr.style.color = "green"
    }
    
}


// 6354717524
// 2348349726