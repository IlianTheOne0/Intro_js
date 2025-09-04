function StartTheLoop(alreadyPlayed = false)
{
	if (alreadyPlayed === false)
	{
		Confirm
		(
			"start",
			`Create an app called "Guess the Number":\nthe computer chooses a number between 0 to 100 inclusive, and the user has to guess it.\nAfter each attempt, a hint is displayed: "higher" or "lower".\nGot it?`,
			"You pressed Cancel. Let's try again!"
		);
	}
	Loop();
	Confirm("end", "Want to play again?");
}

function Confirm(opts, text = undefined, falseOpt = undefined)
{
	switch(opts)
	{
		case "start": 
		{
			do
			{
				if (confirm(text)) { break; }
				else { alert(falseOpt); continue; }
			} while (true);
		} break;
		case "end":
		{
			if (confirm(text)) { StartTheLoop(true); }
			window.location.href = "https://google.com";
		} break;
	}
}

function Loop()
{
	let chosenNumber = Math.floor(Math.random() * 100);
	let guessed = false;
	let attempts = 0;
	
	let errorMessage = "Invalid input. Please enter a number";

	do
	{
		let input = prompt("Enter the number:");
		if (input === null) { alert(errorMessage); continue; }
		if (isNaN(input) || input.trim() === "") { alert(errorMessage); continue; }
		
		let numInput = Number(input);

		switch (true)
		{
			case (numInput < 0 || numInput > 101): { alert("Number must be between 0 and 100 inclusive"); } break;
			case (numInput === chosenNumber): { guessed = true; } break;
			case (numInput < chosenNumber): { alert(`Nah, it's not number ${numInput}\nGuessed number:\nhigher`) } break;
			case (numInput > chosenNumber): { alert(`Nah, it's not number ${numInput}\nGuessed number:\nlower`) } break;
		}
		attempts++;
	} while (!guessed);

	alert(`My congrats!\nIt really was number ${chosenNumber}\nAttempts: ${attempts}`);
}

StartTheLoop();