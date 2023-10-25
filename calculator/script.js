document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");

    let currentValue = "";
    let currentOperator = "";
    let prevValue = "";

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            const value = button.innerText;

            if (/\d/.test(value) || value === ".") {
                // If a digit or a decimal point is clicked
                currentValue += value;
            } else if (value === "AC") {
                // Clear button
                currentValue = "";
                prevValue = "";
                currentOperator = "";
            } else if (value === "=") {
                // Equals button
                if (currentOperator && currentValue) {
                    currentValue = operate(currentOperator, parseFloat(prevValue), parseFloat(currentValue));
                    currentOperator = "";
                    prevValue = "";
                }
            } else {
                // Operator button (+, -, *, /)
                if (currentOperator && currentValue && prevValue) {
                    prevValue = operate(currentOperator, parseFloat(prevValue), parseFloat(currentValue));
                } else {
                    prevValue = currentValue;
                }
                currentOperator = value;
                currentValue = "";
            }

            display.value = currentValue || prevValue;
        });
    });

    // Perform the calculation
    function operate(operator, a, b) {
        switch (operator) {
            case "+":
                return (a + b).toString();
            case "-":
                return (a - b).toString();
            case "*":
                return (a * b).toString();
            case "/":
                if (b === 0) return "Error";
                return (a / b).toString();
            default:
                return "Error";
        }
    }
});
