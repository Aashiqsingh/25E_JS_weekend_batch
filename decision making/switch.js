let a = parseInt(prompt("enter first number"))
let b = parseInt(prompt("enter second number"))

let choice = prompt("1 for Add \n2 for Sub \n3 for Mul \n4 for Div \n\nEnter your choice")

switch(choice){
    case "1":
        alert("Addition = "+(a+b))
        break;

    case "2":
        alert("Subtraction = "+(a-b))
        break;

    case "3":
        alert("Multiplication = "+(a*b))
        break;

    case "4":
        alert("Division = "+(a/b))
        break;

    default:
        alert("Invalid Input")
        break;
}