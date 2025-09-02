let age;

outer:
do
{
	age = prompt("Enter your age:");
	if (isNaN(age) || age.trim() === "") { alert("Invalid input. Please enter a number"); continue; }

	switch (true)
	{
		case (age < 0): { alert("Invalid age"); } continue;
		case (age >= 0 && age < 18): { alert("Access denied"); window.location.href = "https://google.com"; } break outer;
		case (age >= 18 && age < 60): { alert("Access allowed"); } break outer;
		default: { alert("Rest is recommended"); } break outer;
	}
} while (true);
