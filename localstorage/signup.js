const submitHandler = (event)=>{
    event.preventDefault()

    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const age = document.getElementById("age")

    console.log(name.value)
    console.log(email.value)
    console.log(password.value)
    console.log(age.value)

    localStorage.setItem("email",email.value)
    localStorage.setItem("password",password.value)


    location.href = "login.html"
}

const login = ()=>{
    let email = document.getElementById("email")
    let password = document.getElementById("password")


    let localstorageEmail = localStorage.getItem("email")
    let localstoragePassword = localStorage.getItem("password")


    if(!(email.value == localstorageEmail && password.value == localstoragePassword)){
        alert("Email and Password do not match")
        return
    }
    else{
        alert("Login succefully...")
    }
}