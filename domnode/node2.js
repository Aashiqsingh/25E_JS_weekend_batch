var users = [
    {
        id: 1,
        name: "rahul",
        age: 25,
        gender: "male",
        email: "rahul@gmail.com",
        src:"https://img.etimg.com/thumb/width-420,height-315,imgsize-9870,resizemode-75,msid-112069891/news/politics-and-nation/rahul-gandhis-inner-circle-a-mix-of-fresh-and-seasoned-leaders.jpg"
    },
    {
        id: 2,
        name: "priya",
        age: 22,
        gender: "female",
        email: "priya@gmail.com",
        src:"https://upload.wikimedia.org/wikipedia/commons/0/0f/Sonia_Gandhi_and_Vladimir_Putin_in_March_2010_04.jpg"
    },
    {
        id: 3,
        name: "bhuwan",
        age: 27,
        gender: "male",
        email: "bhuwan@gmail.com",
        src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Shri_Amit_Shah_in_Raigad.jpg/250px-Shri_Amit_Shah_in_Raigad.jpg"
    },
    {
        id: 4,
        name: "amit",
        age: 24,
        gender: "male",
        email: "amit@gmail.com",
        src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEYEI5nU2R_FOfpmEBKHJW7TXrT7PKTdmtAw&s"
    },
    {
        id: 5,
        name: "nitin",
        age: 23,
        gender: "male",
        email: "nitin@gmail.com",
        src:"https://upload.wikimedia.org/wikipedia/commons/b/b8/The_Uttar_Pradesh_Chief_Minister%2C_Shri_Yogi_Adityanath_in_New_Delhi_on_February_10%2C_2018_%28cropped%29.jpg"
    }
]

// console.log(users);
// console.log(users[0].name);

const getData = () => {
    let tbody = document.getElementById("tbody");


    for (let i = 0; i < users.length; i++) {
        let tr = document.createElement("tr")
        let idTd = document.createElement("td")
        let nameTd = document.createElement("td")
        let ageTd = document.createElement("td")
        let genderTd = document.createElement("td")
        let emailTd = document.createElement("td")
        let profileImg = document.createElement("td")
        let img = document.createElement("img")
        let actionTd = document.createElement("td")
        let btn = document.createElement("button")
        btn.innerHTML = "Delete"
        btn.className = "btn btn-danger";
        btn.addEventListener("click",()=>{
            tr.remove();
        })

        idTd.innerHTML = users[i].id
        nameTd.innerHTML = users[i].name
        ageTd.innerHTML = users[i].age
        genderTd.innerHTML = users[i].gender
        emailTd.innerHTML = users[i].email
        img.src = users[i].src
        img.style.width = "100px"
        img.style.height = "100px"




        tbody.appendChild(tr)
        tr.appendChild(idTd)
        tr.appendChild(nameTd)
        tr.appendChild(ageTd)
        tr.appendChild(genderTd)
        tr.appendChild(emailTd)
        tr.appendChild(profileImg)
        profileImg.appendChild(img)
        tr.appendChild(actionTd)
        actionTd.appendChild(btn)
    }
}