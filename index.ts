#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt(
    [

        {
            name: "pin",
            message: "Enter your Pin Code",
            type: "number"
        }
    ]
    
);
if(pinAnswer.pin === myPin){
    console.log("Your Pin code is Correct");


    let operationAns = await inquirer.prompt(
       [ 
        {
        name: "operation",
        message: "Please select option",
        type: "list",
        choices: ["withdraw","check balance","Fast Cash"]
    }
]);
console.log(operationAns);
if(operationAns.operation==="withdraw"){
    let amountAns= await inquirer.prompt(
    [    
        {
            name: "amount",
            message: "Enter your Amount for withdrawal",
            type: "number"

        }
    ]
    );
    myBalance -= amountAns.amount
    console.log("Your remaining balance is " + myBalance);
}
else if(operationAns.operation==="check balance"){
    console.log("Your balance is " + myBalance)
}
else if(operationAns.operation==="Fast Cash"){
    let fastCash = await inquirer.prompt(
    [
        {
            name: "cash",
            message: "Enter the cash you want to withdraw as Fast Cash",
            type: "list",
            choices:["5000", "2000","4000"]

        }
]
);
    myBalance -= fastCash.cash
    console.log("Now Your Remaining Balance is " + myBalance);
}

}

else{
    console.log("Incorrect Pin Code");
}