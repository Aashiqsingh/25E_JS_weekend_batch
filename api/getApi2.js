const getData = async()=>{
    const response = await fetch("https://node5.onrender.com/user/user",{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    })
    const data = await response.json()
    console.log(data.data)

    let tbdoy = document.getElementById("tbody")
    data.data.map((data)=>{
        let tr = document.createElement("tr")
        let idTd = document.createElement("td")
        let nameTd = document.createElement("td")
        let emailTd = document.createElement("td")
        let passwordTd = document.createElement("td")
        let ageTd = document.createElement("td")
        let statusTd = document.createElement("td")
        let actionTd = document.createElement("td")
        let deleteBtn = document.createElement("button")
        deleteBtn.innerHTML = "Delete"
        deleteBtn.className = "btn btn-danger"
        deleteBtn.addEventListener("click",async()=>{
            // alert(data._id)
            const response2 =await fetch("https://node5.onrender.com/user/user/"+data._id,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json"
                }
            })
            console.log(response2);
            // tr.remove()
            if(response2.status === 204){
                tr.remove()
            }
           
            
        })

        // https://node5.onrender.com/user/user/5f8c6c0c1b3a8d3c7c5d

        idTd.innerText = data._id
        nameTd.innerText = data.name
        emailTd.innerText = data.email
        passwordTd.innerText = data.password
        ageTd.innerText = data.age
        statusTd.innerText = data.isActive 

        tr.appendChild(idTd)
        tr.appendChild(nameTd)
        tr.appendChild(emailTd)
        tr.appendChild(passwordTd)
        tr.appendChild(ageTd)
        tr.appendChild(statusTd)
        tr.appendChild(actionTd)
        actionTd.appendChild(deleteBtn)
        tbdoy.appendChild(tr)
    })
}