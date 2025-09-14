const submitHandler = (event)=>{
    event.preventDefault() // default submission
    // alert("Form submitted..")

    let name = document.getElementById("name").value 
    let age = document.getElementById("age").value 
    let email = document.getElementById("email").value 


    let nameErr = document.getElementById("nameErr")
    let ageErr = document.getElementById("ageErr")
    let emailErr = document.getElementById("emailErr")


    if(name.length <= 0){
        nameErr.innerHTML = "Name is required"
        nameErr.style.color = "red"
    }
    else if(name.trim().length < 4){
        nameErr.innerHTML = "Name is too short"
        nameErr.style.color = "red"
    }
    else{
        nameErr.innerHTML = name 
        nameErr.style.color = "green"
    
    }

    // let output = document.getElementById("output")



    // let user = {
    //     name:name,
    //     age:age,
    //     email:email
    // }

    // let user = {
    //     name,
    //     age,
    //     email
    // }
    // console.log(user);

    // output.innerHTML = user.name
    // let ans = JSON.stringify(user)
    // output.innerHTML = ans

    // console.log(ans[0]);
    
    // console.log(name.value)
    // console.log(age.value)
    // console.log(email.value)
    // let user = {
    //     name:name.value,
    //     age:age.value,
    //     email:email.value
    // }

    // console.log(user);
    




    console.log("Form submitted..")
    
}