const postData = async () => {

    // let users = {

    // }

    const response = await fetch("https://node5.onrender.com/user/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        // body:JSON.stringify(users)
        body: JSON.stringify({
            name: "bhuwan",
            email: "bhuwan@gmail.com",
            password: "123456",
            age: 34,
            gender: "male"
        })
    })

    // console.log(response);
    let res = await response.json();
    console.log(res);



}