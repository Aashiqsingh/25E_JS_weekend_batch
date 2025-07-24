let a = parseInt(prompt("Enter first number"));
let b = parseInt(prompt("Enter second number"));

let choice = prompt("1 for Add \n2 for Sub \n3 for Mul \n4 for Div \n\nEnter your choice :")

switch(choice){
    case "1":
        console.log("Addition = " + (a+b));
        console.log("Addition = " , (a+b));

        break;

    case "2":
        console.log("Subtraction = ",a-b);
        break;

    case "3":
        console.log("Multiplication = ",a*b);
        break;

    case "4":
        console.log("Division = ",a/b);
        break;

    default:
        console.log("Invalid choice");
        
}