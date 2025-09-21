const setData = ()=>{
    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const password = document.getElementById("password")

    console.log(name.value)
    console.log(email.value)
    console.log(password.value)


    localStorage.setItem("name",name.value)
    localStorage.setItem("email",email.value)
    localStorage.setItem("password",password.value)
    
}

const getData = ()=>{
    let name = localStorage.getItem("name")
    let email =localStorage.getItem("email")
    let password = localStorage.getItem("password")


    let output = document.getElementById("output")

    // output.innerHTML = "Name :" + name + " " + "Email : " + email + " " + "Password : " + password 
    output.innerHTML = `Name : ${name} Email : ${email} Password : ${password}` 
} 

const removeData = ()=>{
    // localStorage.removeItem("name")
    // localStorage.removeItem("email")


    localStorage.clear()
}