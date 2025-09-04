function isPrime(num) {
    if (num <= 1) { return false; }
    for (let i = 2; i < num; i++)
	{
        if (num % i === 0) { return false; }
    }
    return true;
}

function reverseString(str) { return str.split('').reverse().join(''); }

function factorial(n)
{
    if (n === 0) { return 1; }
    return n * factorial(n - 1);
}

const functionsList = document.getElementById('functionList');
functionsList.addEventListener
(
	'click',
	(event) =>
	{
		if (event.target.tagName === 'BUTTON')
		{
			const buttonIds = event.target.id;

			switch (buttonIds)
			{
				case 'isPrimeBtn':
				{
					do
					{
						number = prompt("Enter your number:");
						if (isNaN(number) || number.trim() === "") { alert("Invalid input. Please enter a number"); }
					} while (isNaN(number) || number.trim() === "");

					if (isPrime(Number(number))) { alert(number + " is a prime number."); }
					else { alert(number + " is not a prime number."); }
				} break;
				case 'reverseStringBtn':
				{
					let string;
					do { string = prompt("Enter a string to reverse:"); } while (!string);
					alert("Reversed string: " + reverseString(string));
				} break;
				case 'factorialBtn':
				{
					let number;
					do
					{
						number = prompt("Enter a number to calculate its factorial:");
						if (isNaN(number) || number.trim() === "") { alert("Invalid input. Please enter a number"); }
					} while (isNaN(number) || number.trim() === "");

					alert("Factorial of " + number + " is: " + factorial(Number(number)));
				} break;
			}
    	}
	}
);