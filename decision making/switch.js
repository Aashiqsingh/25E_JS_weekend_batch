var a = parseInt(prompt("Enter first number :"));
var b = parseInt(prompt("Enter second number :"));
var choice = prompt("1 for Add \n2 for Sub \n3 for mul \n4 for div \n\nEnter your choice :");

switch(choice){
    case "1": console.log("Addition = ",a+b);
        break;
    case "2": console.log("Subtraction = ",a-b);
        break;
    case "3": console.log("Multiplication = ",a*b);
        break;
    case "4": console.log("Division = ",a/b);
        break;
    default: console.log("Invalid choice");
        break;
}