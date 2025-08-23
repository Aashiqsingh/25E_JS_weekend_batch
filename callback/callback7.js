let ans = confirm("Are you enter in Atm?")
let acoountNo = 12345;
let Pin = 6354;

const checkBal = ()=>{
    let avlbal = 40000;
    return avlbal;
}

const withdraw = (cb)=>{
    let ans = cb()

    // checkBal()

    let amount = parseInt(prompt("Enter amount :"))
    if(amount < ans){
        alert("Successfully withdrwa \n\nAfter withdrwa current bal : " + (ans - amount))
    }
    else{
        alert("Insufficient balance")
    }
}

const deposit = (cb)=>{
    let ans = cb()

    let amount = parseInt(prompt("Enter amount :"))
    alert("Deposit succeffully \n\nAfter deposit current bal : " + (ans + amount))
}

if(ans){

    let accno = parseInt(prompt("Enter account number"))
    let userpass = parseInt(prompt("Enter password"))

    if(accno === acoountNo && userpass == Pin){
        let choice = prompt("1 for CheckBal \n2 for Withdraw \n3 for Deposit \n\nEnter your choice")

        switch(choice){
            case "1":
                console.log("Available balance = ",checkBal());
                break;

            case "2":
                withdraw(checkBal)
                break;

            case "3":
                deposit(checkBal)
                break;

            default:
                alert("Invalid choice")
        }
    }
    else{
        alert("Incorrect password or account number")
    }
}
else{
    alert("Thankyou for visiting atm")
}