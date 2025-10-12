// async function getData(){
//     let response = await fetch("https://reqres.in/api/users?page=2")
// }


const getData = async()=>{
    let response = await fetch("https://reqres.in/api/users?page=2",{
        method:"GET",
        headers:{
            "x-api-key": "reqres-free-v1"
        }
    })

    // console.log(response);
    const res = await response.json()
    console.log(res.data);


    res.data.map((data)=>{
        let tr = document.createElement("tr");
        let idTd = document.createElement("td");
        let firstNameTd = document.createElement("td");
        let lastNameTd = document.createElement("td");
        let emailTd = document.createElement("td");
        let avatarTd = document.createElement("td");
        let img = document.createElement("img");

        idTd.innerText = data.id;
        firstNameTd.innerText = data.first_name;
        lastNameTd.innerText = data.last_name;
        emailTd.innerText = data.email;
        img.src = data.avatar;

        tr.appendChild(idTd);
        tr.appendChild(firstNameTd);
        tr.appendChild(lastNameTd);
        tr.appendChild(emailTd);
        tr.appendChild(avatarTd);
        avatarTd.appendChild(img);
        document.getElementById("tbdoy").appendChild(tr);
    })

    
}