let firstNumber;
let secondNumber;
let operator;

outer:
do
{
	firstNumber = prompt("Enter the first number:");
	if (isNaN(firstNumber) || firstNumber.trim() === "") { alert("Invalid input. Please enter a number"); continue; }

	secondNumber = prompt("Enter the second number:");
	if (isNaN(secondNumber) || secondNumber.trim() === "") { alert("Invalid input. Please enter a number"); continue; }

	operator = prompt("Enter an operator (+, -, *, /):");
	if (!['+', '-', '*', '/'].includes(operator)) { alert("Invalid operator. Please enter one of +, -, *, /"); continue; }

	switch (operator)
	{
		case '+': { alert(`Result: ${firstNumber + secondNumber}`); } break outer;
		case '-': { alert(`Result: ${firstNumber - secondNumber}`); } break outer;
		case '*': { alert(`Result: ${firstNumber * secondNumber}`); } break outer;
		case '/': { alert(`Result: ${firstNumber / secondNumber}`); } break outer;
	}
} while (true);