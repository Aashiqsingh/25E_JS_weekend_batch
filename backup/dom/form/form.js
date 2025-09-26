function submitHandler(event){
    event.preventDefault(); // Prevents the default form submission behavior
    // alert("Form Submitted Successfully")

    let name = document.getElementById("name")
    let email = document.getElementById("email")

    let nameErr = document.getElementById("nameErr");
    let emailErr = document.getElementById("emailErr");


    if(name.value.length <= 0){
        // alert("Name is required");
        nameErr.innerHTML = "Name is required";
        nameErr.style.color = "red";
    }
    else if(name.value.length < 4){
        nameErr.innerHTML = "Name is too short";
        nameErr.style.color = "red";
    }
    else{
        nameErr.innerHTML = name.value;
        nameErr.style.color = "green";
    }










    // console.log("name ---> ",name.value);
    // console.log("email ---> ",email.value);
    
    console.log("Form Submitted Successfully");
    
}