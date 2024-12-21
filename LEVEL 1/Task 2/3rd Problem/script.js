document.addEventListener("DOMContentLoaded", () => {
    const calculateButton = document.getElementById("calculateButton");
    const number1 = document.getElementById("number1");
    const number2 = document.getElementById("number2");
    const result = document.getElementById("result");

    calculateButton.addEventListener("click", () => {
        const num1 = parseFloat(number1.value);
        const num2 = parseFloat(number2.value);
        if (!isNaN(num1) && !isNaN(num2)) {
            const sum = num1 + num2;
            result.textContent = `Result: ${sum}`;
        } else {
            result.textContent = "Please enter valid numbers!";
        }
    });
});
