const display =  document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons button");
let firstNumber = "";
let operator = "";
let lastNumber = "";
buttons.forEach(function(button){
    button.addEventListener("click" , function(event){
        const value = event.target.textContent;
        if(event.target.dataset.action === "clear"){
            display.textContent = "0";

            firstNumber = "";
            operator = "";
            lastNumber = "";

            return;
        }
        if (event.target.dataset.action === "calculate"){
            if (firstNumber !=="" && operator !== "" && lastNumber !==""){
                let result;
                if (operator == "+"){
                    result = Number(firstNumber) + Number(lastNumber);
                }
                else if (operator == "-"){
                    result = Number(firstNumber) - Number(lastNumber);
                }
                else if (operator == "*"){
                    result = Number(firstNumber) * Number(lastNumber);
                }
                else if(operator = "/"){
                    result = Number(firstNumber) / Number(lastNumber);
                }
                display.textContent = result;
                firstNumber = result;
                operator = "";
                lastNumber = "";
            }
            return;
        }
        if (event.target.dataset.operator){
            if (firstNumber !== "" && operator ===""){
                operator = event.target.dataset.operator;
                display.textContent = operator;
            }
            return;
        }
        if (operator === ""){
            firstNumber = firstNumber + value;
            display.textContent = firstNumber;
        }
        else{
            lastNumber = lastNumber + value;
            display.textContent =lastNumber; 
        }
    });
});