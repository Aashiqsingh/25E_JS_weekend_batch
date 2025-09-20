const submitHandler = (event)=>{
    event.preventDefault() // default submission

    let name = document.getElementById("name")
    // console.log("name....",name.value);
    let nameErr = document.getElementById("nameErr")

    // if(name.value.length <= 0){
    //     nameErr.innerHTML = "Name is required"
    //     nameErr.style.color = "red"
    // }

    let namePattern = /^[A-Z]{1}[A-Za-z]+\s[A-Za-z]+$/
    if(!name.value.match(namePattern)){
        nameErr.innerHTML = "Name should be in uppercase";
        nameErr.style.color = "red"
    }
    else{
        nameErr.innerHTML = name.value
        nameErr.style.color = "green"
    }

    let mobile = document.getElementById("mobile")
    let mobileErr = document.getElementById("mobileErr")

    let mobilePattern = /^[6-9]{1}[0-9]{9}$/

    if(mobile.value.match(mobilePattern)){
        mobileErr.innerHTML = mobile.value
        mobileErr.style.color = "green"
    }
    else{
        mobileErr.innerHTML = "Mobile number is invalid"
        mobileErr.style.color = "red"
    }


    let email = document.getElementById("email")
    let emailErr = document.getElementById("emailErr")

    // aashiqsingh56789@gmail.com
    let emailPattern = /^[a-z0-9]+.@[a-z]+\.[a-z]+$/
    if(email.value.match(emailPattern)){
        emailErr.innerHTML = email.value
        emailErr.style.color = "green"
    }
    else{
        emailErr.innerHTML = "Email is invalid"
        emailErr.style.color = "red"
    }
    
}